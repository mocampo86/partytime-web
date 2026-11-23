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
  slug: '20270115-EventoDemo',
  status: 'published',
  templateId: 'rose-gold',
  event: {
    title: 'Mis XV',
    hostName: 'Nombre Ficticio',
    eventType: 'Cumpleaños de XV',
    date: '2027-01-15',
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
  it('acepta una configuración válida', () => {
    const result = parseInvitation(validInvitation);
    expect(result.errors).toEqual([]);
    expect(result.invitation?.slug).toBe(validInvitation.slug);
  });

  it('normaliza solo datos permitidos y no expone propiedades extras', () => {
    const result = parseInvitation({ ...validInvitation, internalNote: 'secreto' });
    expect(result.invitation).toBeDefined();
    expect(result.invitation).not.toHaveProperty('internalNote');
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
  it('carga el evento ficticio publicado', () => {
    expect(invalidInvitations).toEqual([]);
    expect(getInvitationBySlug('20261128-XVGuada')?.invitation.templateId).toBe('rose-gold');
    expect(invitations).toHaveLength(1);
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
