import bodasEventoImage from '../assets/event-types/bodas-evento.jpg';
import espejoMagicoEventoImage from '../assets/services/espejo-magico-pareja-accesorios.jpg';
import fotografiaQuinceaneraImage from '../assets/services/fotografia-quinceanera.jpg';
import espejoMagicoFirmaImage from '../assets/service-details/espejo-magico/espejo-magico-firma.jpg';
import espejoMagicoInteraccionImage from '../assets/service-details/espejo-magico/espejo-magico-interaccion.jpg';
import espejoMagicoTirasXxlImage from '../assets/service-details/espejo-magico/espejo-magico-tiras-xxl.png';
import filmacionBaileQuinceImage from '../assets/service-details/filmacion/filmacion-baile-quince.jpg';
import filmacionQuinceaneraImage from '../assets/service-details/filmacion/filmacion-quinceanera.jpg';
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
import partyPicProyeccionEventoImage from '../assets/services/partypic-proyeccion-evento.jpg';
import partyrbotEscenarioInvitadosImage from '../assets/service-details/partyrbot/partyrbot-escenario-invitados.jpg';
import partyrbotFuegosFriosImage from '../assets/service-details/partyrbot/partyrbot-fuegos-frios.jpg';
import partyrbotInteraccionInvitadosImage from '../assets/service-details/partyrbot/partyrbot-interaccion-invitados.jpg';
import type { Service, ServiceDetail } from '../types/service';
import { services } from './services';

