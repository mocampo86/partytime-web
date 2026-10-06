# US-03 — Services

## User Story

**As PartyTime**, I want a visually strong and easy-to-scan Services section **so that** visitors can quickly understand every event experience we offer and decide what they want to explore.

## Objective

Replace the initial service-name placeholder with a production-quality, data-driven Services section that preserves the US-02 dark visual identity and prepares every card for approved PartyTime photography.

## Scope

- Render the heading `Nuestros servicios`.
- Render the supporting text `Experiencias pensadas para hacer de cada evento algo único.`
- Present all nine services as large visual cards.
- Keep names, slugs, descriptions, and future media in the centralized service data source.
- Add the approved short description to every service record.
- Render intentional, non-photographic image placeholders until approved PartyTime service media is supplied.
- Render a visual `Conocer más` affordance without creating fake detail routes or destinations.
- Preserve the existing Header, Hero, layout, navigation anchors, and nonfunctional WhatsApp placeholder.
- Keep the section compatible with static deployment and future service-detail pages.

## Service Catalog

| Service | Slug | Short description |
| --- | --- | --- |
| Fotografía | `fotografia` | Capturamos cada momento y emoción para que puedas revivir tu evento una y otra vez. |
| Filmación | `filmacion` | Convertimos los mejores momentos de tu evento en recuerdos que vuelven a cobrar vida. |
| Exteriores | `exteriores` | Sesiones únicas en locaciones especiales, pensadas para reflejar tu personalidad y tu historia. |
| Espejo Mágico | `espejo-magico` | Fotos, diversión e interacción en una experiencia diferente para compartir con todos tus invitados. |
| Cabina Boomerang | `cabina-boomerang` | Creá videos divertidos y espontáneos para llevarte un recuerdo diferente de tu evento. |
| Plataforma 360 | `plataforma-360` | Videos 360° llenos de energía y efectos para vivir y compartir una experiencia única. |
| Robot LED | `robot-led` | Luces, música y energía para sorprender a tus invitados y transformar la pista de baile. |
| PartyPic | `partypic` | Tus invitados escanean un QR, suben sus fotos y juntos crean una galería única del evento. |
| Osos Teddy | `osos-teddy` | Personajes gigantes que llegan para sorprender, bailar e interactuar con tus invitados. |

`Plataforma 360` remains included because it was explicitly confirmed for retention.

## Data Architecture

Services must remain data-driven through `src/data/services.ts` and `src/types/service.ts`.

The typed contract supports:

- `id`
- `slug`
- `name`
- `shortDescription`
- `description`
- `image`
- `icon`
- `featured`

The image contract is prepared for a fallback source, optional responsive `srcSet`/`sizes`, optional AVIF/WebP `<source>` entries, alt text, width, and height so approved media can later be introduced without changing the card API.

## Visual Direction

- Preserve the black/dark background, white typography, and selective blue → violet → magenta accents established in US-02.
- Make image space the dominant visual area of each card.
- Use branded abstract placeholders instead of stock, generated, or fake event photography.
- Keep hover and focus-within effects restrained: subtle media scale, border transition, and CTA movement.
- Do not make every card appear like a constantly glowing neon element.

## Responsive Requirements

- Mobile uses a single-column visual layout with comfortable spacing and large tap/read areas.
- Medium viewports use two columns.
- Desktop uses a three-column composition at standard widths.
- The grid must remain stable at small mobile, standard mobile, tablet, desktop, and large desktop widths.
- No horizontal overflow is permitted.

## Accessibility Requirements

- Preserve the existing `#servicios` anchor and logical heading hierarchy.
- Use semantic section/list/article structure.
- Provide text equivalents for placeholder state and future image alt text through the data model.
- Do not make the entire card clickable while no valid destination exists.
- Keep `Conocer más` visibly available and clearly communicate that service details are coming later.
- Maintain visible focus, sufficient contrast, and keyboard usability.
- Respect `prefers-reduced-motion` for all transitions and transforms.

## Performance Requirements

- Do not add UI, gallery, animation, image-processing, or routing dependencies.
- Keep Services below-the-fold imagery lazy-loaded when real assets are supplied.
- Prepare for future responsive image markup and optimized WebP/AVIF assets.
- Keep the section lightweight and static-host compatible.

## Out of Scope

- Service detail pages, service routes, modals, or fake destinations.
- PartyPic dedicated featured section.
- Gallery, testimonials, packages/pricing, contact form, CMS, backend, database, authentication, or analytics.
- Header and Hero redesign.
- Stock, generated, unrelated third-party, or fake event photography.

## Acceptance Criteria

