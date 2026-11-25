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

Los navegadores exigen una interacción explícita antes de reproducir audio. `MusicPlayer` nunca inicia solo: muestra Reproducir/Pausar y Silenciar cuando `music.src` existe. En la demo actual no hay un archivo musical aprobado; por eso el componente muestra un estado deshabilitado hasta agregar un asset local o URL segura.

## Assets pendientes de Rose Gold

La demo usa ilustraciones SVG creadas para el repositorio en `public/assets/invitations/rose-gold/`. Para completar la experiencia fotográfica quedan pendientes, con licencia verificada para uso comercial:

- Retrato vertical principal de muestra, preferiblemente WebP/AVIF alrededor de 900 × 1200.
- De 3 a 5 imágenes editoriales adicionales con sus dimensiones y textos alternativos.
- Opcionalmente, un archivo de audio autorizado con derechos claros de reproducción web.

Reemplazar los `src` en los JSON conservando rutas locales y agregando `width`/`height` para evitar saltos de layout. No incorporar fotografías de clientes ni canciones comerciales sin autorización documentada.

## RSVP real pendiente

`RSVPForm` es una demostración visual y no persiste ni envía respuestas. Para producción falta:

- Endpoint serverless o API autenticada para recibir confirmaciones.
- Persistencia por evento e invitado, con reglas de actualización/cancelación.
- Validación del lado servidor además de la validación local.
- Protección anti-spam/rate limiting y manejo de errores/reintentos.
- Consentimiento, retención, exportación/eliminación y acceso restringido a datos personales.
- Configuración segura de secretos fuera del frontend y auditoría.
- Notificación operativa a PartyTime y/o al anfitrión, evitando exponer destinatarios en código público.
