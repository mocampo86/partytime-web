# PartyTime Web

Static React foundation for the PartyTime public website.

## Requirements

- Node.js 24 or a compatible LTS release
- npm 11 or a compatible release

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Structure

```text
src/
├── assets/      # Approved media and brand assets
├── components/  # Reusable UI components
├── data/        # Structured site data
├── layouts/     # Page-level semantic layouts
├── sections/    # Landing-page sections
├── styles/      # Global CSS baseline
├── types/       # Shared TypeScript contracts
├── App.tsx
└── main.tsx
```

The foundation intentionally avoids a backend, authentication, database, SSR, UI framework, and deployment-specific configuration. The initial public language is Spanish; branding and final content will be supplied in a later User Story.
