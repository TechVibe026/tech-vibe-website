import './Hero.css'
import heroBackground from '../../assets/hero/hero-background.webp'

function Hero() {
  return (
    <section
        className="hero"
        id="inicio"
        style={{ backgroundImage: `url(${heroBackground})` }}
        >
      <div className="hero__content">
        <p className="hero__eyebrow">TECNOLOGIA • ESTRATÉGIA • RESULTADO</p>

        <h1 className="hero__title">
          Tecnologia que impulsiona
          <span> o seu negócio.</span>
        </h1>

        <p className="hero__description">
          Desenvolvemos sistemas, automações, sites e soluções sob medida
          para empresas que querem mais tempo, controle e resultados.
        </p>

        <div className="hero__actions">
          <a href="#solucoes" className="hero__primary">
            Conheça nossas soluções
            <span>→</span>
          </a>

          <a href="#projetos" className="hero__secondary">
            Ver projetos
          </a>
        </div>
      </div>

      <div className="hero__curve" aria-hidden="true">
  <svg
    viewBox="0 0 1440 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="
        M 0 55
        C 260 82, 430 82, 650 55
        C 870 28, 1080 22, 1440 58
        L 1440 100
        L 0 100
        Z
      "
    />
  </svg>
</div>
    </section>
  )
}

export default Hero