import siteConfig from './siteConfig'

export function setPageMeta() {
  document.title = siteConfig.pageTitle

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', siteConfig.metaDescription)
  }

  const faviconLink = document.querySelector('link[rel="icon"]')
  if (faviconLink && siteConfig.favicon) {
    faviconLink.setAttribute('href', siteConfig.favicon)
    if (siteConfig.favicon.endsWith('.png')) {
      faviconLink.setAttribute('type', 'image/png')
    }
  }
}
