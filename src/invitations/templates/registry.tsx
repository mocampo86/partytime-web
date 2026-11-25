import { lazy } from 'react';
import { invitationTemplateIds } from './templateIds';
import type { InvitationTemplate } from '../../types/invitation';

export const invitationTemplates: readonly InvitationTemplate[] = [
  {
    id: 'rose-gold',
    name: 'Rose Gold',
    description:
      'Una experiencia premium para XV años con paleta rosa, marfil y dorado, apertura interactiva y secciones fluidas.',
    category: 'xv-anos',
    categoryLabel: 'XV años',
    recommendedFor: 'Celebraciones de XV y cumpleaños elegantes',
    previewImage: {
      src: '/assets/invitations/rose-gold/preview.svg',
      alt: 'Vista previa del template Rose Gold',
      width: 1200,
      height: 630,
    },
    component: lazy(() => import('./rose-gold/RoseGoldTemplate')),
  },
];

export function getInvitationTemplate(templateId: string) {
  return invitationTemplates.find((template) => template.id === templateId);
}

