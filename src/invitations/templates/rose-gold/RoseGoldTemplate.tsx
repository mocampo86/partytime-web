import './rose-gold.css';
import { useId, type CSSProperties } from 'react';
import type { InvitationTemplateProps } from '../../../types/invitation';
import { AccommodationInfo } from '../../components/AccommodationInfo';
import { CollaborativePlaylist } from '../../components/CollaborativePlaylist';
import { Countdown } from '../../components/Countdown';
import { DressCode } from '../../components/DressCode';
import { EventDetails, formatInvitationDate } from '../../components/EventDetails';
import { GiftInfo } from '../../components/GiftInfo';
import { InvitationOpening } from '../../components/InvitationOpening';
import { LocationButton } from '../../components/LocationButton';
import { MusicPlayer } from '../../components/MusicPlayer';
import { PartyPicAccess } from '../../components/PartyPicAccess';
import { PhotoGallery } from '../../components/PhotoGallery';
import { RSVPForm } from '../../components/RSVPForm';
import { ShareInvitation } from '../../components/ShareInvitation';
import { TransportInfo } from '../../components/TransportInfo';

export default function RoseGoldTemplate({ invitation, isDemo = false }: InvitationTemplateProps) {
  const titleId = useId();
  const { event, features, content } = invitation;
  const themeStyles = {
    '--invitation-accent': invitation.theme?.accentColor,
    '--invitation-background': invitation.theme?.backgroundColor,
    '--invitation-font': invitation.theme?.fontFamily,
  } as CSSProperties;
  const galleryImages = features.gallery ? (invitation.gallery?.images ?? []) : [];
  const heroImage = galleryImages[0];
  const gallery =
    invitation.gallery && galleryImages.length > 1
      ? { ...invitation.gallery, images: galleryImages.slice(1) }
      : undefined;
  const hasLocation = features.location && Boolean(event.mapsUrl);
  const hasEditorialNotes =
    (features.dressCode && Boolean(content?.dressCode)) ||
    (features.gifts && Boolean(content?.giftInfo));

  const contentSections = (
    <article className="rose-gold" style={themeStyles} aria-labelledby={titleId}>
      {features.music ? <MusicPlayer music={invitation.music} variant="floating" /> : null}

      <header className="rose-gold__hero invitation-reveal">
        {heroImage ? (
          <figure className="rose-gold__portrait">
            <img
              src={heroImage.src}
              srcSet={heroImage.srcSet}
              sizes={heroImage.sizes ?? '(min-width: 48rem) 34vw, 78vw'}
              width={heroImage.width}
              height={heroImage.height}
              style={{ objectPosition: heroImage.objectPosition }}
              alt={heroImage.alt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        ) : null}
        <div className="rose-gold__hero-copy">
          <p className="invitation-eyebrow">{event.eventType}</p>
          <h1 id={titleId}>
            <span className="rose-gold__title">{event.title}</span>
            <span className="rose-gold__host">{event.hostName}</span>
          </h1>
          {event.subtitle ? <p className="rose-gold__subtitle">{event.subtitle}</p> : null}
          <p className="rose-gold__date">
            <time dateTime={event.date}>{formatInvitationDate(event.date)}</time>
            {event.time ? <span>{event.time} h</span> : null}
          </p>
          {isDemo ? (
            <p className="invitation-demo-badge">Demostración con datos ficticios</p>
          ) : null}
        </div>
      </header>

      {features.countdown ? (
        <div className="invitation-reveal">
          <Countdown
            date={event.date}
            time={event.time}
            utcOffset={event.utcOffset}
            title="Falta poco para celebrar"
          />
        </div>
      ) : null}

      {features.eventDetails ? (
        <div className="invitation-reveal">
          <EventDetails event={event}>
            {hasLocation ? <LocationButton event={event} /> : null}
          </EventDetails>
        </div>
      ) : hasLocation ? (
        <div className="invitation-reveal rose-gold__location-only">
          <LocationButton event={event} />
        </div>
      ) : null}

      {features.gallery && gallery ? (
        <div className="invitation-reveal">
          <PhotoGallery gallery={gallery} variant="editorial" />
        </div>
      ) : null}

      {hasEditorialNotes ? (
        <div className="rose-gold__notes invitation-reveal">
          {features.dressCode ? <DressCode dressCode={content?.dressCode} /> : null}
          {features.gifts ? <GiftInfo giftInfo={content?.giftInfo} /> : null}
        </div>
      ) : null}

      {features.accommodation && content?.accommodation ? (
        <div className="invitation-reveal">
          <AccommodationInfo accommodation={content.accommodation} />
        </div>
      ) : null}
      {features.transport && content?.transport ? (
        <div className="invitation-reveal">
          <TransportInfo transport={content.transport} />
        </div>
      ) : null}
      {features.collaborativePlaylist ? (
        <div className="invitation-reveal">
          <CollaborativePlaylist url={content?.collaborativePlaylistUrl} />
        </div>
      ) : null}
      {features.partyPic ? (
        <div className="invitation-reveal">
          <PartyPicAccess url={content?.partyPicUrl} />
        </div>
      ) : null}
      {isDemo && features.rsvp ? (
        <div className="invitation-reveal">
          <RSVPForm config={invitation.rsvp} />
        </div>
      ) : null}

      {features.share ? (
        <footer className="rose-gold__closing invitation-reveal">
          <p className="invitation-eyebrow">Compartir</p>
          <h2>Enviá esta invitación a quien quieras</h2>
          <p>Guardá el enlace o compartilo directamente desde tu celular.</p>
          <ShareInvitation invitation={invitation} />
        </footer>
      ) : null}
    </article>
  );

  return features.opening ? (
    <InvitationOpening invitation={invitation} revealSelector=".invitation-reveal">
      {contentSections}
    </InvitationOpening>
  ) : (
    contentSections
  );
}
