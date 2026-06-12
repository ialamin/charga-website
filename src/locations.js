import {
  GRILL_ORDER_URL,
  GRILL_PHONE_DISPLAY,
  GRILL_PHONE_HREF,
  GRILL_WEBSITE_URL,
  PIKE_ORDER_URL,
  PIKE_PHONE_DISPLAY,
  PIKE_PHONE_HREF,
  PIKE_WEBSITE_URL,
} from './constants'

export const locations = [
  {
    id: 'grill',
    name: 'Charga Grill',
    addressLine1: '5151 Langston Boulevard',
    addressLine2: 'Arlington, VA 22207',
    websiteUrl: GRILL_WEBSITE_URL,
    phoneDisplay: GRILL_PHONE_DISPLAY,
    phoneHref: GRILL_PHONE_HREF,
    hoursLines: ['Mon - Thu: 11 AM - 9 PM', 'Fri - Sat: 11 AM - 10 PM', 'Sun: 12 PM - 9 PM'],
    orderLabel: 'Order',
  },
  {
    id: 'pike',
    name: 'Charga On The Pike',
    addressLine1: '3203 Columbia Pike',
    addressLine2: 'Arlington, VA 22204',
    websiteUrl: PIKE_WEBSITE_URL,
    phoneDisplay: PIKE_PHONE_DISPLAY,
    phoneHref: PIKE_PHONE_HREF,
    hoursLines: ['Mon - Sat: 11 AM - 9 PM', 'Sun: 12 PM - 9 PM'],
    orderLabel: 'Order',
  },
]

export const getLocationOrderUrl = (locationId) =>
  locationId === 'grill' ? GRILL_ORDER_URL : PIKE_ORDER_URL

export const orderOptions = [
  { id: 'pike', label: 'Columbia Pike', orderUrl: PIKE_ORDER_URL },
  { id: 'grill', label: 'Langston Boulevard', orderUrl: GRILL_ORDER_URL },
]

export const getLocationMenuHref = (locationId, websiteUrl) => `${websiteUrl}/menu`

export const getWebsiteLabel = (websiteUrl) =>
  websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
