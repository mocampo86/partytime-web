# US-05 — Reusable Service Detail Page

## User Story

As a PartyTime visitor  
I want to open a dedicated page for a service  
So that I can understand what it includes, see real examples and contact PartyTime about my event.

## Objective

Create one reusable, data-driven service detail template for PartyTime services.

The first real implementation is Espejo Mágico at `/servicios/espejo-magico`. Future services should be able to reuse the same template by adding typed content and assets, without creating a hardcoded React page per service.

## Scope

### In scope

- Reusable typed service-detail architecture.
- Dynamic service route resolution by slug.
- Reuse of the existing `SiteLayout`, `SiteHeader`, main area, footer and brand system.
- Service hero with a real service image, overlay, eyebrow, headline, optional subtitle, multi-paragraph introduction, optional visual statement, highlights and contact CTA placeholder.
- Optional editorial description section for future services, including optional supporting media.
- Optional reusable process section.
- Optional reusable benefit-card section.
- Data-driven benefits list with a configurable heading.
- Reusable service differential blocks.
- Reusable photo gallery supporting up to three real images.
- Final contact CTA.
- Normal Not Found experience for unknown service slugs.
- Client-side service metadata updates.
- Static hosting fallback for direct navigation and refreshes.
- Conditional landing integration for services with detail records.

### Out of scope

- React Router or other routing dependencies.
- Server-side rendering or pre-rendering.
- Real WhatsApp destination until official contact configuration is provided.
- Detail-page implementations beyond the Espejo Mágico pilot.
- A lightbox or heavy gallery dependency.
- Landing page redesign or restructuring.
- Admin/CMS data editing.

## Confirmed Espejo Mágico content

### Hero

- Eyebrow: `ESPEJO MÁGICO`
- Headline: `Más que una foto, un momento mágico`
- Description paragraphs:
  - `Imaginá un espacio donde las risas, las poses y las ocurrencias se convierten en recuerdos para llevarte en el momento.`
  - `Espejo Mágico es mucho más que una cabina de fotos: es una experiencia interactiva que suma diversión a tu evento, invita a todos a participar y captura esos momentos espontáneos que hacen única cada celebración.`
  - `Fotos impresas al instante y listas para descargar en tu celular, para que cada invitado se lleve un recuerdo especial.`
- CTA label: `Consultar disponibilidad`
- Highlights:
  - Impresiones ilimitadas
  - Descarga al celular
  - Sobres personalizados
  - Fotos backstage

### Included items

- Espejo Mágico interactivo
- Impresiones ilimitadas durante el servicio
- Diseño personalizado para tu evento
- Operador durante todo el servicio
- Accesorios divertidos para las fotos
- Sobres personalizados de regalo
- Descarga de las fotos directamente al celular
- Fotografías backstage del servicio

### Differentials

#### Tiras XXL

- Label: `Diferencial`
- Highlight: `Más tamaño. Más detalle. Más recuerdos.`
- Supporting image: `espejo-magico-tiras-xxl.png`
- Paragraphs:
  - `Nos olvidamos de las pequeñas tiras tradicionales. Nuestras Tiras XXL ofrecen mucho más espacio para que las fotos grupales, las sonrisas y cada detalle sean protagonistas.`
  - `Un formato diferente, pensado para que el recuerdo también sea parte de la experiencia.`

#### Sobres personalizados

- Label: `Diferencial`
- Paragraphs:
  - `Cada fotografía se entrega en un sobre diseñado especialmente para tu celebración, combinando el estilo, los colores y los detalles de tu evento.`
  - `Porque un gran recuerdo también merece una presentación especial.`

### Final CTA

- Title: `¿Lo querés en tu evento?`
- Description: `Consultanos disponibilidad y armamos una propuesta para tu fecha.`
- CTA label: `Consultar por WhatsApp`

The service-specific contact message is stored in data for future use when the official WhatsApp destination exists.

## Architecture

### Data

`src/types/service.ts` extends the existing service contract with detail-specific structures:

- `ServiceDetailHero`
- `ServiceEditorialSection`, optional for services that need a separate editorial block and optional supporting media
- `ServiceProcessStep` and `ServiceProcess`, optional for services that need a process section
- `ServiceBenefit` and `ServiceBenefitsSection`, optional for services that need titled benefit cards
- `ServiceDifferential`, reusable for benefit/differentiator blocks with optional supporting media
- `ServiceContactCta`
- `ServiceSeo`
- `ServiceDetail`
- `ServiceDetailPath`

`src/data/service-details.ts` is the source of truth for detail-page content and resolves a service slug to:

- the shared service catalog record; and
- its reusable detail record, when one exists.

This avoids hardcoding page components per service and prevents known catalog services without detail records from rendering an empty page.

### Routing

The application resolves `window.location.pathname`:

- `/` renders the existing landing page.
- `/servicios/{slug}` renders `ServiceDetailPage` when a typed detail exists.
- `/servicios/{unknown}` and other unmatched paths render `NotFoundPage`.

This remains a static SPA and intentionally avoids adding a routing dependency.

`public/staticwebapp.config.json` adds an Azure Static Web Apps navigation fallback to `/index.html`, excluding build assets and favicon requests.

### Metadata

`src/hooks/usePageMetadata.ts` updates:

- `document.title`
- `meta[name="description"]`
- `meta[property="og:title"]`
- `meta[property="og:description"]`
- `meta[property="og:image"]`, when available

Each configured service detail receives its own title, description and Open Graph metadata. Metadata is applied client-side in the static implementation; pre-rendered metadata for non-JavaScript crawlers remains a future deployment concern.

