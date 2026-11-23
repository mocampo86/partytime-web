import { InvitationInfoSection } from './InvitationInfoSection';

export function DressCode({ dressCode }: { dressCode?: string }) {
  if (!dressCode) {
    return null;
  }

  return (
    <InvitationInfoSection eyebrow="Vestimenta" title="Dress code">
      <p>{dressCode}</p>
    </InvitationInfoSection>
  );
}
