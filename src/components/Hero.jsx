import { useEffect, useRef } from 'react'
import { trackCtaClick } from '../analytics.js'
import siteConfig from '../siteConfig'
import OrderDropdown from './OrderDropdown.jsx'

const MOBILE_NAV_BREAKPOINT = 900

function Hero({ onMobileOrderDockProgressChange }) {
  const actionsRef = useRef(null)

  useEffect(() => {
    const node = actionsRef.current
    if (!node || !onMobileOrderDockProgressChange) {
      return undefined
    }

    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_NAV_BREAKPOINT}px)`)
    const HEADER_DOCK_LINE = 76
    const DOCK_RANGE = 112
    let ticking = false

    const updateProgress = () => {
      ticking = false

      if (!mediaQuery.matches) {
        onMobileOrderDockProgressChange(1)
        return
      }

      const rect = node.getBoundingClientRect()
      const rawProgress = Math.min(
        1,
        Math.max(0, (HEADER_DOCK_LINE + DOCK_RANGE - rect.bottom) / DOCK_RANGE),
      )
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const progress = prefersReducedMotion ? (rawProgress > 0.5 ? 1 : 0) : rawProgress
      onMobileOrderDockProgressChange(progress)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(updateProgress)
      }
    }

    mediaQuery.addEventListener('change', updateProgress)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    return () => {
      mediaQuery.removeEventListener('change', updateProgress)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateProgress)
    }
  }, [onMobileOrderDockProgressChange])

  return (
    <section
      className="hero"
      aria-label="Charga hero"
      style={{
        '--hero-image': `url(${siteConfig.heroImage})`,
        '--hero-position': siteConfig.heroImagePosition,
      }}
    >
      <p className="visually-hidden">{siteConfig.heroImageAlt}</p>
      <div className="hero-content">
        {siteConfig.heroEyebrow ? (
          <p className="hero-eyebrow">{siteConfig.heroEyebrow}</p>
        ) : null}
        <h1 className="hero-title">{siteConfig.heroTitle}</h1>
        <div className="hero-actions" ref={actionsRef}>
          <OrderDropdown label="Order Online" className="hero-primary" placement="hero" />
          {siteConfig.cateringUrl ? (
            <a
              className="hero-secondary-button"
              href={siteConfig.cateringUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackCtaClick({
                  type: 'catering',
                  placement: 'hero',
                  linkUrl: siteConfig.cateringUrl,
                })
              }
            >
              Catering
            </a>
          ) : null}
        </div>
        <p className="hero-trust">
          Featured by The Washington Post • Best Casual Restaurant
        </p>
      </div>
    </section>
  )
}

export default Hero
