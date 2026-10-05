import type { Service } from '../types/service';

type ServiceCatalogProps = {
  services: readonly Service[];
};

export function ServiceCatalog({ services }: ServiceCatalogProps) {
  return (
    <section className="site-section" id="servicios" aria-labelledby="services-title">
      <h2 id="services-title">Servicios</h2>
      <ul className="service-list">
        {services.map((service) => (
          <li className="service-card" key={service.id}>
            {service.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
