import type { EventType } from '../types/event-type';

type EventTypeCardProps = {
  eventType: EventType;
  index: number;
};

export function EventTypeCard({ eventType, index }: EventTypeCardProps) {
  const titleId = `event-type-${eventType.id}-title`;
  const image = eventType.image ? (
    <img
      className="event-type-card__image"
      src={eventType.image.src}
      srcSet={eventType.image.srcSet}
      sizes={eventType.image.sizes}
      alt={eventType.image.alt}
      style={{ objectPosition: eventType.image.objectPosition ?? 'center' }}
      width={eventType.image.width}
      height={eventType.image.height}
      loading="lazy"
      decoding="async"
    />
  ) : null;

  return (
    <article className="event-type-card" aria-labelledby={titleId}>
      <div
        className={`event-type-card__media${
          eventType.image ? '' : ' event-type-card__media--empty'
        }`}
        data-index={String(index + 1).padStart(2, '0')}
      >
        {eventType.image ? (
          eventType.image.sources?.length ? (
            <picture>
              {eventType.image.sources.map((source) => (
                <source
                  key={`${source.srcSet}-${source.media ?? 'default'}`}
                  srcSet={source.srcSet}
                  type={source.type}
                  media={source.media}
                  sizes={source.sizes}
                />
              ))}
              {image}
            </picture>
          ) : (
            image
          )
        ) : (
          <div
            className="event-type-card__placeholder"
            role="img"
            aria-label={`Imagen de ${eventType.name} próximamente`}
          >
            <span className="event-type-card__placeholder-label" aria-hidden="true">
              Imagen próximamente
            </span>
          </div>
        )}
      </div>

      <div className="event-type-card__content">
        <h3 className="event-type-card__title" id={titleId}>
          {eventType.name}
        </h3>
        <p className="event-type-card__description">{eventType.shortDescription}</p>
      </div>
    </article>
  );
}
