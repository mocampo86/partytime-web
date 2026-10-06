# US-04 — Event Types

## User Story

**As PartyTime**, I want visitors to quickly understand the kinds of celebrations we serve **so that** they can recognize their own event and continue exploring our services.

## Objective

Add a production-ready Event Types section directly after Services in the existing landing page. The section must remain lightweight, data-driven, responsive, and visually consistent with the US-02 brand identity and US-03 portfolio treatment.

## Scope

- Render a visible section immediately after `Nuestros servicios`.
- Use a centralized typed data source for all event-type content.
- Present five event types:
  - Quinceañeras
  - Cumpleaños
  - Bodas
  - Eventos corporativos
  - Fiestas temáticas
- Add concise Spanish descriptions approved for this implementation.
- Use intentional branded placeholders until approved event-type photography is supplied.
- Preserve Header, Hero, Services, footer, WhatsApp placeholder, and the current `Experiencias`/`Pronto` navigation behavior.
- Keep implementation static-host compatible with React, TypeScript, and native CSS.

## Confirmed Catalog

| Event type | Slug | Description |
| --- | --- | --- |
| Quinceañeras | `quinceaneras` | Celebraciones llenas de emoción, energía y recuerdos para una noche inolvidable. |
| Cumpleaños | `cumpleanos` | Experiencias para festejar a lo grande y compartir cada momento con quienes más querés. |
| Bodas | `bodas` | Detalles y recuerdos únicos para acompañar uno de los días más importantes de tu historia. |
| Eventos corporativos | `eventos-corporativos` | Propuestas que sorprenden, conectan y elevan cada encuentro de tu equipo o marca. |
| Fiestas temáticas | `fiestas-tematicas` | Experiencias visuales y entretenidas para transformar cualquier celebración en algo diferente. |

## Section Copy

Heading: `Eventos para cada momento`

Supporting text: `Experiencias que se adaptan a tu celebración y a la forma en que querés vivirla.`

## Data Architecture

- Add a dedicated `src/types/event-type.ts` contract with stable IDs/slugs, names, descriptions, and optional typed image support.
- Add `src/data/event-types.ts` as the only source of event-type content.
- Do not duplicate names, descriptions, slugs, or future media references inside components.
- Keep Event Types independent from the Services model while reusing the same image-data capabilities: fallback source, responsive sources, sizes, dimensions, alt text, and focal positioning.

## Visual Direction

- Use the dark background, elevated surfaces, typography, borders, and selective blue → violet → magenta accents already established.
- Cards should feel event-oriented and easy to scan, but visually distinct from the photography-first Services cards.
- Use abstract branded placeholders rather than stock imagery, generated photography, duplicated Services media, or third-party assets.
- Keep interactions restrained to border/media/elevation transitions.
- Do not add neon glow to every card.

## Responsive Requirements

- Mobile uses a purpose-designed single-column layout with readable text and comfortable spacing.
- Medium viewports use two columns.
- Desktop uses a balanced composition that avoids forcing five items into cramped equal columns.
- The section must render without horizontal overflow at small mobile through large desktop widths.

## Accessibility Requirements

- Preserve logical heading hierarchy and semantic section/list/article structure.
- Provide a stable `#eventos` anchor for future navigation use.
- Placeholder media exposes an accessible pending-image status.
- Do not create fake links, buttons, disabled controls, or whole-card click handlers.
- Preserve visible focus and keyboard behavior.
- Respect `prefers-reduced-motion` for all nonessential transitions.

## Performance Requirements

- Use React and native CSS only.
- Do not add UI, animation, gallery, icon, image-processing, or routing dependencies.
- Placeholder treatment should require no network imagery.
- Future approved event-type images should be lazy-loaded because the section is below the fold.
- Preserve static Azure-compatible build output.

## Out of Scope

- Event-type detail pages or routes.
- Event filtering, tabs, carousel, contact form, pricing, packages, testimonials, CMS, backend, database, authentication, or analytics.
- Header redesign or changing `Experiencias` into a working navigation link.
- Stock, generated, duplicated, or unapproved imagery.
- Hero or Services changes.

## Acceptance Criteria

