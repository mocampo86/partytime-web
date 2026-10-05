# US-02 — Visual Identity, Header & Hero

## User Story

**As PartyTime**, I want a premium, responsive visual identity with a branded Header and Hero **so that** visitors immediately understand the event-experience offering and can begin exploring PartyTime's services.

## Objective

Establish the first reusable visual language for the public website using the supplied official PartyTime identity assets, while preserving the static, lightweight React architecture and leaving future landing sections for subsequent User Stories.

## Brand Inputs

- Latest official circular PartyTime Uruguay identity: `src/assets/branding/partytime-logo-main.jpg`. This expanded identity includes PartyPic and Osos Teddy and is used for larger brand representation.
- Official neon horizontal PartyTime logo: `src/assets/branding/partytime-logo-horizontal.png`. This optimized compact variant is the Header logo on the dark surface.
- Source neon horizontal logo: `src/assets/branding/partytime-logo-horizontal-source.png`. Preserve it as the higher-resolution supplied asset.
- Alternate solid horizontal PartyTime logo: `src/assets/branding/partytime-logo-horizontal-solid.png`. Preserve it for light or print contexts if needed.
- Brand concept: “Creamos recuerdos, compartimos emociones.”
- Visual language: dark, modern, premium, energetic, event-oriented, photographic, and immersive.
- Primary accent system: blue → violet → magenta, used selectively and without overwhelming photography.

## Scope

- Add the supplied PartyTime logo assets to the repository.
- Create reusable semantic CSS design tokens for backgrounds, surfaces, text, brand accents, borders, shadows, and the PartyTime gradient.
- Replace the temporary text-based Header branding with the supplied horizontal logo image.
- Implement responsive desktop navigation and an accessible compact mobile menu.
- Implement the first responsive Hero composition with the approved message and calls to action.
- Prepare the Hero visual for future real PartyTime photography using replaceable image-ready structure.
- Adapt the nonfunctional floating WhatsApp placeholder to the new visual system.
- Improve the generic page title, description, and Open Graph metadata foundation.
- Keep Services as an initial data-driven placeholder below the Hero without redesigning it.

## Out of Scope

- Finished Services, PartyPic, Gallery, Experiencias, Packages, Testimonials, About, or Contact sections.
- Real event photography until an approved PartyTime photo is supplied.
- Real WhatsApp destination, phone number, social profiles, contact form, backend, CMS, analytics, or deployment configuration.
- Heavy UI, navigation, design-system, font, or animation dependencies.
- `og:image` until PartyTime supplies an approved social-share asset.
- Reproducing or modifying the PartyTime logo with CSS, SVG, or text.

## Functional Requirements

- The Header uses the supplied horizontal PartyTime logo image with meaningful accessible text.
- Desktop navigation displays Inicio, Servicios, Experiencias, and Contacto.
- Inicio and Servicios link to existing page sections.
- Experiencias and Contacto remain visible but noninteractive placeholders because their target sections are intentionally not implemented in this User Story.
- Mobile navigation is compact, accessible, keyboard usable, and clearly communicates open/closed state.
- The Hero contains:
  - `Creamos recuerdos. Compartimos emociones.`
  - `Experiencias únicas para hacer de tu evento algo inolvidable.`
  - `Conocé nuestros servicios`
  - `Consultar fecha`
- The primary CTA navigates to `#servicios`.
- The secondary CTA remains visually available but nonfunctional until a real contact destination is supplied.
- The Hero supports later insertion of a responsive AVIF/WebP event photograph without changing the content model.
- The floating WhatsApp component remains informational and noninteractive.
- No horizontal scrolling occurs at supported viewport widths.

## Technical Requirements

