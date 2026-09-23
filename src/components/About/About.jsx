import './About.css'

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__container">

        {/* ABERTURA */}

        <div className="about__intro">
          <p className="about__eyebrow">SOBRE A TECH VIBE</p>

          <div className="about__intro-grid">
            <h2 className="about__title">
              Tecnologia precisa
              <span> fazer sentido para o negócio.</span>
            </h2>

            <div className="about__intro-text">
              <p>
                A Tech Vibe é uma empresa de tecnologia focada em criar
                soluções digitais para negócios que querem organizar processos,
                ganhar eficiência e evoluir sua presença digital.
              </p>

              <p>
                Desenvolvemos sistemas, automações e experiências digitais
                partindo de uma ideia simples: entender primeiro o problema
                para depois decidir qual tecnologia realmente faz sentido.
              </p>
            </div>
          </div>
        </div>

        {/* MANIFESTO */}

        <div className="about__manifesto">
          <p className="about__manifesto-label">NO QUE ACREDITAMOS</p>

          <div className="about__manifesto-grid">
            <h3>
              Não acreditamos em
              <span> tecnologia por tecnologia.</span>
            </h3>

            <div className="about__manifesto-text">
              <p>
                Nem todo negócio precisa de um sistema enorme. Nem todo
                processo precisa ser automatizado. E nem toda empresa precisa
                da mesma solução.
              </p>

              <p>
                Nosso trabalho começa entendendo a realidade de cada operação
                para construir algo que seja realmente útil no dia a dia.
              </p>
            </div>
          </div>
        </div>

        {/* PRINCÍPIOS */}

        <div className="about__principles">

          <article className="about__principle">
            <span className="about__principle-number">01</span>

            <h3>Simples</h3>

            <p>
              Tecnologia que facilita o trabalho em vez de criar mais
              complexidade.
            </p>
          </article>

          <article className="about__principle">
            <span className="about__principle-number">02</span>

            <h3>Sob medida</h3>

            <p>
              Soluções pensadas para a realidade, os processos e os objetivos
              de cada negócio.
            </p>
          </article>

          <article className="about__principle">
            <span className="about__principle-number">03</span>

            <h3>Próximos</h3>

            <p>
              Entender o negócio, ouvir quem vive a operação e construir junto
              faz parte do nosso processo.
            </p>
          </article>

        </div>

      </div>
    </section>
  )
}

export default About