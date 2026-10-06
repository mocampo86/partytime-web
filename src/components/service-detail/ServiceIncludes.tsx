import type { ServiceDetail } from '../../types/service';

type ServiceIncludesProps = {
  title?: string;
  includes: ServiceDetail['includes'];
};

export function ServiceIncludes({
  title = 'Todo lo que incluye',
  includes,
}: ServiceIncludesProps) {
  return (
    <section className="site-section service-includes" aria-labelledby="service-includes-title">
      <h2 id="service-includes-title">{title}</h2>
      <ul className="service-includes__list">
        {includes.map((item) => (
          <li className="service-includes__item" key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
