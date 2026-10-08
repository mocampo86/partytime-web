import { getServicePageBySlug } from '../data/service-details';
import { getWhatsAppUrl } from '../utils/whatsapp';

const defaultMessage =
  '¡Hola! Estuve viendo la web de PartyTime y me gustaría recibir información sobre sus servicios.';

function getMessage() {
  const serviceMatch = window.location.pathname.match(/^\/servicios\/([^/]+)$/);
  const servicePage = serviceMatch ? getServicePageBySlug(serviceMatch[1]) : null;

  return servicePage
    ? `¡Hola! Estuve viendo el servicio de ${servicePage.detail.displayName} en PartyTime y me gustaría recibir más información.`
    : defaultMessage;
}

export function FloatingWhatsAppCta() {
  const href = getWhatsAppUrl(getMessage());

  if (!href) {
    return null;
  }

  return (
    <a
      className="whatsapp-cta"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar a PartyTime por WhatsApp"
    >
      <img
        className="whatsapp-cta__icon"
        src="/images/whatsapp-icon.png"
        alt=""
        width="56"
        height="56"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}
