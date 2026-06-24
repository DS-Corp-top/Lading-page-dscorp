import { useEffect } from 'react'
import './App.css'
import heroPortraitBg from './assets/canva/hero-portrait-bg.png'
import heroTeamLeft from './assets/canva/hero-team-left.png'
import heroTeamCenter from './assets/canva/hero-team-center.png'
import heroTeamRight from './assets/canva/hero-team-right.png'
import whoBackground from './assets/canva/quem-somos-bg.png'
import fundamentalsImageOne from './assets/canva/fundamentos-1.jpg'
import fundamentalsImageTwo from './assets/canva/fundamentos-2.jpg'
import fundamentalsImageThree from './assets/canva/fundamentos-3.jpg'

const brandLogo = '/DS-Corp.svg'

const heroTags = [
  'Engenharia de Software',
  'Business Intelligence',
  'Automação de Processos',
  'Integração de Sistemas',
]

const whoWeAreParagraphs = [
  'Somos uma empresa especializada em soluções inteligentes baseada em dados, ajudando negócios a coletar, organizar, analisar e transformar informações em estratégias de crescimento, automações e produtos digitais mais eficientes.',
  'Na DS Corp, a tecnologia é nossa base, mas os dados são o nosso combustível.',
]

const whoHighlights = [
  'Engenharia para sistemas, APIs e integração de sistemas',
  'Automação de processos para ganho de escala',
  'Business Intelligence para leitura estratégica',
  'Estrutura para decisões rápidas e seguras',
]

const fundamentalsText =
  'A DS Corp combina engenharia de software, automação de processos, integração de sistemas, dados e inteligência gerencial para construir soluções digitais, fluxos operacionais e camadas de leitura de negócio. O objetivo não é apenas organizar informação, mas criar estrutura técnica para execução, escala e decisão.'

const softwareEngineeringBulletPoints = [
  'Sistemas web e internos orientados ao negócio',
  'Integração de sistemas entre plataformas, ERPs e ferramentas operacionais',
  'APIs, automações e fluxos para reduzir retrabalho',
]

const dataAndBiBulletPoints = [
  'Dashboards gerenciais e operacionais',
  'Modelagem de dados para leitura confiável',
  'Indicadores para performance, margem e eficiência',
]

const processAutomationBulletPoints = [
  'Automação de tarefas operacionais e administrativas',
  'Fluxos de aprovação, alertas e gatilhos entre sistemas',
  'Padronização de rotinas para reduzir gargalos e retrabalho',
  'Integração de etapas críticas com mais velocidade e rastreabilidade',
]

const integrationBulletPoints = [
  'Transformam processos manuais em fluxos digitais mais confiáveis.',
  'Conectam sistemas, dados e operação em uma mesma arquitetura.',
  'Facilitam a leitura de desempenho e a identificação de gargalos.',
  'Criam base técnica para crescer com mais velocidade e controle.',
]

const consultingBenefits = [
  'Automação de processos operacionais e administrativos para reduzir gargalos e retrabalho',
  'Automatização de relatórios operacionais e gerenciais com atualizações em tempo real',
  'Análise de performance financeira cruzando receitas, despesas, tributos e KPIs operacionais',
  'Integração de sistemas, APIs e fluxos que conectam ambientes financeiros, comerciais e operacionais',
  'Orquestração de etapas, aprovações e notificações entre times e plataformas',
  'Planejamento e orçamento mais precisos com base em dados históricos e tendências de mercado',
  'Capacidade de resposta mais rápida pela integração entre processos, dados e operação',
]

const fundamentalsGallery = [
  {
    src: fundamentalsImageOne,
    alt: 'Profissionais analisando documentos financeiros',
  },
  {
    src: fundamentalsImageTwo,
    alt: 'Relatórios, calculadora e planilhas em mesa corporativa',
  },
  {
    src: fundamentalsImageThree,
    alt: 'Documentos com gráficos e anotações estratégicas',
  },
]

