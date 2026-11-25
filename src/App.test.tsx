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
  it('renderiza el catálogo comercial', () => {
    expect(renderPath('/invitaciones')).toContain('Una invitación tan especial como tu evento');
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
