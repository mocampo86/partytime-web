import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { getDemoInvitationByTemplateId } from '../../../data/invitations/loadInvitations';
import RoseGoldTemplate from './RoseGoldTemplate';

describe('RoseGoldTemplate', () => {
  it('muestra la apertura interactiva de la demo aislada', () => {
    const loadedInvitation = getDemoInvitationByTemplateId('rose-gold');
    expect(loadedInvitation).toBeDefined();

    const markup = renderToString(
      <RoseGoldTemplate invitation={loadedInvitation!.invitation} isDemo />,
    );

    expect(markup).toContain('Abrir invitación');
    expect(markup).toContain('Mis XV');
    expect(markup).toContain('Guadalupe');
  });

  it('muestra RSVP solo para la demo después de deshabilitar la apertura', () => {
    const loadedInvitation = getDemoInvitationByTemplateId('rose-gold');
    expect(loadedInvitation).toBeDefined();
    const invitation = {
      ...loadedInvitation!.invitation,
      features: { ...loadedInvitation!.invitation.features, opening: false },
    };

    expect(renderToString(<RoseGoldTemplate invitation={invitation} isDemo />)).toContain(
      'Confirmá tu asistencia',
    );
    expect(renderToString(<RoseGoldTemplate invitation={invitation} />)).not.toContain(
      'Confirmá tu asistencia',
    );
  });
});
