import { useEffect, useRef, useState } from 'react'
import './App.css'
import heroPortraitBg from './assets/canva/hero-portrait-bg.png'
import heroTeamLeft from './assets/canva/hero-team-left.png'
import heroTeamCenter from './assets/canva/hero-team-center.png'
import heroTeamRight from './assets/canva/hero-team-right.png'
import whoBackground from './assets/canva/quem-somos-bg.png'

const brandLogo = '/DS-Corp.svg'

const externalLinks = [
  { label: 'Portfólio Power BI', href: 'https://portfolio.dscorp.top/' },
  { label: 'Portal Power BI', href: 'https://portal.dscorp.top/accounts/login/?next=/' },
  { label: 'DS Corp Economia', href: 'https://eco.dscorp.top/' },
  { label: 'Nexo Gestão Financeira', href: 'https://www.appnexo.top/' },
]

const heroTags = [
  'Software House',
  'Engenharia de Software',
  'Automação de Processos',
  'Integração de Sistemas',
  'Inteligência Artificial',
  'Cibersegurança',
]

const whoWeAreParagraphs = [
  'Somos uma software house especializada em engenharia de software, automação de processos, integração de sistemas e inteligência artificial, ajudando negócios a construir sistemas, conectar plataformas e automatizar operações com mais eficiência.',
  'Na DS Corp, a tecnologia é nossa base, mas a engenharia é o nosso combustível.',
]

const whoHighlights = [
  'Software house para criar e evoluir produtos digitais',
  'Engenharia para sistemas, APIs e integração de sistemas',
  'Automação de processos para ganho de escala',
  'Inteligência artificial aplicada a automações e sistemas',
  'Cibersegurança aplicada a sistemas, acessos e integrações',
  'Estrutura técnica para crescer com segurança e velocidade',
]

const fundamentalsText =
  'A DS Corp combina engenharia de software, automação de processos, integração de sistemas, inteligência artificial e cibersegurança para construir soluções digitais e fluxos operacionais mais eficientes e seguros. O objetivo não é apenas entregar tecnologia, mas criar estrutura técnica para execução e escala.'

const softwareEngineeringBulletPoints = [
  'Sistemas web e internos orientados ao negócio',
  'Integração de sistemas entre plataformas, ERPs e ferramentas operacionais',
  'APIs, automações e fluxos para reduzir retrabalho',
]

const softwareHouseBulletPoints = [
  'Squads dedicados para criar produtos digitais do zero',
  'Evolução contínua de sistemas e plataformas existentes',
  'Arquitetura escalável para crescer junto com o negócio',
]

const processAutomationBulletPoints = [
  'Automação de tarefas operacionais e administrativas',
  'Fluxos de aprovação, alertas e gatilhos entre sistemas',
  'Padronização de rotinas para reduzir gargalos e retrabalho',
  'Integração de etapas críticas com mais velocidade e rastreabilidade',
  'Inteligência artificial aplicada a classificação, previsão e triagem automática',
]

const integrationSystemsBulletPoints = [
  'Conexão entre ERPs, CRMs, plataformas e ferramentas operacionais',
  'APIs e integrações para comunicação em tempo real entre sistemas',
  'Eliminação de retrabalho manual entre sistemas',
]

const artificialIntelligenceBulletPoints = [
  'Modelos preditivos para antecipar cenários, riscos e demandas',
  'Automação inteligente de análises, classificações e triagens',
  'Assistentes e agentes de IA para apoiar decisões operacionais',
]

const cybersecurityBulletPoints = [
  'Proteção de sistemas, acessos e integrações contra ameaças digitais',
  'Boas práticas de segurança em APIs, integrações e automações',
  'Monitoramento e resposta a incidentes de segurança',
]

const integrationBulletPoints = [
  'Transformam processos manuais em fluxos digitais mais confiáveis.',
  'Conectam sistemas e operação em uma mesma arquitetura.',
  'Facilitam a identificação de gargalos operacionais.',
  'Criam base técnica para crescer com mais velocidade e controle.',
]

const consultingBenefits = [
  'Automação de processos operacionais e administrativos para reduzir gargalos e retrabalho',
  'Integração de sistemas, APIs e fluxos entre plataformas, ERPs e ferramentas operacionais',
  'Orquestração de etapas, aprovações e notificações entre times e plataformas',
  'Squads dedicados para criar e evoluir produtos digitais sob medida',
  'Arquitetura escalável para sistemas crescerem com segurança e performance',
  'Aplicação de inteligência artificial para automatizar análises, classificações e triagens',
  'Assistentes e agentes de IA para acelerar tarefas operacionais repetitivas',
  'Capacidade de resposta mais rápida pela integração entre processos e sistemas',
  'Boas práticas de cibersegurança aplicadas a sistemas, integrações e automações',
]

const fundamentalsGallery = [
  {
    label: 'Engenharia de Software',
    Icon: SoftwareIcon,
  },
  {
    label: 'Automação & Integração',
    Icon: AutomationIcon,
  },
  {
    label: 'Inteligência Artificial',
    Icon: ArtificialIntelligenceIcon,
  },
]

