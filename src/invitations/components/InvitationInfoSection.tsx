import type { ReactNode } from 'react';

type InvitationInfoSectionProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function InvitationInfoSection({
  eyebrow,
  title,
  children,
}: InvitationInfoSectionProps) {
  return (
    <section className="invitation-card invitation-info">
      <p className="invitation-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="invitation-info__content">{children}</div>
    </section>
  );
}
