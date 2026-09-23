import './Solutions.css'

import sistemaSobMedida from '../../assets/solutions/sistema-sob-medida.webp'
import automacoes from '../../assets/solutions/automacoes.webp'
import sitesExperiencias from '../../assets/solutions/sites-experiencias.webp'

function Solutions() {
  return (
    <section className="solutions" id="solucoes">
      <div className="solutions__container">

        {/* INTRO */}

        <div className="solutions__intro">
          <p className="solutions__eyebrow">O QUE A GENTE RESOLVE</p>

          <div className="solutions__intro-grid">
            <h2 className="solutions__title">
              Tecnologia para tirar
              <span> peso da sua operação.</span>
            </h2>

            <p className="solutions__description">
              A Tech Vibe transforma processos manuais, informações espalhadas
              e tarefas repetitivas em soluções digitais mais simples,
              organizadas e eficientes.
            </p>
          </div>
        </div>

        {/* 01 — SISTEMAS SOB MEDIDA */}

        <article className="solution-item">
          <div className="solution-item__number">01</div>

          <div className="solution-item__content">
            <p className="solution-item__label">
              SISTEMAS SOB MEDIDA
            </p>

            <h3>
              Sua operação.
              <span> Mais simples de controlar.</span>
            </h3>

            <p>
              Criamos sistemas pensados para a realidade do seu negócio,
              centralizando informações, processos e ferramentas em um só lugar.
            </p>

            <a href="#contato">
              Saiba mais <span>→</span>
            </a>
          </div>

          <div className="solution-item__visual">
            <img
              src={sistemaSobMedida}
              alt="Sistema sob medida desenvolvido pela Tech Vibe"
            />
          </div>
        </article>

        {/* 02 — AUTOMAÇÕES */}

        <article className="solution-item solution-item--reverse">
          <div className="solution-item__number">02</div>

          <div className="solution-item__visual">
            <img
              src={automacoes}
              alt="Automação de processos empresariais"
            />
          </div>

          <div className="solution-item__content">
            <p className="solution-item__label">
              AUTOMAÇÕES
            </p>

            <h3>
              Menos tarefas repetitivas.
              <span> Mais tempo para o que importa.</span>
            </h3>

            <p>
              Automatizamos processos que hoje dependem de tarefas manuais,
              conectando ferramentas e criando fluxos que fazem parte do
              trabalho acontecer de forma automática.
            </p>

           <p>
              Sua equipe perde menos tempo com tarefas repetitivas e consegue focar no que
              realmente importa.
           </p>

            <a href="#contato">
              Saiba mais <span>→</span>
            </a>
          </div>
        </article>

        {/* 03 — SITES E EXPERIÊNCIAS DIGITAIS */}

        <article className="solution-item">
          <div className="solution-item__number">03</div>

          <div className="solution-item__content">
            <p className="solution-item__label">
              SITES E EXPERIÊNCIAS DIGITAIS
            </p>

            <h3>
              Presença digital.
              <span> Que representa o seu negócio.</span>
            </h3>

            <p>
              Criamos sites, landing pages e experiências digitais pensadas
              para apresentar sua empresa com clareza, profissionalismo e
              funcionar bem em qualquer dispositivo.
            </p>

            <p>
              Do primeiro acesso ao contato, cada detalhe é pensado para
              facilitar a jornada do cliente e fortalecer a presença da sua
              marca.
            </p>

            <a href="#contato">
              Saiba mais <span>→</span>
            </a>
          </div>

          <div className="solution-item__visual">
            <img
              src={sitesExperiencias}
              alt="Site responsivo desenvolvido pela Tech Vibe em desktop e celular"
            />
          </div>
        </article>

      </div>
    </section>
  )
}

export default Solutions