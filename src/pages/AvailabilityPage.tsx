import { useState, type FormEvent } from 'react';
import { services } from '../data/services';
import type { ServiceId } from '../types/service';
import { getWhatsAppUrl } from '../utils/whatsapp';

type FormErrors = {
  services?: string;
  date?: string;
  city?: string;
};

type AvailabilityPageProps = {
  preselectedServiceId: string | null;
};

function getLocalDateValue(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function isValidFutureDate(value: string) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!match) {
    return false;
  }

  const [, yearValue, monthValue, dayValue] = match;
  const year = Number(yearValue);
  const month = Number(monthValue);
  const day = Number(dayValue);
  const eventDate = new Date(year, month - 1, day);
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    eventDate.getFullYear() === year &&
    eventDate.getMonth() === month - 1 &&
    eventDate.getDate() === day &&
    eventDate > startOfToday
  );
}

function formatDate(value: string) {
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
}

function getInitialServices(preselectedServiceId: string | null) {
  return preselectedServiceId && services.some((service) => service.id === preselectedServiceId)
    ? [preselectedServiceId as ServiceId]
    : [];
}

function buildMessage({
  selectedServiceIds,
  eventDate,
  city,
  comments,
}: {
  selectedServiceIds: readonly ServiceId[];
  eventDate: string;
  city: string;
  comments: string;
}) {
  const selectedServices = services
    .filter((service) => selectedServiceIds.includes(service.id))
    .map((service) => `- ${service.name}`)
    .join('\n');
  const lines = [
    '¡Hola, PartyTime! Quiero consultar disponibilidad para mi evento.',
    'Servicios:',
    selectedServices,
    `Fecha: ${formatDate(eventDate)}`,
    `Ciudad: ${city}`,
  ];

  if (comments) {
    lines.push('Comentarios:', comments);
  }

  return lines.join('\n');
}

