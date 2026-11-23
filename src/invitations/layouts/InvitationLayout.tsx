import type { ReactNode } from 'react';

export function InvitationLayout({ children }: { children: ReactNode }) {
  return (
    <div className="invitation-shell">
      <main className="invitation-main" id="contenido">
        {children}
      </main>
      <footer className="invitation-footer">
        <a href="/" aria-label="Ir al sitio de PartyTime">
          PartyTime
        </a>
      </footer>
    </div>
  );
}
