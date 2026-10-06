export function NotFoundPage() {
  return (
    <section className="site-section not-found" aria-labelledby="not-found-title">
      <div className="not-found__panel">
        <p className="hero__eyebrow">Error 404</p>
        <h1 id="not-found-title">Página no encontrada</h1>
        <p>
          La dirección que buscaste no existe o todavía no está disponible.
        </p>
        <a className="button button--primary" href="/">
          Volver al inicio
        </a>
      </div>
    </section>
  );
}
