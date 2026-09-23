import './Terms.css'
import legalBackground from '../../assets/legal/legal-background.png'

function Terms() {
  return (
    <main
      className="terms"
      style={{ backgroundImage: `url(${legalBackground})` }}
>
      <div className="terms__container">

        <a href="/" className="terms__back">
          ← Voltar para o site
        </a>

        <div className="terms__header">
          <p className="terms__eyebrow">LEGAL • TECH VIBE</p>

          <h1>Termos de Uso</h1>

          <p>
            Estes Termos estabelecem as condições para utilização do site da
            Tech Vibe e dos conteúdos disponibilizados nele.
          </p>

          <span>Última atualização: 22 de setembro de 2026</span>
        </div>

        <div className="terms__content">

          <section>
            <h2>1. Finalidade do site</h2>

            <p>
              Este site apresenta a Tech Vibe, nossas soluções, projetos,
              demonstrações e canais de contato.
            </p>

            <p>
              As informações disponibilizadas possuem caráter institucional
              e informativo.
            </p>
          </section>

          <section>
            <h2>2. Uso do site</h2>

            <p>
              O site deve ser utilizado de forma lícita e adequada. Não é
              permitido tentar acessar áreas ou sistemas sem autorização,
              interferir no funcionamento do site ou utilizá-lo para atividades
              que possam prejudicar a Tech Vibe ou terceiros.
            </p>
          </section>

          <section>
            <h2>3. Projetos e demonstrações</h2>

            <p>
              Alguns projetos, interfaces, protótipos e demonstrações exibidos
              no site podem ter finalidade ilustrativa ou experimental e são
              apresentados para demonstrar possibilidades de aplicação das
              soluções desenvolvidas pela Tech Vibe.
            </p>

            <p>
              A apresentação de uma demonstração não significa que todas as
              funcionalidades exibidas estejam disponíveis como um produto
              padronizado ou pronto para contratação imediata.
            </p>
          </section>

          <section>
            <h2>4. Serviços e propostas</h2>

            <p>
              A apresentação de soluções ou serviços neste site não constitui,
              por si só, uma proposta comercial definitiva.
            </p>

            <p>
              Escopo, valores, prazos, entregas e demais condições de cada
              projeto serão definidos de acordo com a necessidade do cliente
              e poderão ser formalizados em proposta, orçamento ou contrato.
            </p>
          </section>

          <section>
            <h2>5. Propriedade intelectual</h2>

            <p>
              Os conteúdos próprios da Tech Vibe presentes neste site, incluindo
              identidade visual, textos, interfaces e materiais autorais, são
              protegidos pela legislação aplicável.
            </p>

            <p>
              A reprodução ou utilização desses materiais fora das hipóteses
              permitidas por lei depende de autorização do respectivo titular.
            </p>
          </section>

          <section>
            <h2>6. Disponibilidade e alterações</h2>

            <p>
              Podemos atualizar, modificar ou remover conteúdos, projetos,
              funcionalidades e informações do site sempre que necessário.
            </p>

            <p>
              Também podem ocorrer indisponibilidades temporárias decorrentes
              de manutenção, falhas técnicas ou serviços de terceiros.
            </p>
          </section>

          <section>
            <h2>7. Privacidade</h2>

            <p>
              Informações sobre o tratamento de dados pessoais estão disponíveis
              em nossa{' '}
              <a href="/privacidade">Política de Privacidade</a>.
            </p>
          </section>

          <section>
            <h2>8. Contato</h2>

            <p>
              Em caso de dúvidas sobre estes Termos, entre em contato pelo e-mail{' '}
              <a href="mailto:techvibe.devtech@gmail.com">
                techvibe.devtech@gmail.com
              </a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}

export default Terms