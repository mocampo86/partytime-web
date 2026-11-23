import { InvitationInfoSection } from './InvitationInfoSection';

export function TransportInfo({ transport }: { transport?: string }) {
  if (!transport) {
    return null;
  }

  return (
    <InvitationInfoSection eyebrow="Traslados" title="Cómo llegar">
      <p>{transport}</p>
    </InvitationInfoSection>
  );
}
