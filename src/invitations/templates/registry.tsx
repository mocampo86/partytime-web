import { lazy } from 'react';
import { invitationTemplateIds } from './templateIds';
import type { InvitationTemplate } from '../../types/invitation';

export const invitationTemplates: readonly InvitationTemplate[] = [
  {
    id: 'rose-gold',
    name: 'Rose Gold',
    description:
      'Una experiencia premium para XV años con portada animada, retrato protagonista, cuenta regresiva, galería editorial y música opcional. Explorá también una demostración de la confirmación digital de asistencia.',
    category: 'xv-anos',
    categoryLabel: 'XV años',
    recommendedFor:
      'Celebraciones de XV que buscan una invitación elegante, emocional y lista para compartir por WhatsApp',
    previewImage: {
      src: '/assets/invitations/rose-gold/social-preview-1200x630.webp',
      alt: 'Vista previa del template Rose Gold con retrato de quinceañera en tonos rosa y dorado',
      width: 1200,
      height: 630,
    },
    component: lazy(() => import('./rose-gold/RoseGoldTemplate')),
  },
];

export function getInvitationTemplate(templateId: string) {
  return invitationTemplates.find((template) => template.id === templateId);
}

