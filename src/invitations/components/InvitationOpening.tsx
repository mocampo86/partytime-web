import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import type { Invitation } from '../../types/invitation';

type InvitationOpeningProps = {
  invitation: Invitation;
  children: ReactNode;
};

export function InvitationOpening({ invitation, children }: InvitationOpeningProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const previousOverflowRef = useRef<string | null>(null);
  const titleId = useId();

  useEffect(() => {
    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      if (previousOverflowRef.current !== null) {
        document.body.style.overflow = previousOverflowRef.current;
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      contentRef.current?.focus();
    }
  }, [isOpen]);

  const openInvitation = () => {
    if (previousOverflowRef.current !== null) {
      document.body.style.overflow = previousOverflowRef.current;
      previousOverflowRef.current = null;
    }
    setIsOpen(true);
  };

  if (isOpen) {
    return (
      <div ref={contentRef} className="invitation-opened" tabIndex={-1}>
        {children}
      </div>
    );
  }

  return (
    <div className="invitation-opening" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <div className="invitation-opening__content">
        <p className="invitation-eyebrow">Estás invitado</p>
        <h1 id={titleId}>
          {invitation.event.title} de {invitation.event.hostName}
        </h1>
        {invitation.event.subtitle ? <p>{invitation.event.subtitle}</p> : null}
        <button className="invitation-opening__button" type="button" onClick={openInvitation}>
          Abrir invitación
        </button>
      </div>
    </div>
  );
}
