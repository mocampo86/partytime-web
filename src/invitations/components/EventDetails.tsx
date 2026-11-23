import type { InvitationEvent } from '../../types/invitation';

function formatDate(value: string) {
  return new Intl.DateTimeFormat('es-UY', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`));
}

export function EventDetails({ event }: { event: InvitationEvent }) {
  return (
    <section className="invitation-card invitation-details" aria-labelledby="invitation-details-title">
      <p className="invitation-eyebrow">{event.eventType}</p>
      <h2 id="invitation-details-title">{formatDate(event.date)}</h2>
      {event.time ? <p className="invitation-details__time">{event.time} horas</p> : null}
      {event.venueName || event.locationLabel ? (
        <p className="invitation-details__venue">
          {[event.venueName, event.locationLabel].filter(Boolean).join(' · ')}
        </p>
      ) : null}
      {event.notes ? <p className="invitation-notice">{event.notes}</p> : null}
    </section>
  );
}
