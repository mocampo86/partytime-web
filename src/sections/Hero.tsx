import partyTimeIdentity from '../assets/branding/partytime-logo-main.jpg';

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">PartyTime Uruguay</p>
          <h1 className="hero__title" id="hero-title">
            <span>Creamos recuerdos.</span>
            <span>Compartimos emociones.</span>
          </h1>
          <p className="hero__lead">
            Experiencias únicas para hacer de tu evento algo inolvidable.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#servicios">
              Conocé nuestros servicios
            </a>
            <a className="button button--secondary" href="/consultar-disponibilidad">
              Consultar fecha
            </a>
          </div>
        </div>

        <div className="hero__media" aria-hidden="true">
          <div className="hero__media-frame">
            <img
              className="hero__identity"
              src={partyTimeIdentity}
              alt=""
              width="1024"
              height="1024"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
