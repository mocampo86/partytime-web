export type EventTypeId =
  | 'quinceaneras'
  | 'cumpleanos'
  | 'bodas'
  | 'eventos-corporativos'
  | 'fiestas-tematicas';

export type EventTypeImageSource = {
  srcSet: string;
  type?: string;
  media?: string;
  sizes?: string;
};

export type EventTypeImage = {
  src: string;
  srcSet?: string;
  sizes?: string;
  sources?: readonly EventTypeImageSource[];
  alt: string;
  objectPosition?: string;
  width?: number;
  height?: number;
};

export type EventType = {
  id: EventTypeId;
  slug: EventTypeId;
  name: string;
  shortDescription: string;
  image?: EventTypeImage;
};
