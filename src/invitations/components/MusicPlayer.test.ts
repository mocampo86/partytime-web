import { describe, expect, it } from 'vitest';
import { getMusicStatusMessage } from './MusicPlayer';

describe('getMusicStatusMessage', () => {
  it('describe los estados de reproducción y finalización', () => {
    expect(getMusicStatusMessage('playing', true)).toBe('La música está sonando.');
    expect(getMusicStatusMessage('paused', true)).toBe('La música está en pausa.');
    expect(getMusicStatusMessage('ended', true)).toBe('La canción terminó.');
  });

  it('expone un error de reproducción discreto y permite un estado sin audio', () => {
    expect(getMusicStatusMessage('error', true)).toBe(
      'No se pudo reproducir la música. Podés intentar nuevamente.',
    );
    expect(getMusicStatusMessage('paused', false, 'Audio pendiente de autorización.')).toBe(
      'Audio pendiente de autorización.',
    );
  });
});
