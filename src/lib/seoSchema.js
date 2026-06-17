import { seoSite } from '../data/landingPages.js'

const SCHEMA_SCRIPT_ID = 'seo-landing-schema'

export function buildLandingPageSchema(page) {
  const address = {
    '@type': 'PostalAddress',
    streetAddress: seoSite.streetAddress,
    addressLocality: seoSite.addressLocality,
    addressRegion: seoSite.addressRegion,
    postalCode: seoSite.postalCode,
    addressCountry: 'US',
  }

  const areaServed = page.areaServed.map((name) => ({
    '@type': 'City',
    name,
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: seoSite.name,
    image: `${seoSite.url}/images/hero.jpg`,
    url: `${seoSite.url}/${page.slug}`,
    telephone: seoSite.telephone,
    address,
    servesCuisine: seoSite.servesCuisine,
    areaServed,
    description: page.metaDescription,
  }
}

export function applyLandingPageSchema(page) {
  removeLandingPageSchema()

  const script = document.createElement('script')
  script.id = SCHEMA_SCRIPT_ID
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(buildLandingPageSchema(page))
  document.head.appendChild(script)
}

export function removeLandingPageSchema() {
  document.getElementById(SCHEMA_SCRIPT_ID)?.remove()
}
