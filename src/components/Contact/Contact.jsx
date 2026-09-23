import { useState } from 'react'
import './Contact.css'

import contactBackground from '../../assets/contact/contact-background.webp'

function Contact() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <section
      className="contact"
      id="contato"
      style={{ backgroundImage: `url(${contactBackground})` }}
    >
      <div className="contact__container">

        {/* LADO ESQUERDO */}
        <div className="contact__left">

          <p className="contact__eyebrow">
            <span />
            VAMOS CONVERSAR
          </p>

          <h2 className="contact__title">
            Tem algo no seu
            <br />
            negócio
            <span>
              que poderia funcionar
              <br />
              melhor?
            </span>
          </h2>

          <p className="contact__description">
            Conte pra gente o que está acontecendo. Antes de pensar em
            tecnologia, queremos entender o problema e a realidade do seu
            negócio.
          </p>

          <div className="contact__benefits">

            <div className="contact__benefit">
              <div className="contact__benefit-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6A8.38 8.38 0 0 1 12.5 3h.5a8.48 8.48 0 0 1 8 8z" />
                </svg>
              </div>

              <div>
                <strong>Conversa direta</strong>
                <span>Sem compromisso</span>
              </div>
            </div>

            <div className="contact__benefit">
              <div className="contact__benefit-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13 2 4.5 13H11l-1 9L19.5 10H13z" />
                </svg>
              </div>

              <div>
                <strong>Resposta rápida</strong>
                <span>Atendimento real</span>
              </div>
            </div>

            <div className="contact__benefit">
              <div className="contact__benefit-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3 20 6v5c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z" />
                  <path d="m8.5 12 2.2 2.2 4.8-5" />
                </svg>
              </div>

              <div>
                <strong>Foco em soluções</strong>
                <span>Do seu jeito, pro seu negócio</span>
              </div>
            </div>

          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="contact__right">

          <div className="contact__hint">
            <span>Escolha seu canal</span>

            <svg viewBox="0 0 90 55" aria-hidden="true">
              <path d="M5 8C35 8 60 18 74 39" />
              <path d="m66 35 9 5 2-10" />
            </svg>
          </div>

          <div
            className={`contact__menu ${
              contactOpen ? 'contact__menu--open' : ''
            }`}
          >

            <button
              type="button"
              className="contact__button"
              onClick={() => setContactOpen(!contactOpen)}
              aria-expanded={contactOpen}
            >
              <span className="contact__button-shine" />

              <span className="contact__button-text">
                Fale com a Tech Vibe
              </span>

              <span className="contact__button-arrow">
                {contactOpen ? '×' : '→'}
              </span>
            </button>

            {/* CONEXÕES */}
            <svg
              className="contact__connections"
              viewBox="0 0 600 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="contact__connection-base"
                d="M300 0 V35 M300 35 H100 V105 M300 35 V105 M300 35 H500 V105"
              />

              <path
                className="contact__connection-glow"
                d="M300 0 V35 M300 35 H100 V105 M300 35 V105 M300 35 H500 V105"
              />
            </svg>

            {/* REDES */}
            <div className="contact__channels">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/5511940333175?text=Ol%C3%A1%21%20Conheci%20a%20Tech%20Vibe%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20o%20meu%20neg%C3%B3cio."
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel contact__channel--whatsapp"
                aria-label="Falar com a Tech Vibe pelo WhatsApp"
              >
                <div className="contact__channel-circle">

                  <svg viewBox="0 0 32 32" aria-hidden="true">
                    <path
                      d="M16 4a11 11 0 0 0-9.4 16.7L5 27l6.5-1.7A11 11 0 1 0 16 4Z"
                    />
                    <path
                      d="M12 10.5c.3-.6.7-.6 1-.6h.7c.2 0 .5.1.7.6l1 2.3c.1.3.1.6-.1.9l-.8 1c-.2.2-.2.5 0 .8.8 1.4 2 2.5 3.5 3.3.3.2.6.1.8-.1l1-1.2c.2-.3.5-.3.8-.2l2.4 1.1c.3.1.5.4.5.7 0 .5-.2 1.7-1.1 2.5-.8.8-2 1.2-3.3.9-2-.5-4.3-1.5-6.3-3.4-1.7-1.6-3.2-3.7-3.6-5.5-.4-1.5.2-2.5.8-3.1Z"
                    />
                  </svg>

                </div>

                <div className="contact__channel-label">
                  <strong>WhatsApp</strong>
                  <span>Fale agora</span>
                </div>
              </a>

              {/* INSTAGRAM */}
            <a
                href="https://www.instagram.com/tech_vb/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel contact__channel--instagram"
                aria-label="Acessar o Instagram da Tech Vibe"
              >
                <div className="contact__channel-circle">

                  <svg viewBox="0 0 32 32" aria-hidden="true">
                    <rect x="6" y="6" width="20" height="20" rx="6" />
                    <circle cx="16" cy="16" r="5" />
                    <circle cx="22.5" cy="9.5" r="1.3" />
                  </svg>

                </div>

                <div className="contact__channel-label">
                  <strong>Instagram</strong>
                  <span>Acompanhe</span>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:techvibe.devtech@gmail.com"
                className="contact__channel contact__channel--email"
                aria-label="Enviar um e-mail para a Tech Vibe"
              >
                <div className="contact__channel-circle">

                  <svg viewBox="0 0 32 32" aria-hidden="true">
                    <rect x="5" y="8" width="22" height="16" rx="3" />
                    <path d="m7 10 9 7 9-7" />
                  </svg>

                </div>

                <div className="contact__channel-label">
                  <strong>E-mail</strong>
                  <span>Envie sua mensagem</span>
                </div>
              </a>

            </div>

          </div>

          <div className="contact__note">
            <span />
            <p>A primeira conversa é para entender. Sem compromisso.</p>
            <span />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact