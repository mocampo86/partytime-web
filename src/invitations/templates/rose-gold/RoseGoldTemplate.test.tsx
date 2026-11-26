import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { getDemoInvitationByTemplateId } from '../../../data/invitations/loadInvitations';
import type { Invitation } from '../../../types/invitation';
import RoseGoldTemplate from './RoseGoldTemplate';

function getDemoInvitation(overrides: Partial<Invitation> = {}): Invitation {
  const loadedInvitation = getDemoInvitationByTemplateId('rose-gold');
  expect(loadedInvitation).toBeDefined();

  return {
    ...loadedInvitation!.invitation,
    ...overrides,
    features: {
      ...loadedInvitation!.invitation.features,
      ...overrides.features,
    },
  };
}

function renderWithoutOpening(invitation: Invitation, isDemo = false) {
  return renderToString(
    <RoseGoldTemplate
      invitation={{
        ...invitation,
        features: { ...invitation.features, opening: false },
      }}
      isDemo={isDemo}
    />,
  );
}

describe('RoseGoldTemplate', () => {
  it('muestra una portada accesible y mantiene el contenido detrás de la apertura', () => {
    const markup = renderToString(
      <RoseGoldTemplate invitation={getDemoInvitation()} isDemo />,
    );

    expect(markup).toContain('invitation-opening');
    expect(markup).toContain('role="dialog"');
    expect(markup).toContain('aria-modal="true"');
    expect(markup).toContain('Abrir invitación');
    expect(markup).toContain('Mis XV');
    expect(markup).toContain('Guadalupe');
    expect(markup).toContain('dateTime="2027-01-16"');
    expect(markup).not.toContain('rose-gold__hero');
  });

  it('compone una experiencia editorial con retrato, galería y música flotante', () => {
    const markup = renderWithoutOpening(getDemoInvitation(), true);

    expect(markup).toContain('rose-gold__portrait');
    expect(markup).toContain('rose-gold__hero-copy');
    expect(markup).toContain('invitation-music--floating');
    expect(markup).toContain('invitation-gallery--editorial');
    expect(markup).toContain('rose-gold__notes');
    expect(markup).toContain('rose-gold__closing');
    expect(markup).toContain('Demostración con datos ficticios');
  });

  it('usa el primer asset como retrato y no lo duplica en la galería', () => {
    const markup = renderWithoutOpening(getDemoInvitation());

    expect(markup).toContain('rose-gold__portrait');
    expect(markup).toContain('fetchPriority="high"');
    expect(markup).toContain('loading="lazy"');
    expect(markup).toContain('invitation-gallery__item--featured');
    expect(markup.match(/<figure class="invitation-gallery__item/g)).toHaveLength(3);
  });

  it('configura el retrato hero con srcSet responsivo y metadatos del asset autorizado', () => {
    const invitation = getDemoInvitation();
    const hero = invitation.gallery?.images[0];
    const markup = renderWithoutOpening(invitation);

    expect(hero).toMatchObject({
      src: '/assets/invitations/rose-gold/hero-900x1200.webp',
      objectPosition: '50% 42%',
      width: 900,
      height: 1200,
    });
    expect(hero?.srcSet).toContain('hero-1800x2400.webp 1800w');
    expect(markup).toContain('srcSet="/assets/invitations/rose-gold/hero-900x1200.webp 900w');
    expect(markup).toContain('object-position:50% 42%');
    expect(markup).not.toContain('hero-900x1200.webp" loading="lazy"');
  });

  it('expone controles de música compactos cuando existe un archivo autorizado', () => {
    const invitation = getDemoInvitation({
      music: {
        title: 'Vals de muestra',
        artist: 'Audio local autorizado',
        src: '/assets/invitations/rose-gold/theme.mp3',
      },
    });
    const markup = renderWithoutOpening(invitation);

    expect(markup).toContain('src="/assets/invitations/rose-gold/theme.mp3"');
    expect(markup).toContain('aria-label="Reproducir música"');
    expect(markup).toContain('aria-label="Silenciar música"');
  });

  it('permite que una pista autorizada termine cuando loop está deshabilitado', () => {
    const invitation = getDemoInvitation({
      music: {
        title: 'Vals de muestra',
        src: '/assets/invitations/rose-gold/theme.mp3',
        loop: false,
      },
    });

    expect(renderWithoutOpening(invitation)).not.toContain(' loop=""');
  });

  it('mantiene un estado discreto cuando la música todavía no tiene archivo', () => {
    const markup = renderWithoutOpening(getDemoInvitation());

    expect(markup).toContain('Música por confirmar');
    expect(markup).toContain('aria-label="Música no disponible"');
    expect(markup).not.toContain('aria-label="Silenciar música"');
  });

  it('omite secciones deshabilitadas sin dejar contenedores vacíos', () => {
    const invitation = getDemoInvitation({
      features: {
        opening: false,
        music: false,
        countdown: false,
        eventDetails: false,
        location: false,
        gallery: false,
        rsvp: false,
        dressCode: false,
        gifts: false,
        accommodation: false,
        transport: false,
        collaborativePlaylist: false,
        partyPic: false,
        share: false,
      },
    });
    const markup = renderWithoutOpening(invitation, true);

    expect(markup).not.toContain('invitation-music');
    expect(markup).not.toContain('invitation-countdown');
    expect(markup).not.toContain('invitation-details');
    expect(markup).not.toContain('invitation-gallery');
    expect(markup).not.toContain('rose-gold__notes');
    expect(markup).not.toContain('Confirmá tu asistencia');
    expect(markup).not.toContain('invitation-share');
    expect(markup).toContain('rose-gold__hero');
  });

  it('muestra RSVP solo para la demo después de deshabilitar la apertura', () => {
    const invitation = getDemoInvitation();

    expect(renderWithoutOpening(invitation, true)).toContain('Confirmá tu asistencia');
    expect(renderWithoutOpening(invitation)).not.toContain('Confirmá tu asistencia');
  });

  it('muestra un mensaje de agradecimiento para un evento pasado', () => {
    const invitation = getDemoInvitation({
      event: {
        ...getDemoInvitation().event,
        date: '2020-01-01',
        time: '21:00',
      },
    });
    const markup = renderWithoutOpening(invitation);

    expect(markup).toContain('Gracias por compartir');
    expect(markup).toContain('Gracias por compartir este momento tan especial.');
    expect(markup).not.toContain('invitation-countdown__grid');
  });

  it('admite invitaciones sin fotografías sin renderizar retrato ni galería', () => {
    const invitation = getDemoInvitation({
      features: { ...getDemoInvitation().features, gallery: false },
      gallery: undefined,
    });
    const markup = renderWithoutOpening(invitation);

    expect(markup).not.toContain('rose-gold__portrait');
    expect(markup).not.toContain('invitation-gallery');
  });
});
