import { renderToString } from 'react-dom/server';
import { afterEach, describe, expect, it, vi } from 'vitest';
import App from './App';

function renderPath(pathname: string) {
  vi.stubGlobal('window', {
    location: {
      pathname,
      search: '',
    },
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

  it('usa el estado de carga de una invitación publicada en SSR', () => {
    expect(renderPath('/20261128-XVGuada')).toContain('Cargando invitación');
  });
});