const cabinaBoomerang = services.find((service) => service.id === 'cabina-boomerang')!;
const filmacion = services.find((service) => service.id === 'filmacion')!;
const plataforma360 = services.find((service) => service.id === 'plataforma-360')!;
const robotLed = services.find((service) => service.id === 'robot-led')!;
const partyPic = services.find((service) => service.id === 'partypic')!;
const ososTeddy = services.find((service) => service.id === 'osos-teddy')!;
const pistaLed = services.find((service) => service.id === 'pista-led')!;

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
    serviceId: 'plataforma-360',
    displayName: 'Cabina 360°',
    hero: {
      eyebrow: 'CABINA 360°',
      headline: 'Donde comienza la revolución',
      subtitle: '¡Preparate para vivir tu fiesta desde todos los ángulos!',
      description: [
        'Nuestra Cabina 360° transforma cada movimiento en un video espectacular. Bailá, girá, divertite y convertite en protagonista de una experiencia llena de energía, efectos sorprendentes y momentos inolvidables.',
        'Gracias a su tecnología de grabación Full HD, efectos de cámara lenta y rápida estilo Matrix, cada video se convierte en una producción única, lista para descargar en tu celular y compartir en tus redes sociales.',
        'Con iluminación LED, cotillón y efectos especiales, creamos un verdadero set de entretenimiento donde todos quieren participar.',
        'Porque hay momentos que merecen mucho más que una foto. ¡Merecen vivirse en 360°!',
      ],
      image: plataforma360.image,
      ctaLabel: 'Consultar disponibilidad',
    },
    benefits: {
      title: 'Tecnología y diversión desde todos los ángulos',
      items: [
        {
          title: '🎬 Videos 360° en Full HD',
          description:
            'Capturamos cada movimiento con una experiencia envolvente y efectos de cámara lenta y rápida estilo Matrix.',
        },
        {
          title: '📱 Tus videos al instante',
          description:
            'Descargá tus videos directamente al celular mediante una tarjeta personalizada con código QR. ¡Listos para compartir!',
        },
        {
          title: '🎉 Diversión sin límites',
          description:
            'Incluimos cotillón para que cada invitado pueda crear videos espontáneos, originales y llenos de personalidad.',
        },
        {
          title: '✨ Efectos que sorprenden',
          description:
            'Iluminación LED, humo, burbujas y otros efectos que transforman cada grabación en un verdadero espectáculo.',
        },
      ],
    },
    includesTitle: 'Qué incluye',
    includes: [
      'Videos 360° en calidad Full HD.',
      'Efectos de cámara rápida y lenta estilo Matrix.',
      'Descarga de videos al celular mediante código QR.',
      'Tarjeta con QR personalizable.',
      'Cotillón para los invitados.',
      'Iluminación LED.',
      'Efectos especiales según la configuración contratada.',
    ],
    gallery: [],
    contactCta: {
      title: 'Tu fiesta en movimiento. Tus recuerdos en 360°.',
      description:
        'Mucho más que una cabina: una experiencia que reúne diversión, tecnología y momentos únicos para compartir.',
      label: 'Consultar disponibilidad',
      message:
        'Hola PartyTime, estoy interesado/a en la Cabina 360° y quisiera consultar disponibilidad.',
    },
    sectionOrder: ['benefits', 'includes'],
    seo: {
      title: 'Cabina 360° para eventos | PartyTime Uruguay',
      description:
        'Viví tu fiesta desde todos los ángulos con videos 360° Full HD, efectos especiales y descarga instantánea mediante QR.',
      openGraphTitle: 'Cabina 360° | PartyTime Uruguay',
      openGraphDescription:
        'Una experiencia 360° con videos Full HD, efectos sorprendentes y recuerdos listos para compartir.',
      openGraphImage: plataforma360.image.src,
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
      availabilityEnabled: true,
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
  {
    serviceId: 'partypic',
    displayName: 'PartyPic',
    hero: {
      eyebrow: 'PARTYPIC',
      headline: 'Cada mirada cuenta, cada momento se comparte',
      subtitle: 'Una experiencia digital, interactiva y colaborativa para tu evento.',
      description: [
        'PartyPic es una plataforma interactiva donde los invitados comparten fotos y mensajes de la fiesta.',
        'Solo tienen que escanear un código QR desde sus celulares: pueden participar sin instalar aplicaciones.',
        'Las fotografías aprobadas se proyectan automáticamente en las pantallas del evento, en tiempo real.',
      ],
      statement: 'Todos participan. Todos comparten.',
      image: partyPic.image,
      ctaLabel: 'Quiero PartyPic en mi fiesta',
    },
    editorial: {
      title: 'Ideal para cualquier celebración',
      paragraphs: [
        'PartyPic es perfecto para cumpleaños de 15, bodas, cumpleaños infantiles, fiestas empresariales y celebraciones especiales.',
      ],
    },
    benefits: {
      title: 'Una experiencia para compartir',
      items: [
        {
          title: 'Participación de todos',
          description:
            'Cada invitado puede aportar fotos y mensajes desde su celular y sumar su mirada a la celebración.',
        },
        {
          title: 'Fácil de usar',
          description:
            'Escanean el código QR y comparten desde sus celulares, sin instalar aplicaciones.',
        },
        {
          title: 'La fiesta en las pantallas',
          description:
            'Las fotografías aprobadas se proyectan automáticamente en las pantallas del evento en tiempo real.',
        },
      ],
    },
    includes: [],
    gallery: [
      {
        src: partyPicProyeccionEventoImage,
        alt: 'Invitados observando fotografías de la celebración proyectadas en una pantalla durante el evento.',
        width: 1024,
        height: 682,
        objectPosition: 'center',
      },
    ],
    contactCta: {
      title: 'PartyPic – Todos los momentos, todas las miradas, una sola fiesta',
      description:
        'Una experiencia digital y colaborativa para compartir fotos y mensajes durante tu evento.',
      label: 'Quiero PartyPic en mi fiesta',
      message: 'Hola PartyTime, quiero consultar por PartyPic para mi fiesta.',
      availabilityEnabled: true,
    },
    sectionOrder: ['benefits', 'editorial', 'gallery'],
    seo: {
      title: 'PartyPic para eventos | PartyTime Uruguay',
      description:
        'PartyPic permite que los invitados compartan fotos y mensajes desde sus celulares sin instalar aplicaciones, y proyecta automáticamente las fotografías aprobadas en las pantallas del evento.',
      openGraphTitle: 'PartyPic para tu fiesta | PartyTime Uruguay',
      openGraphDescription:
        'Una experiencia digital, interactiva y colaborativa donde cada mirada se comparte en tiempo real.',
      openGraphImage: partyPic.image.src,
    },
  },
  {
    serviceId: 'pista-led',
    displayName: 'Pista LED RGBW',
    hero: {
      eyebrow: 'PISTA LED RGBW',
      headline: 'Encendé la pista, hacé brillar tu fiesta',
      description: [
        'Hay momentos en los que la música se siente, las luces cobran vida y la pista se convierte en el corazón de la celebración.',
        'Nuestra Pista LED RGBW transforma cualquier salón en un escenario lleno de luz, color y movimiento, creando una atmósfera espectacular que invita a todos a bailar.',
        'Con una superficie de 4 × 4 metros y más de 100 programas de efectos luminosos, cada momento de tu fiesta puede tener una ambientación diferente: desde combinaciones elegantes y sutiles hasta explosiones de color que llenan la pista de energía.',
        'Su tecnología RGBW permite crear una amplia variedad de colores y efectos visuales, adaptándose al estilo de cada celebración.',
      ],
      statement: 'Porque una gran fiesta merece una pista que brille tanto como sus protagonistas.',
      image: {
        ...pistaLed.image,
        objectPosition: 'center 72%',
        width: 1448,
        height: 1086,
      },
      ctaLabel: 'Consultá por nuestra Pista LED',
    },
    benefits: {
      title: 'Una pista que transforma el ambiente',
      items: [
        {
          title: '✨ 16 m² para brillar',
          description:
            'Una pista de 4 × 4 metros que transforma el espacio de baile en el centro de todas las miradas, combinando tecnología, elegancia y diversión.',
        },
        {
          title: '🌈 Más de 100 efectos luminosos',
          description:
            'Una amplia variedad de programas de iluminación que permiten crear diferentes ambientes, combinaciones de colores y secuencias visuales durante la celebración.',
        },
        {
          title: '💡 Tecnología RGBW',
          description:
            'Iluminación LED con colores rojo, verde, azul y blanco, capaz de generar efectos vibrantes y también ambientaciones más elegantes y delicadas.',
        },
        {
          title: '🎉 Cada momento, una atmósfera diferente',
          description:
            'Desde el primer baile hasta los momentos de máxima diversión, la pista permite cambiar su iluminación para acompañar las distintas etapas del evento.',
        },
      ],
    },
    includesTitle: 'Qué incluye el servicio',
    includes: [
      'Pista LED RGBW de 4 × 4 metros.',
      'Superficie iluminada de 16 m².',
      'Más de 100 programas de efectos luminosos.',
      'Diferentes combinaciones de colores RGBW.',
      'Funcionamiento automático de efectos.',
      'Posibilidad de control manual de los programas.',
      'Transporte, armado y desarmado de la pista, según las condiciones del servicio contratado.',
      'Instalación para eventos en espacios interiores.',
    ],
    gallery: [
      {
        src: pistaLed.image.src,
        alt: 'Invitados bailando sobre la superficie iluminada de la Pista LED RGBW durante una celebración.',
        width: 1448,
        height: 1086,
        objectPosition: 'center 72%',
      },
    ],
    galleryEyebrow: 'La pista en acción',
    galleryTitle: 'Luz, color y movimiento en cada celebración',
    contactCta: {
      title: 'La música pone el ritmo. Nuestra pista pone la magia.',
      description:
        'Cada baile, cada encuentro y cada celebración merecen un escenario especial. Con nuestra Pista LED RGBW, la luz y el color se convierten en parte de la experiencia, transformando tu fiesta en un recuerdo que todos van a querer revivir.',
      label: 'Consultá por nuestra Pista LED',
      message:
        '¡Hola! Estuve viendo la Pista LED RGBW de PartyTime y me gustaría recibir más información sobre disponibilidad y precios.',
      availabilityEnabled: true,
    },
    sectionOrder: ['benefits', 'includes', 'gallery'],
    seo: {
      title: 'Pista LED RGBW para eventos | PartyTime Uruguay',
      description:
        'Pista LED RGBW de 4 × 4 metros y 16 m², con más de 100 efectos luminosos para transformar eventos interiores en Uruguay.',
      openGraphTitle: 'Pista LED RGBW | PartyTime Uruguay',
      openGraphDescription:
        'Luz, color y más de 100 efectos para hacer de la pista uno de los grandes momentos de tu fiesta.',
      openGraphImage: pistaLed.image.src,
    },
  },
  {
    serviceId: 'osos-teddy',
    displayName: 'Show de Osos Teddy',
    hero: {
      eyebrow: 'SHOW DE OSOS TEDDY',
      headline: 'Una sorpresa gigante, una diversión inolvidable',
      subtitle:
        '¿Te imaginás la sorpresa de tus invitados cuando dos osos Teddy gigantes aparecen en medio de la fiesta y convierten todo en un verdadero espectáculo?',
      description: [
        'Nuestro Show de Osos Teddy llega para romper la rutina, contagiar alegría y transformar cualquier celebración en un momento lleno de música, baile y diversión.',
        'Con una entrada especialmente preparada, nuestros osos gigantes se convierten en protagonistas junto a tus invitados. Bailan, interactúan, posan para fotos y generan esos momentos espontáneos que todos quieren grabar y compartir.',
        'Una propuesta que también se disfruta en fiestas de 15, casamientos y celebraciones de adultos.',
        'Y cuando parece que la sorpresa no puede ser mayor, los efectos especiales pueden llevar la experiencia a otro nivel.',
      ],
      statement:
        'Porque las mejores sorpresas no solo se ven… ¡se bailan, se viven y se recuerdan!',
      image: ososTeddy.image,
      ctaLabel: 'Consultar disponibilidad',
    },
    benefits: {
      title: 'Una experiencia sorpresa para todos',
      items: [
        {
          title: '🧸 Dos protagonistas gigantes',
          description:
            'Dos osos Teddy de gran tamaño irrumpen en la celebración para sorprender a todos y convertirse en el centro de atención.',
        },
        {
          title: '🎵 Música, baile y diversión',
          description:
            'Una entrada musical coordinada y una puesta en escena pensada para levantar la energía de la fiesta y hacer bailar a los invitados.',
        },
        {
          title: '🎉 Todos son parte del show',
          description:
            'Abrazos, bailes, fotografías y momentos espontáneos. Una experiencia interactiva donde grandes y chicos pueden participar.',
        },
        {
          title: '✨ Una entrada de película',
          description:
            'Potenciamos la sorpresa con bombas de papel y la posibilidad de incorporar fuegos fríos para crear un momento todavía más espectacular.',
        },
      ],
    },
    includesTitle: 'Qué incluye',
    includes: [
      'Dos osos Teddy gigantes.',
      'Entrada y puesta en escena coordinada.',
      'Animación musical y baile.',
      'Interacción con los invitados.',
      'Momentos especiales para fotografías y videos.',
      'Bombas de papel.',
      'Fuegos fríos disponibles como adicional opcional (no incluidos por defecto).',
    ],
    gallery: [],
    contactCta: {
      title: 'Dos osos gigantes. Una sorpresa enorme. Recuerdos para siempre.',
      description:
        'Hay momentos que nadie espera, pero que todos terminan recordando. Nuestro Show de Osos Teddy transforma una simple sorpresa en una experiencia llena de alegría, música y emoción.',
      label: 'Consultar disponibilidad',
      message:
        'Hola PartyTime, estoy interesado/a en el Show de Osos Teddy y quisiera consultar disponibilidad.',
    },
    sectionOrder: ['benefits', 'includes'],
    seo: {
      title: 'Show de Osos Teddy para eventos | PartyTime Uruguay',
      description:
        'Dos osos Teddy gigantes llevan música, baile, interacción y una sorpresa inolvidable a fiestas de 15, casamientos y celebraciones de adultos.',
      openGraphTitle: 'Show de Osos Teddy | PartyTime Uruguay',
      openGraphDescription:
        'Una experiencia sorpresa con osos gigantes, animación musical, interacción y efectos especiales opcionales.',
      openGraphImage: ososTeddy.image.src,
    },
  },
  {
    serviceId: 'filmacion',
    displayName: 'Filmación',
    hero: {
      eyebrow: 'FILMACIÓN',
      headline: 'Cada momento merece volver a vivirse',
      subtitle: 'No solo grabamos tu celebración. Capturamos su historia.',
      description: [
        'Hay momentos que pasan en segundos, pero merecen quedarse para siempre. Una mirada, un abrazo, las palabras de alguien especial, la emoción de una entrada o la alegría de una pista de baile llena de vida.',
        'En PartyTime transformamos esos instantes en recuerdos que podés volver a sentir una y otra vez.',
        'Nuestro servicio de filmación combina calidad profesional, sensibilidad y creatividad para contar la historia de tu celebración de manera auténtica, dinámica y emocionante.',
      ],
      statement:
        'Porque no se trata solamente de recordar cómo fue ese día, sino de volver a vivir lo que sentiste.',
      image: filmacion.image,
      ctaLabel: 'Consultar disponibilidad',
    },
    story: [
      {
        label: 'Diferencial',
        title: 'Tu historia, tal como sucedió',
        paragraphs: [
          'Creemos que la verdadera magia de un video está en su capacidad de transportarte nuevamente a ese momento.',
          'Por eso, uno de nuestros principales diferenciales es respetar el sonido original de tu celebración. La música que acompañó tu entrada, las palabras que emocionaron a todos, las risas espontáneas y los sonidos que hicieron único cada instante.',
          'Cuidamos la conexión entre imagen y sonido para que lo que estás viendo coincida con lo que realmente estaba sucediendo y escuchándose.',
        ],
        callout:
          'No queremos que simplemente mires un recuerdo. Queremos que vuelvas a estar ahí.',
        image: {
          src: filmacionQuinceaneraImage,
          alt: 'Quinceañera con corona y vestido rosa posando junto a la decoración iluminada de su fiesta.',
          width: 1024,
          height: 683,
          objectPosition: 'center',
        },
        featured: true,
      },
    ],
    benefits: {
      title: '¿Qué incluye nuestro servicio?',
      items: [
        {
          title: '🎥 Filmación profesional',
          description:
            'Registramos los momentos más importantes de tu celebración utilizando cámaras profesionales, buscando capturar cada detalle con calidad, naturalidad y creatividad.',
        },
        {
          title: '🎞️ Registro completo del evento',
          description:
            'Documentamos el desarrollo de tu celebración, desde los momentos más emotivos hasta los más divertidos, para conservar una memoria audiovisual de ese día tan especial.',
        },
        {
          title: '🌟 Video resumen con los mejores momentos',
          description:
            'Creamos una pieza audiovisual que reúne los instantes más destacados de tu evento, combinando emoción, ritmo y una edición cuidada para contar tu historia.',
        },
        {
          title: '🎤 Entrevistas y mensajes especiales',
          description:
            'Capturamos las palabras, los deseos y las emociones de familiares, amigos e invitados. Mensajes espontáneos que con el paso del tiempo se convierten en recuerdos invaluables.',
        },
        {
          title: '🚁 Tomas aéreas con dron',
          description:
            'Incorporamos una perspectiva diferente con imágenes aéreas que permiten destacar el lugar, la ambientación y la dimensión de tu celebración, cuando las condiciones lo permiten.',
        },
        {
          title: '🎨 Edición profesional',
          description:
            'Seleccionamos y trabajamos el material registrado, cuidando los colores, las transiciones, el ritmo narrativo y, especialmente, la relación entre imagen y sonido.',
        },
        {
          title: '💾 Entrega de tus recuerdos',
          description:
            'Recibís el material final en formato digital, mediante un enlace de descarga o pendrive, para que puedas conservarlo, compartirlo y disfrutarlo siempre que quieras.',
        },
      ],
    },
    includes: [],
    differentials: [
      {
        title: 'Mucho más que un video',
        paragraphs: [
          'Cada celebración tiene su propia energía, sus protagonistas y esos pequeños detalles que la hacen irrepetible.',
          'Nuestro objetivo es capturar esa esencia sin perder la espontaneidad de los momentos reales.',
          'No buscamos simplemente crear imágenes bonitas. Queremos que dentro de unos años puedas reproducir tu video, escuchar aquella canción, volver a sentir la emoción y recordar exactamente por qué ese día fue tan especial.',
        ],
        callout:
          'Los momentos pasan. Las emociones quedan. Nosotros te ayudamos a revivirlas.',
        image: {
          src: filmacionBaileQuinceImage,
          alt: 'Quinceañera bailando con su padre mientras un camarógrafo filma el momento durante la celebración.',
          width: 1024,
          height: 683,
          objectPosition: 'center',
        },
        featured: true,
      },
    ],
    gallery: [],
    contactCta: {
      title: '¿Listo para convertir tu celebración en una historia inolvidable?',
      description:
        'En PartyTime queremos acompañarte para que cada instante especial tenga un lugar en tus recuerdos. Consultanos por nuestro servicio de filmación y hagamos que tu historia perdure.',
      label: 'Consultar por WhatsApp',
      message:
        'Hola PartyTime 👋 Estoy interesado/a en el servicio de Filmación y quisiera consultar disponibilidad.',
      whatsAppEnabled: true,
    },
    sectionOrder: ['story', 'benefits', 'differentials'],
    seo: {
      title: 'Filmación de eventos | PartyTime Uruguay',
      description:
        'Filmación profesional para celebraciones: registro completo, video resumen, entrevistas, tomas con dron y edición que respeta el sonido original de tu evento.',
      openGraphTitle: 'Filmación | PartyTime Uruguay',
      openGraphDescription:
        'Capturamos la historia de tu celebración con calidad profesional, sonido original y una edición pensada para volver a vivir cada momento.',
      openGraphImage: filmacion.image.src,
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
