import { useEffect } from 'react'
import siteConfig from '../siteConfig'
import {
  areSeoPagesEnabled,
  getLandingPagePath,
  landingPages,
  seoSite,
} from '../data/landingPages.js'
import { setPageMeta } from '../setPageMeta.js'

const TYPE_LABELS = {
  city: 'Cities',
  neighborhood: 'Neighborhoods',
  food: 'Food pages',
}

const TYPE_ORDER = ['city', 'neighborhood', 'food']

function SeoPageIndex({ onNavigate }) {
  useEffect(() => {
    setPageMeta({
      pageTitle: `SEO landing pages | ${siteConfig.footerBrand}`,
      metaDescription: 'Internal index of local SEO landing pages.',
      robots: 'noindex, nofollow',
    })

    return () => setPageMeta()
  }, [])

  if (!areSeoPagesEnabled()) {
    return (
      <section className="seo-page-index" aria-labelledby="seo-page-index-heading">
        <h1 id="seo-page-index-heading" className="page-title">
          SEO pages unavailable
        </h1>
        <p className="seo-page-index-intro">SEO landing pages are not enabled for this build.</p>
      </section>
    )
  }

  const groups = TYPE_ORDER.map((type) => ({
    type,
    label: TYPE_LABELS[type],
    pages: landingPages.filter((page) => page.type === type),
  })).filter((group) => group.pages.length > 0)

  return (
    <section className="seo-page-index" aria-labelledby="seo-page-index-heading">
      <header className="seo-page-index-header">
        <p className="seo-page-index-eyebrow">Internal reference</p>
        <h1 id="seo-page-index-heading" className="page-title">
          SEO landing pages
        </h1>
        <p className="seo-page-index-intro">
          {landingPages.length} live local pages for {seoSite.name}. Share this URL with partners —
          it is not linked from the public site.
        </p>
      </header>

      <div className="seo-page-index-groups">
        {groups.map((group) => (
          <section className="seo-page-index-group" key={group.type} aria-labelledby={`seo-group-${group.type}`}>
            <h2 id={`seo-group-${group.type}`} className="seo-page-index-group-title">
              {group.label}
            </h2>
            <ul className="seo-page-index-list">
              {group.pages.map((page) => (
                <li key={page.slug}>
                  <a
                    className="seo-page-index-link"
                    href={getLandingPagePath(page.slug)}
                    onClick={(event) => {
                      event.preventDefault()
                      onNavigate?.(null, getLandingPagePath(page.slug))
                    }}
                  >
                    <span className="seo-page-index-link-title">{page.h1}</span>
                    <span className="seo-page-index-link-path">{getLandingPagePath(page.slug)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

export default SeoPageIndex
