import landingData from './landingPages.json'
import siteConfig from '../siteConfig'

export const seoSite = landingData.site

const pageBySlug = new Map(landingData.pages.map((page) => [page.slug, page]))

/** Off by default — set VITE_ENABLE_SEO_PAGES=true locally to preview. Do not set on Vercel until ready. */
export function areSeoPagesEnabled() {
  return import.meta.env.VITE_ENABLE_SEO_PAGES === 'true' && siteConfig.id === 'pike'
}

export const landingPages = areSeoPagesEnabled() ? landingData.pages : []

export const landingPageSlugs = landingPages.map((page) => page.slug)

export function getLandingPageBySlug(slug) {
  if (!areSeoPagesEnabled()) return null
  return pageBySlug.get(slug) ?? null
}

export function getLandingPagePath(slug) {
  return `/${slug}`
}

export function formatServiceAreaSentence(labels) {
  if (!labels?.length) return ''
  if (labels.length === 1) return labels[0]
  if (labels.length === 2) return `${labels[0]} and ${labels[1]}`
  return `${labels.slice(0, -1).join(', ')}, and ${labels[labels.length - 1]}`
}

export function getFoodPageServiceAreaCopy(page) {
  if (page.type !== 'food') return null

  const areas = formatServiceAreaSentence(seoSite.serviceAreaLabels)
  return `Proudly serving hot, fresh takeout and delivery to ${areas}.`
}
