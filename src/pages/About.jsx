import siteConfig from '../siteConfig'

function About() {
  return (
    <section className="about-page" aria-labelledby="about-page-heading">
      <header className="about-page-header">
        <h1 id="about-page-heading" className="page-title">
          About
        </h1>
      </header>

      <div className="about-page-content">
        {siteConfig.aboutParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default About
