import { Fragment } from 'react';
import type { ReactNode } from 'react';
import { ResponsiveImage } from '../components/ResponsiveImage';
import { ServiceBenefits } from '../components/service-detail/ServiceBenefits';
import { ServiceContactCta } from '../components/service-detail/ServiceContactCta';
import { ServiceDetailHero } from '../components/service-detail/ServiceDetailHero';
import { ServiceDifferentials } from '../components/service-detail/ServiceDifferentials';
import { ServiceGallery } from '../components/service-detail/ServiceGallery';
import { ServiceIncludes } from '../components/service-detail/ServiceIncludes';
import { ServiceProcess } from '../components/service-detail/ServiceProcess';
import type { ServiceDetail, ServiceDetailSection } from '../types/service';

const defaultSectionOrder: readonly ServiceDetailSection[] = [
  'process',
  'editorial',
  'benefits',
  'story',
  'includes',
  'differentials',
  'gallery',
];

type ServiceDetailPageProps = {
  detail: ServiceDetail;
};

export function ServiceDetailPage({ detail }: ServiceDetailPageProps) {
  const sections: Record<ServiceDetailSection, ReactNode> = {
    process: detail.process ? (
      <ServiceProcess process={detail.process} />
    ) : null,
    editorial: detail.editorial ? (
      <section
        className="site-section service-description"
        aria-labelledby="service-description-title"
      >
        <div
          className={`service-description__inner${
            detail.editorial.image ? ' service-description__inner--with-media' : ''
          }`}
        >
          <div>
            <h2 id="service-description-title">{detail.editorial.title}</h2>
            <div className="service-description__copy">
              {detail.editorial.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          {detail.editorial.image ? (
            <figure className="service-description__media">
              <ResponsiveImage
                image={detail.editorial.image}
                className="service-description__image"
                loading="lazy"
                fetchPriority="low"
              />
            </figure>
          ) : null}
        </div>
      </section>
    ) : null,
    benefits: detail.benefits ? (
      <ServiceBenefits benefits={detail.benefits} />
    ) : null,
    story: detail.story?.length ? (
      <ServiceDifferentials
        differentials={detail.story}
        ariaLabel={`La historia de ${detail.displayName}`}
      />
    ) : null,
    includes: detail.includes.length ? (
      <ServiceIncludes
        title={detail.includesTitle}
        eyebrow={detail.includesEyebrow}
        variant={detail.includesVariant}
        includes={detail.includes}
      />
    ) : null,
    differentials: detail.differentials?.length ? (
      <ServiceDifferentials differentials={detail.differentials} />
    ) : null,
    gallery: (
      <ServiceGallery
        serviceName={detail.displayName}
        images={detail.gallery}
        eyebrow={detail.galleryEyebrow}
        title={detail.galleryTitle}
      />
    ),
  };

  return (
    <div
      className={`service-detail${detail.scrollReveal ? ' service-detail--reveal' : ''}`}
    >
      <ServiceDetailHero detail={detail} />
      {(detail.sectionOrder ?? defaultSectionOrder).map((section) => (
        <Fragment key={section}>{sections[section]}</Fragment>
      ))}
      <ServiceContactCta contactCta={detail.contactCta} />
    </div>
  );
}
