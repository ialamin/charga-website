import { useEffect, useState } from 'react'
import { trackCtaClick } from '../analytics.js'
import siteConfig from '../siteConfig'
import OrderDropdown from './OrderDropdown.jsx'

const SCROLL_COMPACT_THRESHOLD = 48
const MOBILE_NAV_BREAKPOINT = 900

function Header({ onNavigate, mobileOrderDockProgress = 1, showOrderCta = true }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12)
      setIsCompact(window.scrollY > SCROLL_COMPACT_THRESHOLD)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateScrollState)
      }
    }

    updateScrollState()
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

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (event, page, path) => {
    event.preventDefault()
    setIsMobileMenuOpen(false)
    onNavigate?.(page, path)
  }

  return (
    <>
      {isMobileMenuOpen ? (
        <button
          type="button"
          className="header-nav-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      ) : null}
      <header
      className={`site-header${isScrolled ? ' site-header--scrolled' : ''}${isCompact ? ' site-header--compact' : ''}`}
    >
      <div className="site-header-inner">
        <a
          className="site-logo-link"
          href="/"
          onClick={(event) => handleNavClick(event, 'home', '/')}
        >
          <img
            className={`site-logo${siteConfig.id === 'grill' ? ' site-logo--grill' : ''}`}
            src={siteConfig.logoSrc}
            alt={siteConfig.logoAlt}
          />
        </a>

        <div
          className={`header-nav-cluster${isMobileMenuOpen ? ' header-nav-cluster--open' : ''}`}
          style={{ '--order-dock-progress': mobileOrderDockProgress }}
        >
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
            {siteConfig.cateringUrl ? (
              <a
                className="header-nav-link header-nav-catering"
                href={siteConfig.cateringUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  trackCtaClick({
                    type: 'catering',
                    placement: 'header_nav',
                    linkUrl: siteConfig.cateringUrl,
                  })
                }}
              >
                Catering
              </a>
            ) : null}
          </nav>
          <div className="header-nav-actions">
            <div
              className="header-cta-group"
              aria-hidden={mobileOrderDockProgress < 0.35}
              style={{ pointerEvents: mobileOrderDockProgress > 0.35 ? 'auto' : 'none' }}
            >
              {siteConfig.cateringUrl ? (
                <a
                  className="catering-link"
                  href={siteConfig.cateringUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    trackCtaClick({
                      type: 'catering',
                      placement: 'header',
                      linkUrl: siteConfig.cateringUrl,
                    })
                  }}
                >
                  Catering
                </a>
              ) : null}
              {showOrderCta ? (
                <OrderDropdown
                  label="Order Online"
                  className="order-link"
                  placement="header"
                  onSelect={() => setIsMobileMenuOpen(false)}
                />
              ) : null}
            </div>
            <button
              className={`header-menu-toggle${isMobileMenuOpen ? ' header-menu-toggle--open' : ''}`}
              type="button"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="header-primary-nav"
              onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            >
              <span className="header-menu-toggle-icon" aria-hidden="true">
                <span className="header-menu-toggle-bar" />
                <span className="header-menu-toggle-bar" />
                <span className="header-menu-toggle-bar" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
