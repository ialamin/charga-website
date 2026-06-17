import siteConfig from './siteConfig'

export function setPageMeta(overrides = {}) {
  document.title = overrides.pageTitle ?? siteConfig.pageTitle

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', overrides.metaDescription ?? siteConfig.metaDescription)
  }

  const faviconLink = document.querySelector('link[rel="icon"]')
  if (faviconLink && siteConfig.favicon) {
    faviconLink.setAttribute('href', siteConfig.favicon)
    if (siteConfig.favicon.endsWith('.png')) {
      faviconLink.setAttribute('type', 'image/png')
    }
  }
}
