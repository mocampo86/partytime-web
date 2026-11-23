import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { getInvitationBySlug } from '../../../data/invitations/loadInvitations';
import RoseGoldTemplate from './RoseGoldTemplate';

describe('RoseGoldTemplate', () => {
  it('muestra la apertura interactiva de la demo publicada', () => {
    const loadedInvitation = getInvitationBySlug('20261128-XVGuada');
    expect(loadedInvitation).toBeDefined();

    const markup = renderToString(
      <RoseGoldTemplate invitation={loadedInvitation!.invitation} isDemo />,
    );

    expect(markup).toContain('Abrir invitación');
    expect(markup).toContain('Mis XV');
    expect(markup).toContain('Guadalupe');
  });
});
