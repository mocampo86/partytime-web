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
public/        # Static hosting configuration and public files
src/
├── assets/      # Approved media and brand assets
├── components/  # Reusable UI components
├── data/        # Structured site data
├── hooks/       # Shared React hooks
├── layouts/     # Page-level semantic layouts
├── pages/       # Route-level page compositions
├── sections/    # Landing-page sections
├── styles/      # Global CSS baseline
├── types/       # Shared TypeScript contracts
├── App.tsx
└── main.tsx
```

The foundation intentionally avoids a backend, authentication, database, SSR, UI framework, CMS, analytics, and unnecessary deployment infrastructure. A minimal static-host navigation fallback is provided for future Azure Static Web Apps compatibility. The initial public language is Spanish; branding and final contact configuration will be supplied in later User Stories.
