import { Suspense } from 'react';
import type { LoadedInvitation } from '../types/invitation';
import { getInvitationTemplate } from '../invitations/templates/registry';
import { InvitationLayout } from '../invitations/layouts/InvitationLayout';
import { InvitationErrorPage } from './InvitationErrorPage';

export function InvitationPage({ loadedInvitation }: { loadedInvitation: LoadedInvitation }) {
  const { invitation } = loadedInvitation;
  const template = getInvitationTemplate(invitation.templateId);


  if (!template) {
    return <InvitationErrorPage />;
  }

  const TemplateComponent = template.component;

  return (
    <InvitationLayout>
      <Suspense
        fallback={
          <p className="invitation-loading" role="status">
            Cargando invitación…
          </p>
        }
      >
        <TemplateComponent invitation={invitation} />
      </Suspense>
    </InvitationLayout>
  );
}
