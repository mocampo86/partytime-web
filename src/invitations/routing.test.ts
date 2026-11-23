import { describe, expect, it } from 'vitest';
import { normalizePathname, resolveInvitationRoute } from './routing';

const publishedSlugs = ['20261128-XVGuada'];
const templateIds = ['rose-gold'];

describe('resolveInvitationRoute', () => {
  it('mantiene la precedencia de las rutas existentes', () => {
    ['/', '/contacto', '/consultar-disponibilidad', '/servicios/fotografia'].forEach(
      (pathname) => {
        expect(resolveInvitationRoute(pathname, publishedSlugs, publishedSlugs, templateIds)).toEqual({
          kind: 'not-found',
        });
      },
    );
  });

  it('resuelve catálogo y demo válidos', () => {
    expect(
      resolveInvitationRoute('/invitaciones', publishedSlugs, publishedSlugs, templateIds),
    ).toEqual({
      kind: 'catalog',
    });
    expect(
      resolveInvitationRoute('/invitaciones/demo/rose-gold', publishedSlugs, publishedSlugs, templateIds),
    ).toEqual({ kind: 'demo', templateId: 'rose-gold' });
  });

  it('resuelve una invitación publicada sin distinguir mayúsculas', () => {
    expect(
      resolveInvitationRoute('/20261128-xvguada/', publishedSlugs, publishedSlugs, templateIds),
    ).toEqual({ kind: 'invitation', slug: '20261128-xvguada' });
  });

  it('identifica un slug existente pero no publicado', () => {
    expect(
      resolveInvitationRoute(
        '/evento-borrador',
        ['evento-borrador'],
        publishedSlugs,
        templateIds,
      ),
    ).toEqual({ kind: 'invitation-not-found' });
  });

  it('rechaza invitaciones inexistentes, templates desconocidos y rutas reservadas', () => {
    [
      '/otra-invitacion',
      '/invitaciones/demo/no-existe',
      '/invitaciones/interna',
      '/servicios/fotografia/extra',
    ].forEach((pathname) => {
      expect(resolveInvitationRoute(pathname, publishedSlugs, publishedSlugs, templateIds)).toEqual({
        kind: 'not-found',
      });
    });
  });
});

describe('normalizePathname', () => {
  it('normaliza barras finales conservando la raíz', () => {
    expect(normalizePathname('/')).toBe('/');
    expect(normalizePathname('/contacto///')).toBe('/contacto');
  });
});
