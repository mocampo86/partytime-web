# US-07 — PartyRobot Service Detail Page

## User Story

As a PartyTime visitor  
I want to open the dedicated PartyRobot / Show Robot LED page  
So that I can understand the show, its visual impact, what it includes and how to request it for my event.

## Objective

Create `/servicios/robot-led` using the reusable service-detail architecture introduced by US-05.

This story adds a third data-driven service page without creating a PartyRobot-specific React page or redesigning the existing landing.

## Scope

### In scope

- Reuse `ServiceDetailPage` and the existing service-detail composition.
- Add a typed PartyRobot `ServiceDetail` record.
- Add the Robot LED service card `detailPath`.
- Reuse the existing PartyTime header, footer, navigation, buttons, typography and visual tokens.
- PartyRobot hero with the approved real Robot LED image.
- Reusable editorial section for the show entrance.
- Reusable benefits section with four title/description cards.
- Reusable inclusion list and featured differential card.
- Service-specific final CTA and metadata.
- Responsive behavior and static build compatibility.

### Out of scope

- Landing page redesign.
- A PartyRobot-specific page architecture.
- React Router or other routing dependencies.
- Real WhatsApp destination until official contact configuration is provided.
- Invented show duration, robot quantities, equipment, effects, statistics or performance claims.
- Generic, stock, generated or unrelated photography.
- Gallery lightbox behavior.

## Implemented content

### Hero

- Eyebrow: `SHOW ROBOT LED`
- Headline: `El impacto que tu evento necesita`
- Description paragraphs:
  - `Imaginá esto: las luces se apagan, el ritmo invade el ambiente y una figura futurista de más de 2 metros, cubierta de luces LED, irrumpe en la pista.`
  - `No es solo un baile. Es un espectáculo audiovisual de alta energía creado para transformar un momento de tu fiesta en una experiencia que sorprende a todos.`
- Visual statement: `Luces. Música. Energía. Y un show imposible de ignorar.`
- CTA label: `Consultar disponibilidad`
- Image: `robot-led-evento.jpg`

The detail record overrides the image focal position to `right center` so the robot remains visible on narrow mobile viewports.

### Editorial — Cuando PartyRobot entra en escena

- Title: `Cuando PartyRobot entra en escena`
- Two supplied paragraphs describing the LED choreography and guest interaction.

`ServiceEditorialSection` supports optional supporting media. PartyRobot uses the supplied `partyrbot-escenario-invitados.jpg` photograph to pair the show entrance copy with the branded stage/crowd scene.

### Benefits — ¿Por qué elegir nuestro Show Robot LED?

A reusable `ServiceBenefits` section renders four title/description cards using the existing detail-card visual language:

1. `Alto impacto visual`
2. `Experiencia 360°`
3. `Profesionalismo total`
4. `Un momento para recordar`

The copy matches the supplied text and does not add unsupported statistics or claims.

### El show incluye

- Robot LED gigante de más de 2 metros
- Show con coreografía y música
- Interacción directa con los invitados
- Efecto especial de fuegos fríos para el cierre

No duration, robot quantity or additional equipment was introduced.

### Featured differential — Un cierre a pura energía

- Label: `El gran cierre`
- Highlight: `El final que convierte el show en un verdadero espectáculo.`
- Supplied explanatory paragraph.

The card is marked `featured`, so the reusable differential layout gives it full-width prominence from tablet upward. It uses the supplied `partyrbot-fuegos-frios.jpg` photograph.

### Final CTA

- Title: `¿Listos para encender la fiesta?`
- Description: `Llevá PartyRobot a tu evento y sorprendé a tus invitados con un show de luces, música y energía.`
- CTA label: `Consultar por WhatsApp`

The PartyRobot-specific WhatsApp message is stored in data for future activation.

## Architecture updates

The shared detail model was extended with reusable fields:

- `ServiceEditorialSection.image` for optional image/text compositions.
- `ServiceBenefitsSection` and `ServiceBenefit` for titled benefit cards.
- `ServiceDetail.benefits` for optional benefits between the editorial section and inclusions.

