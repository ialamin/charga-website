import { trackCtaClick } from '../analytics.js'
import siteConfig from '../siteConfig'
import {
  getLocationMenuHref,
  getLocationOrderUrl,
  getWebsiteLabel,
  locations,
} from '../locations'

function Locations({ onNavigate }) {
  const handleMenuClick = (event, location) => {
    if (location.id !== siteConfig.id) {
      return
    }

    event.preventDefault()
    onNavigate?.('menu', '/menu')
  }

  return (
    <section className="locations-page" aria-labelledby="locations-page-heading">
      <header className="locations-page-header">
        <h1 id="locations-page-heading" className="page-title">
          Locations
        </h1>
        <p className="locations-page-intro">Find your nearest Charga.</p>
      </header>

      <div className="locations-grid">
        {locations.map((location) => {
          const menuHref = getLocationMenuHref(location.id, location.websiteUrl)
          const isCurrentSite = location.id === siteConfig.id

          return (
            <article className="location-card" key={location.id}>
              <h2 className="location-name">{location.name}</h2>
              <p className="location-address">
                {location.addressLine1}
                <br />
                {location.addressLine2}
              </p>
              <a
                className="location-website-link"
                href={location.websiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                {getWebsiteLabel(location.websiteUrl)}
              </a>
              <p className="location-hours">
                {location.hoursLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <p className="location-phone">
                <a className="location-phone-link" href={location.phoneHref}>
                  {location.phoneDisplay}
                </a>
              </p>
              <div className="location-actions">
                <a
                  className="location-menu-link"
                  href={menuHref}
                  target={isCurrentSite ? undefined : '_blank'}
                  rel={isCurrentSite ? undefined : 'noreferrer'}
                  onClick={(event) => handleMenuClick(event, location)}
                >
                  Menu
                </a>
                <a
                  className="location-order-link"
                  href={getLocationOrderUrl(location.id)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackCtaClick({
                      type: 'order',
                      placement: 'locations',
                      locationId: location.id,
                      linkUrl: getLocationOrderUrl(location.id),
                    })
                  }
                >
                  {location.orderLabel}
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Locations