const comparisonCards = [
  {
    title: 'Engenharia de Software',
    intro:
      'A engenharia de software organiza a operação digital da empresa. Ela transforma necessidades do negócio em sistemas, integrações e automações que dão velocidade, padronização e escala para a execução.',
    items: softwareEngineeringBulletPoints,
    closing:
      'Quando bem aplicada, reduz ruído operacional, melhora a experiência interna e conecta tecnologia diretamente ao resultado.',
  },
  {
    title: 'Dados e Business Intelligence',
    intro:
      'Business Intelligence transforma dados dispersos em leitura acionável. O foco é dar clareza para operação, gestão e liderança por meio de indicadores confiáveis e contexto analítico.',
    items: dataAndBiBulletPoints,
    closing:
      'Mais do que visualizar números, BI bem estruturado ajuda a orientar prioridades, corrigir desvios e acelerar a tomada de decisão.',
  },
  {
    title: 'Automação de Processos',
    intro:
      'Automação de processos elimina etapas manuais desnecessárias e transforma rotinas críticas em fluxos digitais mais previsíveis. O foco é ganhar velocidade, reduzir falhas e aumentar a capacidade operacional.',
    items: processAutomationBulletPoints,
    closing:
      'Quando conectada à engenharia e aos dados, a automação deixa de ser tarefa isolada e passa a ser mecanismo de escala do negócio.',
  },
]

const toolCards = [
  {
    name: 'Microsoft Fabric',
    logo: '/microsoft-fabric.svg',
    logoAlt: 'Logo do Microsoft Fabric',
    logoFrameClassName: 'tool-card__logo-frame--fabric',
    logoClassName: 'tool-card__logo--fabric',
    title: 'O que é o Microsoft Fabric?',
    text:
      'O Microsoft Fabric é uma plataforma unificada de análise de dados desenvolvida pela Microsoft, lançada oficialmente em 2023. Seu objetivo é integrar diversas ferramentas de engenharia de dados, ciência de dados, business intelligence e armazenamento em um único ambiente.',
  },
  {
    name: 'Databricks',
    logo: '/databricks-logo.png',
    logoAlt: 'Logo do Databricks',
    logoFrameClassName: 'tool-card__logo-frame--databricks',
    logoClassName: 'tool-card__logo--databricks',
    title: 'O que é o Databricks?',
    text:
      'O Databricks é uma plataforma unificada de análise de dados, engenharia de dados, ciência de dados e machine learning, baseada no Apache Spark. Ela foi criada para facilitar o processamento de grandes volumes de dados de forma rápida, escalável e colaborativa.',
  },
]

