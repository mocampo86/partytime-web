import { renderToString } from 'react-dom/server';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from './App';

function renderPath(pathname: string) {
  vi.stubGlobal('window', {
    location: {
      pathname,
      search: '',
    },
    matchMedia: () => ({
      matches: false,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
    }),
  });

  return renderToString(<App />);
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('App', () => {
  it('renderiza el catálogo comercial con la presentación Rose Gold', () => {
    const markup = renderPath('/invitaciones');

    expect(markup).toContain('Una invitación tan especial como tu evento');
    expect(markup).toContain('Rose Gold');
    expect(markup).toContain('/assets/invitations/rose-gold/social-preview-1200x630.webp');
    expect(markup).toContain('Ver demostración');
  });

  it('mantiene la página de contacto existente', () => {
    expect(renderPath('/contacto')).toContain('Hablemos de tu próximo gran momento');
  });

  it('mantiene las páginas actuales de inicio, disponibilidad y servicios', () => {
    expect(renderPath('/')).toContain('PartyTime');
    expect(renderPath('/consultar-disponibilidad')).toContain('Hagamos realidad tu próximo evento');
    expect(renderPath('/servicios/fotografia')).toContain('Fotografía');
  });

  it('muestra 404 de invitación para el evento ficticio marcado como borrador', () => {
    expect(renderPath('/20261128-XVGuada')).toContain('Invitación no encontrada');
  });
});
