import type { Service } from '../types/service';

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const titleId = `service-${service.id}-title`;

  return (
    <article className="service-card" aria-labelledby={titleId}>
      <div
        className={`service-card__media${
          service.image ? '' : ' service-card__media--empty'
        }`}
        data-index={String(index + 1).padStart(2, '0')}
      >
        {service.image ? (
          <picture>
            {service.image.sources?.map((source) => (
              <source
                key={`${source.srcSet}-${source.media ?? 'default'}`}
                srcSet={source.srcSet}
                type={source.type}
                media={source.media}
                sizes={source.sizes}
              />
            ))}
            <img
              className="service-card__image"
              src={service.image.src}
              srcSet={service.image.srcSet}
              sizes={service.image.sizes}
              alt={service.image.alt}
              style={{ objectPosition: service.image.objectPosition ?? 'center' }}
              width={service.image.width}
              height={service.image.height}
              loading="lazy"
              decoding="async"
            />
          </picture>
        ) : (
          <div
            className="service-card__placeholder"
            role="img"
            aria-label={`Imagen de ${service.name} próximamente`}
          >
            <span className="service-card__placeholder-label" aria-hidden="true">
              Imagen próximamente
            </span>
          </div>
        )}
      </div>

      <div className="service-card__content">
        <h3 className="service-card__title" id={titleId}>
          {service.name}
        </h3>
        <p className="service-card__description">{service.shortDescription}</p>
        <span className="service-card__cta">
          <span className="service-card__cta-text">Conocer más</span>
          <span className="service-card__cta-icon" aria-hidden="true">
            →
          </span>
          <span className="service-card__cta-status">Próximamente</span>
        </span>
      </div>
    </article>
  );
}
