import { useId } from 'react';
import type { InvitationGallery } from '../../types/invitation';

type PhotoGalleryProps = {
  gallery?: InvitationGallery;
  variant?: 'grid' | 'editorial';
};

export function PhotoGallery({ gallery, variant = 'grid' }: PhotoGalleryProps) {
  const titleId = useId();
  if (!gallery?.images.length) {
    return null;
  }

  return (
    <section
      className={`invitation-gallery${variant === 'editorial' ? ' invitation-gallery--editorial' : ''}`}
      aria-labelledby={titleId}
    >
      <header>
        {gallery.eyebrow ? <p className="invitation-eyebrow">{gallery.eyebrow}</p> : null}
        <h2 id={titleId}>{gallery.title}</h2>
      </header>
      <div className="invitation-gallery__grid">
        {gallery.images.map((image, index) => {
          const isFeatured = variant === 'editorial' && index === 0;

          return (
            <figure
              key={`${image.src}-${index}`}
              className={`invitation-gallery__item${isFeatured ? ' invitation-gallery__item--featured' : ''}`}
            >
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes}
                width={image.width}
                height={image.height}
                style={{ objectPosition: image.objectPosition }}
                alt={image.alt}
                loading="lazy"
                fetchPriority="auto"
                decoding="async"
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
