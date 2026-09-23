import './Privacy.css'
import legalBackground from '../../assets/legal/legal-background.webp'


function Privacy() {
  return (
    <main
        className="privacy"
        style={{ backgroundImage: `url(${legalBackground})` }}
        >
      <div className="privacy__container">

        <a href="/" className="privacy__back">
          ← Voltar para o site
        </a>

        <div className="privacy__header">
          <p className="privacy__eyebrow">LEGAL • TECH VIBE</p>

          <h1>Política de Privacidade</h1>

          <p>
            Esta Política explica como a Tech Vibe trata informações pessoais
            recebidas por meio dos nossos canais de contato e da utilização do site.
          </p>

          <span>Última atualização: 22 de setembro de 2026</span>
        </div>

        <div className="privacy__content">

          <section>
            <h2>1. Quais informações podemos receber</h2>

            <p>
              Atualmente, o site da Tech Vibe não possui formulário próprio para
              cadastro ou envio de dados pessoais.
            </p>

            <p>
              Ao entrar em contato conosco por WhatsApp, Instagram ou e-mail,
              você poderá fornecer voluntariamente informações como nome, dados
              de contato, informações sobre sua empresa e detalhes relacionados
              à sua solicitação.
            </p>
          </section>

          <section>
            <h2>2. Como utilizamos essas informações</h2>

            <p>
              As informações recebidas podem ser utilizadas para responder ao
              seu contato, compreender as necessidades do seu negócio, prestar
              atendimento, elaborar propostas e manter comunicações relacionadas
              aos serviços solicitados.
            </p>
          </section>

          <section>
            <h2>3. Compartilhamento de dados</h2>

            <p>
              A Tech Vibe não comercializa dados pessoais.
            </p>

            <p>
              Informações poderão ser tratadas por serviços e plataformas
              utilizados para comunicação ou operação, ou compartilhadas quando
              necessário para cumprir obrigações legais.
            </p>
          </section>

          <section>
            <h2>4. Serviços de terceiros</h2>

            <p>
              O site possui links para serviços externos, como WhatsApp,
              Instagram e serviços de e-mail. Ao utilizar essas plataformas,
              seus dados também poderão ser tratados de acordo com as políticas
              de privacidade dos respectivos serviços.
            </p>
          </section>

          <section>
            <h2>5. Cookies e tecnologias de medição</h2>

            <p>
              No momento, a Tech Vibe não utiliza neste site ferramentas próprias
              de análise ou publicidade que dependam de cookies para acompanhar
              o comportamento dos visitantes.
            </p>

            <p>
              Caso ferramentas desse tipo sejam implementadas, esta Política
              será atualizada para informar as tecnologias utilizadas e suas
              respectivas finalidades.
            </p>
          </section>

          <section>
            <h2>6. Segurança</h2>

            <p>
              Buscamos adotar medidas adequadas para proteger as informações sob
              nossa responsabilidade contra acesso não autorizado, perda,
              alteração ou divulgação indevida.
            </p>
          </section>

          <section>
            <h2>7. Seus direitos</h2>

            <p>
              Você poderá solicitar informações sobre o tratamento de seus dados
              pessoais e exercer os direitos previstos na Lei Geral de Proteção
              de Dados Pessoais (LGPD), quando aplicáveis.
            </p>

            <p>
              Para solicitações relacionadas à privacidade e aos seus dados,
              entre em contato pelo e-mail{' '}
              <a href="mailto:techvibe.devtech@gmail.com">
                techvibe.devtech@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2>8. Atualizações desta Política</h2>

            <p>
              Esta Política poderá ser atualizada caso ocorram mudanças na forma
              como o site ou nossos canais tratam informações pessoais. A data da
              versão mais recente será indicada no início desta página.
            </p>
          </section>

        </div>
      </div>
    </main>
  )
}

export default Privacy