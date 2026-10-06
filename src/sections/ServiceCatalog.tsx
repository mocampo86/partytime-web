import { ServiceCard } from '../components/ServiceCard';
import type { Service } from '../types/service';

type ServiceCatalogProps = {
  services: readonly Service[];
};

export function ServiceCatalog({ services }: ServiceCatalogProps) {
  return (
    <section className="site-section services" id="servicios" aria-labelledby="services-title">
      <div className="services__header">
        <h2 id="services-title">Nuestros servicios</h2>
        <p>Experiencias pensadas para hacer de cada evento algo único.</p>
      </div>
      <ul className="services__grid">
        {services.map((service, index) => (
          <li className="services__item" key={service.id}>
            <ServiceCard service={service} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
