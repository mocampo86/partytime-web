import espejoMagicoAccesoriosImage from '../assets/service-details/espejo-magico/espejo-magico-accesorios.jpg';
import espejoMagicoFirmaImage from '../assets/service-details/espejo-magico/espejo-magico-firma.jpg';
import espejoMagicoInteraccionImage from '../assets/service-details/espejo-magico/espejo-magico-interaccion.jpg';
import espejoMagicoTirasXxlImage from '../assets/service-details/espejo-magico/espejo-magico-tiras-xxl.png';
import partycubeBodaAccesoriosImage from '../assets/service-details/partycube/partycube-boda-accesorios.jpg';
import partycubeInvitadosCotillonImage from '../assets/service-details/partycube/partycube-invitados-cotillon.jpg';
import partycubeInvitadosSombrerosImage from '../assets/service-details/partycube/partycube-invitados-sombreros.jpg';
import partycubeTiraInteligenteImage from '../assets/service-details/partycube/partycube-tira-inteligente.png';
import partyrbotEscenarioInvitadosImage from '../assets/service-details/partyrbot/partyrbot-escenario-invitados.jpg';
import partyrbotFuegosFriosImage from '../assets/service-details/partyrbot/partyrbot-fuegos-frios.jpg';
import partyrbotInteraccionInvitadosImage from '../assets/service-details/partyrbot/partyrbot-interaccion-invitados.jpg';
import type { Service, ServiceDetail } from '../types/service';
import { services } from './services';

const espejoMagico = services.find((service) => service.id === 'espejo-magico')!;
const cabinaBoomerang = services.find((service) => service.id === 'cabina-boomerang')!;
const robotLed = services.find((service) => service.id === 'robot-led')!;

