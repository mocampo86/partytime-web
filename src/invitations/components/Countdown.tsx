import { useEffect, useId, useMemo, useState } from 'react';

type CountdownProps = {
  date: string;
  time?: string;
  utcOffset?: string;
  title?: string;
};

export type CountdownState = 'future' | 'event-day' | 'past';

export function getCountdownTarget(date: string, time = '00:00', utcOffset = '-03:00') {
  return new Date(`${date}T${time}:00${utcOffset}`);
}

function getOffsetMinutes(utcOffset: string) {
  const [, sign, hours, minutes] = /^([+-])(\d{2}):(\d{2})$/.exec(utcOffset) ?? [];
  if (!sign || hours === undefined || minutes === undefined) {
    return 0;
  }

  const offset = Number(hours) * 60 + Number(minutes);
  return sign === '+' ? offset : -offset;
}

export function getCountdownState(date: string, utcOffset = '-03:00', now = new Date()): CountdownState {
  const offsetMs = getOffsetMinutes(utcOffset) * 60_000;
  const eventDay = date;
  const currentEventDay = new Date(now.getTime() + offsetMs).toISOString().slice(0, 10);

  if (currentEventDay < eventDay) {
    return 'future';
  }
  if (currentEventDay > eventDay) {
    return 'past';
  }
  return 'event-day';
}

export function getCountdownParts(target: Date, now: Date) {
  const remaining = Math.max(0, target.getTime() - now.getTime());
  const totalSeconds = Math.floor(remaining / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function Countdown({ date, time, utcOffset, title = 'Cuenta regresiva' }: CountdownProps) {
  const titleId = useId();
  const target = useMemo(() => getCountdownTarget(date, time, utcOffset), [date, time, utcOffset]);
  const [now, setNow] = useState(() => new Date());
  const parts = getCountdownParts(target, now);
  const countdownState = getCountdownState(date, utcOffset, now);

  useEffect(() => {
    setNow(new Date());
    if (getCountdownState(date, utcOffset) === 'past') {
      return;
    }

    let timer = 0;
    const scheduleTick = () => {
      const delay = getCountdownState(date, utcOffset) === 'future' ? 1_000 : 60_000;
      timer = window.setTimeout(() => {
        const nextNow = new Date();
        setNow(nextNow);
        if (getCountdownState(date, utcOffset, nextNow) !== 'past') {
          scheduleTick();
        }
      }, delay);
    };
    scheduleTick();

    return () => window.clearTimeout(timer);
  }, [date, target, utcOffset]);

  return (
    <section
      className={`invitation-card invitation-countdown${
        countdownState === 'future' ? '' : ` invitation-countdown--${countdownState}`
      }`}
      aria-labelledby={titleId}
    >
      <p className="invitation-eyebrow">Falta poco</p>
      <h2 id={titleId}>
        {countdownState === 'event-day'
          ? 'Llegó el gran día'
          : countdownState === 'past'
            ? 'Gracias por compartir'
            : title}
      </h2>
      {countdownState === 'event-day' ? (
        <p className="invitation-countdown__arrived" role="status">
          Hoy celebramos este momento tan esperado.
        </p>
      ) : countdownState === 'past' ? (
        <p className="invitation-countdown__arrived" role="status">
          Gracias por compartir este momento tan especial.
        </p>
      ) : (
        <dl className="invitation-countdown__grid">
          {[
            ['Días', parts.days],
            ['Horas', parts.hours],
            ['Minutos', parts.minutes],
            ['Segundos', parts.seconds],
          ].map(([label, value]) => (
            <div key={label} className="invitation-countdown__item">
              <dt>{label}</dt>
              <dd>{String(value).padStart(2, '0')}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
