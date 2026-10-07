# US-08 — Fotografía Service Detail Page

## User Story

As a PartyTime visitor  
I want to open the dedicated Fotografía page  
So that I can feel the emotional value of the coverage, understand the approach, what it includes and how to request it for my event.

## Objective

Create `/servicios/fotografia` using the reusable service-detail architecture introduced by US-05.

This story adds a fourth data-driven service page without creating a Fotografía-specific React page or redesigning the existing landing. The page keeps the PartyTime identity but deliberately gives photography itself the leading role: more real images, a masonry editorial gallery and restrained decorative effects.

## Scope

### In scope

- Reuse `ServiceDetailPage` and the existing service-detail composition.
- Add a typed Fotografía `ServiceDetail` record.
- Add the Fotografía service card `detailPath`.
- Reuse the existing PartyTime header, footer, navigation, buttons, typography and visual tokens.
- Fotografía hero with the approved real catalog image.
- Reusable editorial section, benefits cards, inclusions, story sections, gallery and contact CTA.
- Service-specific final CTA and metadata.
- Responsive behavior and static build compatibility.

### Out of scope

- Landing page redesign.
- A Fotografía-specific page architecture.
- React Router or other routing dependencies.
- Real WhatsApp destination until official contact configuration is provided.
- Invented deliverable counts, coverage hours, delivery times, print formats, albums, drones, second photographers, retouching claims or resolutions.
- Generic, stock, generated or unrelated photography.
- Gallery lightbox behavior.

## Implemented content

### Hero

- Eyebrow: `FOTOGRAFÍA`
- Headline: `Tu historia cobra vida`
- Subtitle: `Imágenes que no solo muestran cómo fue. Te hacen volver a sentirlo.`
- Description paragraphs:
  - `¿Soñaste con fotos que capturen mucho más que poses?`
  - `Buscamos tu esencia, tu energía y la magia de cada momento para crear imágenes auténticas, espontáneas y llenas de vida.`
- Visual statement: `Tu historia, contada en imágenes.`
- CTA label: `Consultar disponibilidad`
- Image: supplied `fotografia-soplando-velas.jpg` — a spontaneous, emotional quinceañera moment (blowing the "15" candles), chosen over a traditional posed portrait per the approved brief.

### Editorial — Más que una sesión de fotos

- Title: `Más que una sesión de fotos`
- Three supplied paragraphs about storytelling, fleeting moments and feeling the day again.
- Supporting image: `filmacion-evento.jpg` (683×1024), a warm, spontaneous venue portrait.

### Benefits — Tu sesión, a tu estilo

Three concise title/description cards using the existing benefit-card visual language:

1. `Fotografía dirigida, pero natural`
2. `El toque editorial`
3. `Una experiencia para compartir`

The copy merges the supplied two-paragraph texts into a single short description per card, keeping card heights moderate. `ServiceBenefits` now exposes `data-count`, so three-item grids render three columns from tablet upward instead of leaving an empty track.

### Story sections — narrative differentials

Two full-width featured sections rendered through the reusable differentials component between benefits and inclusions:

1. `De principio a fin` (label `Todo el evento, una historia`) clarifies that the service is not just a pre-event shooting: the coverage continues through the whole celebration. Callout: `Cubrimos todo el evento.` Image: supplied `fotografia-amigas-vela.jpg` — the quinceañera sharing the candle moment with her friends.
2. `Recuerdos que quedan` (label `Para las familias`) keeps an emotional, non-commercial tone about preserving an unrepeatable moment. Image: supplied `fotografia-vals-padre.jpg` — the father-daughter waltz.

Both are marked `featured` with wide landscape media so the photographs carry real presence.

### Tu cobertura fotográfica incluye

- Cobertura de todo el evento
- Entrega del material en formato digital
- Material disponible en la nube
- Opción de impresión

No photo counts, coverage hours, delivery times, print formats or extra equipment were introduced; only the four confirmed inclusions.