const comparisonCards = [
  {
    title: 'Software House',
    intro:
      'Como software house, a DS Corp projeta, desenvolve e evolui produtos digitais sob medida, unindo tecnologia e contexto de negócio para entregar sistemas que sustentam a operação.',
    items: softwareHouseBulletPoints,
    closing:
      'Mais do que entregar código, construímos base técnica sólida para o produto crescer com segurança e velocidade.',
  },
  {
    title: 'Engenharia de Software',
    intro:
      'A engenharia de software organiza a operação digital da empresa. Ela transforma necessidades do negócio em sistemas, integrações e automações que dão velocidade, padronização e escala para a execução.',
    items: softwareEngineeringBulletPoints,
    closing:
      'Quando bem aplicada, reduz ruído operacional, melhora a experiência interna e conecta tecnologia diretamente ao resultado.',
  },
  {
    title: 'Automação de Processos',
    intro:
      'Automação de processos elimina etapas manuais desnecessárias e transforma rotinas críticas em fluxos digitais mais previsíveis. O foco é ganhar velocidade, reduzir falhas e aumentar a capacidade operacional.',
    items: processAutomationBulletPoints,
    closing:
      'Quando conectada à engenharia e à integração de sistemas, a automação deixa de ser tarefa isolada e passa a ser mecanismo de escala do negócio.',
  },
  {
    title: 'Integração de Sistemas',
    intro:
      'Integração de sistemas conecta plataformas, ERPs, APIs e ferramentas operacionais em um fluxo único, eliminando retrabalho manual e garantindo que a informação circule de forma consistente entre as áreas do negócio.',
    items: integrationSystemsBulletPoints,
    closing:
      'Quando os sistemas conversam entre si, a operação ganha consistência, rastreabilidade e velocidade de resposta.',
  },
  {
    title: 'Inteligência Artificial',
    intro:
      'A inteligência artificial aplicada ao negócio automatiza análises, antecipa cenários e apoia decisões com mais velocidade e precisão, unindo modelos preditivos e automação em um mesmo fluxo.',
    items: artificialIntelligenceBulletPoints,
    closing:
      'Combinada à engenharia e à automação, a IA transforma informação em execução mais rápida e assertiva.',
  },
  {
    title: 'Cibersegurança',
    intro:
      'Cibersegurança protege sistemas, integrações e automações contra acessos indevidos e falhas de segurança, garantindo que a operação digital funcione de forma confiável e resiliente.',
    items: cybersecurityBulletPoints,
    closing:
      'Aplicada junto à engenharia e à integração de sistemas, a cibersegurança reduz riscos e sustenta a confiança na operação.',
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

function SoftwareIcon() {
  return (
    <svg
      className="fundamentals-illustration"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="34" y="46" width="172" height="140" rx="18" stroke="currentColor" strokeWidth="7" />
      <path d="M34 84H206" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <circle cx="55" cy="65" r="5" fill="currentColor" />
      <circle cx="75" cy="65" r="5" fill="currentColor" />
      <circle cx="95" cy="65" r="5" fill="currentColor" />
      <path
        d="M92 108L64 132L92 156"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M148 108L176 132L148 156"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M128 100L112 164" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

function AutomationIcon() {
  return (
    <svg
      className="fundamentals-illustration"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="46" cy="150" r="24" stroke="currentColor" strokeWidth="7" />
      <circle cx="120" cy="150" r="24" stroke="currentColor" strokeWidth="7" />
      <circle cx="194" cy="150" r="24" stroke="currentColor" strokeWidth="7" />
      <path d="M70 150H96" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M86 141L96 150L86 159" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M144 150H170" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d="M160 141L170 150L160 159" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M120 118V90M120 90L108 102M120 90L132 102"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M96 60C104 48 136 48 144 60"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path d="M139 52L144 60L135 62" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArtificialIntelligenceIcon() {
  return (
    <svg
      className="fundamentals-illustration"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="66" y="66" width="108" height="108" rx="16" stroke="currentColor" strokeWidth="7" />
      {[64, 92, 120, 148].map((y) => (
        <path key={`pin-left-${y}`} d={`M42 ${y}H66`} stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      ))}
      {[64, 92, 120, 148].map((y) => (
        <path key={`pin-right-${y}`} d={`M174 ${y}H198`} stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      ))}
      {[86, 114, 142, 170].map((x) => (
        <path key={`pin-top-${x}`} d={`M${x} 42V66`} stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      ))}
      {[86, 114, 142, 170].map((x) => (
        <path key={`pin-bottom-${x}`} d={`M${x} 174V198`} stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      ))}
      <circle cx="96" cy="96" r="8" fill="currentColor" />
      <circle cx="144" cy="96" r="8" fill="currentColor" />
      <circle cx="120" cy="130" r="8" fill="currentColor" />
      <circle cx="96" cy="160" r="8" fill="currentColor" />
      <circle cx="144" cy="160" r="8" fill="currentColor" />
      <path
        d="M96 96L144 96M96 96L120 130M144 96L120 130M120 130L96 160M120 130L144 160"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
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

function ChevronIcon() {
  return (
    <svg
      className="nav-dropdown__chevron"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M3.5 6L8 10.5L12.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false)
  const platformsRef = useRef(null)

  useEffect(() => {
    document.body.classList.toggle('nav-open', isMenuOpen)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) {
      setIsPlatformsOpen(false)
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isPlatformsOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (platformsRef.current && !platformsRef.current.contains(event.target)) {
        setIsPlatformsOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsPlatformsOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isPlatformsOpen])

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
          <a className="site-header__brand" href="#top" aria-label="DS Corp">
            <img src={brandLogo} alt="" />
          </a>

          <button
            type="button"
            className={`site-nav-toggle${isMenuOpen ? ' is-open' : ''}`}
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            id="site-nav"
            className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
            aria-label="Navegação principal"
          >
            <div className="site-nav__links">
              <a href="#quem-somos" onClick={() => setIsMenuOpen(false)}>
                Quem somos
              </a>
              <a href="#fundamentos" onClick={() => setIsMenuOpen(false)}>
                Soluções
              </a>
              <a href="#abordagem" onClick={() => setIsMenuOpen(false)}>
                Abordagem
              </a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)}>
                Contato
              </a>
            </div>

            <div className="nav-dropdown" ref={platformsRef}>
              <button
                type="button"
                className={`nav-dropdown__toggle${isPlatformsOpen ? ' is-open' : ''}`}
                aria-expanded={isPlatformsOpen}
                aria-controls="nav-platforms-menu"
                onClick={() => setIsPlatformsOpen((open) => !open)}
              >
                Plataformas
                <ChevronIcon />
              </button>

              <div
                id="nav-platforms-menu"
                className={`nav-dropdown__menu${isPlatformsOpen ? ' is-open' : ''}`}
              >
                {externalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setIsPlatformsOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
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
                  <span>Software House</span>
                </span>
              </a>

              <p className="eyebrow">Engenharia de software, automação, integração, IA e cibersegurança conectadas</p>

              <h1>
                <span>Tecnologia é a nossa base,</span>
                <span>mas a engenharia é o nosso</span>
                <span>combustível.</span>
              </h1>

              <p className="hero-lead">
                Construímos sistemas, integração de sistemas, automações de processos e
                inteligência artificial para transformar tecnologia em execução real.
              </p>

              <div className="tag-row" aria-label="Áreas de atuação">
                {heroTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="hero-insight">
                <div>
                  <strong>Automação que gera clareza.</strong>
                  <p>Menos ruído operacional, mais eficiência na execução dos processos.</p>
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
            </div>
          </div>
        </div>
      </section>

      <section className="section section--who" id="quem-somos">
        <div className="content-shell">
          <div className="section-intro">
            <p className="eyebrow">Quem somos</p>
            <h2>Engenharia, automação e execução no mesmo plano.</h2>
            <p>
              A DS Corp une engenharia de software, integração de sistemas, automação de
              processos e inteligência artificial para criar uma base técnica mais confiável,
              ágil e escalável para o negócio.
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
            <h2>Software, automação e inteligência artificial atuando em conjunto.</h2>
            <p>{fundamentalsText}</p>
          </div>

          <div className="fundamentals-grid">
            {fundamentalsGallery.map((item, index) => (
              <figure className={`fundamentals-card fundamentals-card--${index + 1}`} key={item.label}>
                <div className="fundamentals-icon">
                  <item.Icon />
                </div>
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--comparison">
        <div className="content-shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">Pilares</p>
            <h2>Da arquitetura técnica à execução do negócio.</h2>
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
                operação, automação de processos reduz atrito, e inteligência artificial
                acelera análises e respostas. Quando essas frentes atuam em conjunto, a
                empresa ganha clareza, velocidade e consistência operacional.
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
              integrações entre sistemas, automações de processos e soluções de
              inteligência artificial. O resultado é uma operação mais conectada,
              escalável e eficiente.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--tools" id="abordagem">
        <div className="content-shell">
          <div className="section-intro section-intro--center">
            <p className="eyebrow">Abordagem</p>
            <h2>Tecnologia aplicada a software, automação e integração.</h2>
          </div>

          <article className="panel consulting-card">
            <p className="eyebrow">Consultoria integrada</p>
            <h3>
              Por que unir Software House, engenharia de software, integração de
              sistemas, automação de processos, inteligência artificial e cibersegurança?
            </h3>

            <p>
              Em um cenário cada vez mais competitivo, depender de sistemas manuais,
              processos fragmentados e integrações improvisadas custa caro. Por isso, unir
              Software House, engenharia de software, integração de sistemas, automação de
              processos, inteligência artificial e cibersegurança cria uma vantagem
              estratégica real para a operação.
            </p>

            <p>
              Essa abordagem conecta sistemas, elimina retrabalho manual e sustenta
              produtos, integrações e automações com mais qualidade de execução e
              velocidade de entrega.
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
