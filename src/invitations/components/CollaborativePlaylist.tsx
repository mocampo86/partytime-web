import { InvitationInfoSection } from './InvitationInfoSection';

export function CollaborativePlaylist({ url }: { url?: string }) {
  return (
    <InvitationInfoSection eyebrow="Playlist" title="Sumá tu canción">
      {url ? (
        <a className="invitation-button" href={url} target="_blank" rel="noopener noreferrer">
          Abrir playlist colaborativa
        </a>
      ) : (
        <p className="invitation-notice">La playlist colaborativa se habilitará próximamente.</p>
      )}
    </InvitationInfoSection>
  );
}