export const serviceDetails: readonly ServiceDetail[] = [
  {
    serviceId: 'espejo-magico',
    displayName: 'Espejo Mágico',
    hero: {
      eyebrow: 'ESPEJO MÁGICO',
      headline: 'Más que una foto, un momento mágico',
      description: [
        'Imaginá un espacio donde las risas, las poses y las ocurrencias se convierten en recuerdos para llevarte en el momento.',
        'Espejo Mágico es mucho más que una cabina de fotos: es una experiencia interactiva que suma diversión a tu evento, invita a todos a participar y captura esos momentos espontáneos que hacen única cada celebración.',
        'Fotos impresas al instante y listas para descargar en tu celular, para que cada invitado se lleve un recuerdo especial.',
      ],
      image: espejoMagico.image,
      highlights: [
        'Impresiones ilimitadas',
        'Descarga al celular',
        'Sobres personalizados',
        'Fotos backstage',
      ],
      ctaLabel: 'Consultar disponibilidad',
    },
    includes: [
      'Espejo Mágico interactivo',
      'Impresiones ilimitadas durante el servicio',
      'Diseño personalizado para tu evento',
      'Operador durante todo el servicio',
      'Accesorios divertidos para las fotos',
      'Sobres personalizados de regalo',
      'Descarga de las fotos directamente al celular',
      'Fotografías backstage del servicio',
    ],
    differentials: [
      {
        label: 'Diferencial',
        title: 'Tiras XXL',
        highlight: 'Más tamaño. Más detalle. Más recuerdos.',
        paragraphs: [
          'Nos olvidamos de las pequeñas tiras tradicionales. Nuestras Tiras XXL ofrecen mucho más espacio para que las fotos grupales, las sonrisas y cada detalle sean protagonistas.',
          'Un formato diferente, pensado para que el recuerdo también sea parte de la experiencia.',
        ],
        image: {
          src: espejoMagicoTirasXxlImage,
          alt: 'Diseño impreso de Tiras XXL del Espejo Mágico con tres fotos, nombre del evento, código QR, fecha y mensaje de agradecimiento.',
          width: 431,
          height: 1024,
        },
      },
      {
        label: 'Diferencial',
        title: 'Sobres personalizados',
        paragraphs: [
          'Cada fotografía se entrega en un sobre diseñado especialmente para tu celebración, combinando el estilo, los colores y los detalles de tu evento.',
          'Porque un gran recuerdo también merece una presentación especial.',
        ],
      },
    ],
    gallery: [
      {
        src: espejoMagicoFirmaImage,
        alt: 'Invitada escribiendo una firma sobre el Espejo Mágico durante un evento.',
        width: 1024,
        height: 682,
        objectPosition: 'center',
      },
      {
        src: espejoMagicoInteraccionImage,
        alt: 'Invitada interactuando con el Espejo Mágico mientras usa accesorios divertidos.',
        width: 1024,
        height: 682,
        objectPosition: 'center',
      },
      {
        src: espejoMagicoAccesoriosImage,
        alt: 'Dos invitadas posando con accesorios frente a una cortina metálica durante una experiencia de Espejo Mágico.',
        width: 1024,
        height: 682,
        objectPosition: 'center 45%',
      },
    ],
    contactCta: {
      title: '¿Lo querés en tu evento?',
      description: 'Consultanos disponibilidad y armamos una propuesta para tu fecha.',
      label: 'Consultar por WhatsApp',
      message:
        'Hola PartyTime 👋 Estoy interesado/a en el servicio de Espejo Mágico y quisiera consultar disponibilidad.',
    },
    seo: {
      title: 'Espejo Mágico para eventos | PartyTime Uruguay',
      description:
        'Espejo Mágico interactivo con impresiones ilimitadas, descarga al celular, accesorios y sobres personalizados para eventos en Uruguay.',
      openGraphTitle: 'Espejo Mágico | PartyTime Uruguay',
      openGraphDescription:
        'Una experiencia interactiva con impresiones ilimitadas, descarga al celular y recuerdos personalizados para tu celebración.',
      openGraphImage: espejoMagico.image.src,
    },
  },
  {
    serviceId: 'cabina-boomerang',
    displayName: 'PartyCube',
    hero: {
      eyebrow: 'PARTYCUBE',
      headline: 'Tu momento, multiplicado',
      subtitle: '¿Querés que la fiesta no pare… y que los recuerdos tampoco?',
      description: [
        'PartyCube no es una cabina de fotos cualquiera. Es una experiencia interactiva donde tus invitados posan, se divierten y crean boomerangs en movimiento que pueden llevarse al instante.',
        'Saltos, risas, poses, cotillón y mucha espontaneidad. En pocos segundos, PartyCube convierte cada momento en un recuerdo para compartir una y otra vez.',
      ],
      statement: 'Más que una foto. Un momento que vuelve a empezar.',
      image: cabinaBoomerang.image,
      ctaLabel: 'Consultar disponibilidad',
    },
    process: {
      title: 'Así funciona la magia',
      paragraphs: [
        'Tus invitados entran, eligen sus accesorios y se preparan frente a la cámara. PartyCube captura una pequeña secuencia y crea automáticamente un Boomerang de unos segundos.',
        'Además, reciben su foto impresa en el momento y pueden escanear el código QR para descargar el Boomerang directamente en su celular.',
      ],
      steps: [
        {
          title: 'Experiencia',
          description: 'Los invitados entran, eligen accesorios y se preparan frente a la cámara.',
        },
        {
          title: 'Captura',
          description: 'PartyCube registra una pequeña secuencia llena de espontaneidad.',
        },
        {
          title: 'Boomerang',
          description: 'La secuencia se convierte automáticamente en un recuerdo en movimiento.',
        },
        {
          title: 'Impresión y QR',
          description: 'Cada invitado recibe su tira impresa con un código QR personalizado.',
        },
        {
          title: 'Recuerdo en el celular',
          description: 'Al escanear el QR, pueden descargar y compartir el Boomerang al instante.',
        },
      ],
    },
    includesTitle: 'Todo incluido',
    includes: [
      'Impresiones sin límite durante el servicio',
      'Boomerangs digitales para descargar al celular',
      'Código QR para acceder al recuerdo en segundos',
      'Cotillón y accesorios para las fotos',
      'Sobres personalizados',
      'Diseño personalizado adaptado al estilo de cada celebración',
    ],
    differentials: [
      {
        label: 'Diferencial destacado',
        title: 'Tiras inteligentes',
        highlight: 'Una foto que también cobra vida.',
        callout: 'Foto impresa + recuerdo en movimiento.',
        paragraphs: [
          'Cada invitado recibe una impresión especial en formato 10 × 27 cm, diseñada para convertirse en un recuerdo de la fiesta.',
          'La tira incorpora un código QR personalizado: al escanearlo con el celular, pueden descargar al instante el Boomerang asociado a esa toma.',
        ],
        image: {
          src: partycubeTiraInteligenteImage,
          alt: 'Tira inteligente de PartyCube personalizada para Carolina con tres invitadas y código QR para descargar el Boomerang.',
          width: 1024,
          height: 373,
        },
        featured: true,
      },
      {
        label: 'Detalle personalizado',
        title: 'Sobres personalizados',
        highlight: 'Hasta el último detalle habla de tu evento.',
        paragraphs: [
          'Las impresiones se entregan en sobres diseñados especialmente para la celebración, que pueden acompañar la estética, los colores, el nombre y la fecha del evento.',
          'Así, el recuerdo no solo se guarda: se entrega como un verdadero souvenir.',
        ],
      },
    ],
    gallery: [
      {
        src: partycubeInvitadosSombrerosImage,
        alt: 'Grupo de invitados posando con sombreros y accesorios frente a la cortina metálica de PartyCube.',
        width: 1024,
        height: 572,
        objectPosition: 'center',
      },
      {
        src: partycubeBodaAccesoriosImage,
        alt: 'Invitados de una boda divirtiéndose con máscaras y accesorios durante una experiencia PartyCube.',
        width: 1024,
        height: 682,
        objectPosition: 'center',
      },
      {
        src: partycubeInvitadosCotillonImage,
        alt: 'Invitados posando con cotillón colorido y anteojos gigantes frente a la cabina PartyCube.',
        width: 1024,
        height: 565,
        objectPosition: 'center',
      },
    ],
    contactCta: {
      title: '¿Listos para poner la fiesta en movimiento?',
      description:
        'Llevá PartyCube a tu evento y convertí cada foto en un recuerdo que vuelve a empezar.',
      label: 'Consultar por WhatsApp',
      message:
        'Hola PartyTime 👋 Estoy interesado/a en PartyCube y quisiera consultar disponibilidad.',
    },
    seo: {
      title: 'PartyCube / Cabina Boomerang para eventos | PartyTime Uruguay',
      description:
        'PartyCube crea boomerangs interactivos, fotos impresas y recuerdos digitales con QR para eventos en Uruguay.',
      openGraphTitle: 'PartyCube / Cabina Boomerang | PartyTime Uruguay',
      openGraphDescription:
        'Una cabina interactiva con boomerangs, impresiones personalizadas, QR y recuerdos para compartir al instante.',
      openGraphImage: cabinaBoomerang.image.src,
    },
  },
  {
    serviceId: 'robot-led',
    displayName: 'PartyRobot',
    hero: {
      eyebrow: 'SHOW ROBOT LED',
      headline: 'El impacto que tu evento necesita',
      description: [
        'Imaginá esto: las luces se apagan, el ritmo invade el ambiente y una figura futurista de más de 2 metros, cubierta de luces LED, irrumpe en la pista.',
        'No es solo un baile. Es un espectáculo audiovisual de alta energía creado para transformar un momento de tu fiesta en una experiencia que sorprende a todos.',
      ],
      statement: 'Luces. Música. Energía. Y un show imposible de ignorar.',
      image: {
        ...robotLed.image,
        objectPosition: 'right center',
      },
      ctaLabel: 'Consultar disponibilidad',
    },
    editorial: {
      title: 'Cuando PartyRobot entra en escena',
      paragraphs: [
        'PartyRobot combina coreografía, tecnología LED e interacción con los invitados para crear uno de los momentos de mayor energía de la celebración.',
        'El Robot LED entra en la pista y pasa a formar parte de la fiesta: baila, interactúa con los invitados y convierte el espacio en un verdadero espectáculo.',
      ],
      image: {
        src: partyrbotEscenarioInvitadosImage,
        alt: 'Invitados filmando y celebrando alrededor de PartyRobot frente a una pantalla iluminada con su nombre.',
        width: 768,
        height: 1024,
        objectPosition: 'center 35%',
      },
    },
    benefits: {
      title: '¿Por qué elegir nuestro Show Robot LED?',
      items: [
        {
          title: 'Alto impacto visual',
          description:
            'Una figura de más de 2 metros iluminada con tecnología LED transforma inmediatamente la pista y genera el efecto WOW.',
        },
        {
          title: 'Experiencia 360°',
          description:
            'No es un show para mirar desde lejos. PartyRobot interactúa directamente con los invitados y los hace parte del espectáculo.',
        },
        {
          title: 'Profesionalismo total',
          description:
            'Equipo técnico especializado, música editada y una puesta en escena preparada para que el show tenga el impacto esperado.',
        },
        {
          title: 'Un momento para recordar',
          description:
            'Un espectáculo pensado para convertirse en uno de esos momentos que los invitados filman, comparten y siguen comentando después de la fiesta.',
        },
      ],
    },
    includesTitle: 'El show incluye',
    includes: [
      'Robot LED gigante de más de 2 metros',
      'Show con coreografía y música',
      'Interacción directa con los invitados',
      'Efecto especial de fuegos fríos para el cierre',
    ],
    differentials: [
      {
        label: 'El gran cierre',
        title: 'Un cierre a pura energía',
        highlight: 'El final que convierte el show en un verdadero espectáculo.',
        paragraphs: [
          'Cuando parece que el show llegó a su punto máximo, llega el cierre: PartyRobot y el efecto de fuegos fríos crean una escena final pensada para sorprender a todos.',
        ],
        image: {
          src: partyrbotFuegosFriosImage,
          alt: 'PartyRobot iluminado junto a invitados mientras un efecto de fuegos fríos cierra el show.',
          width: 768,
          height: 1024,
          objectPosition: 'center',
        },
        featured: true,
      },
    ],
    gallery: [
      {
        src: partyrbotFuegosFriosImage,
        alt: 'PartyRobot de cuerpo completo junto a invitados durante el cierre con fuegos fríos.',
        width: 768,
        height: 1024,
        objectPosition: 'center',
      },
      {
        src: partyrbotInteraccionInvitadosImage,
        alt: 'PartyRobot iluminado interactuando con invitados durante una celebración.',
        width: 935,
        height: 1024,
        objectPosition: 'center 15%',
      },
      {
        src: partyrbotEscenarioInvitadosImage,
        alt: 'Invitados celebrando alrededor de PartyRobot frente a una pantalla con el logo del show.',
        width: 768,
        height: 1024,
        objectPosition: 'center 35%',
      },
    ],
    contactCta: {
      title: '¿Listos para encender la fiesta?',
      description:
        'Llevá PartyRobot a tu evento y sorprendé a tus invitados con un show de luces, música y energía.',
      label: 'Consultar por WhatsApp',
      message:
        'Hola PartyTime 👋 Estoy interesado/a en el Show Robot LED y quisiera consultar disponibilidad.',
    },
    seo: {
      title: 'PartyRobot / Show Robot LED para eventos | PartyTime Uruguay',
      description:
        'Show Robot LED con figura gigante iluminada, coreografía, música, interacción y cierre con efecto de fuegos fríos para eventos.',
      openGraphTitle: 'PartyRobot / Show Robot LED | PartyTime Uruguay',
      openGraphDescription:
        'Un espectáculo audiovisual de alta energía con robot LED gigante e interacción con invitados.',
      openGraphImage: robotLed.image.src,
    },
  },
];

export type ServicePageData = {
  service: Service;
  detail: ServiceDetail;
};

export function getServicePageBySlug(slug: string): ServicePageData | null {
  const service = services.find((item) => item.slug === slug.toLowerCase());

  if (!service) {
    return null;
  }

  const detail = serviceDetails.find((item) => item.serviceId === service.id);
  return detail ? { service, detail } : null;
}
