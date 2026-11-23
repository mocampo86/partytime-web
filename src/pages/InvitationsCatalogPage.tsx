import '../styles/invitations.css';
import { useState } from 'react';
import { invitationTemplates } from '../invitations/templates/registry';
import { getWhatsAppUrl } from '../utils/whatsapp';
import type { InvitationCategory } from '../types/invitation';

const filters: readonly { id: InvitationCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'xv-anos', label: 'XV años' },
  { id: 'bodas', label: 'Bodas' },
  { id: 'cumpleanos', label: 'Cumpleaños' },
  { id: 'corporativos', label: 'Corporativos' },
];

const whatsAppMessage =
  '¡Hola PartyTime! Quiero consultar por una invitación digital personalizada para mi evento.';

export function InvitationsCatalogPage() {
  const [category, setCategory] = useState<InvitationCategory | 'all'>('all');
  const whatsAppUrl = getWhatsAppUrl(whatsAppMessage);
  const visibleTemplates = invitationTemplates.filter(
    (template) => category === 'all' || template.category === category,
  );


  return (
    <section className="invitations-catalog site-section" aria-labelledby="invitations-title">
      <header className="invitations-catalog__header">
        <p className="hero__eyebrow">Invitaciones digitales</p>
        <h1 id="invitations-title">Una invitación tan especial como tu evento</h1>
        <p>
          Diseñamos, configuramos y publicamos invitaciones digitales personalizadas con
          la información, estética y funcionalidades que tu celebración necesita.
        </p>
      </header>

      <div className="invitations-filters" aria-label="Filtrar templates por categoría">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`invitations-filter${category === filter.id ? ' invitations-filter--active' : ''}`}
            type="button"
            aria-pressed={category === filter.id}
            onClick={() => setCategory(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="invitations-grid" aria-live="polite">
        {visibleTemplates.map((template) => (
          <article className="invitation-template-card" key={template.id}>
            <img
              src={template.previewImage.src}
              alt={template.previewImage.alt}
              width={template.previewImage.width}
              height={template.previewImage.height}
              loading="lazy"
              decoding="async"
            />
            <div className="invitation-template-card__content">
              <p>{template.categoryLabel}</p>
              <h2>{template.name}</h2>
              <p>{template.description}</p>
              <p className="invitation-template-card__recommended">
                Ideal para: {template.recommendedFor}
              </p>
              <a
                className="button button--secondary"
                href={`/invitaciones/demo/${template.id}`}
              >
                Ver demostración
              </a>
            </div>
          </article>
        ))}
        {!visibleTemplates.length ? (
          <p className="invitations-empty" role="status">
            Todavía no hay templates disponibles para esta categoría.
          </p>
        ) : null}
      </div>

      <section className="invitations-cta" aria-labelledby="invitations-cta-title">
        <h2 id="invitations-cta-title">¿Querés una invitación para tu evento?</h2>
        <p>
          Contanos qué celebrás y te asesoramos sobre el template, las funcionalidades
          y la información ideal para tus invitados.
        </p>
        {whatsAppUrl ? (
          <a
            className="button button--primary"
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </a>
        ) : (
          <p className="contact-option__pending" role="status">
            WhatsApp estará disponible próximamente.
          </p>
        )}
      </section>
    </section>
  );
}
