import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from 'react';
import type { Invitation } from '../../types/invitation';
import { formatInvitationDate } from './EventDetails';

const OPENING_TRANSITION_FALLBACK_MS = 900;

type InvitationOpeningProps = {
  invitation: Invitation;
  children: ReactNode;
  revealSelector?: string;
};

export function InvitationOpening({
  invitation,
  children,
  revealSelector,
}: InvitationOpeningProps) {
  const [status, setStatus] = useState<'closed' | 'leaving' | 'open'>('closed');
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const previousOverflowRef = useRef<string | null>(null);
  const exitTimerRef = useRef<number | null>(null);
  const isOpeningRef = useRef(false);
  const titleId = useId();
  const descriptionId = useId();
  const themeStyles = {
    '--invitation-accent': invitation.theme?.accentColor,
    '--invitation-background': invitation.theme?.backgroundColor,
    '--invitation-font': invitation.theme?.fontFamily,
  } as CSSProperties;

  const restoreScroll = useCallback(() => {
    if (previousOverflowRef.current !== null) {
      document.body.style.overflow = previousOverflowRef.current;
      previousOverflowRef.current = null;
    }
  }, []);

  useEffect(() => {
    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    buttonRef.current?.focus();

    return () => {
      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }
      isOpeningRef.current = false;
      restoreScroll();
    };
  }, [restoreScroll]);

  useEffect(() => {
    if (status !== 'leaving') {
      return;
    }

    const overlay = overlayRef.current;
    const finishOpening = () => {
      if (!isOpeningRef.current) {
        return;
      }

      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
      restoreScroll();
      isOpeningRef.current = false;
      setStatus('open');
    };
    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    if (!overlay || prefersReducedMotion) {
      finishOpening();
      return;
    }

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.target === overlay && event.propertyName === 'opacity') {
        finishOpening();
      }
    };

    overlay.addEventListener('transitionend', onTransitionEnd);
    exitTimerRef.current = window.setTimeout(finishOpening, OPENING_TRANSITION_FALLBACK_MS);

    return () => {
      overlay.removeEventListener('transitionend', onTransitionEnd);
      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
    };
  }, [restoreScroll, status]);

  useEffect(() => {
    if (status !== 'open') {
      return;
    }

    const content = contentRef.current;
    content?.focus({ preventScroll: true });

    if (!content || !revealSelector) {
      return;
    }

    const elements = Array.from(content.querySelectorAll<HTMLElement>(revealSelector));
    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const showElement = (element: Element) => {
      element.classList.add('invitation-reveal--visible');
    };

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach(showElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [revealSelector, status]);

  const openInvitation = () => {
    if (status !== 'closed' || isOpeningRef.current) {
      return;
    }

    isOpeningRef.current = true;
    setStatus('leaving');
  };

  const keepFocusInside = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = Array.from(
      overlayRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    );
    if (!focusableElements.length) {
      return;
    }

    const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);
    if (currentIndex === -1) {
      event.preventDefault();
      focusableElements[event.shiftKey ? focusableElements.length - 1 : 0].focus();
      return;
    }

    const nextIndex = currentIndex + (event.shiftKey ? -1 : 1);
    if (nextIndex < 0 || nextIndex >= focusableElements.length) {
      event.preventDefault();
      focusableElements[nextIndex < 0 ? focusableElements.length - 1 : 0].focus();
    }
  };

  if (status === 'open') {
    return (
      <div ref={contentRef} className="invitation-opened" tabIndex={-1}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={overlayRef}
      className={`invitation-opening${status === 'leaving' ? ' invitation-opening--leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      style={themeStyles}
      onKeyDown={keepFocusInside}
    >
      <div className="invitation-opening__content">
        <span className="invitation-opening__ornament" aria-hidden="true">
          XV
        </span>
        <p className="invitation-eyebrow">Estás invitado a celebrar</p>
        <h1 id={titleId}>
          <span className="invitation-opening__event">{invitation.event.title}</span>
          <span className="invitation-opening__host">{invitation.event.hostName}</span>
        </h1>
        {invitation.event.subtitle ? (
          <p id={descriptionId} className="invitation-opening__intro">
            {invitation.event.subtitle}
          </p>
        ) : null}
        <p className="invitation-opening__date">
          <time dateTime={invitation.event.date}>
            {formatInvitationDate(invitation.event.date)}
          </time>
          {invitation.event.time ? <span>{invitation.event.time} h</span> : null}
        </p>
        <button
          ref={buttonRef}
          className="invitation-opening__button"
          type="button"
          disabled={status === 'leaving'}
          aria-describedby={invitation.event.subtitle ? descriptionId : undefined}
          onClick={openInvitation}
        >
          Abrir invitación
        </button>
        <span className="invitation-opening__hint">Tocá para descubrir la experiencia completa</span>
      </div>
    </div>
  );
}
