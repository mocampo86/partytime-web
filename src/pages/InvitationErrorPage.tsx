import { InvitationLayout } from '../invitations/layouts/InvitationLayout';

export function InvitationErrorPage() {

  return (
    <InvitationLayout>
      <section className="invitation-status invitation-status--error" aria-labelledby="invitation-error-title">
        <p className="invitation-eyebrow">Invitación</p>
        <h1 id="invitation-error-title">No pudimos mostrar esta invitación</h1>
        <p>Puede que el enlace sea incorrecto o que la configuración todavía no esté disponible.</p>
        <a className="invitation-button" href="/invitaciones">
          Ver invitaciones digitales
        </a>
      </section>
    </InvitationLayout>
  );
}