### Gallery — Fotografía en acción

Twelve photographs give the page the requested photo prominence and variety: main portrait (`fotografia-retrato-vestido-rosa.jpg`), editorial quinceañera (`fotografia-quinceanera-corredor.jpg`), wedding moment (`fotografia-boda-ramo.jpg`), playful wings (`fotografia-alas-iridiscentes.jpg`), family embrace (`fotografia-abuela-nieta.jpg`), party toast (`fotografia-amigos-brindis.jpg`), friends (`fotografia-amigas-vaqueras.jpg`), 80th birthday candles (`fotografia-cumpleanos-80-velas.jpg`), photobooth fun (`fotografia-ninas-antifaz.jpg`), baby family moment (`fotografia-bebe-jardin.jpg`), dance-floor (`fotografia-alas-pista.jpg`) and the hero candle moment (`fotografia-soplando-velas.jpg`) closing the grid so all three columns end evenly.

The supplied PNG sources (1536×1024, ~2.3 MB each) were converted to quality-85 JPEG (~200–290 KB each) to keep the page performant; original dimensions are preserved in the image records.

`ServiceGallery` no longer truncates at three images. Galleries with more than three images get the `service-gallery__grid--extended` modifier, which renders a masonry layout (CSS columns) that:

- preserves each photograph's natural aspect ratio without cropping faces or deforming;
- mixes vertical and horizontal shots with an editorial composition;
- stacks as a comfortable single column on mobile, two columns from tablet and three columns on wide desktop.

Galleries of one to three images keep the existing grid layout unchanged.

### Final CTA

- Title: `Tu historia merece ser recordada.`
- Description: `Guardemos en imágenes cada emoción, cada detalle y cada momento de tu celebración.`
- CTA label: `Consultar por WhatsApp`

The Fotografía-specific WhatsApp message is stored in data for future activation.

## Architecture updates

The shared detail model was extended with reusable, backward-compatible fields:

- `ServiceDetail.story?: readonly ServiceDifferential[]` — optional narrative sections rendered between benefits and inclusions. Reuses the existing `ServiceDifferential` shape (label, title, highlight, callout, paragraphs, image, featured) and the `ServiceDifferentials` component/styles.
- `ServiceDifferentials` accepts an optional `ariaLabel` prop (defaults to `Diferenciales del servicio`) so the same component can label story sections semantically.
- `ServiceGallery` renders every configured image and adds `service-gallery__grid--extended` when there are more than three.
- `ServiceBenefits` exposes `data-count` on its grid for count-aware column layouts.

`ServiceDetailPage` remains the single page composition; no Fotografía-specific page component was added. Existing service records are unaffected: the story field is absent, galleries keep three images and the legacy grid, and `ariaLabel` defaults preserve prior markup.

## Media status

The supplied Fotografía detail assets are stored under `src/assets/service-details/fotografia/`:

- `fotografia-soplando-velas.jpg` — hero: quinceañera blowing the "15" candles.
- `fotografia-amigas-vela.jpg` — quinceañera and friends sharing the candle moment, supporting `De principio a fin`.
- `fotografia-vals-padre.jpg` — father-daughter waltz for the families story section.
- The eleven gallery photographs listed above (converted from the supplied PNG sources).

`fotografia-retrato-salon.jpg` remains in the folder as a supplied asset; it is not currently referenced after the supplied gallery set replaced the initial placeholder images.

Approved real PartyTime event photography reused for the remaining sections — no stock, generated or unrelated imagery:

- `src/assets/services/filmacion-evento.jpg` — editorial portrait.

The hero photograph `fotografia-soplando-velas.jpg` intentionally also closes the gallery to complete the masonry grid, matching the US-07 precedent of reusing section imagery in the gallery. All other photographs appear once on the page. The catalog card and Open Graph image remain the approved `fotografia-quinceanera.jpg`. All images define dimensions, descriptive alt text and lazy loading (hero loads eagerly). No heavy CSS filters are applied to photographs; only the site's existing subtle gradient overlays remain.

