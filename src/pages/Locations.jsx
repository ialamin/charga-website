import { GRILL_CATERING_URL, GRILL_ORDER_URL, PIKE_ORDER_URL } from '../constants'

const locations = [
  {
    name: 'Charga Grill',
    addressLine1: '5151 Langston Boulevard',
    addressLine2: 'Arlington, VA 22207',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&destination=5151%20Langston%20Boulevard%2C%20Arlington%2C%20VA%2022207',
    orderLabel: 'Order from Charga Grill',
    orderHref: GRILL_ORDER_URL,
    cateringHref: GRILL_CATERING_URL,
  },
  {
    name: 'Charga On The Pike',
    addressLine1: '3203 Columbia Pike',
    addressLine2: 'Arlington, VA 22204',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&destination=3203%20Columbia%20Pike%2C%20Arlington%2C%20VA%2022204',
    orderLabel: 'Order from Columbia Pike',
    orderHref: PIKE_ORDER_URL,
  },
]

function Locations() {
  return (
    <section className="locations-page" aria-labelledby="locations-page-heading">
      <header className="locations-page-header">
        <h1 id="locations-page-heading" className="locations-page-title">
          Locations
        </h1>
        <p className="locations-page-intro">Find your nearest Charga.</p>
      </header>

      <div className="locations-grid">
        {locations.map((location) => (
          <article className="location-card" key={location.name}>
            <h2 className="location-name">{location.name}</h2>
            <p className="location-address">
              {location.addressLine1}
              <br />
              {location.addressLine2}
            </p>
            <p className="location-hours">
              Mon - Sat: 11 AM - 9 PM
              <br />
              Sun: 12 PM - 9 PM
            </p>
            <p className="location-phone">(703) XXX-XXXX</p>
            <div className="location-actions">
              <a
                className="location-directions-link"
                href={location.directionsHref}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
              <a
                className="location-order-link"
                href={location.orderHref ?? '#'}
                target={location.orderHref ? '_blank' : undefined}
                rel={location.orderHref ? 'noreferrer' : undefined}
              >
                {location.orderLabel}
              </a>
              {location.cateringHref ? (
                <a
                  className="location-catering-link"
                  href={location.cateringHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Catering
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Locations