- [x] `Nuestros servicios` and the approved supporting text are rendered.
- [x] All nine approved services appear exactly once.
- [x] Every service uses the approved name, slug, and short description from shared data.
- [x] Desktop uses an appropriate responsive grid, including three columns at standard desktop width.
- [x] Mobile uses a purpose-designed single-column composition.
- [x] Every card is ready to receive approved PartyTime media.
- [x] `Conocer más` is visually present without pretending to navigate.
- [x] US-02 branding and tokens are preserved.
- [x] Header, Hero, mobile navigation, and the nonfunctional WhatsApp placeholder continue working.
- [x] Reduced-motion preferences are respected.
- [x] No horizontal overflow occurs.
- [x] TypeScript and production build pass.

## Testing Considerations

- Run `npm run typecheck`.
- Run `npm run build`.
- Verify the static production output with `npm run preview`.
- Test 320px, 390px, 768px, 1440px, and 1920px viewports.
- Verify all nine services, heading, descriptions, image/placeholder state, and CTA labels render.
- Verify the Hero CTA still navigates to `#servicios`.
- Verify no horizontal overflow and no focusable fake CTA exists.
- Capture desktop and mobile Services screenshots.

## Supplied Image Assets

All nine approved PartyTime assets were supplied and added at:

- `src/assets/services/fotografia-quinceanera.jpg`
- `src/assets/services/filmacion-evento.jpg`
- `src/assets/services/exteriores-sesion-exterior.jpg`
- `src/assets/services/espejo-magico-evento.jpg`
- `src/assets/services/cabina-boomerang-evento.jpg`
- `src/assets/services/plataforma-360-evento.jpg`
- `src/assets/services/robot-led-evento.jpg`
- `src/assets/services/partypic-evento.jpg`
- `src/assets/services/osos-teddy-evento.jpg`

Future replacement or responsive variants should prefer landscape or near-square WebP/AVIF files with descriptive alt text, source dimensions, and focal-point guidance. Service imagery remains lazy-loaded because this section is below the fold.

## Deferred Decisions

- Optional optimized service-media variants, future image crops, responsive sources, and final alt-text refinements.
- Service-detail destination and `Conocer más` behavior.
- PartyPic dedicated featured section.
- Final Services card ordering, featured-card treatment, and potential visual variations.
- Additional automated testing if future card interactions warrant it.

## Implementation Notes

- `ServiceCard` renders a semantic `article` inside a list item and consumes only fields from the shared service record.
- Missing service media renders a branded abstract placeholder with an accessible `role="img"` status.
- The typed image contract supports a fallback `src`, responsive `srcSet`/`sizes`, optional AVIF/WebP `<source>` entries, dimensions, alt text, and per-image focal positioning through `objectPosition`.
- `Conocer más` is a noninteractive visual affordance with a visible `Próximamente` status; it is not a fake link, route, button, or focusable card control.
- PartyPic remains in the main catalog with its `featured` data flag preserved for a later dedicated section.

## Verification Results

- `npm run typecheck` passed through `npm run build`.
- `npm run build` passed.
- Static preview returned HTTP 200.
- Rendered card count: 9.
- Rendered real service images: 9.
- Rendered pending-image placeholders: 0.
- Approved names, descriptions, `Conocer más`, and `Próximamente` labels matched exactly.
- Desktop grid: 3 columns at 1440px.
- Mobile grid: 1 column at 390px.
- No horizontal overflow at 320px, 390px, 768px, 1440px, or 1920px.
- No links or focusable controls were created inside service cards.
- Reduced-motion emulation reduced card/media transitions to the global reduced duration.
- Skip link focused correctly.
- Mobile menu opened with `aria-expanded="true"`, displayed navigation, closed on Escape, and restored focus to the menu button.
- Hero CTA navigated to `#servicios`.
- Header and Hero remained present and functional.
- No automated test framework was added for this static visual section.

## Verification Artifacts

- Desktop Services screenshot: `docs/screenshots/us-03/desktop-services.png`
- Mobile Services screenshot: `docs/screenshots/us-03/mobile-services.png`
- Supplied service assets:
  - `src/assets/services/fotografia-quinceanera.jpg`
  - `src/assets/services/exteriores-sesion-exterior.jpg`
  - `src/assets/services/espejo-magico-evento.jpg`
  - `src/assets/services/cabina-boomerang-evento.jpg`
  - `src/assets/services/partypic-evento.jpg`
  - `src/assets/services/osos-teddy-evento.jpg`
  - `src/assets/services/robot-led-evento.jpg`
  - `src/assets/services/filmacion-evento.jpg`
  - `src/assets/services/plataforma-360-evento.jpg`
