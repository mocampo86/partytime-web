import { isReservedInvitationSlug } from '../../invitations/reservedPaths';
import { invitationTemplateIds } from '../../invitations/templates/templateIds';
import type {
  Invitation,
  InvitationContent,
  InvitationEvent,
  InvitationFeatures,
  InvitationGallery,
  InvitationImage,
  InvitationMusic,
  InvitationRSVPConfig,
  InvitationSeo,
  InvitationTheme,
  InvalidInvitation,
  LoadedInvitation,
} from '../../types/invitation';

const eventModules = import.meta.glob('./events/*.json', {
  eager: true,
  import: 'default',
});
const demoModules = import.meta.glob('./demos/*.json', {
  eager: true,
  import: 'default',
});

const FEATURE_NAMES = [
  'opening',
  'music',
  'countdown',
  'eventDetails',
  'location',
  'gallery',
  'rsvp',
  'dressCode',
  'gifts',
  'accommodation',
  'transport',
  'collaborativePlaylist',
  'partyPic',
  'share',
] as const satisfies readonly (keyof InvitationFeatures)[];
const RSVP_FIELDS = ['name', 'attendance', 'companions', 'message'] as const;
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/i;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const TIME_PATTERN = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
const UTC_OFFSET_PATTERN = /^(?:[+-](?:0\d|1[0-3]):[0-5]\d|[+-]14:00)$/;
const HEX_COLOR_PATTERN = /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i;
const SAFE_FONT_FAMILY_PATTERN = /^[a-z0-9 ,"'-]+$/i;
const SAFE_CSS_VALUE_PATTERN = /^[^<>{};]+$/;
const SAFE_OBJECT_POSITION_PATTERN = /^[a-z0-9 .%-]+$/i;

type RawRecord = Record<string, unknown>;

type ParseResult = {
  invitation?: Invitation;
  errors: string[];
};

function isRecord(value: unknown): value is RawRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function getString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function getOptionalString(value: unknown, path: string, errors: string[]) {
  if (value === undefined) {
    return undefined;
  }

  const stringValue = getString(value);
  if (!stringValue) {
    errors.push(`${path} debe ser texto no vacío.`);
  }

  return stringValue;
}

function isAbsoluteUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function isRelativePath(value: string) {
  return value.startsWith('/') && !value.startsWith('//') && !value.includes('\\');
}

function isSafeSrcSet(value: string) {
  return value.split(',').every((candidate) => {
    const url = candidate.trim().split(/\s+/)[0];
    return Boolean(url) && (isAbsoluteUrl(url) || isRelativePath(url));
  });
}

function getUrlOrPath(value: unknown, path: string, errors: string[]) {
  const stringValue = getString(value);
  if (!stringValue || (!isAbsoluteUrl(stringValue) && !isRelativePath(stringValue))) {
    errors.push(`${path} debe ser una URL absoluta o una ruta local.`);
    return undefined;
  }

  return stringValue;
}

function getAbsoluteUrl(value: unknown, path: string, errors: string[]) {
  const stringValue = getString(value);
  if (!stringValue || !isAbsoluteUrl(stringValue)) {
    errors.push(`${path} debe ser una URL HTTP(S) válida.`);
    return undefined;
  }

  return stringValue;
}

function isValidEventDate(value: string) {
  if (!ISO_DATE_PATTERN.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function parseImageDimension(value: unknown, path: string, errors: string[]) {
  if (value === undefined) {
    return undefined;
  }
  if (typeof value === 'number' && Number.isInteger(value) && value > 0) {
    return value;
  }

  errors.push(`${path} debe ser un entero positivo.`);
  return undefined;
}

function parseImage(value: unknown, path: string, errors: string[]): InvitationImage | undefined {
  if (!isRecord(value)) {
    errors.push(`${path} debe ser un objeto de imagen.`);
    return undefined;
  }

  const src = getUrlOrPath(value.src, `${path}.src`, errors);
  const alt = getString(value.alt);
  if (!alt) {
    errors.push(`${path}.alt debe ser texto no vacío.`);
  }

  const width = parseImageDimension(value.width, `${path}.width`, errors);
  const height = parseImageDimension(value.height, `${path}.height`, errors);
  const srcSet = getOptionalString(value.srcSet, `${path}.srcSet`, errors);
  const sizes = getOptionalString(value.sizes, `${path}.sizes`, errors);
  const objectPosition = getOptionalString(
    value.objectPosition,
    `${path}.objectPosition`,
    errors,
  );
  const hasValidSrcSet = !srcSet || isSafeSrcSet(srcSet);
  const hasValidSizes = !sizes || SAFE_CSS_VALUE_PATTERN.test(sizes);
  const hasValidObjectPosition =
    !objectPosition || SAFE_OBJECT_POSITION_PATTERN.test(objectPosition);
  if (!hasValidSrcSet) errors.push(`${path}.srcSet contiene una URL no permitida.`);
  if (!hasValidSizes) errors.push(`${path}.sizes contiene caracteres no permitidos.`);
  if (!hasValidObjectPosition) {
    errors.push(`${path}.objectPosition contiene caracteres no permitidos.`);
  }

  return src && alt
    ? {
        src,
        alt,
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
        ...(srcSet && hasValidSrcSet ? { srcSet } : {}),
        ...(sizes && hasValidSizes ? { sizes } : {}),
        ...(objectPosition && hasValidObjectPosition ? { objectPosition } : {}),
      }
    : undefined;
}

function parseFeatures(value: unknown, errors: string[]): InvitationFeatures | undefined {
  if (!isRecord(value)) {
    errors.push('features es obligatorio.');
    return undefined;
  }

  const features = {} as InvitationFeatures;
  FEATURE_NAMES.forEach((name) => {
    if (typeof value[name] !== 'boolean') {
      errors.push(`features.${name} debe ser booleano.`);
      return;
    }
    features[name] = value[name];
  });

  return features;
}

function parseEvent(value: unknown, errors: string[]): InvitationEvent | undefined {
  if (!isRecord(value)) {
    errors.push('event es obligatorio.');
    return undefined;
  }

  const title = getString(value.title);
  const hostName = getString(value.hostName);
  const eventType = getString(value.eventType);
  const date = getString(value.date);
  if (!title) errors.push('event.title es obligatorio.');
  if (!hostName) errors.push('event.hostName es obligatorio.');
  if (!eventType) errors.push('event.eventType es obligatorio.');
  if (!date || !isValidEventDate(date)) errors.push('event.date debe tener formato YYYY-MM-DD válido.');

  const time = getOptionalString(value.time, 'event.time', errors);
  if (time && !TIME_PATTERN.test(time)) {
    errors.push('event.time debe tener formato HH:MM de 24 horas.');
  }

  const utcOffset = getOptionalString(value.utcOffset, 'event.utcOffset', errors);
  if (utcOffset && !UTC_OFFSET_PATTERN.test(utcOffset)) {
    errors.push('event.utcOffset debe tener formato +HH:MM o -HH:MM.');
  }

  const mapsUrl =
    value.mapsUrl === undefined ? undefined : getAbsoluteUrl(value.mapsUrl, 'event.mapsUrl', errors);
  const optional = {
    subtitle: getOptionalString(value.subtitle, 'event.subtitle', errors),
    venueName: getOptionalString(value.venueName, 'event.venueName', errors),
    locationLabel: getOptionalString(value.locationLabel, 'event.locationLabel', errors),
    notes: getOptionalString(value.notes, 'event.notes', errors),
  };

  return title && hostName && eventType && date
    ? {
        title,
        hostName,
        eventType,
        date,
        ...(time && TIME_PATTERN.test(time) ? { time } : {}),
        ...(utcOffset && UTC_OFFSET_PATTERN.test(utcOffset) ? { utcOffset } : {}),
        ...(mapsUrl ? { mapsUrl } : {}),
        ...Object.fromEntries(Object.entries(optional).filter(([, item]) => item !== undefined)),
      }
    : undefined;
}

function parseGallery(value: unknown, errors: string[]): InvitationGallery | undefined {
  if (value === undefined) return undefined;
  if (!isRecord(value)) {
    errors.push('gallery debe ser un objeto.');
    return undefined;
  }

  const title = getString(value.title);
  if (!title) errors.push('gallery.title es obligatorio.');
  if (!Array.isArray(value.images) || !value.images.length) {
    errors.push('gallery.images debe ser un arreglo de imágenes no vacío.');
    return undefined;
  }

  const images = value.images
    .map((image, index) => parseImage(image, `gallery.images[${index}]`, errors))
    .filter((image): image is InvitationImage => Boolean(image));
  const eyebrow = getOptionalString(value.eyebrow, 'gallery.eyebrow', errors);

  return title && images.length === value.images.length
    ? { title, images, ...(eyebrow ? { eyebrow } : {}) }
    : undefined;
}

function parseTheme(value: unknown, errors: string[]): InvitationTheme | undefined {
  if (value === undefined) return undefined;
  if (!isRecord(value)) {
    errors.push('theme debe ser un objeto.');
    return undefined;
  }

  const accentColor = getOptionalString(value.accentColor, 'theme.accentColor', errors);
  const backgroundColor = getOptionalString(value.backgroundColor, 'theme.backgroundColor', errors);
  const fontFamily = getOptionalString(value.fontFamily, 'theme.fontFamily', errors);
  if (accentColor && !HEX_COLOR_PATTERN.test(accentColor)) errors.push('theme.accentColor debe ser un color hexadecimal.');
  if (backgroundColor && !HEX_COLOR_PATTERN.test(backgroundColor)) errors.push('theme.backgroundColor debe ser un color hexadecimal.');
  if (fontFamily && !SAFE_FONT_FAMILY_PATTERN.test(fontFamily)) errors.push('theme.fontFamily contiene caracteres no permitidos.');

  return {
    ...(accentColor && HEX_COLOR_PATTERN.test(accentColor) ? { accentColor } : {}),
    ...(backgroundColor && HEX_COLOR_PATTERN.test(backgroundColor) ? { backgroundColor } : {}),
    ...(fontFamily && SAFE_FONT_FAMILY_PATTERN.test(fontFamily) ? { fontFamily } : {}),
  };
}

function parseMusic(value: unknown, errors: string[]): InvitationMusic | undefined {
  if (value === undefined) return undefined;
  if (!isRecord(value)) {
    errors.push('music debe ser un objeto.');
    return undefined;
  }

  const src = value.src === undefined ? undefined : getUrlOrPath(value.src, 'music.src', errors);
  const title = getOptionalString(value.title, 'music.title', errors);
  const artist = getOptionalString(value.artist, 'music.artist', errors);
  const unavailableLabel = getOptionalString(value.unavailableLabel, 'music.unavailableLabel', errors);
  const loop = value.loop;
  if (loop !== undefined && typeof loop !== 'boolean') {
    errors.push('music.loop debe ser booleano.');
  }
  return {
    ...(src ? { src } : {}),
    ...(title ? { title } : {}),
    ...(artist ? { artist } : {}),
    ...(typeof loop === 'boolean' ? { loop } : {}),
    ...(unavailableLabel ? { unavailableLabel } : {}),
  };
}

function parseRsvp(value: unknown, errors: string[]): InvitationRSVPConfig | undefined {
  if (value === undefined) return undefined;
  if (!isRecord(value)) {
    errors.push('rsvp debe ser un objeto.');
    return undefined;
  }

  const fields = value.fields;
  if (
    fields !== undefined &&
    (!Array.isArray(fields) ||
      fields.some((field) => !RSVP_FIELDS.includes(field as (typeof RSVP_FIELDS)[number])))
  ) {
    errors.push('rsvp.fields contiene un campo no permitido.');
  }

  const title = getOptionalString(value.title, 'rsvp.title', errors);
  const description = getOptionalString(value.description, 'rsvp.description', errors);
  const deadline = getOptionalString(value.deadline, 'rsvp.deadline', errors);
  if (deadline && !isValidEventDate(deadline)) {
    errors.push('rsvp.deadline debe tener formato YYYY-MM-DD válido.');
  }

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(deadline && isValidEventDate(deadline) ? { deadline } : {}),
    ...(Array.isArray(fields) ? { fields: fields as InvitationRSVPConfig['fields'] } : {}),
  };
}

function parseContent(value: unknown, errors: string[]): InvitationContent | undefined {
  if (value === undefined) return undefined;
  if (!isRecord(value)) {
    errors.push('content debe ser un objeto.');
    return undefined;
  }

  const dressCode = getOptionalString(value.dressCode, 'content.dressCode', errors);
  const giftInfo = getOptionalString(value.giftInfo, 'content.giftInfo', errors);
  const accommodation = getOptionalString(value.accommodation, 'content.accommodation', errors);
  const transport = getOptionalString(value.transport, 'content.transport', errors);
  const collaborativePlaylistUrl =
    value.collaborativePlaylistUrl === undefined
      ? undefined
      : getAbsoluteUrl(value.collaborativePlaylistUrl, 'content.collaborativePlaylistUrl', errors);
  const partyPicUrl =
    value.partyPicUrl === undefined
      ? undefined
      : getAbsoluteUrl(value.partyPicUrl, 'content.partyPicUrl', errors);

  return {
    ...(dressCode ? { dressCode } : {}),
    ...(giftInfo ? { giftInfo } : {}),
    ...(accommodation ? { accommodation } : {}),
    ...(transport ? { transport } : {}),
    ...(collaborativePlaylistUrl ? { collaborativePlaylistUrl } : {}),
    ...(partyPicUrl ? { partyPicUrl } : {}),
  };
}

function parseSeo(value: unknown, errors: string[]): InvitationSeo | undefined {
  if (value === undefined) return undefined;
  if (!isRecord(value)) {
    errors.push('seo debe ser un objeto.');
    return undefined;
  }

  const title = getString(value.title);
  const description = getString(value.description);
  if (!title || !description) {
    errors.push('seo debe tener title y description no vacíos.');
    return undefined;
  }

  const openGraphTitle = getOptionalString(value.openGraphTitle, 'seo.openGraphTitle', errors);
  const openGraphDescription = getOptionalString(value.openGraphDescription, 'seo.openGraphDescription', errors);
  const openGraphImage =
    value.openGraphImage === undefined
      ? undefined
      : getUrlOrPath(value.openGraphImage, 'seo.openGraphImage', errors);
  return {
    title,
    description,
    ...(openGraphTitle ? { openGraphTitle } : {}),
    ...(openGraphDescription ? { openGraphDescription } : {}),
    ...(openGraphImage ? { openGraphImage } : {}),
  };
}

function validateEnabledFeatures(
  features: InvitationFeatures | undefined,
  event: InvitationEvent | undefined,
  gallery: InvitationGallery | undefined,
  music: InvitationMusic | undefined,
  rsvp: InvitationRSVPConfig | undefined,
  content: InvitationContent | undefined,
  errors: string[],
) {
  if (!features) return;
  if (features.location && !event?.mapsUrl) errors.push('features.location requiere event.mapsUrl.');
  if (features.gallery && !gallery) errors.push('features.gallery requiere gallery válido.');
  if (features.music && !music) errors.push('features.music requiere music válido.');
  if (features.rsvp && !rsvp) errors.push('features.rsvp requiere rsvp válido.');
  if (features.dressCode && !content?.dressCode) errors.push('features.dressCode requiere content.dressCode.');
  if (features.gifts && !content?.giftInfo) errors.push('features.gifts requiere content.giftInfo.');
  if (features.accommodation && !content?.accommodation) errors.push('features.accommodation requiere content.accommodation.');
  if (features.transport && !content?.transport) errors.push('features.transport requiere content.transport.');
  if (features.collaborativePlaylist && !content?.collaborativePlaylistUrl) {
    errors.push('features.collaborativePlaylist requiere content.collaborativePlaylistUrl.');
  }
  if (features.partyPic && !content?.partyPicUrl) errors.push('features.partyPic requiere content.partyPicUrl.');
}

export function parseInvitation(
  input: unknown,
  allowedTemplateIds: readonly string[] = invitationTemplateIds,
): ParseResult {
  const errors: string[] = [];
  if (!isRecord(input)) return { errors: ['La configuración debe ser un objeto JSON.'] };

  const slug = getString(input.slug);
  if (!slug || !SLUG_PATTERN.test(slug) || input.slug !== slug) {
    errors.push('slug es obligatorio y solo puede usar letras, números y guiones sin espacios externos.');
  } else if (isReservedInvitationSlug(slug)) {
    errors.push(`slug \"${slug}\" entra en conflicto con una ruta reservada.`);
  }
  const status = input.status;
  if (status !== 'draft' && status !== 'published') errors.push('status debe ser "draft" o "published".');
  const templateId = getString(input.templateId);
  if (!templateId || !allowedTemplateIds.includes(templateId)) {
    errors.push('templateId debe corresponder a un template registrado.');
  }

  const event = parseEvent(input.event, errors);
  const features = parseFeatures(input.features, errors);
  const theme = parseTheme(input.theme, errors);
  const gallery = parseGallery(input.gallery, errors);
  const music = parseMusic(input.music, errors);
  const rsvp = parseRsvp(input.rsvp, errors);
  const content = parseContent(input.content, errors);
  const seo = parseSeo(input.seo, errors);
  validateEnabledFeatures(features, event, gallery, music, rsvp, content, errors);

  if (status === 'published' && event) {
    if (!event.time) errors.push('Las invitaciones publicadas requieren event.time.');
    if (!event.utcOffset) errors.push('Las invitaciones publicadas requieren event.utcOffset.');
    if (!event.venueName) errors.push('Las invitaciones publicadas requieren event.venueName.');
    if (features?.rsvp) {
      errors.push('Las invitaciones publicadas no pueden habilitar el RSVP simulado.');
    }
  }

  if (
    errors.length ||
    !slug ||
    !event ||
    !features ||
    !templateId ||
    (status !== 'draft' && status !== 'published')
  ) {
    return { errors };
  }

  return {
    errors,
    invitation: {
      slug,
      status,
      templateId,
      event,
      features,
      ...(theme && Object.keys(theme).length ? { theme } : {}),
      ...(gallery ? { gallery } : {}),
      ...(music ? { music } : {}),
      ...(rsvp ? { rsvp } : {}),
      ...(content ? { content } : {}),
      ...(seo ? { seo } : {}),
    },
  };
}

function loadInvitationModules(modules: Record<string, unknown>) {
  const loadedInvitations: LoadedInvitation[] = [];
  const invalidInvitations: InvalidInvitation[] = [];

  Object.entries(modules).forEach(([path, rawInvitation]) => {
    const fileName = path.split('/').pop() ?? path;
    const { invitation, errors } = parseInvitation(rawInvitation);
    if (invitation) loadedInvitations.push({ invitation, fileName });
    else invalidInvitations.push({ fileName, errors });
  });

  const duplicateSlugs = new Set(
    loadedInvitations
      .map(({ invitation }) => invitation.slug.toLowerCase())
      .filter((slug, index, slugs) => slugs.indexOf(slug) !== index),
  );
  const invitations = loadedInvitations.filter(
    ({ invitation }) => !duplicateSlugs.has(invitation.slug.toLowerCase()),
  );

  duplicateSlugs.forEach((slug) => {
    invalidInvitations.push({ fileName: slug, errors: [`El slug "${slug}" está duplicado.`] });
  });

  return { invitations, invalidInvitations };
}

const loadedEvents = loadInvitationModules(eventModules);
const loadedDemos = loadInvitationModules(demoModules);

const crossCollectionDuplicateSlugs = new Set(
  [...loadedEvents.invitations, ...loadedDemos.invitations]
    .map(({ invitation }) => invitation.slug.toLowerCase())
    .filter((slug, index, slugs) => slugs.indexOf(slug) !== index),
);

export const invitations = loadedEvents.invitations.filter(
  ({ invitation }) => !crossCollectionDuplicateSlugs.has(invitation.slug.toLowerCase()),
);
export const demoInvitations = loadedDemos.invitations.filter(
  ({ invitation }) => !crossCollectionDuplicateSlugs.has(invitation.slug.toLowerCase()),
);
export const invalidInvitations = [
  ...loadedEvents.invalidInvitations,
  ...loadedDemos.invalidInvitations,
  ...[...crossCollectionDuplicateSlugs].map((slug) => ({
    fileName: slug,
    errors: [`El slug "${slug}" está duplicado entre eventos y demos.`],
  })),
];

if (import.meta.env.DEV && invalidInvitations.length) {
  console.warn('Configuraciones de invitación inválidas:', invalidInvitations);
}

export function getInvitationBySlug(slug: string | undefined) {
  const normalizedSlug = slug?.toLowerCase();
  return invitations.find(
    ({ invitation }) =>
      invitation.status === 'published' &&
      invitation.slug.toLowerCase() === normalizedSlug,
  );
}

export function getDemoInvitationByTemplateId(templateId: string) {
  return demoInvitations.find(({ invitation }) => invitation.templateId === templateId);
}
