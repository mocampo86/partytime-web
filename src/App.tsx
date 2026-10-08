import { eventTypes } from './data/event-types';
import { getServicePageBySlug } from './data/service-details';
import { services } from './data/services';
import { usePageMetadata } from './hooks/usePageMetadata';
import { SiteLayout } from './layouts/SiteLayout';
import { NotFoundPage } from './pages/NotFoundPage';
import { AvailabilityPage } from './pages/AvailabilityPage';
import { ContactPage } from './pages/ContactPage';
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

const contactMetadata = {
  title: 'Contacto | PartyTime Uruguay',
  description:
    'Contactá a PartyTime por WhatsApp para consultar por servicios, ideas y experiencias para tu próximo evento.',
  openGraphTitle: 'Contacto | PartyTime Uruguay',
  openGraphDescription:
    'Hablemos de tu próximo gran momento y llevemos tus ideas a una experiencia inolvidable.',
};

const availabilityMetadata = {
  title: 'Consultar disponibilidad | PartyTime Uruguay',
  description:
    'Consultá disponibilidad para tu evento seleccionando los servicios, la fecha y la ciudad de tu celebración.',
  openGraphTitle: 'Consultar disponibilidad | PartyTime Uruguay',
  openGraphDescription:
    'Contanos qué servicios querés para tu evento y prepará tu consulta para PartyTime.',
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
  const isContactPage = pathname === '/contacto';
  const isAvailabilityPage = pathname === '/consultar-disponibilidad';
  const metadata = isLandingPage
    ? siteMetadata
    : isContactPage
      ? contactMetadata
      : isAvailabilityPage
        ? availabilityMetadata
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
      ) : isContactPage ? (
        <ContactPage />
      ) : isAvailabilityPage ? (
        <AvailabilityPage
          preselectedServiceId={new URLSearchParams(window.location.search).get('servicio')}
        />
      ) : servicePage ? (
        <ServiceDetailPage detail={servicePage.detail} />
      ) : (
        <NotFoundPage />
      )}
    </SiteLayout>
  );
}
