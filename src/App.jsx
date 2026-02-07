import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function App() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.nav-brand, .nav-links li, .nav-phone', {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      duration: 0.6
    })
      .from('.hero-role', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
      .from(
        '.title-char',
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.06
        },
        '-=0.4'
      )
      .from('.hero-desc', { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
      .from('.hero-cta', { opacity: 0, y: 10, duration: 0.4 }, '-=0.3')
      .from('.hero-bg-image img', { opacity: 0, duration: 1.2 }, '-=1')

    const track = document.querySelector('.scroll-track')
    const progress = document.querySelector('.scroll-progress')

    const updateScrollIndicator = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

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

  return (
    <div className="page">
      <section className="section hero">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-brand">
            Tanvir<span>.</span>
          </div>

          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Testimonials</li>
            <li>Partners</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <div className="nav-phone">+7 (212) 674-25-10</div>
        </nav>

        {/* SOCIAL RAIL */}
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

        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <div className="scroll-track">
            <div className="scroll-progress"></div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="hero-bg-image">
          <img src="/assets/hero.png" alt="" />
        </div>

        {/* HERO CONTENT */}
        <div className="hero-left">
          <span className="hero-role">Product Designer</span>

          <h1 className="hero-title">
            {'Tanvir'.split('').map((c, i) => (
              <span className="title-char" key={i}>
                {c}
              </span>
            ))}
            <span className="title-char title-dot">.</span>
          </h1>

          <p className="hero-desc">
            Working with client and community, we deliver masterpieces that
            create vibrant new places and spaces.
          </p>

          <a href="#work" className="hero-cta">
            Explore what I’ve built
          </a>
        </div>
      </section>

      <section id="work" className="section work">Work</section>
      <section className="section about">About</section>
      <section className="section footer">Footer</section>
    </div>
  )
}
