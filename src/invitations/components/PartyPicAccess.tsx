import { InvitationInfoSection } from './InvitationInfoSection';

export function PartyPicAccess({ url }: { url?: string }) {
  return (
    <InvitationInfoSection eyebrow="PartyPic" title="Fotos del evento">
      {url ? (
        <a className="invitation-button" href={url} target="_blank" rel="noopener noreferrer">
          Ver fotos compartidas
        </a>
      ) : (
        <p className="invitation-notice">El acceso a PartyPic se habilitará próximamente.</p>
      )}
    </InvitationInfoSection>
  );
}