function AnalyticsIcon() {
  return (
    <svg
      className="analytics-illustration"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="32" y="48" width="118" height="96" rx="16" stroke="currentColor" strokeWidth="7" />
      <path d="M56 117V95" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M82 117V79" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M108 117V101" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M134 117V69" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M54 72L83 52L106 62L145 28"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M136 28H153V45" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M89 145V171" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M59 171H120" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M185 116C211.51 116 233 137.49 233 164C233 190.51 211.51 212 185 212C158.49 212 137 190.51 137 164C137 137.49 158.49 116 185 116Z"
        stroke="currentColor"
        strokeWidth="7"
      />
      <path d="M184.87 141.5V187.5" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path
        d="M198 150.5C194.99 145.83 190.34 143.5 184.06 143.5C176.37 143.5 171.5 147.37 171.5 153.75C171.5 160.56 176.25 163.95 185.75 165.4C194.34 166.74 198.62 169.73 198.62 176.88C198.62 184.22 193.26 188.5 184.19 188.5C176.73 188.5 171.12 185.81 167.5 180.44"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M137 194L154 177" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M151 191L168 208" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      className="contact-action__icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.17 3 3.31 3.88 3.31 4.96C3.31 6.04 4.17 6.91 5.25 6.91C6.33 6.91 7.19 6.04 7.19 4.96C7.19 3.88 6.33 3 5.25 3ZM20.69 13.09C20.69 10.05 19.04 8.18 15.86 8.18C14.33 8.18 13.65 9.02 13.27 9.62V8.5H10.03C10.07 9.24 10.03 20 10.03 20H13.27V13.58C13.27 13.24 13.29 12.9 13.39 12.66C13.65 11.98 14.24 11.28 15.24 11.28C16.55 11.28 17.08 12.27 17.08 13.73V20H20.31V13.35C20.31 13.26 20.31 13.17 20.31 13.09H20.69Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      className="contact-action__icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.25" cy="6.75" r="1.25" fill="currentColor" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      className="contact-action__icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 4C7.58 4 4 7.44 4 11.69C4 13.21 4.46 14.64 5.24 15.85L4.5 20L8.8 19.3C9.97 19.96 10.95 20 12 20C16.42 20 20 16.56 20 12.31C20 8.06 16.42 4 12 4Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
      <path
        d="M9.34 9.4C9.52 9 9.72 8.98 9.93 8.99C10.1 8.99 10.3 8.99 10.48 9C10.63 9 10.83 9.06 10.95 9.33C11.09 9.65 11.42 10.44 11.46 10.51C11.51 10.59 11.54 10.69 11.47 10.8C11.4 10.91 11.36 10.98 11.26 11.08C11.15 11.18 11.03 11.31 10.94 11.39C10.84 11.48 10.74 11.57 10.83 11.73C10.91 11.88 11.22 12.38 11.67 12.78C12.26 13.31 12.75 13.48 12.93 13.57C13.1 13.65 13.2 13.64 13.3 13.53C13.41 13.41 13.73 13.04 13.86 12.85C13.99 12.67 14.12 12.7 14.28 12.76C14.45 12.81 15.35 13.24 15.53 13.33C15.7 13.42 15.83 13.46 15.87 13.54C15.92 13.63 15.92 14.03 15.75 14.43C15.58 14.82 14.74 15.18 14.38 15.2C14.03 15.23 13.58 15.31 11.92 14.68C10.23 14.05 9.11 12.36 9.02 12.23C8.93 12.11 8.32 11.33 8.32 10.53C8.32 9.72 8.76 9.35 8.93 9.17C9.1 9 9.21 8.96 9.34 9.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealSelector = [
      '.section-intro',
      '.panel',
      '.fundamentals-card',
      '.comparison-card',
      '.integration-point',
      '.who-visual',
      '.contact-panel',
    ].join(', ')

    const elements = Array.from(document.querySelectorAll(revealSelector))

    elements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll')
      element.style.setProperty('--reveal-delay', `${Math.min(index * 55, 320)}ms`)
    })

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <main className="page-shell">
      <header className="site-header">
        <div className="content-shell site-header__inner">
          <nav className="site-nav" aria-label="Navegação principal">
            <a href="#quem-somos">Quem somos</a>
            <a href="#fundamentos">Soluções</a>
            <a href="#abordagem">Abordagem</a>
            <a href="#contato">Contato</a>
            <a
              className="site-nav__external"
              href="https://www.portfolio.dscorp.top/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfólio Power BI
            </a>
            <a
              className="site-nav__external"
              href="https://portal.dscorp.top/accounts/login/?next=/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portal Power BI
            </a>
            <a
              className="site-nav__external"
              href="https://eco.dscorp.top/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DS corp economia
            </a>
            <a
              className="site-nav__external"
              href="https://nexo.dscorp.top/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nexo Gestão Financeira
            </a>
          </nav>
        </div>
      </header>

      <section className="hero-section" id="top">
        <div className="content-shell hero-stage">
          <div className="hero-layout">
            <div className="hero-copy">
              <a className="brand-link" href="#top" aria-label="DS Corp">
                <span className="brand-link__mark">
                  <img className="brand-link__logo" src={brandLogo} alt="DS Corp" />
                </span>

                <span className="brand-link__copy">
                  <strong>DS Corp</strong>
                  <span>Business Intelligence</span>
                </span>
              </a>

              <p className="eyebrow">Engenharia de software, dados e gestão conectados</p>

              <h1>
                <span>Tecnologia é a nossa base,</span>
                <span>mas os dados são o nosso</span>
                <span>combustível.</span>
              </h1>

              <p className="hero-lead">
                Construímos sistemas, integração de sistemas, automações de processos e
                leitura gerencial para transformar tecnologia em direção estratégica.
              </p>

              <div className="tag-row" aria-label="Áreas de atuação">
                {heroTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="hero-insight">
                <div>
                  <strong>Dados que geram clareza.</strong>
                  <p>Menos ruído operacional, mais leitura estratégica para a gestão.</p>
                </div>

                <div className="hero-insight__icon">
                  <AnalyticsIcon />
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-glow hero-glow--one"></div>
              <div className="hero-glow hero-glow--two"></div>
              <img className="hero-portrait" src={heroPortraitBg} alt="" />
              <img className="hero-person hero-person--left" src={heroTeamLeft} alt="" />
              <img className="hero-person hero-person--center" src={heroTeamCenter} alt="" />
              <img className="hero-person hero-person--right" src={heroTeamRight} alt="" />
              <div className="hero-conceal hero-conceal--bouquet"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--who" id="quem-somos">
        <div className="content-shell">
          <div className="section-intro">
            <p className="eyebrow">Quem somos</p>
            <h2>Dados, gestão e execução no mesmo plano.</h2>
            <p>
              A DS Corp une inteligência analítica, engenharia de software, integração de
              sistemas, automação de processos e gestão para criar uma base de decisão mais
              confiável, clara e útil para o negócio.
            </p>
          </div>

          <div className="who-layout">
            <article className="panel panel--story">
              {whoWeAreParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="story-highlights">
                {whoHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>

            <div className="who-visual">
              <img className="who-background" src={whoBackground} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--fundamentals" id="fundamentos">
        <div className="content-shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">Soluções</p>
            <h2>Software, dados e gestão atuando em conjunto.</h2>
            <p>{fundamentalsText}</p>
          </div>

          <div className="fundamentals-grid">
            {fundamentalsGallery.map((item, index) => (
              <figure className={`fundamentals-card fundamentals-card--${index + 1}`} key={item.src}>
                <img src={item.src} alt={item.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--comparison">
        <div className="content-shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">Pilares</p>
            <h2>Da arquitetura técnica à decisão de negócio.</h2>
          </div>

          <div className="comparison-grid">
            {comparisonCards.map((card, index) => (
              <article
                className={`comparison-card comparison-card--${index === 0 ? 'light' : 'dark'}`}
                key={card.title}
              >
                <span className="comparison-card__index">0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.intro}</p>

                <ul className="copy-list">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p>{card.closing}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--integration">
        <div className="content-shell">
          <div className="integration-layout">
            <article className="integration-lead panel panel--dark">
              <p className="eyebrow eyebrow--inverse">Sinergia</p>
              <h2>Como isso se conecta?</h2>
              <p>
                Engenharia de software organiza a execução, integração de sistemas conecta a
                operação, automação de processos reduz atrito, e dados trazem visibilidade
                para a decisão. Quando essas frentes atuam em conjunto, a empresa ganha
                clareza, velocidade e consistência operacional.
              </p>
            </article>

            <div className="integration-points">
              {integrationBulletPoints.map((item) => (
                <article className="integration-point" key={item}>
                  <span className="integration-point__marker"></span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <article className="panel panel--accent integration-summary">
            <p>
              Esse trabalho conjunto é essencial para estruturar produtos internos,
              integrações entre sistemas, dashboards gerenciais, automações e rotinas de
              acompanhamento econômico. O resultado é uma operação mais conectada, escalável
              e orientada por decisão.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--tools" id="abordagem">
        <div className="content-shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">Abordagem</p>
            <h2>Tecnologia aplicada a software, dados e operação.</h2>
          </div>

          <article className="panel consulting-card">
            <p className="eyebrow">Consultoria integrada</p>
            <h3>
              Por que unir Business Intelligence, engenharia de software, integração de
              sistemas e automação de processos?
            </h3>

            <p>
              Em um cenário cada vez mais competitivo e orientado por dados, tomar decisões
              com base em suposições ou planilhas fragmentadas custa caro. Por isso, unir
              Databricks, Microsoft Fabric, engenharia de software, integração de sistemas e
              automação de processos cria uma vantagem estratégica real para a gestão.
            </p>

            <p>
              Essa abordagem transforma dados brutos em informação acionável, conecta os
              números à realidade operacional da empresa e sustenta produtos, integrações e
              operações com mais qualidade de execução.
            </p>

            <div className="benefit-grid">
              {consultingBenefits.map((item) => (
                <article className="benefit-card" key={item}>
                  <span className="benefit-card__bar"></span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section section--contact" id="contato">
        <div className="content-shell">
          <div className="contact-panel">
            <div className="contact-copy">
              <div className="contact-brand" aria-hidden="true">
                <span className="contact-brand__mark">
                  <img className="contact-brand__logo" src={brandLogo} alt="" />
                </span>
              </div>
              <p className="eyebrow eyebrow--inverse">Entre em contato com a</p>
              <h2>DSCORP</h2>
              <p className="contact-line">62 9853-3383</p>
              <p className="contact-line">CONTATO@DSCORP.TOP</p>
              <p className="contact-line">
                CNPJ: 36.406.295/0001-48
                <br />
                DANIEL DE SOUZA COSTA - ME
              </p>
            </div>

            <div className="contact-actions" aria-label="Ações de contato">
              <a href="mailto:contato@dscorp.top">Enviar e-mail</a>
              <a
                className="contact-action--social"
                href="https://wa.me/556298533383"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </a>
              <a
                className="contact-action--social"
                href="https://www.linkedin.com/company/108253701/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a
                className="contact-action--social"
                href="https://www.instagram.com/dscorp_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
