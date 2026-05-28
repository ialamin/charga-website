const locations = [
  {
    name: 'Charga Grill',
    addressLine1: '5151 Langston Boulevard',
    addressLine2: 'Arlington, VA 22207',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&destination=5151%20Langston%20Boulevard%2C%20Arlington%2C%20VA%2022207',
    orderLabel: 'Order from Charga Grill',
  },
  {
    name: 'Charga On The Pike',
    addressLine1: '3203 Columbia Pike',
    addressLine2: 'Arlington, VA 22204',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&destination=3203%20Columbia%20Pike%2C%20Arlington%2C%20VA%2022204',
    orderLabel: 'Order from Columbia Pike',
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
              <a className="location-order-link" href="#">
                {location.orderLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Locations
