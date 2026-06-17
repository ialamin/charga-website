const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

function canTrack() {
  return Boolean(measurementId && typeof window !== 'undefined' && window.gtag)
}

export function initAnalytics() {
  if (!measurementId || typeof window === 'undefined' || window.gtag) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
}

export function trackPageView(path) {
  if (!canTrack()) {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

/**
 * @param {{ type: 'order' | 'catering', placement: string, locationId?: string, linkUrl?: string }} params
 */
export function trackCtaClick({ type, placement, locationId, linkUrl }) {
  if (!canTrack()) {
    return
  }

  window.gtag('event', 'cta_click', {
    cta_type: type,
    cta_placement: placement,
    ...(locationId ? { location_id: locationId } : {}),
    ...(linkUrl ? { link_url: linkUrl } : {}),
  })
}
