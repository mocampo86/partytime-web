import type { ServiceDetail } from '../../types/service';

type ServiceContactCtaProps = {
  contactCta: ServiceDetail['contactCta'];
};

export function ServiceContactCta({ contactCta }: ServiceContactCtaProps) {
  return (
    <section className="site-section service-contact" aria-labelledby="service-contact-title">
      <div className="service-contact__panel">
        <div className="service-contact__copy">
          <h2 id="service-contact-title">{contactCta.title}</h2>
          <p>{contactCta.description}</p>
        </div>
        <div className="service-contact__action">
          <span className="button button--primary service-detail__cta-button">
            {contactCta.label}
          </span>
          <span className="service-detail__pending">Disponible próximamente</span>
        </div>
      </div>
    </section>
  );
}
