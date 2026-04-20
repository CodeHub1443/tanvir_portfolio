import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import HeroImageReveal from './components/HeroImageReveal'
import ImpactSnapshot from './components/ImpactSnapshot'
import JourneyTimeline from './components/JourneyTimeline'
import TechStack from './components/TechStack'
import FlagshipSystems from './components/FlagshipSystems'
import StartupAppliedAI from './components/StartupAppliedAI'
import EngineeringPhilosophy from './components/EngineeringPhilosophy'
import CurrentlyBuilding from './components/CurrentlyBuilding'
import ContactTestimonials from './components/ContactTestimonials'
import FAQSection from './components/FAQSection'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.nav-brand, .nav-links li, .nav-phone, .nav-toggle', {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      duration: 0.6
    })
      .from('.hero-role', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
      .from(
        '.title-char',
        { opacity: 0, y: 40, duration: 0.6, stagger: 0.06 },
        '-=0.4'
      )
      .from('.hero-desc', { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
      .from('.hero-cta-group', { opacity: 0, y: 10, duration: 0.4 }, '-=0.3')

    const track = document.querySelector('.scroll-track')
    const progress = document.querySelector('.scroll-progress')

    const updateScrollIndicator = () => {
      if (!track || !progress) return
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const ratio = docHeight > 0 ? scrollTop / docHeight : 0
      const minHeight = 60
      const maxHeight = 140
      const height = minHeight + (maxHeight - minHeight) * ratio
      const maxTop = track.offsetHeight - height

      gsap.to(progress, {
        top: maxTop * ratio,
        height,
        duration: 0.25,
        ease: 'power2.out'
      })
    }

    window.addEventListener('scroll', updateScrollIndicator)
    updateScrollIndicator()
    return () => window.removeEventListener('scroll', updateScrollIndicator)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { label: 'Home',       href: '#hero' },
    { label: 'About',      href: '#about' },
    { label: 'Journey',    href: '#journey' },
    { label: 'Tech Stack', href: '#tech' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact',    href: '#contact' },
  ]

  return (
    <div className="page">

      {/* HERO */}
      <section className="section hero" id="hero">

        <nav className="navbar">
          <div className="nav-brand">Tanvir<span>.</span></div>

          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-phone">+88 018-3434-1444</div>

          <button
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </nav>

        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-links">
            {navItems.map((item, i) => (
              <li
                key={item.label}
                onClick={toggleMenu}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="social-rail">
          <span className="rail-line"></span>
          <div className="rail-icons">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12Z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24">
                <path d="M22 5.9c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.5 1A3.7 3.7 0 0 0 12 8.1c0 .3 0 .6.1.9A10.5 10.5 0 0 1 3.2 4.6a3.7 3.7 0 0 0 1.1 5c-.6 0-1.2-.2-1.7-.4v.1c0 1.8 1.3 3.4 3 3.7-.3.1-.6.1-1 .1-.2 0-.4 0-.6-.1.4 1.5 1.9 2.6 3.6 2.6A7.4 7.4 0 0 1 2 18.6a10.5 10.5 0 0 0 5.7 1.7c6.9 0 10.7-5.7 10.7-10.7v-.5c.7-.5 1.4-1.2 1.9-2Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
              </svg>
            </a>
          </div>
          <span className="rail-line"></span>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-track">
            <div className="scroll-progress"></div>
          </div>
        </div>

        <HeroImageReveal
          src="/assets/hero.png"
          gridDensity={35}
          animationSpeed={1.5}
          staggerAmount={0.01}
          yOffset={60}
          cubeDepth={30}
        />

        <div className="hero-left">
          <span className="hero-role">Founder &times; Engineer</span>

          <h1 className="hero-title">
            {'Tanvir'.split('').map((c, i) => (
              <span className="title-char" key={i}>{c}</span>
            ))}
            <span className="title-char title-dot">.</span>
          </h1>

          <p className="hero-desc">
            I build production-grade AI systems that ship &mdash; from $100K-backed
            computer vision startups to GPU-decoded video pipelines running on
            NVIDIA hardware.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="hero-cta">See What I&apos;ve Shipped</a>
            <a href="#contact" className="hero-cta hero-cta-secondary">Book a Call</a>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <div id="about"><ImpactSnapshot /></div>

      {/* JOURNEY */}
      <JourneyTimeline />

      {/* TECH STACK */}
      <TechStack />

      {/* PROJECTS */}
      <FlagshipSystems />

      {/* EXPERIENCE */}
      <div id="experience"><StartupAppliedAI /></div>

      {/* PHILOSOPHY */}
      <EngineeringPhilosophy />

      {/* CURRENTLY BUILDING */}
      <CurrentlyBuilding />

      {/* FAQ — AEO */}
      <FAQSection />

      {/* CONTACT */}
      <div id="testimonials"><ContactTestimonials /></div>

    </div>
  )
}
