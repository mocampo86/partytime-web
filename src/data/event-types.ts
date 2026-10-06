import bodasImage from '../assets/event-types/bodas-evento.jpg';
import cumpleanosImage from '../assets/event-types/cumpleanos-evento.jpg';
import eventosCorporativosImage from '../assets/event-types/eventos-corporativos-evento.jpg';
import fiestasTematicasImage from '../assets/event-types/fiestas-tematicas-evento.jpg';
import quinceanerasImage from '../assets/event-types/quinceaneras-evento.jpg';
import type { EventType } from '../types/event-type';

export const eventTypes: readonly EventType[] = [
  {
    id: 'quinceaneras',
    slug: 'quinceaneras',
    name: 'Quinceañeras',
    shortDescription:
      'Celebraciones llenas de emoción, energía y recuerdos para una noche inolvidable.',
    image: {
      src: quinceanerasImage,
      alt: 'Quinceañera con vestido rosa y corona en un salón iluminado con luces violetas y azules.',
      width: 1024,
      height: 682,
    },
  },
  {
    id: 'cumpleanos',
    slug: 'cumpleanos',
    name: 'Cumpleaños',
    shortDescription:
      'Experiencias para festejar a lo grande y compartir cada momento con quienes más querés.',
    image: {
      src: cumpleanosImage,
      alt: 'Bebé sentado sobre una manta en un jardín iluminado con luces azules y violetas durante un cumpleaños.',
      width: 1024,
      height: 682,
    },
  },
  {
    id: 'bodas',
    slug: 'bodas',
    name: 'Bodas',
    shortDescription:
      'Detalles y recuerdos únicos para acompañar uno de los días más importantes de tu historia.',
    image: {
      src: bodasImage,
      alt: 'Novia e invitada sonriendo con un ramo en una boda iluminada con luces violetas.',
      width: 1024,
      height: 682,
    },
  },
  {
    id: 'eventos-corporativos',
    slug: 'eventos-corporativos',
    name: 'Eventos corporativos',
    shortDescription:
      'Propuestas que sorprenden, conectan y elevan cada encuentro de tu equipo o marca.',
    image: {
      src: eventosCorporativosImage,
      alt: 'Invitados brindando con copas durante un evento corporativo iluminado con luces azules y violetas.',
      width: 1024,
      height: 682,
    },
  },
  {
    id: 'fiestas-tematicas',
    slug: 'fiestas-tematicas',
    name: 'Fiestas temáticas',
    shortDescription:
      'Experiencias visuales y entretenidas para transformar cualquier celebración en algo diferente.',
    image: {
      src: fiestasTematicasImage,
      alt: 'Invitadas con sombreros coloridos y accesorios temáticos en una fiesta iluminada con luces violetas.',
      width: 1024,
      height: 682,
    },
  },
];
