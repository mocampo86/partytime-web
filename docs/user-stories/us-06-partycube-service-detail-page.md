# US-06 — PartyCube Service Detail Page

## User Story

As a PartyTime visitor  
I want to open the dedicated PartyCube / Cabina Boomerang page  
So that I can understand the interactive experience, what it includes and how to request it for my event.

## Objective

Create `/servicios/cabina-boomerang` using the reusable service-detail architecture introduced by US-05.

This story validates that a second PartyTime service can be added through centralized typed data without creating a service-specific React page or redesigning global components.

## Scope

### In scope

- Reuse `ServiceDetailPage` and the existing service-detail components.
- Add a typed PartyCube `ServiceDetail` record.
- Add the PartyCube service card `detailPath`.
- Reuse the existing PartyTime header, footer, navigation, buttons, typography and visual tokens.
- PartyCube hero with the approved real service image.
- Reusable process section communicating the PartyCube flow.
- Reusable benefits list and differential cards.
- Service-specific final CTA and metadata.
- Responsive behavior and static build compatibility.

### Out of scope

- Landing page redesign.
- A PartyCube-specific page architecture.
- React Router or other routing dependencies.
- Real WhatsApp destination until official contact configuration is provided.
- Generic, stock, generated or unrelated photography.
- Duplicating the same approved image across multiple visual slots.
- Gallery lightbox behavior.

## Implemented content

### Hero

- Eyebrow: `PARTYCUBE`
- Headline: `Tu momento, multiplicado`
- Subtitle: `¿Querés que la fiesta no pare… y que los recuerdos tampoco?`
- Description paragraphs:
  - `PartyCube no es una cabina de fotos cualquiera. Es una experiencia interactiva donde tus invitados posan, se divierten y crean boomerangs en movimiento que pueden llevarse al instante.`
  - `Saltos, risas, poses, cotillón y mucha espontaneidad. En pocos segundos, PartyCube convierte cada momento en un recuerdo para compartir una y otra vez.`
- Visual statement: `Más que una foto. Un momento que vuelve a empezar.`
- CTA label: `Consultar disponibilidad`
- Image: `cabina-boomerang-evento.jpg`

### Process — Así funciona la magia

The reusable `ServiceProcess` section presents the requested explanatory paragraphs and five numbered steps:

1. `Experiencia`
2. `Captura`
3. `Boomerang`
4. `Impresión y QR`
5. `Recuerdo en el celular`

The numbered indicators preserve the existing dark card treatment and avoid introducing a new icon language.

### Todo incluido

- Impresiones sin límite durante el servicio
- Boomerangs digitales para descargar al celular
- Código QR para acceder al recuerdo en segundos
- Cotillón y accesorios para las fotos
- Sobres personalizados
- Diseño personalizado adaptado al estilo de cada celebración

### Differentials

#### Tiras inteligentes

- Label: `Diferencial destacado`
- Highlight: `Una foto que también cobra vida.`
- Callout: `Foto impresa + recuerdo en movimiento.`
- Supporting paragraphs explain the physical 10 × 27 cm print and associated QR-downloaded Boomerang.

#### Sobres personalizados

- Label: `Detalle personalizado`
- Highlight: `Hasta el último detalle habla de tu evento.`
- Supporting paragraphs explain the personalized envelope as part of the souvenir.

### Final CTA

- Title: `¿Listos para poner la fiesta en movimiento?`
- Description: `Llevá PartyCube a tu evento y convertí cada foto en un recuerdo que vuelve a empezar.`
- CTA label: `Consultar por WhatsApp`

The PartyCube-specific WhatsApp message is stored in data for future activation.

## Architecture

PartyCube reuses the existing typed service-detail contract:

- `displayName` identifies the service in accessibility labels.
- `hero` supports subtitle, multi-paragraph description, statement, CTA and image.
- `process` supports an optional reusable process section.
- `includesTitle`, `includes`, `differentials`, `gallery`, `contactCta` and `seo` remain data-driven.

`ServiceGallery` renders the three approved distinct PartyCube images through the existing 1–3 image contract.

The reusable `ServiceProcess` component renders an optional section between the optional editorial block and includes. It uses semantic numbered steps rather than external icon dependencies.

