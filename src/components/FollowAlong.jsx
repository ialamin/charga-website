import siteConfig from '../siteConfig'

function FollowAlong() {
  return (
    <section className="follow-along" aria-labelledby="follow-along-heading">
      <div className="section-header">
        <span className="section-accent" aria-hidden="true"></span>
        <h2 id="follow-along-heading" className="section-title">
          Follow Along
        </h2>
      </div>
      <p className="follow-along-text">{siteConfig.followAlongText}</p>
      <div className="follow-along-links">
        {siteConfig.socialLinks.map((link) => (
          <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default FollowAlong
