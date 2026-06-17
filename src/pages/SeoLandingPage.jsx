import { useEffect } from 'react'
import siteConfig from '../siteConfig'
import {
  getFoodPageServiceAreaCopy,
  getLandingPageBySlug,
  getLandingPagePath,
} from '../data/landingPages.js'
import { applyLandingPageSchema, removeLandingPageSchema } from '../lib/seoSchema.js'
import { setPageMeta } from '../setPageMeta.js'
import OrderDropdown from '../components/OrderDropdown.jsx'

function SeoLandingPage({ slug, onNavigate }) {
  const page = getLandingPageBySlug(slug)

  useEffect(() => {
    if (!page) return undefined

    setPageMeta({
      pageTitle: page.pageTitle,
      metaDescription: page.metaDescription,
    })
    applyLandingPageSchema(page)

    return () => {
      removeLandingPageSchema()
      setPageMeta()
    }
  }, [page])

  if (!page) {
    return (
      <div className="seo-landing-shell">
        <section className="seo-landing-page" aria-labelledby="seo-not-found-heading">
          <h1 id="seo-not-found-heading" className="page-title">
            Page not found
          </h1>
          <p className="seo-landing-lead">
            <button type="button" className="seo-landing-text-link" onClick={() => onNavigate?.('home', '/')}>
              Return home
            </button>
          </p>
        </section>
      </div>
    )
  }

  const serviceAreaCopy = getFoodPageServiceAreaCopy(page)
  const relatedPages = page.relatedSlugs
    .map((relatedSlug) => getLandingPageBySlug(relatedSlug))
    .filter(Boolean)

  const shellClassName =
    page.shellTheme === 'yellow' ? 'seo-landing-shell seo-landing-shell--yellow' : 'seo-landing-shell'

  return (
    <div className={shellClassName}>
      <article className="seo-landing-page" aria-labelledby="seo-landing-heading">
      <header className="seo-landing-header">
        <p className="seo-landing-eyebrow">{siteConfig.footerBrand}</p>
        <h1 id="seo-landing-heading" className="page-title">
          {page.h1}
        </h1>
        <p className="seo-landing-lead">{page.intro}</p>
        <div className="seo-landing-actions">
          <OrderDropdown label="Order Online" className="hero-primary" placement={`seo_${page.slug}`} />
          <button type="button" className="seo-landing-text-link" onClick={() => onNavigate?.('menu', '/menu')}>
            View full menu
          </button>
        </div>
      </header>

      <div className="seo-landing-body">
        {page.sections.map((section) => (
          <section className="seo-landing-section" key={section.heading}>
            <h2 className="seo-landing-section-title">{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        {serviceAreaCopy ? <p className="seo-landing-service-area">{serviceAreaCopy}</p> : null}

        <section className="seo-landing-location" aria-label="Restaurant location">
          <h2 className="seo-landing-section-title">Visit Charga On The Pike</h2>
          <p>
            {siteConfig.visitUs.line1}
            <br />
            {siteConfig.visitUs.line2}
          </p>
          <p>
            <a className="seo-landing-text-link" href={siteConfig.visitUs.directionsHref} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </p>
        </section>

        {relatedPages.length ? (
          <section className="seo-landing-related" aria-label="Related pages">
            <h2 className="seo-landing-section-title">Explore more</h2>
            <ul className="seo-landing-related-list">
              {relatedPages.map((relatedPage) => (
                <li key={relatedPage.slug}>
                  <a
                    className="seo-landing-text-link"
                    href={getLandingPagePath(relatedPage.slug)}
                    onClick={(event) => {
                      event.preventDefault()
                      onNavigate?.(null, getLandingPagePath(relatedPage.slug))
                    }}
                  >
                    {relatedPage.h1}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </article>
    </div>
  )
}

export default SeoLandingPage
