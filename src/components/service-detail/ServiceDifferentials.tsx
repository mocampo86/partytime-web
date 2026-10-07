import { ResponsiveImage } from '../ResponsiveImage';
import type { ServiceDetail } from '../../types/service';

type ServiceDifferentialsProps = {
  differentials: NonNullable<ServiceDetail['differentials']>;
  ariaLabel?: string;
};

export function ServiceDifferentials({
  differentials,
  ariaLabel = 'Diferenciales del servicio',
}: ServiceDifferentialsProps) {
  return (
    <section className="site-section service-differentials" aria-label={ariaLabel}>
      <div className="service-differentials__grid">
        {differentials.map((differential) => {
          const isWideMedia =
            differential.image?.width !== undefined &&
            differential.image?.height !== undefined &&
            differential.image.width > differential.image.height;
          const className = [
            'service-differential',
            differential.image ? 'service-differential--with-media' : '',
            differential.featured ? 'service-differential--featured' : '',
            isWideMedia ? 'service-differential--wide-media' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <article className={className} key={differential.title}>
            <div className="service-differential__content">
              {differential.label ? (
                <p className="service-differential__label">{differential.label}</p>
              ) : null}
              <h2 className="service-differential__title">{differential.title}</h2>
              {differential.highlight ? (
                <p className="service-differential__highlight">{differential.highlight}</p>
              ) : null}
              <div className="service-differential__copy">
                {differential.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {differential.callout ? (
                <p className="service-differential__callout">{differential.callout}</p>
              ) : null}
            </div>
            {differential.image ? (
              <figure className="service-differential__media">
                <ResponsiveImage
                  image={differential.image}
                  className="service-differential__image"
                  loading="lazy"
                  fetchPriority="low"
                />
              </figure>
            ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
