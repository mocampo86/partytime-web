import { InvitationInfoSection } from './InvitationInfoSection';

export function AccommodationInfo({ accommodation }: { accommodation?: string }) {
  if (!accommodation) {
    return null;
  }

  return (
    <InvitationInfoSection eyebrow="Hospedaje" title="Dónde alojarse">
      <p>{accommodation}</p>
    </InvitationInfoSection>
  );
}
