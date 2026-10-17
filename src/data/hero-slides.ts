import partyTimeIdentity from '../assets/branding/partytime-logo-main.jpg';
import espejoMagicoImage from '../assets/services/espejo-magico-pareja-accesorios.jpg';
import partyPicProyeccionImage from '../assets/services/partypic-proyeccion-evento.jpg';
import plataforma360Image from '../assets/services/plataforma-360-evento.jpg';
import { getWhatsAppUrl } from '../utils/whatsapp';

export type HeroSlideType = 'institutional' | 'promotion';

export type HeroSlideAction = {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
};

export type HeroSlideImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type HeroSlide = {
  id: string;
  type: HeroSlideType;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: HeroSlideImage;
  actions: readonly HeroSlideAction[];
  note?: string;
  enabled: boolean;
  startsAt?: string;
  endsAt?: string;
};

export const heroSlides: readonly HeroSlide[] = [
  {
    id: 'institucional-principal',
    type: 'institutional',
    eyebrow: 'PartyTime Uruguay',
    title: 'Creamos recuerdos.',
    highlight: 'Compartimos emociones.',
    description:
      'Experiencias únicas para hacer de tu evento algo inolvidable.',
    image: {
      src: partyTimeIdentity,
      alt: 'Logotipo circular de PartyTime.',
      width: 1024,
      height: 1024,
    },
    actions: [
      {
        label: 'Conocé nuestros servicios',
        href: '#servicios',
        variant: 'primary',
      },
      {
        label: 'Consultar fecha',
        href: '/consultar-disponibilidad',
        variant: 'secondary',
      },
    ],
    enabled: true,
  },
  {
    id: 'promo-espejo-magico',
    type: 'promotion',
    eyebrow: 'Promoción destacada',
    title: 'Espejo Mágico.',
    highlight: 'Recuerdos al instante.',
    description:
      'Fotos, diversión e interacción para que tus invitados se lleven el mejor recuerdo del evento.',
    image: {
      src: espejoMagicoImage,
      alt: 'Pareja posando con accesorios frente a una cortina metálica azul y violeta durante una experiencia de Espejo Mágico.',
      width: 1024,
      height: 706,
    },
    actions: [
      {
        label: 'Conocer Espejo Mágico',
        href: '/servicios/espejo-magico',
        variant: 'primary',
      },
    ],
    enabled: true,
  },
  {
    id: 'promo-plataforma-360',
    type: 'promotion',
    eyebrow: 'Promoción destacada',
    title: 'Plataforma 360.',
    highlight: 'Videos que giran contigo.',
    description:
      'Videos 360° llenos de energía y efectos para vivir y compartir una experiencia única.',
    image: {
      src: plataforma360Image,
      alt: 'Invitada girando sobre una plataforma 360 iluminada con luces azules y violetas durante un evento.',
      width: 964,
      height: 1024,
    },
    actions: [
      {
        label: 'Conocer Plataforma 360',
        href: '/servicios/plataforma-360',
        variant: 'primary',
      },
    ],
    enabled: true,
  },
  {
    id: 'promo-partypic-regalo',
    type: 'promotion',
    eyebrow: 'Promoción especial',
    title: '¡Tu fiesta tiene regalo!',
    highlight: 'PartyPic GRATIS',
    description:
      'Contratá Fotografía + Filmación + una experiencia extra a elección (Espejo Mágico, Cubo 360° o Plataforma 360°) y llevate PartyPic de regalo para tu evento.',
    image: {
      src: partyPicProyeccionImage,
      alt: 'Invitados observando fotografías de la celebración proyectadas en una pantalla durante el evento.',
      width: 1024,
      height: 682,
    },
    actions: [
      {
        label: 'Quiero esta promo',
        href:
          getWhatsAppUrl(
            '¡Hola! Quiero consultar por la promoción de Fotografía + Filmación + experiencia extra con PartyPic de regalo.',
          ) ?? '/contacto',
        variant: 'primary',
      },
    ],
    note: 'Promoción sujeta a disponibilidad y condiciones de contratación.',
    enabled: true,
  },
];

export function getActiveHeroSlides(referenceDate = new Date()) {
  const now = referenceDate.getTime();

  return heroSlides.filter((slide) => {
    if (!slide.enabled) {
      return false;
    }

    const startsAt = slide.startsAt ? Date.parse(slide.startsAt) : null;
    const endsAt = slide.endsAt ? Date.parse(slide.endsAt) : null;

    if (startsAt !== null && now < startsAt) {
      return false;
    }

    return endsAt === null || now <= endsAt;
  });
}