## Landing integration

`fotografia` defines:

`/servicios/fotografia`

The landing card uses the existing semantic stretched-link pattern. Fotografía, Espejo Mágico, Cabina Boomerang and Robot LED are the four currently linked service cards; the other five remain `Próximamente`.

## Metadata

Fotografía defines its own client-side:

- `title`: `Fotografía para eventos | PartyTime Uruguay`
- `description` / OG description based on the confirmed inclusions and tone
- OG title / OG image using the approved Fotografía catalog image

## Responsive behavior

- The hero image uses `object-position: 30% center` for the Fotografía record so the subject remains visible on mobile.
- Editorial copy pairs with a tall supporting portrait from tablet upward.
- Benefit cards stack on mobile and use three columns from tablet upward.
- Story cards stack with full-bleed wide media on mobile and a text/media split on tablet and desktop.
- The inclusion list uses one column on mobile and two columns from tablet upward.
- The extended gallery keeps natural image proportions at every width — no forced heights, no face cropping, no absurd portrait heights.
- Contact CTAs retain the existing noninteractive `Disponible próximamente` state.
- The floating WhatsApp placeholder and global navigation remain unchanged.
- No horizontal overflow was detected at the tested widths.

## Verification results

Completed against the production preview (`vite preview`) with real browser metrics:

- `npm run typecheck` passed.
- `npm run build` passed.
- `/servicios/fotografia` renders the reusable service-detail template.
- `/servicios/espejo-magico` still renders eight includes, two differentials and three gallery images.
- `/servicios/cabina-boomerang` still renders five process steps, six includes, two differentials and three gallery images.
- `/servicios/robot-led` still renders four benefits, four includes, one differential and three gallery images.
- `/servicios/no-existe` renders the branded Not Found page.
- The Fotografía landing card navigates to `/servicios/fotografia`; four cards are linked, five remain noninteractive.
- Fotografía title and meta description apply client-side.
- The hero image loads eagerly and successfully; all sixteen page images (hero, editorial, two story, twelve gallery) complete loading at mobile and desktop.
- Both story sections render with titles, paragraphs, the `Cubrimos todo el evento.` callout and real images.
- `Tu cobertura fotográfica incluye` renders exactly the four confirmed items.
- The gallery renders twelve real images in the extended masonry layout.
- Both contact CTAs display `Disponible próximamente` and are not fake focusable controls.
- No horizontal overflow was found at 320, 360, 375, 390, 430, 768, 1440 or 1920 pixels.
- Reduced-motion support remains inherited from the existing global styles.

## Screenshots

- `docs/screenshots/us-08-fotografia/desktop-fotografia-hero.png`
- `docs/screenshots/us-08-fotografia/mobile-fotografia-hero.png`
- `docs/screenshots/us-08-fotografia/desktop-editorial.png`
- `docs/screenshots/us-08-fotografia/mobile-editorial.png`
- `docs/screenshots/us-08-fotografia/desktop-benefits.png`
- `docs/screenshots/us-08-fotografia/mobile-benefits.png`
- `docs/screenshots/us-08-fotografia/desktop-story.png`
- `docs/screenshots/us-08-fotografia/mobile-story.png`
- `docs/screenshots/us-08-fotografia/desktop-includes.png`
- `docs/screenshots/us-08-fotografia/mobile-includes.png`
- `docs/screenshots/us-08-fotografia/desktop-gallery.png`
- `docs/screenshots/us-08-fotografia/mobile-gallery.png`
- `docs/screenshots/us-08-fotografia/desktop-contact.png`
- `docs/screenshots/us-08-fotografia/mobile-contact.png`

## Deferred work

- Official WhatsApp/contact destination and active CTA links.
- Optional gallery lightbox.
- Dedicated Fotografía-only assets if richer coverage material becomes available (current gallery reuses approved event imagery).
- Detail pages for the remaining five PartyTime services.
