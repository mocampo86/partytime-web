import './rose-gold.css';
import type { CSSProperties } from 'react';
import type { InvitationTemplateProps } from '../../../types/invitation';
import { AccommodationInfo } from '../../components/AccommodationInfo';
import { CollaborativePlaylist } from '../../components/CollaborativePlaylist';
import { Countdown } from '../../components/Countdown';
import { DressCode } from '../../components/DressCode';
import { EventDetails } from '../../components/EventDetails';
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
  const { event, features, content } = invitation;
  const themeStyles = {
    '--invitation-accent': invitation.theme?.accentColor,
    '--invitation-background': invitation.theme?.backgroundColor,
    '--invitation-font': invitation.theme?.fontFamily,
  } as CSSProperties;

  const contentSections = (
    <article className="rose-gold" style={themeStyles}>
      <header className="rose-gold__hero">
        <p className="invitation-eyebrow">{event.eventType}</p>
        <h1>
          {event.title}
          <span>{event.hostName}</span>
        </h1>
        {event.subtitle ? <p>{event.subtitle}</p> : null}
        {isDemo ? (
          <p className="invitation-demo-badge">Demostración con datos ficticios</p>
        ) : null}
      </header>

      {features.music ? <MusicPlayer music={invitation.music} /> : null}
      {features.countdown ? <Countdown date={event.date} time={event.time} utcOffset={event.utcOffset} /> : null}
      {features.eventDetails ? <EventDetails event={event} /> : null}
      {features.location ? <LocationButton event={event} /> : null}
      {features.gallery ? <PhotoGallery gallery={invitation.gallery} /> : null}
      {features.dressCode ? <DressCode dressCode={content?.dressCode} /> : null}
      {features.gifts ? <GiftInfo giftInfo={content?.giftInfo} /> : null}
      {features.accommodation ? <AccommodationInfo accommodation={content?.accommodation} /> : null}
      {features.transport ? <TransportInfo transport={content?.transport} /> : null}
      {features.collaborativePlaylist ? (
        <CollaborativePlaylist url={content?.collaborativePlaylistUrl} />
      ) : null}
      {features.partyPic ? <PartyPicAccess url={content?.partyPicUrl} /> : null}
      {isDemo && features.rsvp ? <RSVPForm config={invitation.rsvp} /> : null}
      {features.share ? <ShareInvitation invitation={invitation} /> : null}
    </article>
  );

  return features.opening ? (
    <InvitationOpening invitation={invitation}>{contentSections}</InvitationOpening>
  ) : (
    contentSections
  );
}
