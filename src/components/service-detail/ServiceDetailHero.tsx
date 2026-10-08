import { ResponsiveImage } from '../ResponsiveImage';
import type { ServiceDetail } from '../../types/service';
import { getAvailabilityUrl } from '../../utils/availability';

type ServiceDetailHeroProps = {
  detail: ServiceDetail;
};

export function ServiceDetailHero({ detail }: ServiceDetailHeroProps) {
  return (
    <section className="service-detail-hero" aria-labelledby="service-detail-title">
      <div className="service-detail-hero__media" aria-hidden="true">
        <ResponsiveImage
          image={detail.hero.image}
          className="service-detail-hero__image"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="service-detail-hero__content">
        <p className="hero__eyebrow">{detail.hero.eyebrow}</p>
        <h1 className="service-detail-hero__title" id="service-detail-title">
          {detail.hero.headline}
        </h1>
        {detail.hero.subtitle ? (
          <p className="service-detail-hero__subtitle">{detail.hero.subtitle}</p>
        ) : null}
        <div className="service-detail-hero__description">
          {detail.hero.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {detail.hero.statement ? (
          <p className="service-detail-hero__statement">{detail.hero.statement}</p>
        ) : null}
        <div className="service-detail-hero__action">
          {detail.hero.ctaLabel === 'Consultar disponibilidad' ? (
            <a
              className="button button--primary service-detail__cta-button"
              href={getAvailabilityUrl(detail.serviceId)}
            >
              {detail.hero.ctaLabel}
            </a>
          ) : (
            <>
              <span className="button button--primary service-detail__cta-button">
                {detail.hero.ctaLabel}
              </span>
              <span className="service-detail__pending">Disponible próximamente</span>
            </>
          )}
        </div>
        {detail.hero.highlights?.length ? (
          <ul
            className="service-detail-hero__highlights"
            aria-label={`Destacados de ${detail.displayName}`}
          >
            {detail.hero.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
