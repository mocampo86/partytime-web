import type { Service } from '../types/service';

export const services: readonly Service[] = [
  { id: 'fotografia', slug: 'fotografia', name: 'Fotografía' },
  { id: 'filmacion', slug: 'filmacion', name: 'Filmación' },
  { id: 'exteriores', slug: 'exteriores', name: 'Exteriores' },
  { id: 'espejo-magico', slug: 'espejo-magico', name: 'Espejo Mágico' },
  {
    id: 'cabina-boomerang',
    slug: 'cabina-boomerang',
    name: 'Cabina Boomerang',
  },
  {
    id: 'plataforma-360',
    slug: 'plataforma-360',
    name: 'Plataforma 360',
  },
  { id: 'robot-led', slug: 'robot-led', name: 'Robot LED' },
  { id: 'partypic', slug: 'partypic', name: 'PartyPic', featured: true },
  { id: 'osos-teddy', slug: 'osos-teddy', name: 'Osos Teddy' },
];
