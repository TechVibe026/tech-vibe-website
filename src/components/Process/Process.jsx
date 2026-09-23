import './Process.css'

function Process() {
  return (
    <section className="process" id="processo">
      <div className="process__container">

        <div className="process__intro">
          <p className="process__eyebrow">COMO FUNCIONA</p>

          <div className="process__intro-grid">
            <h2 className="process__title">
              Da ideia à solução,
              <span> sem complicação.</span>
            </h2>

            <p className="process__description">
              Entendemos primeiro o seu negócio. Não começamos pela tecnologia —
              começamos pelo problema que precisa ser resolvido.
            </p>
          </div>
        </div>

        <div className="process__steps">

          <article className="process__step">
            <span className="process__number">01</span>

            <h3>
              Entendemos
              <span> o problema.</span>
            </h3>

            <p>
              Conversamos com você para entender sua operação, identificar
              gargalos e descobrir o que realmente precisa ser resolvido.
            </p>
          </article>

          <article className="process__step">
            <span className="process__number">02</span>

            <h3>
              Planejamos
              <span> a solução.</span>
            </h3>

            <p>
              Definimos o caminho mais adequado para o seu negócio, sem criar
              complexidade ou tecnologia desnecessária.
            </p>
          </article>

          <article className="process__step">
            <span className="process__number">03</span>

            <h3>
              Desenvolvemos
              <span> e validamos.</span>
            </h3>

            <p>
              Construímos a solução em etapas, testando e ajustando para garantir
              que ela funcione na prática.
            </p>
          </article>

          <article className="process__step">
            <span className="process__number">04</span>

            <h3>
              Entregamos
              <span> e evoluímos.</span>
            </h3>

            <p>
              Colocamos a solução para funcionar e continuamos próximos para
              acompanhar, melhorar e evoluir quando necessário.
            </p>
          </article>

        </div>

      </div>
    </section>
  )
}

export default Process