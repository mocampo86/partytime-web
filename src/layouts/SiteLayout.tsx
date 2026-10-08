import type { ReactNode } from 'react';
import { FloatingWhatsAppCta } from '../components/FloatingWhatsAppCta';
import { SiteHeader } from '../components/SiteHeader';
import { SocialIcon } from '../components/SocialIcon';
import { socialLinks } from '../data/social-links';

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
          <nav className="site-footer__social" aria-label="Redes sociales de PartyTime">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                className="site-footer__social-link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} de PartyTime: ${link.displayName}`}
              >
                <SocialIcon id={link.id} className="site-footer__social-icon" />
                <span className="visually-hidden">{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </footer>
      <FloatingWhatsAppCta />
    </div>
  );
}
