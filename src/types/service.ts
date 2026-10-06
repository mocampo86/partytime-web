export type ServiceId =
  | 'fotografia'
  | 'filmacion'
  | 'exteriores'
  | 'espejo-magico'
  | 'cabina-boomerang'
  | 'plataforma-360'
  | 'robot-led'
  | 'partypic'
  | 'osos-teddy';

export type ServiceDetailPath = `/servicios/${ServiceId}`;

export type ServiceImageSource = {
  srcSet: string;
  type?: string;
  media?: string;
  sizes?: string;
};

export type ServiceImage = {
  src: string;
  srcSet?: string;
  sizes?: string;
  sources?: readonly ServiceImageSource[];
  alt: string;
  objectPosition?: string;
  width?: number;
  height?: number;
};

export type Service = {
  id: ServiceId;
  slug: ServiceId;
  name: string;
  shortDescription: string;
  description?: string;
  image: ServiceImage;
  icon?: string;
  featured?: boolean;
  detailPath?: ServiceDetailPath;
};

export type ServiceDetailHero = {
  eyebrow: string;
  headline: string;
  subtitle?: string;
  description: readonly string[];
  statement?: string;
  image: ServiceImage;
  highlights?: readonly string[];
  ctaLabel: string;
};

export type ServiceEditorialSection = {
  title: string;
  paragraphs: readonly string[];
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceProcess = {
  title: string;
  paragraphs: readonly string[];
  steps: readonly ServiceProcessStep[];
};

export type ServiceDifferential = {
  label?: string;
  title: string;
  highlight?: string;
  callout?: string;
  paragraphs: readonly string[];
  image?: ServiceImage;
  featured?: boolean;
};

export type ServiceContactCta = {
  title: string;
  description: string;
  label: string;
  message: string;
};

export type ServiceSeo = {
  title: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
  openGraphImage?: string;
};

export type ServiceDetail = {
  serviceId: ServiceId;
  displayName: string;
  hero: ServiceDetailHero;
  editorial?: ServiceEditorialSection;
  process?: ServiceProcess;
  includesTitle?: string;
  includes: readonly string[];
  differentials?: readonly ServiceDifferential[];
  gallery: readonly ServiceImage[];
  contactCta: ServiceContactCta;
  seo: ServiceSeo;
};
