const reservedInvitationSlugs = new Set([
  'assets',
  'contacto',
  'consultar-disponibilidad',
  'favicon.ico',
  'invitaciones',
  'servicios',
  'staticwebapp.config.json',
]);

export function isReservedInvitationSlug(slug: string) {
  return reservedInvitationSlugs.has(slug.toLowerCase());
}

export function isReservedInvitationPath(pathname: string) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';

  return (
    normalizedPath === '/' ||
    normalizedPath === '/contacto' ||
    normalizedPath === '/consultar-disponibilidad' ||
    normalizedPath === '/invitaciones' ||
    normalizedPath.startsWith('/invitaciones/') ||
    normalizedPath === '/servicios' ||
    normalizedPath.startsWith('/servicios/') ||
    normalizedPath === '/assets' ||
    normalizedPath.startsWith('/assets/') ||
    normalizedPath === '/favicon.ico' ||
    normalizedPath === '/staticwebapp.config.json'
  );
}