### Landing integration

`Service` supports an optional `detailPath`. Espejo Mágico was the first linked route; PartyCube and PartyRobot later added `/servicios/cabina-boomerang` and `/servicios/robot-led` through the same data-driven mechanism.

For linked services, `ServiceCard` renders a semantic anchor and a stretched hit area across the card. Services without detail pages keep the existing noninteractive `Próximamente` CTA and are not focusable fake links.

### Contact strategy

The site does not have an official WhatsApp number or URL. Detail-page CTAs use button styling with an explicit `Disponible próximamente` status and remain noninteractive. No destination, number or fake control is introduced.

## Responsive and accessibility behavior

- Semantic heading hierarchy with one page `h1`.
- Hero image marked decorative inside the page hero; descriptive catalog alt text remains in data.
- Gallery images require descriptive alt text.
- Real anchors are rendered only for services with configured detail routes.
- Noninteractive contact CTAs do not occupy the keyboard tab order.
- Visible focus and `focus-within` card state use the existing design tokens.
- Existing reduced-motion handling applies globally.
- Hero height, headline wrapping, include columns, differential cards, gallery layout and CTA layout adapt for mobile, tablet and desktop.
- Mobile gallery stacks intentionally.
- Desktop gallery uses a larger first image and stacked secondary images when three images exist.
- No service-specific CSS language is introduced; existing PartyTime tokens, radii, gradients and typography conventions are reused.

## Performance behavior

- Hero image is eager and high priority.
- Gallery and supporting differential images are lazy and low priority.
- `ResponsiveImage` keeps the existing `ServiceImage` contract ready for future AVIF/WebP sources.
- No large third-party dependencies are added.
- Static build output is preserved.

## Service media

Espejo Mágico has one approved hero image from the service catalog plus two approved gallery images stored under `src/assets/service-details/espejo-magico/`:

- `espejo-magico-firma.jpg`
- `espejo-magico-interaccion.jpg`

The Tiras XXL differential also uses the approved supporting asset:

- `espejo-magico-tiras-xxl.png`

All image records define dimensions, descriptive alt text and focal positioning where needed in `serviceDetails`.

## Acceptance criteria

- `/servicios/espejo-magico` renders the reusable service detail page.
- The existing landing page is preserved.
- Espejo Mágico content comes from centralized typed data.
- Header and footer are reused.
- Hero, inclusions, service differentials and final CTA are implemented.
- Gallery supports up to three real configured images and adapts to two.
- Unknown service slugs render the normal Not Found page.
- Only services with configured detail records receive working card links.
- Client-side service metadata is applied.
- Desktop and mobile layouts are intentionally designed.
- No horizontal overflow is introduced.
- Reduced-motion support is preserved.
- `npm run typecheck` and `npm run build` pass.

## Testing considerations

Verify:

- Direct `/servicios/espejo-magico` load.
- Direct `/servicios/does-not-exist` load.
- Espejo Mágico card navigation.
- Other service cards remain noninteractive.
- Header links return to landing anchors.
- Hero eager/high-priority image loading.
- Gallery and differential-image lazy loading.
- Mobile and desktop screenshots.
- Keyboard focus and skip link.
- Reduced-motion behavior.
- Production build and preview.

## Current verification results

Completed for the Espejo Mágico pilot with the production build and CDP browser checks:

- `npm run typecheck` passed.
- `npm run build` passed.
- `dist/staticwebapp.config.json` is emitted by Vite.
- `/servicios/espejo-magico` and `/servicios/does-not-exist` return HTTP 200 in static preview.
- `/servicios/espejo-magico` renders the reusable detail page.
- `/servicios/does-not-exist` renders the branded Not Found page, not a partial service page.
- The Espejo Mágico card navigated to `/servicios/espejo-magico` in the pilot verification.
- PartyCube and PartyRobot later added active card links through the same mechanism; services without detail records remain noninteractive with `Próximamente`.
- Header links resolve to `/#inicio` and `/#servicios` outside the landing page.
- Client-side title, description, Open Graph title/description and Open Graph image update for Espejo Mágico.
- Hero image loads eagerly with high priority.
- Both contact CTAs display `Disponible próximamente` and add no fake focusable control.
- No horizontal overflow was found at 320, 390, 768, 1440 or 1920 pixels.
- Includes render in one column on mobile and two columns from tablet upward.
- The two service differentials render as stacked cards on mobile and a two-column grid from tablet upward.
- The gallery renders three real images: one large primary image and two secondary images stacked on desktop; it stacks intentionally on mobile.
- All three gallery images and the Tiras XXL supporting image are lazy-loaded with low fetch priority, descriptive alt text and successful image loads.
- Reduced-motion emulation removes the button transition.
- Captured `docs/screenshots/us-05/desktop-service-detail.png`, `docs/screenshots/us-05/mobile-service-detail.png` and `docs/screenshots/us-05/service-gallery.png`.

## Future extensibility

To add another service detail page:

1. Add approved assets.
2. Add a `ServiceDetail` record in `src/data/service-details.ts`.
3. Add the service's `detailPath` in `src/data/services.ts`.
4. Supply hero, optional editorial/process/benefits, inclusions, differentials, gallery, CTA and SEO content.

No service-specific React page should be needed.

## Deferred decisions

- Official WhatsApp number/URL and final CTA linking behavior.
- Whether to generate `wa.me` links from a centralized contact configuration.
- Pre-rendering or server-side metadata generation.
- Optional gallery lightbox.
- Whether static hosting should return HTTP 404 for invalid routes.
- Detail routes for the remaining PartyTime services.
