import type { InvitationGallery } from '../../types/invitation';

export function PhotoGallery({ gallery }: { gallery?: InvitationGallery }) {
  if (!gallery?.images.length) {
    return null;
  }

  return (
    <section className="invitation-gallery" aria-labelledby="invitation-gallery-title">
      <header>
        {gallery.eyebrow ? <p className="invitation-eyebrow">{gallery.eyebrow}</p> : null}
        <h2 id="invitation-gallery-title">{gallery.title}</h2>
      </header>
      <div className="invitation-gallery__grid">
        {gallery.images.map((image) => (
          <figure key={image.src} className="invitation-gallery__item">
            <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </section>
  );
}