- [x] Event Types visibly renders immediately after Services.
- [x] The heading and supporting copy are rendered.
- [x] Exactly five event types appear once each.
- [x] All names, slugs, and descriptions come from centralized data.
- [x] Image/placeholder media is intentional and accessible.
- [x] No fake interactive destination exists inside cards.
- [x] Desktop and mobile layouts are production-quality and responsive.
- [x] US-02/US-03 branding and content remain intact.
- [x] `Experiencias` remains noninteractive with `Pronto`.
- [x] Reduced-motion preferences are respected.
- [x] No horizontal overflow occurs.
- [x] TypeScript and production build pass.

## Testing Considerations

- Run `npm run typecheck`.
- Run `npm run build`.
- Verify static preview returns HTTP 200.
- Verify section order in DOM and screenshots.
- Verify five card records and exact content.
- Test 320px, 390px, 768px, 1440px, and 1920px widths.
- Verify no overflow and no fake focusable card controls.
- Verify Header, Hero, Services, mobile menu, Hero CTA, skip link, and WhatsApp placeholder remain functional.
- Capture desktop and mobile Event Types screenshots.

## Supplied Media

All five approved event-type JPEG assets are connected through `src/data/event-types.ts`:

- `src/assets/event-types/quinceaneras-evento.jpg`
- `src/assets/event-types/cumpleanos-evento.jpg`
- `src/assets/event-types/bodas-evento.jpg`
- `src/assets/event-types/eventos-corporativos-evento.jpg`
- `src/assets/event-types/fiestas-tematicas-evento.jpg`

Future optimized variants should prefer WebP/AVIF plus fallback JPEG, with dimensions, alt text, responsive sources, and focal-point guidance. The typed image path and branded placeholder fallback remain ready for replacements.

## Deferred Decisions

- Optional optimized Event Types media variants, future crops, responsive sources, and final alt-text refinements.
- Event-type detail destinations, CTAs, and links.
- Whether Header navigation should later expose Event Types or a separate Experiencias section.
- Event filtering, ordering, featured treatment, and richer card metadata.
- Additional automated testing if future interactions are introduced.

## Implementation Notes

- `EventTypeCatalog` renders a semantic `section` with a stable `#eventos` anchor and an accessible H2 → H3 hierarchy.
- `EventTypeCard` renders an `article` inside a semantic list and consumes only fields from the shared event-type record.
- All five event types render approved local assets. No stock, generated, third-party, or duplicated Services imagery was introduced.
- The event-type image contract supports a fallback `src`, responsive `srcSet`/`sizes`, optional AVIF/WebP `<source>` entries, dimensions, alt text, and per-image focal positioning through `objectPosition`.
- Event Types cards have no fake CTA because event-type detail destinations were not requested.
- `Experiencias` remains noninteractive with the existing `Pronto` state.

## Verification Results

- `npm run typecheck` passed through `npm run build`.
- `npm run build` passed.
- Static preview returned HTTP 200.
- Main section order confirmed: `inicio` → `servicios` → `eventos`.
- Rendered event-type card count: 5.
- Rendered real event-type images: 5.
- Rendered pending-image placeholders: 0.
- Approved names and descriptions matched exactly.
- Mobile layout: one column at 320px and 390px.
- Tablet layout: two columns at 768px, with the fifth card spanning the final row.
- Desktop composition at 1440px and 1920px: three cards in the first visual row and two wider cards in the second row.
- No horizontal overflow at 320px, 390px, 768px, 1440px, or 1920px.
- No links or focusable controls were created inside event-type cards.
- Reduced-motion emulation reduced card/media transitions to the global reduced duration.
- Header, Hero, Services, mobile menu, Hero CTA, skip link, and WhatsApp placeholder remained present.
- No automated test framework was added for this static visual section.

## Verification Artifacts

- Desktop Event Types screenshot: `docs/screenshots/us-04/desktop-event-types.png`
- Mobile Event Types screenshot: `docs/screenshots/us-04/mobile-event-types.png`
- Supplied event-type assets:
  - `src/assets/event-types/quinceaneras-evento.jpg`
  - `src/assets/event-types/cumpleanos-evento.jpg`
  - `src/assets/event-types/bodas-evento.jpg`
  - `src/assets/event-types/eventos-corporativos-evento.jpg`
  - `src/assets/event-types/fiestas-tematicas-evento.jpg`
