import { SocialIcon } from '../components/SocialIcon';
import { socialLinks } from '../data/social-links';
import { getAvailabilityUrl } from '../utils/availability';
import { getWhatsAppUrl } from '../utils/whatsapp';

const contactMessage = '¡Hola! Estuve viendo la web de PartyTime y me gustaría hacer una consulta.';

export function ContactPage() {
  const whatsAppUrl = getWhatsAppUrl(contactMessage);

  return (
    <section className="contact-page site-section" aria-labelledby="contact-title">
      <header className="contact-page__header">
        <p className="hero__eyebrow">Contacto</p>
        <h1 id="contact-title">Hablemos de tu próximo gran momento</h1>
        <p>
          ¿Tenés una idea, una pregunta o estás preparando una celebración especial? Nos encantaría
          escucharte. En PartyTime estamos para ayudarte a transformar tus ideas en experiencias
          inolvidables.
        </p>
      </header>

      <div className="contact-page__options">
        <section className="contact-option contact-option--whatsapp" aria-labelledby="contact-whatsapp-title">
          <img
            className="contact-option__whatsapp-icon"
            src="/images/whatsapp-icon.png"
            alt=""
            width="80"
            height="80"
            decoding="async"
          />
          <div className="contact-option__content">
            <h2 id="contact-whatsapp-title">Estamos a un mensaje de distancia</h2>
            <p>
              Contanos qué tenés en mente. Ya sea una consulta sobre nuestros servicios, una idea
              para tu celebración o simplemente una pregunta, estamos para ayudarte.
            </p>
          </div>
          {whatsAppUrl ? (
            <a
              className="button button--primary contact-option__action"
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
            >
              Escribinos por WhatsApp
            </a>
          ) : (
            <p className="contact-option__pending" role="status">
              WhatsApp estará disponible próximamente.
            </p>
          )}
        </section>

        <section className="contact-option contact-option--availability" aria-labelledby="contact-availability-title">
          <div className="contact-option__content">
            <p className="contact-option__eyebrow">Organizá tu evento</p>
            <h2 id="contact-availability-title">¿Ya tenés fecha para tu celebración?</h2>
            <p>
              Elegí los servicios que más te gusten, indicá cuándo y dónde será tu evento y
              consultanos por disponibilidad.
            </p>
          </div>
          <a className="button button--secondary contact-option__action" href={getAvailabilityUrl()}>
            Consultar disponibilidad
          </a>
        </section>
      </div>

      <section className="contact-social" aria-labelledby="contact-social-title">
        <div className="contact-social__header">
          <h2 id="contact-social-title">Seguinos y viví la experiencia PartyTime</h2>
          <p>
            Descubrí nuestros eventos, inspirate con nuevas ideas y conocé todo lo que podemos
            crear para tu próxima celebración.
          </p>
        </div>
        <div className="contact-social__links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              className="contact-social-card"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} de PartyTime: ${link.displayName}`}
            >
              <SocialIcon id={link.id} className="contact-social-card__icon" />
              <span className="contact-social-card__content">
                <span className="contact-social-card__name">{link.label}</span>
                <span className="contact-social-card__handle">{link.displayName}</span>
              </span>
              <span className="contact-social-card__arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}
