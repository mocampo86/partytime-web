import { useId, type ReactNode } from 'react';
import type { InvitationEvent } from '../../types/invitation';

export function formatInvitationDate(value: string) {
  const formatted = new Intl.DateTimeFormat('es-UY', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`));

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

type EventDetailsProps = {
  event: InvitationEvent;
  children?: ReactNode;
};

export function EventDetails({ event, children }: EventDetailsProps) {
  const titleId = useId();
  const hasVenue = Boolean(event.venueName || event.locationLabel);

  return (
    <section className="invitation-card invitation-details" aria-labelledby={titleId}>
      <div className="invitation-details__grid">
        <div>
          <p className="invitation-eyebrow">{event.eventType}</p>
          <h2 id={titleId}>
            <time dateTime={event.date}>{formatInvitationDate(event.date)}</time>
          </h2>
          {event.time ? (
            <p className="invitation-details__time">
              <span>{event.time}</span> horas
            </p>
          ) : null}
        </div>
        {hasVenue || children ? (
          <div className="invitation-details__venue-card">
            <p className="invitation-details__label">Lugar</p>
            {event.venueName ? <p className="invitation-details__venue">{event.venueName}</p> : null}
            {event.locationLabel ? (
              <p className="invitation-details__location">{event.locationLabel}</p>
            ) : null}
            {children ? <div className="invitation-details__actions">{children}</div> : null}
          </div>
        ) : null}
      </div>
      {event.notes ? <p className="invitation-notice">{event.notes}</p> : null}
    </section>
  );
}
