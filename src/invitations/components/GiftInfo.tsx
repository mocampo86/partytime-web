import { InvitationInfoSection } from './InvitationInfoSection';

export function GiftInfo({ giftInfo }: { giftInfo?: string }) {
  if (!giftInfo) {
    return null;
  }

  return (
    <InvitationInfoSection eyebrow="Regalos" title="Detalles especiales">
      <p>{giftInfo}</p>
    </InvitationInfoSection>
  );
}
