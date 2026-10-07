import { ResponsiveImage } from '../ResponsiveImage';
import type { ServiceDetail } from '../../types/service';

type ServiceGalleryProps = {
  serviceName: string;
  images: ServiceDetail['gallery'];
  eyebrow?: string;
  title?: string;
};

export function ServiceGallery({
  serviceName,
  images,
  eyebrow,
  title,
}: ServiceGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <section className="site-section service-gallery" aria-labelledby="service-gallery-title">
      {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
      <h2 id="service-gallery-title">{title ?? `${serviceName} en acción`}</h2>
      <ul
        className={`service-gallery__grid${
          images.length > 4 ? ' service-gallery__grid--extended' : ''
        }`}
        data-count={images.length}
        aria-label={`Fotografías de ${serviceName}`}
      >
        {images.map((image) => (
          <li className="service-gallery__item" key={image.src}>
            <figure className="service-gallery__figure">
              <ResponsiveImage
                image={image}
                className="service-gallery__image"
                loading="lazy"
                fetchPriority="low"
              />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
