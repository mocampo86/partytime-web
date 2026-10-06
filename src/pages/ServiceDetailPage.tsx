import { ServiceContactCta } from '../components/service-detail/ServiceContactCta';
import { ServiceDetailHero } from '../components/service-detail/ServiceDetailHero';
import { ServiceDifferentials } from '../components/service-detail/ServiceDifferentials';
import { ServiceGallery } from '../components/service-detail/ServiceGallery';
import { ServiceIncludes } from '../components/service-detail/ServiceIncludes';
import { ServiceProcess } from '../components/service-detail/ServiceProcess';
import type { ServiceDetail } from '../types/service';

type ServiceDetailPageProps = {
  detail: ServiceDetail;
};

export function ServiceDetailPage({ detail }: ServiceDetailPageProps) {
  return (
    <>
      <ServiceDetailHero detail={detail} />

      {detail.process ? <ServiceProcess process={detail.process} /> : null}

      {detail.editorial ? (
        <section
          className="site-section service-description"
          aria-labelledby="service-description-title"
        >
          <div className="service-description__inner">
            <h2 id="service-description-title">{detail.editorial.title}</h2>
            <div className="service-description__copy">
              {detail.editorial.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ServiceIncludes title={detail.includesTitle} includes={detail.includes} />
      {detail.differentials?.length ? (
        <ServiceDifferentials differentials={detail.differentials} />
      ) : null}
      <ServiceGallery serviceName={detail.displayName} images={detail.gallery} />
      <ServiceContactCta contactCta={detail.contactCta} />
    </>
  );
}
