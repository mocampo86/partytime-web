import type { ComponentType, LazyExoticComponent } from 'react';
import type { ServiceImage } from './service';

export type InvitationSlug = string;
export type InvitationTemplateId = string;
export type InvitationCategory = 'xv-anos' | 'bodas' | 'cumpleanos' | 'corporativos';

export type InvitationImage = ServiceImage;

export type InvitationSeo = {
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  openGraphImage?: string;
};

export type InvitationTheme = {
  accentColor?: string;
  backgroundColor?: string;
  fontFamily?: string;
};

export type InvitationEvent = {
  title: string;
  hostName: string;
  subtitle?: string;
  eventType: string;
  date: string;
  time?: string;
  utcOffset?: string;
  venueName?: string;
  locationLabel?: string;
  mapsUrl?: string;
  notes?: string;
};

export type InvitationFeatures = {
  opening: boolean;
  music: boolean;
  countdown: boolean;
  eventDetails: boolean;
  location: boolean;
  gallery: boolean;
  rsvp: boolean;
  dressCode: boolean;
  gifts: boolean;
  accommodation: boolean;
  transport: boolean;
  collaborativePlaylist: boolean;
  partyPic: boolean;
  share: boolean;
};

export type InvitationGallery = {
  eyebrow?: string;
  title: string;
  images: readonly InvitationImage[];
};

export type InvitationMusic = {
  title?: string;
  artist?: string;
  src?: string;
  unavailableLabel?: string;
};

export type InvitationRSVPConfig = {
  title?: string;
  description?: string;
  deadline?: string;
  fields?: readonly ('name' | 'attendance' | 'companions' | 'message')[];
};

export type InvitationContent = {
  dressCode?: string;
  giftInfo?: string;
  accommodation?: string;
  transport?: string;
  collaborativePlaylistUrl?: string;
  partyPicUrl?: string;
};

export type Invitation = {
  slug: InvitationSlug;
  status: 'draft' | 'published';
  templateId: InvitationTemplateId;
  event: InvitationEvent;
  theme?: InvitationTheme;
  features: InvitationFeatures;
  gallery?: InvitationGallery;
  music?: InvitationMusic;
  rsvp?: InvitationRSVPConfig;
  content?: InvitationContent;
  seo?: InvitationSeo;
};

export type InvitationTemplateMetadata = {
  id: InvitationTemplateId;
  name: string;
  description: string;
  category: InvitationCategory;
  categoryLabel: string;
  previewImage: InvitationImage;
  recommendedFor: string;
};

export type InvitationTemplate = InvitationTemplateMetadata & {
  component: LazyExoticComponent<ComponentType<InvitationTemplateProps>>;
};

export type InvitationTemplateProps = {
  invitation: Invitation;
  isDemo?: boolean;
};

export type LoadedInvitation = {
  invitation: Invitation;
  fileName: string;
};

export type InvalidInvitation = {
  fileName: string;
  errors: readonly string[];
};
