import { useEffect, useState } from 'react'
import siteConfig from '../siteConfig'

const SCROLL_COMPACT_THRESHOLD = 48
const MOBILE_NAV_BREAKPOINT = 900

function Header({ onNavigate }) {
  const [isCompact, setIsCompact] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateCompact = () => {
      setIsCompact(window.scrollY > SCROLL_COMPACT_THRESHOLD)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateCompact)
      }
    }

    updateCompact()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (event, page, path) => {
    event.preventDefault()
    setIsMobileMenuOpen(false)
    onNavigate?.(page, path)
  }

  return (
    <header className={`site-header${isCompact ? ' site-header--compact' : ''}`}>
      <div className="site-header-inner">
        <a
          className="site-logo-link"
          href="/"
          onClick={(event) => handleNavClick(event, 'home', '/')}
        >
          <img className="site-logo" src="/images/logo.png" alt="Charga" />
        </a>

        <div className={`header-nav-cluster${isMobileMenuOpen ? ' header-nav-cluster--open' : ''}`}>
          <button
            className="header-menu-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="header-primary-nav"
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          >
            <span aria-hidden="true">☰</span>
          </button>
          <a
            className="header-quick-link"
            href="/locations"
            onClick={(event) => handleNavClick(event, 'locations', '/locations')}
          >
            Locations
          </a>
          <nav className="header-nav" id="header-primary-nav" aria-label="Primary">
            <a
              className="header-nav-link"
              href="/menu"
              onClick={(event) => handleNavClick(event, 'menu', '/menu')}
            >
              Menu
            </a>
            <a
              className="header-nav-link"
              href="/locations"
              onClick={(event) => handleNavClick(event, 'locations', '/locations')}
            >
              Locations
            </a>
          </nav>
          <div className="header-cta-group">
            {siteConfig.cateringUrl ? (
              <a
                className="catering-link"
                href={siteConfig.cateringUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Catering
              </a>
            ) : null}
            <a
              className="order-link"
              href={siteConfig.orderUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
