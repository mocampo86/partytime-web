import { EventTypeCard } from '../components/EventTypeCard';
import type { EventType } from '../types/event-type';

type EventTypeCatalogProps = {
  eventTypes: readonly EventType[];
};

export function EventTypeCatalog({ eventTypes }: EventTypeCatalogProps) {
  return (
    <section className="site-section event-types" id="eventos" aria-labelledby="event-types-title">
      <div className="event-types__header">
        <h2 id="event-types-title">Eventos para cada momento</h2>
        <p>
          Experiencias que se adaptan a tu celebración y a la forma en que querés vivirla.
        </p>
      </div>
      <ul className="event-types__grid">
        {eventTypes.map((eventType, index) => (
          <li className="event-types__item" key={eventType.id}>
            <EventTypeCard eventType={eventType} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
