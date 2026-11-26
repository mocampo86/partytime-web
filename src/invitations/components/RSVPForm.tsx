import { useId, useState, type FormEvent } from 'react';
import type { InvitationRSVPConfig } from '../../types/invitation';

export function RSVPForm({ config }: { config?: InvitationRSVPConfig }) {
  const titleId = useId();
  const [status, setStatus] = useState<string | null>(null);
  const fields = new Set(config?.fields ?? ['name', 'attendance', 'message']);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Demostración: esta confirmación no se guardó ni se envió.');
  };

  return (
    <section className="invitation-card invitation-rsvp" aria-labelledby={titleId}>
      <p className="invitation-eyebrow">RSVP</p>
      <h2 id={titleId}>{config?.title ?? 'Confirmá tu asistencia'}</h2>
      <p>{config?.description ?? 'Esta sección muestra la experiencia prevista de confirmación.'}</p>
      <p className="invitation-notice" role="note">
        Servicio simulado: ninguna respuesta se guarda ni se envía en esta fase.
      </p>
      <form className="invitation-form" onSubmit={handleSubmit}>
        {fields.has('name') ? (
          <label>
            Nombre y apellido
            <input autoComplete="name" name="name" required type="text" />
          </label>
        ) : null}
        {fields.has('attendance') ? (
          <label>
            Asistencia
            <select name="attendance" required>
              <option value="">Seleccionar</option>
              <option value="si">Sí, asistiré</option>
              <option value="no">No podré asistir</option>
            </select>
          </label>
        ) : null}
        {fields.has('companions') ? (
          <label>
            Acompañantes
            <input min="0" max="3" name="companions" type="number" />
          </label>
        ) : null}
        {fields.has('message') ? (
          <label>
            Mensaje
            <textarea name="message" rows={4} />
          </label>
        ) : null}
        <button className="invitation-button" type="submit">
          Probar demostración
        </button>
      </form>
      {status ? <p className="invitation-form__status" role="status">{status}</p> : null}
      {config?.deadline ? <p>Fecha sugerida de respuesta: {config.deadline}</p> : null}
    </section>
  );
}
