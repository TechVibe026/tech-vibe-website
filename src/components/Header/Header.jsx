import { useState } from 'react'
import './Header.css'

import techVibeLogo from '../../assets/logo/tech-vibe-logo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`header ${menuOpen ? 'header--open' : ''}`}>
      <div className="header__inner">

        <a
          href="#inicio"
          className="header__logo"
          onClick={closeMenu}
        >
          <img src={techVibeLogo} alt="Tech Vibe" />
        </a>

        <nav
          className="header__nav"
          aria-label="Navegação principal"
        >
          <a href="#solucoes">Soluções</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <a href="#contato" className="header__contact">
          Fale com a gente
          <span>→</span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <div className="header__mobile-menu">
          <nav
            className="header__mobile-nav"
            aria-label="Navegação mobile"
          >
            <a href="#inicio" onClick={closeMenu}>
              <span>01</span>
              Início
            </a>

            <a href="#solucoes" onClick={closeMenu}>
              <span>02</span>
              Soluções
            </a>

            <a href="#projetos" onClick={closeMenu}>
              <span>03</span>
              Projetos
            </a>

            <a href="#sobre" onClick={closeMenu}>
              <span>04</span>
              Sobre
            </a>
          </nav>

          <a
            href="#contato"
            className="header__mobile-contact"
            onClick={closeMenu}
          >
            <span>Fale com a Tech Vibe</span>
            <strong>→</strong>
          </a>
        </div>

      </div>
    </header>
  )
}

export default Header