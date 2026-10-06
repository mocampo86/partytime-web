import { ResponsiveImage } from '../ResponsiveImage';
import type { ServiceDetail } from '../../types/service';

type ServiceGalleryProps = {
  serviceName: string;
  images: ServiceDetail['gallery'];
};

export function ServiceGallery({ serviceName, images }: ServiceGalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <section className="site-section service-gallery" aria-labelledby="service-gallery-title">
      <h2 id="service-gallery-title">{serviceName} en acción</h2>
      <ul
        className="service-gallery__grid"
        data-count={Math.min(images.length, 3)}
        aria-label={`Fotografías de ${serviceName}`}
      >
        {images.slice(0, 3).map((image) => (
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
