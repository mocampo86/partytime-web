import type { ServiceDetail } from '../../types/service';

type ServiceIncludesProps = {
  title?: string;
  eyebrow?: string;
  variant?: 'list' | 'tags';
  includes: ServiceDetail['includes'];
};

export function ServiceIncludes({
  title = 'Todo lo que incluye',
  eyebrow,
  variant = 'list',
  includes,
}: ServiceIncludesProps) {
  return (
    <section className="site-section service-includes" aria-labelledby="service-includes-title">
      {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
      <h2 id="service-includes-title">{title}</h2>
      <ul
        className={`service-includes__list${
          variant === 'tags' ? ' service-includes__list--tags' : ''
        }`}
      >
        {includes.map((item) => (
          <li className="service-includes__item" key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
