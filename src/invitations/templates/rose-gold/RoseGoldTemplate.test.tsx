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
    expect(markup).toContain('dateTime="2026-11-28"');
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
    expect(markup.match(/<figure class="invitation-gallery__item/g)).toHaveLength(2);
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

  it('reemplaza la cuenta regresiva por un mensaje cuando llega la fecha', () => {
    const invitation = getDemoInvitation({
      event: {
        ...getDemoInvitation().event,
        date: '2020-01-01',
        time: '21:00',
      },
    });
    const markup = renderWithoutOpening(invitation);

    expect(markup).toContain('Llegó el gran día');
    expect(markup).toContain('Hoy celebramos este momento tan esperado.');
    expect(markup).not.toContain('invitation-countdown__grid');
  });
});
