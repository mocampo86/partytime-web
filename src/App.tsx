import { eventTypes } from './data/event-types';
import { getInvitationBySlug, invitations } from './data/invitations/loadInvitations';
import { getServicePageBySlug } from './data/service-details';
import { services } from './data/services';
import { usePageMetadata, type PageMetadata } from './hooks/usePageMetadata';
import { resolveInvitationRoute } from './invitations/routing';
import { getInvitationTemplate } from './invitations/templates/registry';
import { invitationTemplateIds } from './invitations/templates/templateIds';
import { SiteLayout } from './layouts/SiteLayout';
import { AvailabilityPage } from './pages/AvailabilityPage';
import { ContactPage } from './pages/ContactPage';
import { InvitationDemoPage } from './pages/InvitationDemoPage';
import { InvitationNotFoundPage } from './pages/InvitationNotFoundPage';
import { InvitationPage } from './pages/InvitationPage';
import { InvitationsCatalogPage } from './pages/InvitationsCatalogPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { EventTypeCatalog } from './sections/EventTypeCatalog';
import { Hero } from './sections/Hero';
import { ServiceCatalog } from './sections/ServiceCatalog';

const siteMetadata: PageMetadata = {
  title: 'PartyTime Uruguay | Experiencias para eventos',
  description:
    'Fotografía, filmación y experiencias interactivas para eventos. Espejo Mágico, Cabina Boomerang, Plataforma 360, Robot LED, PartyPic y Osos Teddy.',
  openGraphTitle: 'PartyTime Uruguay | Experiencias para eventos',
  openGraphDescription:
    'Fotografía, filmación y experiencias interactivas para eventos. Espejo Mágico, Cabina Boomerang, Plataforma 360, Robot LED, PartyPic y Osos Teddy.',
};

const contactMetadata: PageMetadata = {
  title: 'Contacto | PartyTime Uruguay',
  description:
    'Contactá a PartyTime por WhatsApp para consultar por servicios, ideas y experiencias para tu próximo evento.',
  openGraphTitle: 'Contacto | PartyTime Uruguay',
  openGraphDescription:
    'Hablemos de tu próximo gran momento y llevemos tus ideas a una experiencia inolvidable.',
};

const availabilityMetadata: PageMetadata = {
  title: 'Consultar disponibilidad | PartyTime Uruguay',
  description:
    'Consultá disponibilidad para tu evento seleccionando los servicios, la fecha y la ciudad de tu celebración.',
  openGraphTitle: 'Consultar disponibilidad | PartyTime Uruguay',
  openGraphDescription:
    'Contanos qué servicios querés para tu evento y prepará tu consulta para PartyTime.',
};

const catalogMetadata: PageMetadata = {
  title: 'Invitaciones Digitales | PartyTime Uruguay',
  description:
    'Catálogo de invitaciones digitales personalizadas para eventos, creadas y administradas por PartyTime.',
  openGraphTitle: 'Invitaciones Digitales Personalizadas | PartyTime',
  openGraphDescription:
    'Descubrí templates premium para transformar la información de tu evento en una experiencia digital memorable.',
  openGraphImage: '/assets/invitations/rose-gold/preview.svg',
};

const invitationNotFoundMetadata: PageMetadata = {
  title: 'Invitación no encontrada | PartyTime',
  description: 'La invitación solicitada no existe o todavía no fue publicada.',
  robots: 'noindex, nofollow',
};

const notFoundMetadata: PageMetadata = {
  title: 'Página no encontrada | PartyTime Uruguay',
  description: 'La dirección solicitada no existe en el sitio de PartyTime Uruguay.',
  openGraphTitle: 'Página no encontrada | PartyTime Uruguay',
  openGraphDescription:
    'La dirección solicitada no existe en el sitio de PartyTime Uruguay.',
};

const knownInvitationSlugs = invitations.map(({ invitation }) => invitation.slug);
const publishedInvitationSlugs = invitations
  .filter(({ invitation }) => invitation.status === 'published')
  .map(({ invitation }) => invitation.slug);

export default function App() {
  const pathname =
    window.location.pathname.length > 1
      ? window.location.pathname.replace(/\/+$/, '')
      : window.location.pathname;
  const invitationRoute = resolveInvitationRoute(
    pathname,
    knownInvitationSlugs,
    publishedInvitationSlugs,
    invitationTemplateIds,
  );
  const serviceMatch = pathname.match(/^\/servicios\/([^/]+)$/);
  const servicePage = serviceMatch ? getServicePageBySlug(serviceMatch[1]) : null;
  const loadedInvitation =
    invitationRoute.kind === 'invitation'
      ? getInvitationBySlug(invitationRoute.slug)
      : undefined;
  const demoTemplate =
    invitationRoute.kind === 'demo'
      ? getInvitationTemplate(invitationRoute.templateId)
      : undefined;
  const isLandingPage = pathname === '/';
  const isContactPage = pathname === '/contacto';
  const isAvailabilityPage = pathname === '/consultar-disponibilidad';

  const metadata: PageMetadata = isLandingPage
    ? siteMetadata
    : isContactPage
      ? contactMetadata
      : isAvailabilityPage
        ? availabilityMetadata
        : invitationRoute.kind === 'catalog'
          ? catalogMetadata
          : invitationRoute.kind === 'demo' && demoTemplate
            ? {
                title: `Demo ${demoTemplate.name} | Invitaciones PartyTime`,
                description: `Demostración del template ${demoTemplate.name} con datos ficticios.`,
                openGraphTitle: `Demo ${demoTemplate.name}`,
                openGraphDescription: 'Demostración de una invitación digital PartyTime.',
                openGraphImage: demoTemplate.previewImage.src,
                robots: 'noindex, nofollow',
              }
            : invitationRoute.kind === 'invitation' && loadedInvitation
              ? {
                  title: loadedInvitation.invitation.seo?.title ?? 'Invitación Digital | PartyTime',
                  description:
                    loadedInvitation.invitation.seo?.description ??
                    'Invitación digital personalizada creada por PartyTime.',
                  openGraphTitle: loadedInvitation.invitation.seo?.openGraphTitle,
                  openGraphDescription: loadedInvitation.invitation.seo?.openGraphDescription,
                  openGraphImage: loadedInvitation.invitation.seo?.openGraphImage,
                  robots: 'noindex, nofollow',
                }
              : invitationRoute.kind === 'invitation-not-found'
                ? invitationNotFoundMetadata
                : servicePage
                  ? servicePage.detail.seo
                  : notFoundMetadata;

  usePageMetadata(metadata);

  if (invitationRoute.kind === 'demo' && demoTemplate) {
    return <InvitationDemoPage templateId={demoTemplate.id} />;
  }

  if (invitationRoute.kind === 'invitation' && loadedInvitation) {
    return <InvitationPage loadedInvitation={loadedInvitation} />;
  }

  if (invitationRoute.kind === 'invitation-not-found') {
    return <InvitationNotFoundPage />;
  }

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
      ) : invitationRoute.kind === 'catalog' ? (
        <InvitationsCatalogPage />
      ) : servicePage ? (
        <ServiceDetailPage detail={servicePage.detail} />
      ) : (
        <NotFoundPage />
      )}
    </SiteLayout>
  );
}
