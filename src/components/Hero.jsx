import siteConfig from '../siteConfig'

function Hero() {
  return (
    <section className="hero" aria-label="Charga hero">
      <div className="hero-content">
        <p className="hero-eyebrow">{siteConfig.heroEyebrow}</p>
        <h1 className="hero-title">Pakistani & Indian Street Food in Arlington</h1>
        <p className="hero-subtitle">
          Kabobs, chopped cheese, chili momos, and tandoor-fired favorites made
          fresh daily.
        </p>
        <div className="hero-actions">
          <a className="hero-primary" href={siteConfig.orderUrl} target="_blank" rel="noreferrer">
            Order Online
          </a>
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
