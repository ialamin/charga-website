import { useEffect, useState } from 'react'

const SCROLL_COMPACT_THRESHOLD = 48

function Header({ onNavigate }) {
  const [isCompact, setIsCompact] = useState(false)

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

  const handleNavClick = (event, page, path) => {
    event.preventDefault()
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

        <div className="header-nav-cluster">
          <nav className="header-nav" aria-label="Primary">
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
          <a className="order-link" href="#order">
            Order Online
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
