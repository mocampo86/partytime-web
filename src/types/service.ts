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
  image?: ServiceImage;
  icon?: string;
  featured?: boolean;
};
