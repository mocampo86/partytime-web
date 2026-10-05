import type { ReactNode } from 'react';
import { FloatingWhatsAppCta } from '../components/FloatingWhatsAppCta';
import { SiteHeader } from '../components/SiteHeader';

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido" className="site-main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>© {currentYear} PartyTime.</p>
        </div>
      </footer>
      <FloatingWhatsAppCta />
    </div>
  );
}
