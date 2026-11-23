import type { InvitationEvent } from '../../types/invitation';

export function LocationButton({ event }: { event: InvitationEvent }) {
  if (!event.mapsUrl) {
    return null;
  }

  return (
    <a
      className="invitation-button invitation-location"
      href={event.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Ver ubicación en Google Maps
    </a>
  );
}
