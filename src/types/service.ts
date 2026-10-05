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

export type Service = {
  id: ServiceId;
  slug: ServiceId;
  name: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  icon?: string;
  featured?: boolean;
};
