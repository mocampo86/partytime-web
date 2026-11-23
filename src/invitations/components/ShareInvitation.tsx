import { useState } from 'react';
import type { Invitation } from '../../types/invitation';

export function ShareInvitation({ invitation }: { invitation: Invitation }) {
  const [status, setStatus] = useState<string | null>(null);
  const title = invitation.seo?.openGraphTitle ?? `${invitation.event.title} de ${invitation.event.hostName}`;
  const text = invitation.seo?.openGraphDescription ?? invitation.event.subtitle ?? 'Te invito a celebrar conmigo.';
  const url = window.location.href;

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setStatus('Enlace copiado para compartir.');
    } catch {
      setStatus(`Copiá este enlace: ${url}`);
    }
  };

  return (
    <section className="invitation-share" aria-label="Compartir invitación">
      <button className="invitation-button invitation-button--ghost" type="button" onClick={share}>
        Compartir invitación
      </button>
      {status ? <p role="status">{status}</p> : null}
    </section>
  );
}