`ServiceDifferential` supports an optional `featured` flag and optional supporting media. PartyCube marks `Tiras inteligentes` as featured so the supplied horizontal strip can occupy more visual space without changing the underlying card system.

## Media status

PartyCube uses the existing approved catalog asset once as the hero image:

- `src/assets/services/cabina-boomerang-evento.jpg`

The supplied PartyCube detail assets are stored under `src/assets/service-details/partycube/`:

- `partycube-invitados-sombreros.jpg` — guests posing with accessories.
- `partycube-boda-accesorios.jpg` — wedding guests using PartyCube.
- `partycube-invitados-cotillon.jpg` — guests posing with colorful props.
- `partycube-tira-inteligente.png` — real personalized intelligent-strip design with QR.

The three gallery photos use descriptive alt text, dimensions and lazy loading. The intelligent-strip image supports the featured `Tiras inteligentes` differential and is also lazy-loaded.

A real photo of a personalized envelope alongside the printed strip has not been supplied yet, so `Sobres personalizados` intentionally remains text-only. No Espejo Mágico, generic, generated, placeholder or duplicate images were used as substitutes.

## Landing integration

`cabina-boomerang` defines:

`/servicios/cabina-boomerang`

The landing card uses the existing semantic stretched-link pattern. PartyRobot later added `/servicios/robot-led` through the same mechanism; services without detail records remain `Próximamente`.

## Metadata

PartyCube defines its own client-side:

- `title`
- `description`
- Open Graph title
- Open Graph description
- Open Graph image

The metadata uses the approved PartyCube service image.

## Responsive behavior

- Hero copy, subtitle and statement adapt across desktop, tablet and mobile.
- Process steps stack on mobile, expand to three columns on tablet and five columns on wide desktop.
- Includes and differentials reuse the existing mobile-to-multi-column layouts.
- The featured intelligent-strip card uses its full content width on mobile and a copy/media split from tablet upward.
- CTA labels and `Disponible próximamente` status use the existing noninteractive treatment.
- The floating WhatsApp placeholder and global navigation remain unchanged.
- No horizontal overflow was detected at the tested widths.

## Verification results

Completed against the production preview:

- `npm run typecheck` passed.
- `npm run build` passed.
- `/servicios/cabina-boomerang` renders the reusable service-detail template.
- `/servicios/espejo-magico` still renders the expected Espejo Mágico page with eight includes, two differentials and three gallery images.
- `/servicios/no-existe` renders the branded Not Found page.
- The Cabina Boomerang landing card navigates to `/servicios/cabina-boomerang`.
- Espejo Mágico, Cabina Boomerang and Robot LED are the three currently linked service cards; the other six remain noninteractive.
- PartyCube title and meta description apply client-side.
- The hero image loads eagerly and successfully.
- `Así funciona la magia` renders the five expected process steps.
- `Todo incluido` renders the six requested benefits.
- Both differentials render with the requested copy and callout.
- `Tiras inteligentes` renders the supplied real strip image lazily with low priority.
- The gallery renders three real PartyCube images, all lazy-loaded and successfully rendered.
- Both contact CTAs display `Disponible próximamente` and are not fake focusable controls.
- No horizontal overflow was found at 320, 390, 768, 1440 or 1920 pixels.
- Reduced-motion support remains inherited from the existing global styles.

## Screenshots

- `docs/screenshots/us-06-partycube/desktop-partycube.png`
- `docs/screenshots/us-06-partycube/mobile-partycube.png`
- `docs/screenshots/us-06-partycube/desktop-process.png`
- `docs/screenshots/us-06-partycube/mobile-process.png`
- `docs/screenshots/us-06-partycube/desktop-differentials.png`
- `docs/screenshots/us-06-partycube/mobile-differentials.png`
- `docs/screenshots/us-06-partycube/desktop-gallery.png`
- `docs/screenshots/us-06-partycube/mobile-gallery.png`
- `docs/screenshots/us-06-partycube/desktop-contact.png`
- `docs/screenshots/us-06-partycube/mobile-contact.png`

## Deferred work

- Official WhatsApp/contact destination and active CTA links.
- Approved personalized-envelope imagery for `Sobres personalizados`, if desired.
- Optional gallery lightbox.
- Detail pages for the remaining six PartyTime services.
