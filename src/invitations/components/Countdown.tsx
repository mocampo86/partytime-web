import { useEffect, useMemo, useState } from 'react';

type CountdownProps = {
  date: string;
  time?: string;
  utcOffset?: string;
  title?: string;
};

export function getCountdownTarget(date: string, time = '00:00', utcOffset = '-03:00') {
  return new Date(`${date}T${time}:00${utcOffset}`);
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
  const target = useMemo(() => getCountdownTarget(date, time, utcOffset), [date, time, utcOffset]);
  const [parts, setParts] = useState(() => getCountdownParts(target, new Date()));

  useEffect(() => {
    setParts(getCountdownParts(target, new Date()));
    const interval = window.setInterval(() => {
      setParts(getCountdownParts(target, new Date()));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  return (
    <section className="invitation-card invitation-countdown" aria-labelledby="invitation-countdown-title">
      <p className="invitation-eyebrow">Falta poco</p>
      <h2 id="invitation-countdown-title">{title}</h2>
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
    </section>
  );
}
