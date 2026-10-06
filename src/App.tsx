import { eventTypes } from './data/event-types';
import { getServicePageBySlug } from './data/service-details';
import { services } from './data/services';
import { usePageMetadata } from './hooks/usePageMetadata';
import { SiteLayout } from './layouts/SiteLayout';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { EventTypeCatalog } from './sections/EventTypeCatalog';
import { Hero } from './sections/Hero';
import { ServiceCatalog } from './sections/ServiceCatalog';

const siteMetadata = {
  title: 'PartyTime Uruguay | Experiencias para eventos',
  description:
    'Fotografía, filmación y experiencias interactivas para eventos. Espejo Mágico, Cabina Boomerang, Plataforma 360, Robot LED, PartyPic y Osos Teddy.',
  openGraphTitle: 'PartyTime Uruguay | Experiencias para eventos',
  openGraphDescription:
    'Fotografía, filmación y experiencias interactivas para eventos. Espejo Mágico, Cabina Boomerang, Plataforma 360, Robot LED, PartyPic y Osos Teddy.',
};

const notFoundMetadata = {
  title: 'Página no encontrada | PartyTime Uruguay',
  description: 'La dirección solicitada no existe en el sitio de PartyTime Uruguay.',
  openGraphTitle: 'Página no encontrada | PartyTime Uruguay',
  openGraphDescription:
    'La dirección solicitada no existe en el sitio de PartyTime Uruguay.',
};

export default function App() {
  const pathname =
    window.location.pathname.length > 1
      ? window.location.pathname.replace(/\/+$/, '')
      : window.location.pathname;
  const serviceMatch = pathname.match(/^\/servicios\/([^/]+)$/);
  const servicePage = serviceMatch
    ? getServicePageBySlug(serviceMatch[1])
    : null;
  const isLandingPage = pathname === '/';
  const metadata = isLandingPage
    ? siteMetadata
    : servicePage
      ? servicePage.detail.seo
      : notFoundMetadata;

  usePageMetadata(metadata);

  return (
    <SiteLayout>
      {isLandingPage ? (
        <>
          <Hero />
          <ServiceCatalog services={services} />
          <EventTypeCatalog eventTypes={eventTypes} />
        </>
      ) : servicePage ? (
        <ServiceDetailPage detail={servicePage.detail} />
      ) : (
        <NotFoundPage />
      )}
    </SiteLayout>
  );
}
