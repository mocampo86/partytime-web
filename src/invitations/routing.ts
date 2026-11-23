import { isReservedInvitationPath } from './reservedPaths';

export type InvitationRoute =
  | { kind: 'catalog' }
  | { kind: 'demo'; templateId: string }
  | { kind: 'invitation'; slug: string }
  | { kind: 'invitation-not-found' }
  | { kind: 'not-found' };

const SINGLE_SEGMENT_PATTERN = /^\/[^/]+$/;

export function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.replace(/\/+$/, '');
}

export function resolveInvitationRoute(
  pathname: string,
  knownSlugs: readonly string[],
  publishedSlugs: readonly string[],
  templateIds: readonly string[],
): InvitationRoute {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === '/invitaciones') {
    return { kind: 'catalog' };
  }

  const demoMatch = normalizedPath.match(/^\/invitaciones\/demo\/([^/]+)$/);
  if (demoMatch) {
    return templateIds.includes(demoMatch[1])
      ? { kind: 'demo', templateId: demoMatch[1] }
      : { kind: 'not-found' };
  }

  if (isReservedInvitationPath(normalizedPath)) {
    return { kind: 'not-found' };
  }

  if (!SINGLE_SEGMENT_PATTERN.test(normalizedPath)) {
    return { kind: 'not-found' };
  }

  const slug = normalizedPath.slice(1);

  if (
    publishedSlugs.some(
      (publishedSlug) => publishedSlug.toLowerCase() === slug.toLowerCase(),
    )
  ) {
    return { kind: 'invitation', slug };
  }

  return knownSlugs.some(
    (knownSlug) => knownSlug.toLowerCase() === slug.toLowerCase(),
  )
    ? { kind: 'invitation-not-found' }
    : { kind: 'not-found' };
}
