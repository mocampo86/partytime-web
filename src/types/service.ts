export type ServiceId =
  | 'fotografia'
  | 'filmacion'
  | 'exteriores'
  | 'espejo-magico'
  | 'cabina-boomerang'
  | 'plataforma-360'
  | 'robot-led'
  | 'partypic'
  | 'osos-teddy'
  | 'pista-led';

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
  headline?: string;
  detailCtaLabel?: string;
  image: ServiceImage;
  imagePending?: boolean;
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
  image?: ServiceImage;
};

export type ServiceBenefit = {
  title: string;
  description: string;
};

export type ServiceBenefitsSection = {
  title: string;
  items: readonly ServiceBenefit[];
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceProcess = {
  eyebrow?: string;
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
  eyebrow?: string;
  title: string;
  description: string;
  label: string;
  message: string;
  whatsAppEnabled?: boolean;
};

export type ServiceSeo = {
  title: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
  openGraphImage?: string;
};

export type ServiceDetailSection =
  | 'process'
  | 'editorial'
  | 'benefits'
  | 'story'
  | 'includes'
  | 'differentials'
  | 'gallery';

export type ServiceDetail = {
  serviceId: ServiceId;
  displayName: string;
  hero: ServiceDetailHero;
  editorial?: ServiceEditorialSection;
  process?: ServiceProcess;
  benefits?: ServiceBenefitsSection;
  story?: readonly ServiceDifferential[];
  includesTitle?: string;
  includesEyebrow?: string;
  includesVariant?: 'list' | 'tags';
  includes: readonly string[];
  differentials?: readonly ServiceDifferential[];
  gallery: readonly ServiceImage[];
  galleryEyebrow?: string;
  galleryTitle?: string;
  contactCta: ServiceContactCta;
  sectionOrder?: readonly ServiceDetailSection[];
  scrollReveal?: boolean;
  seo: ServiceSeo;
};
