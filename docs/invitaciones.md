# Invitaciones digitales

PartyTime puede publicar invitaciones estáticas dentro de esta SPA. Las invitaciones se crean y administran desde el repositorio; no existe panel administrativo ni edición por parte de clientes.

## Rutas

| Ruta | Uso |
| --- | --- |
| `/invitaciones` | Catálogo comercial público de templates. |
| `/invitaciones/demo/:templateId` | Demo de un template registrado con datos ficticios. |
| `/:invitationSlug` | Invitación real publicada, por ejemplo `/20261128-XVGuada`. |

Las rutas existentes (`/`, `/contacto`, `/consultar-disponibilidad`, `/servicios/:slug`) tienen prioridad. El resolver no convierte esas rutas en invitaciones. Los slugs inexistentes o cuyo JSON tenga `"status": "draft"` muestran 404.

## Crear una invitación nueva

1. Duplicar `src/data/invitations/events/xv-guada.json` con un nombre descriptivo, por ejemplo `boda-ejemplo.json`.
2. Cambiar `slug` por un identificador único de un solo segmento. Usar letras, números y guiones; no debe repetir rutas del sitio.
3. Mantener `templateId` en un ID registrado, por ejemplo `rose-gold`.
4. Completar `event` con título, anfitrión, tipo, fecha `YYYY-MM-DD`, hora, `utcOffset` (por ejemplo `-03:00` para Uruguay), salón/localidad y `mapsUrl`.
5. Definir `features`. Cada sección se monta únicamente si su flag está en `true`.
6. Completar solo los objetos necesarios (`gallery`, `music`, `rsvp`, `content`, `seo`, `theme`). No guardar listas de invitados, teléfonos ni datos sensibles.
7. Versionar los assets locales en `public/assets/invitations/<template>/` y referenciarlos con rutas que comiencen en `/`.
8. Publicar con `"status": "published"`. Para retirarla, usar `"draft"` o eliminar el JSON.

La carga usa `import.meta.glob`, por lo que no hay que registrar el archivo en otro índice. Las demos están aisladas en `src/data/invitations/demos/`; nunca reutilizan eventos publicados. `parseInvitation` valida campos obligatorios, formato de fecha, estado, template, features y URLs antes de aceptar el evento.

### Probar localmente

```bash
npm install
npm run test
npm run dev
```

Abrir directamente:

- `http://localhost:5173/invitaciones`
- `http://localhost:5173/invitaciones/demo/rose-gold`
- `http://localhost:5173/<slug-publicado>`

Antes de desplegar ejecutar `npm run build`. La configuración `public/staticwebapp.config.json` ya reenvía rutas SPA a `index.html`, por lo que los accesos directos y refresh funcionan en Azure Static Web Apps.

## Agregar un template

1. Crear `src/invitations/templates/<template-id>/<Nombre>Template.tsx`.
2. Exportar por defecto un componente que reciba `InvitationTemplateProps`.
3. Reutilizar los componentes de `src/invitations/components/` según `invitation.features`; no renderizar secciones deshabilitadas.
4. Agregar una entrada en `src/invitations/templates/registry.tsx` con `id`, nombre, descripción, categoría, preview y `component: lazy(() => import(...))`.
5. Agregar estilos con un prefijo propio en `src/styles/invitations.css` o un archivo de estilos dedicado importado por `main.tsx`.
6. Agregar assets locales y una configuración JSON de evento si corresponde.
7. Verificar `npm run test`, `npm run typecheck` y `npm run build`.

El motor de rutas y páginas no necesita modificarse para un template adicional: el registro es el punto de extensión.

## Privacidad, SEO y compartición

