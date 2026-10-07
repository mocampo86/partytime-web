import type { ServiceDetail } from '../../types/service';

type ServiceBenefitsProps = {
  benefits: NonNullable<ServiceDetail['benefits']>;
};

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <section className="site-section service-benefits" aria-labelledby="service-benefits-title">
      <h2 id="service-benefits-title">{benefits.title}</h2>
      <ul className="service-benefits__grid" data-count={benefits.items.length}>
        {benefits.items.map((benefit) => (
          <li className="service-benefits__item service-differential" key={benefit.title}>
            <h3 className="service-benefits__title">{benefit.title}</h3>
            <p className="service-benefits__description">{benefit.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
