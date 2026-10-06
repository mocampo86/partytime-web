import cabinaBoomerangImage from '../assets/services/cabina-boomerang-evento.jpg';
import espejoMagicoImage from '../assets/services/espejo-magico-evento.jpg';
import exterioresImage from '../assets/services/exteriores-sesion-exterior.jpg';
import filmacionImage from '../assets/services/filmacion-evento.jpg';
import fotografiaImage from '../assets/services/fotografia-quinceanera.jpg';
import ososTeddyImage from '../assets/services/osos-teddy-evento.jpg';
import partypicImage from '../assets/services/partypic-evento.jpg';
import plataforma360Image from '../assets/services/plataforma-360-evento.jpg';
import robotLedImage from '../assets/services/robot-led-evento.jpg';
import type { Service } from '../types/service';

export const services: readonly Service[] = [
  {
    id: 'fotografia',
    slug: 'fotografia',
    name: 'Fotografía',
    shortDescription:
      'Capturamos cada momento y emoción para que puedas revivir tu evento una y otra vez.',
    image: {
      src: fotografiaImage,
      alt: 'Quinceañera con tiara junto a un arreglo floral durante una celebración con decoración violeta.',
      width: 1024,
      height: 682,
    },
  },
  {
    id: 'filmacion',
    slug: 'filmacion',
    name: 'Filmación',
    shortDescription:
      'Convertimos los mejores momentos de tu evento en recuerdos que vuelven a cobrar vida.',
    image: {
      src: filmacionImage,
      alt: 'Mujer sonriendo durante un evento iluminado con luces cálidas y detalles azules.',
      width: 683,
      height: 1024,
    },
  },
  {
    id: 'exteriores',
    slug: 'exteriores',
    name: 'Exteriores',
    shortDescription:
      'Sesiones únicas en locaciones especiales, pensadas para reflejar tu personalidad y tu historia.',
    image: {
      src: exterioresImage,
      alt: 'Mujer sentada sobre rocas durante una sesión fotográfica exterior al atardecer.',
      width: 683,
      height: 1024,
    },
  },
  {
    id: 'espejo-magico',
    slug: 'espejo-magico',
    name: 'Espejo Mágico',
    shortDescription:
      'Fotos, diversión e interacción en una experiencia diferente para compartir con todos tus invitados.',
    detailPath: '/servicios/espejo-magico',
    image: {
      src: espejoMagicoImage,
      alt: 'Dos personas posando con accesorios frente a una cortina metálica azul y violeta durante una experiencia de Espejo Mágico.',
      width: 1024,
      height: 706,
    },
  },
  {
    id: 'cabina-boomerang',
    slug: 'cabina-boomerang',
    name: 'Cabina Boomerang',
    shortDescription:
      'Creá videos divertidos y espontáneos para llevarte un recuerdo diferente de tu evento.',
    detailPath: '/servicios/cabina-boomerang',
    image: {
      src: cabinaBoomerangImage,
      alt: 'Mujer posando con anteojos frente a una cortina metálica azul y magenta durante una experiencia de Cabina Boomerang.',
      width: 1024,
      height: 683,
    },
  },
  {
    id: 'plataforma-360',
    slug: 'plataforma-360',
    name: 'Plataforma 360',
    shortDescription:
      'Videos 360° llenos de energía y efectos para vivir y compartir una experiencia única.',
    image: {
      src: plataforma360Image,
      alt: 'Invitada girando sobre una plataforma 360 iluminada con luces azules y violetas durante un evento.',
      objectPosition: 'center 60%',
      width: 964,
      height: 1024,
    },
  },
  {
    id: 'robot-led',
    slug: 'robot-led',
    name: 'Robot LED',
    shortDescription:
      'Luces, música y energía para sorprender a tus invitados y transformar la pista de baile.',
    detailPath: '/servicios/robot-led',
    image: {
      src: robotLedImage,
      alt: 'Robot LED interactuando con invitados en una pista de baile iluminada con efectos de chispas.',
      width: 644,
      height: 1024,
    },
  },
  {
    id: 'partypic',
    slug: 'partypic',
    name: 'PartyPic',
    shortDescription:
      'Tus invitados escanean un QR, suben sus fotos y juntos crean una galería única del evento.',
    image: {
      src: partypicImage,
      alt: 'Invitada escaneando el código QR de PartyPic para subir fotos durante una fiesta.',
      width: 724,
      height: 1024,
    },
    featured: true,
  },
  {
    id: 'osos-teddy',
    slug: 'osos-teddy',
    name: 'Osos Teddy',
    shortDescription:
      'Personajes gigantes que llegan para sorprender, bailar e interactuar con tus invitados.',
    image: {
      src: ososTeddyImage,
      alt: 'Osos Teddy rosado y celeste bailando entre invitados durante una fiesta iluminada con luces azules y magenta.',
      width: 724,
      height: 1024,
    },
  },
];
