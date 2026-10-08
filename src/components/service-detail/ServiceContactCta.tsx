import type { ServiceDetail, ServiceId } from '../../types/service';
import { getAvailabilityUrl } from '../../utils/availability';
import { getWhatsAppUrl } from '../../utils/whatsapp';

type ServiceContactCtaProps = {
  contactCta: ServiceDetail['contactCta'];
  serviceId: ServiceId;
};

export function ServiceContactCta({ contactCta, serviceId }: ServiceContactCtaProps) {
  const availabilityUrl =
    contactCta.label === 'Consultar disponibilidad'
      ? getAvailabilityUrl(serviceId)
      : null;
  const whatsAppUrl = contactCta.whatsAppEnabled
    ? getWhatsAppUrl(contactCta.message)
    : null;

  return (
    <section className="site-section service-contact" aria-labelledby="service-contact-title">
      <div className="service-contact__panel">
        <div className="service-contact__copy">
          {contactCta.eyebrow ? (
            <p className="hero__eyebrow">{contactCta.eyebrow}</p>
          ) : null}
          <h2 id="service-contact-title">{contactCta.title}</h2>
          <p>{contactCta.description}</p>
        </div>
        <div className="service-contact__action">
          {availabilityUrl ? (
            <a
              className="button button--primary service-detail__cta-button"
              href={availabilityUrl}
            >
              {contactCta.label}
            </a>
          ) : whatsAppUrl ? (
            <a
              className="button button--primary service-detail__cta-button"
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
            >
              {contactCta.label}
            </a>
          ) : (
            <>
              <span className="button button--primary service-detail__cta-button">
                {contactCta.label}
              </span>
              <span className="service-detail__pending">Disponible próximamente</span>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
