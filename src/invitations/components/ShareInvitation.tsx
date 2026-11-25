import { useState } from 'react';
import type { Invitation } from '../../types/invitation';

export function ShareInvitation({ invitation }: { invitation: Invitation }) {
  const [status, setStatus] = useState<string | null>(null);
  const [manualUrl, setManualUrl] = useState<string | null>(null);
  const title = invitation.seo?.openGraphTitle ?? `${invitation.event.title} de ${invitation.event.hostName}`;
  const text = invitation.seo?.openGraphDescription ?? invitation.event.subtitle ?? 'Te invito a celebrar conmigo.';

  const share = async () => {
    const url = window.location.href;
    setStatus(null);
    setManualUrl(null);

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
      setManualUrl(url);
      setStatus('No se pudo copiar automáticamente. Seleccioná y copiá el enlace.');
    }
  };

  return (
    <section className="invitation-share" aria-label="Compartir invitación">
      <button className="invitation-button invitation-button--ghost" type="button" onClick={share}>
        Compartir invitación
      </button>
      {status ? <p role="status">{status}</p> : null}
      {manualUrl ? (
        <input
          className="invitation-share__url"
          type="text"
          value={manualUrl}
          readOnly
          aria-label="Enlace de la invitación"
          onFocus={(event) => event.currentTarget.select()}
        />
      ) : null}
    </section>
  );
}
