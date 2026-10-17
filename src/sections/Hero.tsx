import { useEffect, useRef, useState } from 'react';
import type { FocusEvent } from 'react';
import { getActiveHeroSlides } from '../data/hero-slides';
import type { HeroSlide } from '../data/hero-slides';

const autoplayDelayMs = 6000;
const interactionPauseMs = 8000;

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event: MediaQueryListEvent) =>
      setReducedMotion(event.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}

function HeroSlideContent({
  slide,
  isFirst,
}: {
  slide: HeroSlide;
  isFirst: boolean;
}) {
  const Heading = isFirst ? 'h1' : 'h2';

  return (
    <>
      <div className="hero__content">
        <p className="hero__eyebrow">{slide.eyebrow}</p>
        <Heading
          className="hero__title"
          id={isFirst ? 'hero-title' : undefined}
        >
          <span>{slide.title}</span>
          <span>{slide.highlight}</span>
        </Heading>
        <p className="hero__lead">{slide.description}</p>
        <div className="hero__actions">
          {slide.actions.map((action) => {
            const isExternal = action.href.startsWith('http');

            return (
              <a
                key={`${action.href}-${action.label}`}
                className={`button button--${action.variant}`}
                href={action.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {action.label}
              </a>
            );
          })}
        </div>
        {slide.note ? <p className="hero__note">{slide.note}</p> : null}
      </div>

      <div className="hero__media" aria-hidden="true">
        {slide.type === 'institutional' ? (
          <div className="hero__media-frame">
            <img
              className="hero__identity"
              src={slide.image.src}
              alt=""
              width={slide.image.width}
              height={slide.image.height}
              fetchPriority="high"
            />
          </div>
        ) : (
          <div className="hero__media-frame hero__media-frame--promo">
            <img
              className="hero__promo"
              src={slide.image.src}
              alt=""
              width={slide.image.width}
              height={slide.image.height}
              loading={isFirst ? 'eager' : 'lazy'}
            />
          </div>
        )}
      </div>
    </>
  );
}

export function Hero() {
  const slides = getActiveHeroSlides();
  const reducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const interactionTimeoutRef = useRef<number | null>(null);

  const slideCount = slides.length;
  const currentIndex = Math.min(activeIndex, slideCount - 1);
  const autoplayPaused = isInteracting || isFocused;

  const registerInteraction = () => {
    setIsInteracting(true);

    if (interactionTimeoutRef.current !== null) {
      window.clearTimeout(interactionTimeoutRef.current);
    }

    interactionTimeoutRef.current = window.setTimeout(
      () => setIsInteracting(false),
      interactionPauseMs,
    );
  };

  const endInteraction = () => {
    if (interactionTimeoutRef.current !== null) {
      window.clearTimeout(interactionTimeoutRef.current);
      interactionTimeoutRef.current = null;
    }

    setIsInteracting(false);
  };

  const goTo = (index: number) => {
    registerInteraction();
    setActiveIndex(((index % slideCount) + slideCount) % slideCount);
  };

  useEffect(() => {
    if (slideCount < 2 || autoplayPaused || reducedMotion) {
      return;
    }

    const timeout = window.setTimeout(
      () => setActiveIndex((index) => (index + 1) % slideCount),
      autoplayDelayMs,
    );

    return () => window.clearTimeout(timeout);
  }, [currentIndex, autoplayPaused, reducedMotion, slideCount]);

  useEffect(
    () => () => {
      if (interactionTimeoutRef.current !== null) {
        window.clearTimeout(interactionTimeoutRef.current);
      }
    },
    [],
  );

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    const nextTarget = event.relatedTarget;

    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
      setIsFocused(false);
    }
  };

  if (slideCount === 0) {
    return null;
  }

  return (
    <section
      className="hero"
      id="inicio"
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
      aria-label="Destacados de PartyTime"
      onMouseEnter={registerInteraction}
      onMouseMove={registerInteraction}
      onMouseLeave={endInteraction}
      onFocus={() => setIsFocused(true)}
      onBlur={handleBlur}
      onPointerDown={registerInteraction}
    >
      <div className="hero__inner">
        <div className="hero__slides">
          {slides.map((slide, index) => (
            <article
              key={slide.id}
              className="hero__slide"
              data-active={index === currentIndex}
              aria-hidden={index !== currentIndex}
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${slideCount}`}
            >
              <HeroSlideContent slide={slide} isFirst={index === 0} />
            </article>
          ))}
        </div>
      </div>

      {slideCount > 1 ? (
        <div className="hero__controls">
          <button
            type="button"
            className="hero__arrow"
            aria-label="Diapositiva anterior"
            onClick={() => goTo(currentIndex - 1)}
          >
            <svg
              className="hero__arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <div className="hero__dots">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className="hero__dot"
                data-active={index === currentIndex}
                aria-current={index === currentIndex || undefined}
                aria-label={`Ir a la diapositiva ${index + 1}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="hero__arrow"
            aria-label="Diapositiva siguiente"
            onClick={() => goTo(currentIndex + 1)}
          >
            <svg
              className="hero__arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      ) : null}
    </section>
  );
}
