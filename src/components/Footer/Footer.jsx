import './Footer.css'

import techVibeLogo from '../../assets/logo/tech-vibe-logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__top">

          <div className="footer__brand">
            <a href="#inicio" className="footer__logo">
              <img src={techVibeLogo} alt="Tech Vibe" />
            </a>

            <p>
              Tecnologia pensada para simplificar processos,
              organizar operações e ajudar negócios a evoluir.
            </p>
          </div>

          <div className="footer__navigation">

            <div className="footer__column">
              <p className="footer__label">NAVEGAÇÃO</p>

              <a href="#inicio">Início</a>
              <a href="#solucoes">Soluções</a>
              <a href="#projetos">Projetos</a>
              <a href="#sobre">Sobre</a>
              <a href="#contato">Contato</a>
            </div>

            <div className="footer__column">
              <p className="footer__label">CONTATO</p>

              <a
                href="https://wa.me/5511940333175?text=Ol%C3%A1%21%20Conheci%20a%20Tech%20Vibe%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20o%20meu%20neg%C3%B3cio."
                target="_blank"
                rel="noopener noreferrer"
                >
                WhatsApp ↗
                </a>
              <a
                href="https://www.instagram.com/tech_vb/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Instagram ↗
                </a>
              <a href="mailto:techvibe.devtech@gmail.com">
                E-mail ↗
                </a>
            </div>

          </div>

        </div>

        <div className="footer__line" />

        <div className="footer__bottom">

          <p>
            © 2026 Tech Vibe. Todos os direitos reservados.
          </p>

          <div className="footer__legal">
            <a href="/privacidade">Política de Privacidade</a>
            <a href="/termos">Termos de Uso</a>
          </div>

          <a href="#inicio" className="footer__back">
            Voltar ao topo
            <span>↑</span>
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer