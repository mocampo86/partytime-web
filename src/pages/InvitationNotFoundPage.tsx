import { InvitationLayout } from '../invitations/layouts/InvitationLayout';

export function InvitationNotFoundPage() {

  return (
    <InvitationLayout>
      <section className="invitation-status" aria-labelledby="invitation-not-found-title">
        <p className="invitation-eyebrow">Error 404</p>
        <h1 id="invitation-not-found-title">Invitación no encontrada</h1>
        <p>Revisá que el enlace esté completo o consultá con los anfitriones del evento.</p>
        <a className="invitation-button" href="/">
          Ir al sitio de PartyTime
        </a>
      </section>
    </InvitationLayout>
  );
}
