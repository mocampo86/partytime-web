import { Suspense } from 'react';
import { getDemoInvitationByTemplateId } from '../data/invitations/loadInvitations';
import { getInvitationTemplate } from '../invitations/templates/registry';
import { InvitationLayout } from '../invitations/layouts/InvitationLayout';
import { InvitationErrorPage } from './InvitationErrorPage';

export function InvitationDemoPage({ templateId }: { templateId: string }) {
  const template = getInvitationTemplate(templateId);
  const demoInvitation = getDemoInvitationByTemplateId(templateId);

  if (!template || !demoInvitation) {
    return <InvitationErrorPage />;
  }

  const TemplateComponent = template.component;

  return (
    <InvitationLayout>
      <Suspense
        fallback={
          <p className="invitation-loading" role="status">
            Cargando demostración…
          </p>
        }
      >
        <TemplateComponent invitation={demoInvitation.invitation} isDemo />
      </Suspense>
    </InvitationLayout>
  );
}