- Las invitaciones reales no aparecen en `/invitaciones` ni tienen enlaces desde el catálogo.
- La metadata cliente aplica `robots: noindex, nofollow` en eventos reales y demos.
- `noindex` ayuda a evitar indexación, pero **no convierte una URL en privada**. La configuración y los assets quedan públicos para cualquiera que conozca el enlace.
- No incluir datos personales de invitados en los JSON. Los archivos se entregan al navegador y son descargables.
- La SPA actualiza `title`, `description` y Open Graph después de cargar React. WhatsApp y otros crawlers normalmente leen el HTML inicial sin ejecutar JavaScript, por lo que no se garantiza una preview distinta por evento.
- Para previews específicas por invitación se requeriría prerender/SSR, funciones edge o endpoints de Azure que respondan HTML/metadata según slug. Esto queda fuera de la Fase 1.

## Música

Los navegadores exigen una interacción explícita antes de reproducir audio. `MusicPlayer` nunca inicia solo: muestra Reproducir/Pausar y Silenciar cuando `music.src` existe. Puede agregarse `"loop": false` para que una pista autorizada termine sin repetirse. En la demo actual no hay un archivo musical aprobado; por eso el componente muestra un estado deshabilitado hasta agregar un asset local o URL segura.

## Imágenes de Rose Gold

Rose Gold usa la primera imagen de `gallery.images` como retrato hero para conservar compatibilidad con los JSON actuales. Las demás imágenes se muestran en la galería editorial y cargan de forma diferida. El retrato hero es la única imagen de invitación que usa carga prioritaria; conservar `width`, `height`, `srcSet` y `sizes` cuando estén disponibles.

## Assets de Rose Gold

La demo comercial usa imágenes WebP servidas desde `public/assets/invitations/rose-gold/`:

- `hero-900x1200.webp` y `hero-1800x2400.webp` — retrato hero responsivo (`srcSet` con ambas variantes, `objectPosition: 50% 42%`).
- `full-body.webp`, `details.webp`, `venue.webp` — galería editorial (1200 × 1600, carga diferida).
- `social-preview-1200x630.webp` — preview del catálogo y metadata social.
- `gallery-01..03.svg` y `preview.svg` — placeholders anteriores conservados como respaldo.

Procedencia: las imágenes fueron generadas con OpenAI ImageGen para esta demo y no representan personas ni eventos reales. Existe una única copia versionada en `public/assets/invitations/rose-gold/`; el manifiesto de origen con dimensiones, textos alternativos y posiciones sugeridas vive en `src/assets/rose-gold/` (`manifest.json` y `README.md`). El uso queda sujeto a los términos aplicables de OpenAI; no hay licencia de terceros ni garantía de exclusividad.

Para reemplazar o ampliar la galería: agregar los archivos optimizados en `public/assets/invitations/rose-gold/`, referenciarlos con rutas que comiencen en `/` en los JSON y completar `width`/`height` para evitar saltos de layout, más `srcSet`/`sizes`/`objectPosition` cuando corresponda. La primera imagen de `gallery.images` es siempre el retrato hero (carga prioritaria); el resto forma la galería editorial (carga diferida). No incorporar fotografías de clientes ni canciones comerciales sin autorización documentada.

### Música pendiente

No se suministró audio con licencia verificada, por lo que la demo mantiene el estado "música por confirmar" sin `music.src`. Cuando exista un archivo autorizado, copiarlo a `public/assets/invitations/rose-gold/` y configurar `music.src` (y `"loop": false` si no debe repetirse).

## RSVP real pendiente

`RSVPForm` es una demostración visual y no persiste ni envía respuestas. Para producción falta:

- Endpoint serverless o API autenticada para recibir confirmaciones.
- Persistencia por evento e invitado, con reglas de actualización/cancelación.
- Validación del lado servidor además de la validación local.
- Protección anti-spam/rate limiting y manejo de errores/reintentos.
- Consentimiento, retención, exportación/eliminación y acceso restringido a datos personales.
- Configuración segura de secretos fuera del frontend y auditoría.
- Notificación operativa a PartyTime y/o al anfitrión, evitando exponer destinatarios en código público.
