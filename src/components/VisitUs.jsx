function VisitUs() {
  return (
    <section className="visit-us" aria-labelledby="visit-us-heading">
      <div className="visit-us-card">
        <div className="visit-us-content">
          <h2 id="visit-us-heading" className="section-title">
            Visit Charga
          </h2>
          <p className="visit-us-address">
            3203 Columbia Pike
            <br />
            Arlington, VA 22204
          </p>
          <p className="visit-us-hours">Open 7 days a week</p>
          <a
            className="visit-us-link"
            href="https://www.google.com/maps/dir/?api=1&destination=3203%20Columbia%20Pike%2C%20Arlington%2C%20VA%2022204"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>
        <iframe
          className="visit-us-map"
          title="Map to Charga in Arlington, VA"
          src="https://www.google.com/maps?q=3203%20Columbia%20Pike%2C%20Arlington%2C%20VA%2022204&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

export default VisitUs
