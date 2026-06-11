import siteConfig from '../siteConfig'

function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <p className="footer-brand">Charga</p>
      <p className="footer-description">
        Pakistani & Indian street food in Arlington, VA.
      </p>
      <nav className="footer-links" aria-label="Footer links">
        <button type="button" className="footer-link-button" onClick={() => onNavigate?.('menu')}>
          Menu
        </button>
        <button
          type="button"
          className="footer-link-button"
          onClick={() => onNavigate?.('locations')}
        >
          Locations
        </button>
        <button type="button" className="footer-link-button" onClick={() => onNavigate?.('about')}>
          About
        </button>
        <a className="footer-link-anchor" href={siteConfig.orderUrl} target="_blank" rel="noreferrer">
          Order
        </a>
        {siteConfig.cateringUrl ? (
          <a
            className="footer-link-anchor"
            href={siteConfig.cateringUrl}
            target="_blank"
            rel="noreferrer"
          >
            Catering
          </a>
        ) : null}
        <a className="footer-link-anchor" href="#" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a className="footer-link-anchor" href="#" target="_blank" rel="noreferrer">
          TikTok
        </a>
      </nav>
      <p className="footer-copyright">© 2026 Charga. All rights reserved.</p>
    </footer>
  )
}

export default Footer
