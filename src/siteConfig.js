import {
  GRILL_CATERING_URL,
  GRILL_ORDER_URL,
  PIKE_ORDER_URL,
} from './constants'

const sites = {
  pike: {
    id: 'pike',
    orderUrl: PIKE_ORDER_URL,
    cateringUrl: null,
    logoSrc: '/images/logo.png',
    logoAlt: 'Charga',
    heroEyebrow: 'Arlington, VA • Columbia Pike',
    visitUs: {
      line1: '3203 Columbia Pike',
      line2: 'Arlington, VA 22204',
      directionsHref:
        'https://www.google.com/maps/dir/?api=1&destination=3203%20Columbia%20Pike%2C%20Arlington%2C%20VA%2022204',
      mapQuery: '3203%20Columbia%20Pike%2C%20Arlington%2C%20VA%2022204',
    },
  },
  grill: {
    id: 'grill',
    orderUrl: GRILL_ORDER_URL,
    cateringUrl: GRILL_CATERING_URL,
    logoSrc: '/images/logo-grill.png',
    logoAlt: 'Charga Grill',
    heroEyebrow: 'Arlington, VA • Langston Blvd',
    visitUs: {
      line1: '5151 Langston Boulevard',
      line2: 'Arlington, VA 22207',
      directionsHref:
        'https://www.google.com/maps/dir/?api=1&destination=5151%20Langston%20Boulevard%2C%20Arlington%2C%20VA%2022207',
      mapQuery: '5151%20Langston%20Boulevard%2C%20Arlington%2C%20VA%2022207',
    },
  },
}

const siteId = import.meta.env.VITE_SITE ?? 'pike'

export default sites[siteId] ?? sites.pike
