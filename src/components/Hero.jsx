import siteConfig from '../siteConfig'
import OrderDropdown from './OrderDropdown.jsx'

function Hero() {
  return (
    <section
      className="hero"
      aria-label="Charga hero"
      style={{
        '--hero-image': `url(${siteConfig.heroImage})`,
        '--hero-position': siteConfig.heroImagePosition,
      }}
    >
      <div className="hero-content">
        <p className="hero-eyebrow">{siteConfig.heroEyebrow}</p>
        <h1 className="hero-title">{siteConfig.heroTitle}</h1>
        <p className="hero-subtitle">{siteConfig.heroSubtitle}</p>
        <div className="hero-actions">
          <OrderDropdown label="Order Online" className="hero-primary" />
          {siteConfig.cateringUrl ? (
            <a
              className="hero-secondary-button"
              href={siteConfig.cateringUrl}
              target="_blank"
              rel="noreferrer"
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