- Preserve the existing React, Vite, TypeScript, and native CSS architecture.
- Add semantic custom properties rather than scattering raw colors through components.
- Use the supplied brand image files as the visual source of truth.
- Keep JavaScript limited to mobile navigation behavior.
- Keep Hero visual effects subtle, performant, and disabled under `prefers-reduced-motion`.
- Use semantic HTML landmarks and preserve a single H1 for the Hero message.
- Maintain visible focus states and adequate text contrast.
- Keep static-host compatibility with Azure Static Web Apps.

## Component Structure

```text
src/
├── assets/
│   └── branding/
│       ├── partytime-logo-horizontal.png
│       ├── partytime-logo-horizontal-source.png
│       ├── partytime-logo-horizontal-solid.png
│       └── partytime-logo-main.jpg
├── components/
│   ├── FloatingWhatsAppCta.tsx
│   └── SiteHeader.tsx
├── layouts/
│   └── SiteLayout.tsx
├── sections/
│   ├── Hero.tsx
│   └── ServiceCatalog.tsx
└── styles/
    └── global.css
```

## Service Catalog Source of Truth

The Header/Hero update does not implement the final Services section, but the placeholder consumes the centralized catalog in `src/data/services.ts`. The catalog currently contains nine stable entries:

- `fotografia` — Fotografía
- `filmacion` — Filmación
- `exteriores` — Exteriores
- `espejo-magico` — Espejo Mágico
- `cabina-boomerang` — Cabina Boomerang
- `plataforma-360` — Plataforma 360
- `robot-led` — Robot LED
- `partypic` — PartyPic
- `osos-teddy` — Osos Teddy

`plataforma-360` was explicitly confirmed for retention after the revised eight-service list initially omitted it.

## Accessibility Requirements

- Preserve `header`, `nav`, `main`, and `footer` semantics.
- Provide a focusable skip-link target.
- Use `aria-expanded`, `aria-controls`, and Escape-to-close for the mobile menu.
- Keep future-only navigation items noninteractive so they do not pretend to navigate.
- Use an accurate accessible name for the disabled date-inquiry CTA.
- Ensure logo image alt text identifies PartyTime without duplicating surrounding context.
- Ensure decorative visual effects do not create focus traps or motion dependence.

## Testing Considerations

- Run `npm run typecheck` and `npm run build`.
- Verify the static production output with `npm run preview`.
- Test small mobile, standard mobile, tablet, desktop, and large desktop layouts.
- Verify no horizontal overflow.
- Verify keyboard access to skip link, menu button, working navigation items, and primary CTA.
- Verify mobile menu closes on Escape and after valid navigation.
- Verify reduced-motion mode disables nonessential animation.
- Capture desktop and mobile Hero screenshots.
- Verify no fake contact destination or `og:image` URL is introduced.

## Acceptance Criteria

- [ ] The supplied horizontal PartyTime logo appears in the Header.
- [ ] Reusable brand/design tokens exist and are used by Header, Hero, Services placeholder, footer, and WhatsApp placeholder.
- [ ] Desktop and mobile navigation are responsive and accessible.
- [ ] Hero content, calls to action, and future-image structure match the specified requirements.
- [ ] The page uses the PartyTime dark visual identity without excessive glow.
- [ ] The WhatsApp placeholder is still nonfunctional and does not imply a working destination.
- [ ] No out-of-scope finished sections are implemented.
- [ ] Reduced-motion preferences are respected.
- [ ] No horizontal overflow occurs.
- [ ] TypeScript and production build pass.

## Deferred Decisions

- Real Hero event photography, formats, focal points, and responsive image crops.
- Approved social-share image and its final metadata.
- Official WhatsApp/social destinations and Contact section behavior.
- Final typography beyond the current performance-oriented system stack.
- Finished visual design for Services and all future landing sections.

## Verification Artifacts

- Desktop Hero screenshot: `docs/screenshots/us-02/desktop-hero.png`
- Mobile Hero screenshot: `docs/screenshots/us-02/mobile-hero.png`
- Mobile navigation screenshot: `docs/screenshots/us-02/mobile-menu-open.png`
