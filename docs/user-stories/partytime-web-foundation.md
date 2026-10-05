# PartyTime Web Foundation

## User Story

**As PartyTime**, I want a modern, responsive public website foundation **so that** we can progressively showcase our event services and convert visitors into potential customers.

## Objective

Create a maintainable static React foundation for the public PartyTime website. The initial implementation should establish the project architecture, semantic site shell, accessibility baseline, and structured service data without defining the final visual identity or completing the marketing landing page.

## Scope

- Bootstrap a static-compatible React, Vite, and TypeScript application.
- Establish a lightweight source organization using `components`, `sections`, `layouts`, `assets`, `data`, `styles`, and `types`.
- Provide a visually neutral semantic shell with a header, main content area, footer, and floating WhatsApp placeholder.
- Use Spanish as the initial public-content language while avoiding architecture that prevents bilingual support later.
- Represent services as centralized typed data rather than duplicating service details in components.
- Include the current service catalog:
  - Fotografía
  - Filmación
  - Exteriores
  - Espejo Mágico
  - Cabina Boomerang
  - Plataforma 360
  - Robot LED
  - PartyPic
  - Osos Teddy
- Add mobile-first, responsive baseline styles and SEO metadata hooks.
- Keep the project compatible with future Azure Static Web Apps deployment.

## Out of Scope

- Final landing-page design, branding, copy, imagery, and media.
- Final service descriptions, gallery content, packages, testimonials, and PartyPic promotion.
- Backend, API, database, authentication, SSR, analytics, or server-handled forms.
- Azure resource provisioning, deployment workflows, or custom-domain configuration.
- A working WhatsApp link; the placeholder remains nonfunctional until the official number or URL is provided.
- Full localization or an i18n framework.

## Functional Requirements

- Render a static single-page application using semantic `header`, `main`, and `footer` landmarks.
- Provide a skip link and a logical heading hierarchy.
- Include a minimal navigation structure that only links to sections currently present.
- Render an initial service list from the centralized service catalog.
- Reserve a fixed position for the WhatsApp CTA without presenting it as a working external link.
- Remain usable from small mobile screens through desktop viewports.
- Use keyboard-accessible controls and visible keyboard focus.

## Technical Requirements

- Use React, Vite, TypeScript, and native CSS.
- Do not introduce a heavy UI framework unless a future requirement justifies it.
- Avoid backend, database, authentication, and server-side rendering dependencies.
- Use static-host-compatible paths and build output.
- Keep service content centralized in `src/data/services.ts` and typed in `src/types/service.ts`.
- Use neutral system typography and layout styles until PartyTime branding is supplied.
- Keep document metadata generic and ready for approved SEO copy and social-preview assets.

## Proposed Component Structure

```text
src/
├── assets/                     # Approved photos, videos, and logos when available
├── components/
│   └── FloatingWhatsAppCta.tsx # Nonfunctional accessible CTA placeholder
├── data/
│   └── services.ts             # Centralized service catalog
├── layouts/
│   └── SiteLayout.tsx          # Header/main/footer composition
├── sections/
│   └── ServiceCatalog.tsx      # Initial data-driven service list
├── styles/
│   └── global.css              # Reset, responsive layout, and focus baseline
├── types/
│   └── service.ts              # Service catalog contract
├── App.tsx                     # Page-level composition
└── main.tsx                    # React bootstrap
```

## Current Service Catalog

The centralized service data uses the following stable IDs and URL-friendly slugs:

| Service | ID / Slug |
| --- | --- |
| Fotografía | `fotografia` |
| Filmación | `filmacion` |
| Exteriores | `exteriores` |
| Espejo Mágico | `espejo-magico` |
| Cabina Boomerang | `cabina-boomerang` |
| Plataforma 360 | `plataforma-360` |
| Robot LED | `robot-led` |
| PartyPic | `partypic` |
| Osos Teddy | `osos-teddy` |

`Plataforma 360` remains included by explicit product decision even though it was omitted from the initial revised list.

## Acceptance Criteria

- The repository contains a runnable Vite React TypeScript application.
- The application renders a semantic header, main area, footer, and floating WhatsApp placeholder.
- The WhatsApp placeholder does not act as a working link before an official destination is supplied.
- All nine current catalog entries are defined once in a typed data source.
- Fotografía, Filmación, and Exteriores remain independent services.
- PartyPic and Osos Teddy are represented as PartyTime services.
- The layout is mobile-first, responsive, and built with semantic HTML.
- No backend, database, authentication, SSR, Azure configuration, or heavy UI framework is included.
- TypeScript checking and the production build complete successfully.

## Testing Considerations

- Run `npm run typecheck` to validate TypeScript.
- Run `npm run build` to verify static production output.
- Manually inspect narrow/mobile and wide desktop viewport behavior.
- Verify keyboard navigation, visible focus, skip-link behavior, and landmark structure.
- Verify that the WhatsApp placeholder is announced as informational rather than presented as an active external link.
- Add automated tests when a substantive interaction or reusable data-driven component requires them.

## Future Considerations

- Add approved PartyTime branding, typography, colors, logo, media, and final content.
- Replace generic metadata with approved SEO and Open Graph content.
- Convert the WhatsApp placeholder into a link once the official destination is supplied.
- Progressively add Hero, Services detail, PartyPic, Gallery, Why PartyTime, Packages, Testimonials, Contact CTA, and richer navigation sections.
- Add localization only when bilingual content and language-switching requirements are defined.
- Configure GitHub-to-Azure Static Web Apps deployment and the custom domain in a separate task.

## Current Decisions

- Default public language: Spanish.
- Initial implementation: semantic shell plus the US-02 Header and Hero.
- WhatsApp CTA: rendered as a nonfunctional informational placeholder.
- Visual identity: US-02 uses the supplied dark PartyTime identity.
- Branding assets: `partytime-logo-main.jpg` represents the expanded circular identity; `partytime-logo-horizontal.png` is the optimized neon Header logo; `partytime-logo-horizontal-source.png` preserves the supplied high-resolution neon asset; `partytime-logo-horizontal-solid.png` is an alternate compact variant.
- Service catalog: nine entries are retained, including `plataforma-360` by explicit product decision.
