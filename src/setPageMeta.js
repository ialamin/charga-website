import siteConfig from './siteConfig'

export function setPageMeta(overrides = {}) {
  document.title = overrides.pageTitle ?? siteConfig.pageTitle

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', overrides.metaDescription ?? siteConfig.metaDescription)
  }

  const robotsMeta = document.querySelector('meta[name="robots"]')
  if (overrides.robots) {
    if (robotsMeta) {
      robotsMeta.setAttribute('content', overrides.robots)
      robotsMeta.dataset.pageMetaManaged = 'true'
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'robots')
      meta.setAttribute('content', overrides.robots)
      meta.dataset.pageMetaManaged = 'true'
      document.head.appendChild(meta)
    }
  } else if (robotsMeta?.dataset.pageMetaManaged) {
    robotsMeta.remove()
  }

  const faviconLink = document.querySelector('link[rel="icon"]')
  if (faviconLink && siteConfig.favicon) {
    faviconLink.setAttribute('href', siteConfig.favicon)
    if (siteConfig.favicon.endsWith('.png')) {
      faviconLink.setAttribute('type', 'image/png')
    }
  }
}
