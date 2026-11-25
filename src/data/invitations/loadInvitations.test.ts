import { describe, expect, it } from 'vitest';
import {
  demoInvitations,
  getDemoInvitationByTemplateId,
  getInvitationBySlug,
  invalidInvitations,
  invitations,
  parseInvitation,
} from './loadInvitations';

const validInvitation = {
  slug: '20270115-evento-demo',
  status: 'published',
  templateId: 'rose-gold',
  event: {
    title: 'Mis XV',
    hostName: 'Nombre Ficticio',
    eventType: 'Cumpleaños de XV',
    date: '2027-01-15',
    time: '21:00',
    utcOffset: '-03:00',
    venueName: 'Salón Ficticio',
    mapsUrl: 'https://maps.google.com/?q=Uruguay',
  },
  features: {
    opening: true,
    music: false,
    countdown: true,
    eventDetails: true,
    location: true,
    gallery: false,
    rsvp: false,
    dressCode: false,
    gifts: false,
    accommodation: false,
    transport: false,
    collaborativePlaylist: false,
    partyPic: false,
    share: true,
  },
};

describe('parseInvitation', () => {
  it('acepta una invitación publicada con fecha, horario, offset y lugar', () => {
    const result = parseInvitation(validInvitation);
    expect(result.errors).toEqual([]);
    expect(result.invitation?.slug).toBe(validInvitation.slug);
  });

  it('normaliza solo datos permitidos y no expone propiedades extras', () => {
    const result = parseInvitation({ ...validInvitation, internalNote: 'secreto' });
    expect(result.invitation).toBeDefined();
    expect(result.invitation).not.toHaveProperty('internalNote');
  });

  it('conserva dimensiones válidas para evitar saltos de layout', () => {
    const result = parseInvitation({
      ...validInvitation,
      features: { ...validInvitation.features, gallery: true },
      gallery: {
        title: 'Galería',
        images: [
          {
            src: '/assets/invitations/rose-gold/gallery-01.svg',
            alt: 'Retrato editorial de muestra',
            width: 900,
            height: 1200,
          },
        ],
      },
    });

    expect(result.errors).toEqual([]);
    expect(result.invitation?.gallery?.images[0]).toMatchObject({
      width: 900,
      height: 1200,
    });
  });

  it('rechaza features habilitadas sin la configuración requerida', () => {
    const result = parseInvitation({
      ...validInvitation,
      features: { ...validInvitation.features, gallery: true, dressCode: true },
    });

    expect(result.invitation).toBeUndefined();
    expect(result.errors).toContain('features.gallery requiere gallery válido.');
    expect(result.errors).toContain('features.dressCode requiere content.dressCode.');
  });

  it('requiere horario, offset y lugar para invitaciones publicadas', () => {
    const result = parseInvitation({
      ...validInvitation,
      event: {
        ...validInvitation.event,
        time: undefined,
        utcOffset: undefined,
        venueName: undefined,
      },
    });

    expect(result.invitation).toBeUndefined();
    expect(result.errors).toContain('Las invitaciones publicadas requieren event.time.');
    expect(result.errors).toContain('Las invitaciones publicadas requieren event.utcOffset.');
    expect(result.errors).toContain('Las invitaciones publicadas requieren event.venueName.');
  });

  it('rechaza el RSVP simulado en invitaciones publicadas', () => {
    const result = parseInvitation({
      ...validInvitation,
      features: { ...validInvitation.features, rsvp: true },
      rsvp: { title: 'Confirmá tu asistencia' },
    });

    expect(result.invitation).toBeUndefined();
    expect(result.errors).toContain(
      'Las invitaciones publicadas no pueden habilitar el RSVP simulado.',
    );
  });

  it('acepta offsets reales y rechaza offsets fuera del rango ISO', () => {
    expect(
      parseInvitation({
        ...validInvitation,
        event: { ...validInvitation.event, utcOffset: '+14:00' },
      }).invitation,
    ).toBeDefined();

    const result = parseInvitation({
      ...validInvitation,
      event: { ...validInvitation.event, utcOffset: '+14:30' },
    });
    expect(result.invitation).toBeUndefined();
    expect(result.errors).toContain('event.utcOffset debe tener formato +HH:MM o -HH:MM.');
  });

  it('rechaza slugs que colisionan con rutas reservadas', () => {
    const result = parseInvitation({ ...validInvitation, slug: 'contacto' });
    expect(result.invitation).toBeUndefined();
    expect(result.errors).toContain('slug "contacto" entra en conflicto con una ruta reservada.');
  });

  it('rechaza datos obligatorios inválidos', () => {
    const result = parseInvitation({
      ...validInvitation,
      slug: ' slug-con-espacios ',
      status: 'publicada',
      event: { ...validInvitation.event, date: '2027-02-31', mapsUrl: 'javascript:alert(1)' },
      features: { ...validInvitation.features, opening: 'sí' },
    });

    expect(result.invitation).toBeUndefined();
    expect(result.errors.join(' ')).toContain('slug');
    expect(result.errors.join(' ')).toContain('status');
    expect(result.errors.join(' ')).toContain('event.date');
    expect(result.errors.join(' ')).toContain('event.mapsUrl');
    expect(result.errors.join(' ')).toContain('features.opening');
  });
});

describe('carga de configuraciones', () => {
  it('mantiene el evento ficticio como borrador no publicado', () => {
    expect(invalidInvitations).toEqual([]);
    expect(invitations).toHaveLength(1);
    expect(invitations[0].invitation.status).toBe('draft');
    expect(getInvitationBySlug('20261128-XVGuada')).toBeUndefined();
  });

  it('mantiene las demos aisladas de invitaciones publicadas', () => {
    expect(demoInvitations).toHaveLength(1);
    expect(getDemoInvitationByTemplateId('rose-gold')?.invitation.slug).toBe('demo-rose-gold');
    expect(invitations.some(({ invitation }) => invitation.slug === 'demo-rose-gold')).toBe(false);
  });

  it('no publica slugs inexistentes', () => {
    expect(getInvitationBySlug('no-existe')).toBeUndefined();
  });
});
