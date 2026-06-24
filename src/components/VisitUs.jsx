import siteConfig from '../siteConfig'

function VisitUs() {
  const { visitUs } = siteConfig

  return (
    <section className="visit-us" aria-labelledby="visit-us-heading">
      <div className="visit-us-layout">
        <div className="section-header visit-us-header">
          <span className="section-accent" aria-hidden="true"></span>
          <h2 id="visit-us-heading" className="section-title">
            Visit Charga
          </h2>
        </div>
        <div className="visit-us-card">
          <div className="visit-us-content">
            <p className="visit-us-address">
              {visitUs.line1}
              <br />
              {visitUs.line2}
            </p>
            <p className="visit-us-hours">Open 7 days a week</p>
            <a
              className="visit-us-link"
              href={visitUs.directionsHref}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
          <iframe
            className="visit-us-map"
            title={`Map to ${siteConfig.footerBrand} in Arlington, VA`}
            src={`https://www.google.com/maps?q=${visitUs.mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default VisitUs
