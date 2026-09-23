import './Projects.css'

import mesaflow from '../../assets/projects/mesaflow.png'
import cliniq from '../../assets/projects/cliniq.png'
import nexaStore from '../../assets/projects/nexa-store.png'

function Projects() {
  return (
    <section className="projects" id="projetos">
      <div className="projects__container">

        <div className="projects__intro">
          <p className="projects__eyebrow">PROJETOS & DEMONSTRAÇÕES</p>

          <div className="projects__intro-grid">
            <h2 className="projects__title">
              Ideias que ganham
              <span> forma na prática.</span>
            </h2>

            <p className="projects__description">
              Projetos demonstrativos criados pela Tech Vibe para mostrar,
              na prática, como diferentes soluções digitais podem funcionar
              dentro de negócios reais.
            </p>
          </div>
        </div>

        <div className="projects__list">

          {/* 01 — MESAFLOW */}

          <article className="project">
            <div className="project__visual">
              <img
                src={mesaflow}
                alt="MesaFlow — sistema demonstrativo para restaurantes"
              />
            </div>

            <div className="project__info">
              <div>
                <p className="project__category">
                  RESTAURANTES • OPERAÇÃO • GESTÃO
                </p>

                <h3>MesaFlow</h3>

                <p className="project__text">
                  Uma plataforma demonstrativa para restaurantes centralizarem
                  pedidos, comandas, cozinha e gestão da operação em uma única
                  experiência digital.
                </p>
              </div>

              
            </div>
          </article>

          {/* 02 — CLINIQ */}

          <article className="project">
            <div className="project__visual">
              <img
                src={cliniq}
                alt="Cliniq — sistema demonstrativo para clínicas"
              />
            </div>

            <div className="project__info">
              <div>
                <p className="project__category">
                  CLÍNICAS • AGENDA • AUTOMAÇÃO
                </p>

                <h3>Cliniq</h3>

                <p className="project__text">
                  Uma plataforma demonstrativa para organizar agendamentos,
                  pacientes e atendimentos, conectando gestão e automações
                  em uma interface simples.
                </p>
              </div>

              
            </div>
          </article>

          {/* 03 — NEXA STORE */}

          <article className="project">
            <div className="project__visual">
              <img
                src={nexaStore}
                alt="Nexa Store — e-commerce demonstrativo"
              />
            </div>

            <div className="project__info">
              <div>
                <p className="project__category">
                  VAREJO • E-COMMERCE • EXPERIÊNCIA DIGITAL
                </p>

                <h3>Nexa Store</h3>

                <p className="project__text">
                  Uma loja virtual demonstrativa com catálogo, categorias,
                  produtos e uma experiência de compra pensada para funcionar
                  de forma simples em diferentes dispositivos.
                </p>
              </div>

            </div>
          </article>

        </div>

      </div>
    </section>
  )
}

export default Projects