`ServiceBenefits` reuses the existing detail-card treatment and responsive grid conventions. `ServiceDetailPage` remains the single page composition; no PartyRobot-specific page component was added.

## Media status

PartyRobot uses the existing approved catalog asset once as the hero image:

- `src/assets/services/robot-led-evento.jpg`

The supplied PartyRobot detail assets are stored under `src/assets/service-details/partyrbot/`:

- `partyrbot-escenario-invitados.jpg` — branded PartyRobot stage and crowd scene.
- `partyrbot-fuegos-frios.jpg` — full-scale robot and cold-spark finale.
- `partyrbot-interaccion-invitados.jpg` — LED robot interacting with guests.

The three detail images render in the gallery. The branded crowd image also supports the editorial section, and the cold-spark image supports the featured finale differential. All supporting images define dimensions, descriptive alt text and lazy loading.

## Landing integration

`robot-led` defines:

`/servicios/robot-led`

The landing card uses the existing semantic stretched-link pattern. Espejo Mágico, Cabina Boomerang and Robot LED are the three currently linked service cards; the other six remain `Próximamente`.

## Metadata

PartyRobot defines its own client-side:

- `title`
- `description`
- Open Graph title
- Open Graph description
- Open Graph image

The metadata uses the approved Robot LED service image.

## Responsive behavior

- The hero image uses `object-position: right center` for the PartyRobot record so the robot remains visible on mobile.
- Editorial copy remains a clean two-paragraph section.
- Benefit cards stack on mobile, use two columns on tablet and four columns on wide desktop.
- The inclusion list uses one column on mobile and two columns from tablet upward.
- The featured finale card spans the full detail width from tablet upward.
- Contact CTAs retain the existing noninteractive `Disponible próximamente` state.
- The floating WhatsApp placeholder and global navigation remain unchanged.
- No horizontal overflow was detected at the tested widths.

## Verification results

Completed against the production preview:

- `npm run typecheck` passed.
- `npm run build` passed.
- `/servicios/robot-led` renders the reusable service-detail template.
- `/servicios/espejo-magico` still renders eight includes, two differentials and three gallery images.
- `/servicios/cabina-boomerang` still renders five process steps, six includes, two differentials and three gallery images.
- `/servicios/no-existe` renders the branded Not Found page.
- The Robot LED landing card navigates to `/servicios/robot-led`.
- The three active service links are Espejo Mágico, Cabina Boomerang and Robot LED; the other six cards remain noninteractive.
- PartyRobot title and meta description apply client-side.
- The hero image loads eagerly and successfully.
- The editorial section renders the supplied title and copy.
- The benefits section renders the four requested cards.
- `El show incluye` renders the four requested items.
- `Un cierre a pura energía` renders as the featured differential with the supplied cold-spark image.
- The gallery renders the three supplied PartyRobot images, all lazy-loaded and successfully rendered.
- Both contact CTAs display `Disponible próximamente` and are not fake focusable controls.
- No horizontal overflow was found at 320, 360, 375, 390, 430, 768, 1440 or 1920 pixels.
- Reduced-motion support remains inherited from the existing global styles.

## Screenshots

- `docs/screenshots/us-07-partyrbot/desktop-partyrbot.png`
- `docs/screenshots/us-07-partyrbot/mobile-partyrbot.png`
- `docs/screenshots/us-07-partyrbot/desktop-editorial.png`
- `docs/screenshots/us-07-partyrbot/mobile-editorial.png`
- `docs/screenshots/us-07-partyrbot/desktop-benefits.png`
- `docs/screenshots/us-07-partyrbot/mobile-benefits.png`
- `docs/screenshots/us-07-partyrbot/desktop-finale.png`
- `docs/screenshots/us-07-partyrbot/mobile-finale.png`
- `docs/screenshots/us-07-partyrbot/desktop-gallery.png`
- `docs/screenshots/us-07-partyrbot/mobile-gallery.png`
- `docs/screenshots/us-07-partyrbot/desktop-contact.png`
- `docs/screenshots/us-07-partyrbot/mobile-contact.png`

## Deferred work

- Official WhatsApp/contact destination and active CTA links.
- Optional gallery lightbox.
- Detail pages for the remaining six PartyTime services.
