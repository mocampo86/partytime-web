import bodasEventoImage from '../assets/event-types/bodas-evento.jpg';
import espejoMagicoEventoImage from '../assets/services/espejo-magico-evento.jpg';
import fotografiaQuinceaneraImage from '../assets/services/fotografia-quinceanera.jpg';
import espejoMagicoAccesoriosImage from '../assets/service-details/espejo-magico/espejo-magico-accesorios.jpg';
import espejoMagicoFirmaImage from '../assets/service-details/espejo-magico/espejo-magico-firma.jpg';
import espejoMagicoInteraccionImage from '../assets/service-details/espejo-magico/espejo-magico-interaccion.jpg';
import espejoMagicoTirasXxlImage from '../assets/service-details/espejo-magico/espejo-magico-tiras-xxl.png';
import fotografiaAlasIridiscentesImage from '../assets/service-details/fotografia/fotografia-alas-iridiscentes.jpg';
import fotografiaAlasPistaImage from '../assets/service-details/fotografia/fotografia-alas-pista.jpg';
import fotografiaAmigasVaquerasImage from '../assets/service-details/fotografia/fotografia-amigas-vaqueras.jpg';
import fotografiaAmigasVelaImage from '../assets/service-details/fotografia/fotografia-amigas-vela.jpg';
import fotografiaAmigosBrindisImage from '../assets/service-details/fotografia/fotografia-amigos-brindis.jpg';
import fotografiaBebeJardinImage from '../assets/service-details/fotografia/fotografia-bebe-jardin.jpg';
import fotografiaCumpleanos80VelasImage from '../assets/service-details/fotografia/fotografia-cumpleanos-80-velas.jpg';
import fotografiaQuinceaneraCorredorImage from '../assets/service-details/fotografia/fotografia-quinceanera-corredor.jpg';
import fotografiaRetratoNeonImage from '../assets/service-details/fotografia/fotografia-retrato-neon.jpg';
import fotografiaRetratoVestidoRosaImage from '../assets/service-details/fotografia/fotografia-retrato-vestido-rosa.jpg';
import fotografiaSoplandoVelasImage from '../assets/service-details/fotografia/fotografia-soplando-velas.jpg';
import fotografiaBodaCotillonImage from '../assets/service-details/fotografia/fotografia-boda-cotillon.jpg';
import partycubeBodaAccesoriosImage from '../assets/service-details/partycube/partycube-boda-accesorios.jpg';
import partycubeInvitadosCotillonImage from '../assets/service-details/partycube/partycube-invitados-cotillon.jpg';
import partycubeInvitadosSombrerosImage from '../assets/service-details/partycube/partycube-invitados-sombreros.jpg';
import partycubeTiraInteligenteImage from '../assets/service-details/partycube/partycube-tira-inteligente.png';
import partyrbotEscenarioInvitadosImage from '../assets/service-details/partyrbot/partyrbot-escenario-invitados.jpg';
import partyrbotFuegosFriosImage from '../assets/service-details/partyrbot/partyrbot-fuegos-frios.jpg';
import partyrbotInteraccionInvitadosImage from '../assets/service-details/partyrbot/partyrbot-interaccion-invitados.jpg';
import type { Service, ServiceDetail } from '../types/service';
import { services } from './services';

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
      image: {
        src: espejoMagicoEventoImage,
        alt: 'Dos personas posando con accesorios frente a una cortina metálica azul y violeta durante una experiencia de Espejo Mágico.',
        width: 1024,
        height: 706,
      },
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
      openGraphImage: espejoMagicoEventoImage,
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
  {
    serviceId: 'fotografia',
    displayName: 'Fotografía',
    hero: {
      eyebrow: 'FOTOGRAFÍA',
      headline: 'Tu historia cobra vida',
      subtitle:
        'Imágenes que no solo muestran cómo fue. Te hacen volver a sentirlo.',
      description: [
        '¿Soñaste con fotos que capturen mucho más que poses?',
        'Buscamos tu esencia, tu energía y la magia de cada momento para crear imágenes auténticas, espontáneas y llenas de vida.',
      ],
      statement: 'Tu historia, contada en imágenes.',
      image: {
        src: fotografiaSoplandoVelasImage,
        alt: 'Quinceañera soplando las velas doradas número 15 sobre su torta rodeada de flores.',
        width: 1024,
        height: 683,
        objectPosition: 'center center',
      },
      ctaLabel: 'Consultar disponibilidad',
    },
    editorial: {
      title: 'Más que una sesión de fotos',
      paragraphs: [
        'No buscamos simplemente registrar lo que sucede. Buscamos contar la historia de tu celebración.',
        'Las miradas, las risas, los abrazos, los detalles y esos pequeños momentos que pasan en segundos se convierten en el álbum visual de un día único.',
        'Una mirada natural y cuidada para que, cuando vuelvas a ver las fotos, puedas volver a sentir ese momento.',
      ],
      image: {
        src: fotografiaRetratoNeonImage,
        alt: 'Quinceañera sonriendo apoyada sobre una mesa de vidrio frente a un cartel de neón durante una celebración.',
        width: 683,
        height: 1024,
        objectPosition: 'center',
      },
    },
    benefits: {
      title: 'Tu sesión, a tu estilo',
      items: [
        {
          title: 'Fotografía dirigida, pero natural',
          description:
            'Te guiamos cuando es necesario para que te sientas cómoda y segura frente a la cámara, sin perder la naturalidad de tus gestos, tu mirada y tu personalidad. El resultado son imágenes cuidadas que siguen sintiéndose reales.',
        },
        {
          title: 'El toque editorial',
          description:
            'Trabajamos la luz, el movimiento, la composición y los pequeños detalles para darle a cada imagen una mirada artística y moderna. El vestido, las flores, una mirada o una sonrisa también forman parte de la historia.',
        },
        {
          title: 'Una experiencia para compartir',
          description:
            'Las fotos con tus amigas también pueden convertirse en parte de la experiencia. Buscamos generar momentos divertidos y espontáneos para capturar esa conexión de una forma natural.',
        },
      ],
    },
    story: [
      {
        label: 'Todo el evento, una historia',
        title: 'De principio a fin',
        paragraphs: [
          'La sesión es solo una parte de la historia.',
          'La cobertura continúa durante todo el evento para registrar los momentos importantes de la celebración y también aquellos que simplemente suceden: encuentros, abrazos, emociones, risas y momentos compartidos.',
        ],
        callout: 'Cubrimos todo el evento.',
        image: {
          src: fotografiaAmigasVelaImage,
          alt: 'Quinceañera con una vela encendida compartiendo el momento con dos amigas frente a la torta.',
          width: 1024,
          height: 683,
          objectPosition: 'center',
        },
        featured: true,
      },
      {
        label: 'Para las familias',
        title: 'Recuerdos que quedan',
        paragraphs: [
          'Para las familias, cada fotografía es también una forma de preservar un momento irrepetible.',
          'Realizamos un trabajo profesional pensado para conservar la belleza, las personas y las emociones de este día en imágenes de alta calidad que puedan volver a disfrutarse con el paso del tiempo.',
        ],
        image: {
          src: fotografiaBodaCotillonImage,
          alt: 'Novia e invitados posando con sombreros de cotillón y collares hawaianos durante la fiesta.',
          width: 1024,
          height: 683,
          objectPosition: 'center',
        },
        featured: true,
      },
    ],
    includesTitle: 'Tu cobertura fotográfica incluye',
    includes: [
      'Cobertura de todo el evento',
      'Entrega del material en formato digital',
      'Material disponible en la nube',
      'Opción de impresión',
    ],
    gallery: [
      {
        src: fotografiaRetratoVestidoRosaImage,
        alt: 'Quinceañera con vestido rosa y corona sentada frente a un hogar cálido iluminado con velas.',
        width: 1535,
        height: 1025,
        objectPosition: 'center',
      },
      {
        src: fotografiaQuinceaneraCorredorImage,
        alt: 'Quinceañera de espaldas mirando por el hombro en un corredor iluminado con luces violetas y azules.',
        width: 1536,
        height: 1024,
        objectPosition: 'center',
      },
      {
        src: bodasEventoImage,
        alt: 'Invitada besando en la mejilla a una novia que sostiene un ramo de rosas blancas durante la fiesta.',
        width: 1024,
        height: 682,
        objectPosition: 'center',
      },
      {
        src: fotografiaAlasIridiscentesImage,
        alt: 'Joven festejando con sombrero vaquero plateado y alas iridiscentes entre luces de colores.',
        width: 1536,
        height: 1024,
        objectPosition: 'center',
      },
      {
        src: fotografiaAmigosBrindisImage,
        alt: 'Grupo de amigos festejando con collares hawaianos y varitas luminosas en la pista de baile.',
        width: 1024,
        height: 682,
        objectPosition: 'center',
      },
      {
        src: fotografiaAmigasVaquerasImage,
        alt: 'Tres amigas sonriendo con sombreros vaqueros y cotillón bajo luces de neón.',
        width: 1536,
        height: 1024,
        objectPosition: 'center',
      },
      {
        src: fotografiaCumpleanos80VelasImage,
        alt: 'Mujer soplando las velas número 80 junto a una invitada en un cumpleaños decorado con globos.',
        width: 1536,
        height: 1024,
        objectPosition: 'center',
      },
      {
        src: fotografiaBebeJardinImage,
        alt: 'Bebé sentado sobre una manta en un jardín iluminado durante un cumpleaños.',
        width: 1536,
        height: 1024,
        objectPosition: 'center 40%',
      },
      {
        src: fotografiaAlasPistaImage,
        alt: 'Joven bailando con alas iridiscentes en la pista iluminada con luces de colores.',
        width: 1024,
        height: 682,
        objectPosition: 'center',
      },
    ],
    contactCta: {
      title: 'Tu historia merece ser recordada.',
      description:
        'Guardemos en imágenes cada emoción, cada detalle y cada momento de tu celebración.',
      label: 'Consultar por WhatsApp',
      message:
        'Hola PartyTime 👋 Estoy interesado/a en el servicio de Fotografía y quisiera consultar disponibilidad.',
    },
    seo: {
      title: 'Fotografía para eventos | PartyTime Uruguay',
      description:
        'Cobertura fotográfica de todo el evento con entrega del material en formato digital, disponible en la nube y opción de impresión.',
      openGraphTitle: 'Fotografía | PartyTime Uruguay',
      openGraphDescription:
        'Imágenes auténticas, espontáneas y llenas de vida que cuentan la historia de tu celebración, de principio a fin.',
      openGraphImage: fotografiaQuinceaneraImage,
    },
  },
  {
    serviceId: 'exteriores',
    displayName: 'Exteriores',
    hero: {
      eyebrow: 'FOTOGRAFÍA EN EXTERIORES',
      headline: 'Tu historia, al aire libre',
      description: [
        'Hay momentos que necesitan espacio, luz y libertad.',
        'Creamos sesiones en exteriores donde el paisaje, la luz natural y tu personalidad se combinan para conseguir fotografías auténticas, espontáneas y llenas de vida.',
      ],
      image: {
        src: '/images/services/exteriores/hero.jpg',
        alt: 'Mujer con vestido blanco sentada sobre rocas durante una sesión de fotografía en exteriores al atardecer.',
        width: 683,
        height: 1024,
        objectPosition: 'center 38%',
      },
      ctaLabel: 'Quiero mi sesión',
    },
    story: [
      {
        label: 'El lugar también cuenta',
        title: 'Un escenario para tu historia',
        paragraphs: [
          'Una calle, un parque, el campo, la costa o simplemente ese lugar que significa algo especial para vos.',
          'En una sesión exterior no buscamos solamente un fondo bonito. Usamos el entorno, la luz y el movimiento para construir imágenes que tengan personalidad.',
          'Antes de cada sesión pensamos juntos la locación, el horario y el estilo que queremos conseguir.',
          'Durante el shoot guiamos cada momento para que puedas disfrutar la experiencia sin preocuparte por cómo posar.',
        ],
        callout:
          'No buscamos poses perfectas. Buscamos momentos que se sientan reales.',
        image: {
          src: '/images/services/exteriores/escenario.jpg',
          alt: 'Mujer con vestido blanco junto a un carro de madera con ruedas antiguas en una locación rural al atardecer.',
          width: 1024,
          height: 683,
          objectPosition: 'center',
        },
        featured: true,
      },
    ],
    process: {
      eyebrow: 'Una sesión pensada para vos',
      title: 'Natural, pero dirigida',
      paragraphs: [],
      steps: [
        {
          title: 'La locación',
          description:
            'Elegimos juntos un lugar que acompañe la historia y la estética que queremos crear.',
        },
        {
          title: 'La luz',
          description:
            'Planificamos el horario buscando las mejores condiciones de luz natural.',
        },
        {
          title: 'El momento',
          description:
            'Durante la sesión te guiamos con movimientos y pequeñas indicaciones para conseguir fotografías naturales sin poses rígidas.',
        },
      ],
    },
    includesEyebrow: 'Ideal para',
    includesTitle: 'Tu momento. Tu lugar.',
    includesVariant: 'tags',
    includes: [
      '15 años',
      'Parejas',
      'Prebodas',
      'Familias',
      'Embarazo',
      'Retratos',
      'Sesiones personales',
    ],
    differentials: [
      {
        label: 'El momento justo',
        title: 'La luz cambia todo',
        paragraphs: [
          'En exteriores cada momento del día cuenta una historia diferente.',
          'La luz suave de la tarde, un contraluz, el cielo después del atardecer o las primeras luces de la ciudad pueden transformar completamente una fotografía.',
          'Por eso cada sesión se planifica teniendo en cuenta la locación, la época del año y el resultado que queremos conseguir.',
        ],
        callout:
          'La mejor fotografía empieza antes de disparar la cámara.',
        image: {
          src: '/images/services/exteriores/luz.jpg',
          alt: 'Mujer apoyada sobre una mesa de madera entre dos faroles con velas encendidas, iluminada por luz cálida en una locación rústica.',
          width: 1024,
          height: 683,
          objectPosition: 'center',
        },
        featured: true,
      },
    ],
    gallery: [
      {
        src: '/images/services/exteriores/exterior-01.jpg',
        alt: 'Mujer apoyada sobre una pared de roca junto al mar durante una sesión fotográfica en la costa.',
        width: 1024,
        height: 683,
        objectPosition: 'center',
      },
      {
        src: '/images/services/exteriores/exterior-02.jpg',
        alt: 'Mujer con sombrero sonriendo apoyada sobre una superficie de madera rodeada de vegetación durante una sesión en exteriores.',
        width: 1024,
        height: 683,
        objectPosition: 'center',
      },
      {
        src: '/images/services/exteriores/exterior-03.jpg',
        alt: 'Mujer con vestido blanco recostada sobre un sillón de mimbre en una galería rural con luz cálida.',
        width: 1024,
        height: 683,
        objectPosition: 'center',
      },
      {
        src: '/images/services/exteriores/exterior-04.jpg',
        alt: 'Mujer con sombrero vaquero junto a una estructura de madera iluminada por luz cálida durante una sesión en exteriores.',
        width: 1024,
        height: 682,
        objectPosition: 'center',
      },
    ],
    galleryEyebrow: 'Historias reales',
    galleryTitle: 'Cada lugar cambia la historia',
    contactCta: {
      eyebrow: 'Tu historia puede empezar acá',
      title: 'Hay lugares que merecen convertirse en recuerdos',
      description:
        'Contanos qué tenés en mente y armamos juntos una sesión que se sienta realmente tuya.',
      label: 'Planificar mi sesión',
      message:
        'Hola PartyTime 👋 Estoy interesado/a en una sesión de fotografía en exteriores y quisiera planificarla.',
    },
    sectionOrder: [
      'story',
      'process',
      'gallery',
      'differentials',
      'includes',
    ],
    scrollReveal: true,
    seo: {
      title: 'Fotografía en Exteriores | PartyTime Uruguay',
      description:
        'Sesiones de fotografía en exteriores con luz natural, locaciones únicas y una mirada espontánea y profesional. Creamos imágenes que cuentan tu historia.',
      openGraphTitle: 'Fotografía en Exteriores | PartyTime Uruguay',
      openGraphDescription:
        'Sesiones en exteriores donde el paisaje, la luz natural y tu personalidad crean imágenes auténticas y llenas de vida.',
      openGraphImage: '/images/services/exteriores/hero.jpg',
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
