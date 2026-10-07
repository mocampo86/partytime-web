import type { ServiceProcess } from '../../types/service';

type ServiceProcessProps = {
  process: ServiceProcess;
};

export function ServiceProcess({ process }: ServiceProcessProps) {
  return (
    <section className="site-section service-process" aria-labelledby="service-process-title">
      <div className="service-process__inner">
        <div className="service-process__header">
          {process.eyebrow ? (
            <p className="hero__eyebrow">{process.eyebrow}</p>
          ) : null}
          <h2 id="service-process-title">{process.title}</h2>
          {process.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ol className="service-process__steps" aria-label="Proceso del servicio">
          {process.steps.map((step, index) => (
            <li className="service-process__step" key={step.title}>
              <span className="service-process__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="service-process__step-copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
