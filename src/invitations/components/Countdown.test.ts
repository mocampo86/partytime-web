import { describe, expect, it } from 'vitest';
import { getCountdownParts, getCountdownState, getCountdownTarget } from './Countdown';

describe('getCountdownParts', () => {
  it('calcula días, horas, minutos y segundos', () => {
    expect(
      getCountdownParts(
        new Date('2027-01-02T03:04:05Z'),
        new Date('2027-01-01T00:00:00Z'),
      ),
    ).toEqual({ days: 1, hours: 3, minutes: 4, seconds: 5 });
  });

  it('interpreta la hora del evento con el offset configurado', () => {
    expect(getCountdownTarget('2027-01-01', '21:00', '-03:00').toISOString()).toBe(
      '2027-01-02T00:00:00.000Z',
    );
  });

  it('no produce valores negativos después de la fecha', () => {
    expect(
      getCountdownParts(
        new Date('2027-01-01T00:00:00Z'),
        new Date('2027-01-02T00:00:00Z'),
      ),
    ).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  it('distingue un evento futuro usando el día local del evento', () => {
    expect(getCountdownState('2027-01-02', '-03:00', new Date('2027-01-02T00:30:00Z'))).toBe(
      'future',
    );
  });

  it('muestra el estado de celebración durante el día del evento', () => {
    expect(getCountdownState('2027-01-02', '-03:00', new Date('2027-01-02T15:00:00Z'))).toBe(
      'event-day',
    );
  });

  it('muestra el estado pasado a partir del día siguiente en el offset del evento', () => {
    expect(getCountdownState('2027-01-02', '-03:00', new Date('2027-01-03T03:00:00Z'))).toBe(
      'past',
    );
  });
});
