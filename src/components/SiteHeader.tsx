import { useEffect, useRef, useState } from 'react';
import partyTimeLogo from '../assets/branding/partytime-logo-horizontal.png';

type NavigationItem = {
  label: string;
  href?: string;
};

const navigationItems: readonly NavigationItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencias' },
  { label: 'Contacto', href: '/contacto' },
];

export function SiteHeader() {
  const isLandingPage = window.location.pathname === '/';
  const navigationHref = (href: string) =>
    href.startsWith('#') ? (isLandingPage ? href : `/${href}`) : href;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-brand" href={navigationHref('#inicio')} onClick={closeMenu}>
          <img
            className="site-brand__logo"
            src={partyTimeLogo}
            alt="PartyTime"
            width="512"
            height="259"
          />
        </a>

        <button
          ref={menuButtonRef}
          className="site-header__menu-button"
          type="button"
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="site-header__menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <nav
          className={`site-nav${isMenuOpen ? ' site-nav--open' : ''}`}
          id="site-navigation"
          aria-label="Navegación principal"
        >
          <ul className="site-nav__list">
            {navigationItems.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a
                    className="site-nav__link"
                    href={navigationHref(item.href)}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="site-nav__pending">
                    {item.label}
                    <span className="site-nav__pending-label" aria-hidden="true">
                      Pronto
                    </span>
                    <span className="visually-hidden">, disponible próximamente</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