export function AvailabilityPage({ preselectedServiceId }: AvailabilityPageProps) {
  const [selectedServiceIds, setSelectedServiceIds] = useState<readonly ServiceId[]>(() =>
    getInitialServices(preselectedServiceId),
  );
  const [eventDate, setEventDate] = useState('');
  const [city, setCity] = useState('');
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [copyMessage, setCopyMessage] = useState<string | null>(null);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const minDate = getLocalDateValue();

  const toggleService = (serviceId: ServiceId) => {
    setSelectedServiceIds((currentServiceIds) =>
      currentServiceIds.includes(serviceId)
        ? currentServiceIds.filter((id) => id !== serviceId)
        : [...currentServiceIds, serviceId],
    );
    setErrors((currentErrors) => ({ ...currentErrors, services: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedCity = city.trim();
    const normalizedComments = comments.trim();
    const nextErrors: FormErrors = {};

    if (!selectedServiceIds.length) {
      nextErrors.services = 'Seleccioná al menos un servicio.';
    }

    if (!isValidFutureDate(eventDate)) {
      nextErrors.date = 'Elegí una fecha posterior a hoy.';
    }

    if (!normalizedCity) {
      nextErrors.city = 'Indicá la ciudad donde será el evento.';
    }

    setErrors(nextErrors);
    setCopyStatus(null);

    if (Object.keys(nextErrors).length) {
      return;
    }

    const message = buildMessage({
      selectedServiceIds,
      eventDate,
      city: normalizedCity,
      comments: normalizedComments,
    });
    const whatsAppUrl = getWhatsAppUrl(message);

    if (!whatsAppUrl) {
      setCopyMessage(message);
      return;
    }

    setCopyMessage(message);
    window.open(whatsAppUrl, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = async () => {
    if (!copyMessage) {
      return;
    }

    try {
      await navigator.clipboard.writeText(copyMessage);
      setCopyStatus('Mensaje copiado. Podés pegarlo en WhatsApp para enviarlo.');
    } catch {
      setCopyStatus('No se pudo copiar automáticamente. Seleccioná y copiá el mensaje manualmente.');
    }
  };

  return (
    <section className="availability-page site-section" aria-labelledby="availability-title">
      <header className="availability-page__header">
        <p className="hero__eyebrow">Consultar disponibilidad</p>
        <h1 id="availability-title">Hagamos realidad tu próximo evento</h1>
        <p>
          Elegí los servicios que te gustaría contratar, contanos cuándo y dónde será tu
          celebración y nos pondremos en contacto para ayudarte a crear una experiencia
          inolvidable.
        </p>
      </header>

      <form className="availability-form" noValidate onSubmit={handleSubmit}>
        <fieldset className="availability-form__section">
          <legend>Servicios</legend>
          <p className="availability-form__intro">
            Seleccioná todos los servicios que te gustaría sumar a tu evento.
          </p>
          <div className="availability-service-grid" aria-describedby="availability-services-error">
            {services.map((service) => {
              const isSelected = selectedServiceIds.includes(service.id);
              const checkboxId = `availability-service-${service.id}`;

              return (
                <label
                  className={`availability-service${isSelected ? ' availability-service--selected' : ''}`}
                  htmlFor={checkboxId}
                  key={service.id}
                >
                  <input
                    checked={isSelected}
                    id={checkboxId}
                    name="services"
                    onChange={() => toggleService(service.id)}
                    type="checkbox"
                    value={service.id}
                  />
                  <span className="availability-service__name">{service.name}</span>
                  <span className="availability-service__selection" aria-hidden="true">
                    {isSelected ? 'Seleccionado' : 'Seleccionar'}
                  </span>
                </label>
              );
            })}
          </div>
          {errors.services ? (
            <p className="availability-form__error" id="availability-services-error" role="alert">
              {errors.services}
            </p>
          ) : null}
        </fieldset>

        <fieldset className="availability-form__section">
          <legend>Datos del evento</legend>
          <div className="availability-form__fields availability-form__fields--event">
            <div className="availability-form__field">
              <label htmlFor="availability-date">Fecha del evento</label>
              <input
                aria-describedby={errors.date ? 'availability-date-error' : undefined}
                aria-invalid={Boolean(errors.date)}
                id="availability-date"
                min={minDate}
                onChange={(event) => setEventDate(event.target.value)}
                required
                type="date"
                value={eventDate}
              />
              {errors.date ? (
                <p className="availability-form__error" id="availability-date-error" role="alert">
                  {errors.date}
                </p>
              ) : null}
            </div>
            <div className="availability-form__field">
              <label htmlFor="availability-city">¿En qué ciudad será tu evento?</label>
              <input
                aria-describedby={errors.city ? 'availability-city-error' : undefined}
                aria-invalid={Boolean(errors.city)}
                id="availability-city"
                onChange={(event) => setCity(event.target.value)}
                placeholder="Ej.: Maldonado, Punta del Este, Montevideo..."
                required
                type="text"
                value={city}
              />
              {errors.city ? (
                <p className="availability-form__error" id="availability-city-error" role="alert">
                  {errors.city}
                </p>
              ) : null}
            </div>
          </div>
        </fieldset>

        <fieldset className="availability-form__section">
          <legend>Comentarios adicionales</legend>
          <div className="availability-form__field">
            <label htmlFor="availability-comments">¿Querés contarnos algo más?</label>
            <textarea
              id="availability-comments"
              onChange={(event) => setComments(event.target.value)}
              rows={5}
              value={comments}
            />
          </div>
        </fieldset>

        <div className="availability-form__actions">
          <button className="button button--primary" type="submit">
            Consultar disponibilidad
          </button>
          <p>Se abrirá WhatsApp con tu consulta preparada. Confirmá el envío desde la aplicación.</p>
        </div>
      </form>

      {copyMessage ? (
        <section className="availability-copy" aria-labelledby="availability-copy-title">
          <h2 id="availability-copy-title">Copiá tu consulta para enviarla por WhatsApp</h2>
          <p>
            Si WhatsApp no se abrió desde esta página, copiá el mensaje y pegalo en la conversación
            con PartyTime para confirmar el envío.
          </p>
          <textarea aria-label="Mensaje de consulta" readOnly rows={10} value={copyMessage} />
          <button className="button button--secondary" onClick={copyToClipboard} type="button">
            Copiar mensaje
          </button>
          {copyStatus ? <p className="availability-copy__status" role="status">{copyStatus}</p> : null}
        </section>
      ) : null}
    </section>
  );
}
