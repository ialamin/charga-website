import {
  FACEBOOK_URL,
  GRILL_CATERING_URL,
  GRILL_ORDER_URL,
  INSTAGRAM_URL,
  PIKE_ORDER_URL,
} from './constants'
import { menuSections as grillMenuSections } from './menus/grill'
import { menuSections as pikeMenuSections } from './menus/pike'

const sites = {
  pike: {
    id: 'pike',
    orderUrl: PIKE_ORDER_URL,
    cateringUrl: null,
    logoSrc: '/images/logo.png',
    logoAlt: 'Charga',
    favicon: '/favicon.svg',
    pageTitle: 'Charga On The Pike | Pakistani & Indian Food in Arlington VA',
    metaDescription:
      'Charga On The Pike serves Pakistani and Indian street food in Arlington, VA. Kabobs, chopped cheese, chili momos, and tandoor-fired favorites on Columbia Pike.',
    heroEyebrow: 'Arlington, VA • Columbia Pike',
    heroTitle: 'Pakistani & Indian Street Food in Arlington',
    heroImage: '/images/hero.jpg',
    heroImagePosition: 'center 44%',
    heroSubtitle:
      'Kabobs, chopped cheese, chili momos, and tandoor-fired favorites made fresh daily.',
    followAlongText: 'Food, stories, and life on Columbia Pike.',
    footerBrand: 'Charga On The Pike',
    footerDescription: 'Pakistani & Indian street food on Columbia Pike in Arlington, VA.',
    menuSections: pikeMenuSections,
    visitUs: {
      line1: '3203 Columbia Pike',
      line2: 'Arlington, VA 22204',
      directionsHref:
        'https://www.google.com/maps/dir/?api=1&destination=3203%20Columbia%20Pike%2C%20Arlington%2C%20VA%2022204',
      mapQuery: '3203%20Columbia%20Pike%2C%20Arlington%2C%20VA%2022204',
    },
    aboutParagraphs: [
      'Charga On The Pike is a Pakistani and Indian street food spot on Columbia Pike in Arlington, Virginia, serving bold flavors alongside American favorites. Named Best Casual Restaurant by The Washington Post, the focus is simple—good food, real cooking, and meals people come back for.',
      'From tandoor-fired kabobs to street food like chili momos and our top-selling Steak n Cheese, the menu brings together different influences without overcomplicating things. It\'s a mix that reflects how people actually eat—somewhere between tradition and everyday comfort food.',
      'Charga isn\'t a high-end concept. It\'s a neighborhood spot built for regulars, quick meals, and people who care about flavor. The goal isn\'t to impress—it\'s to be consistent, satisfying, and worth coming back to.',
      'At the end of the day, it comes down to one thing: food that hits every time.',
    ],
    socialLinks: [
      { label: 'Instagram', href: INSTAGRAM_URL },
      { label: 'Facebook', href: FACEBOOK_URL },
    ],
  },
  grill: {
    id: 'grill',
    orderUrl: GRILL_ORDER_URL,
    cateringUrl: GRILL_CATERING_URL,
    logoSrc: '/images/logo-grill.png',
    logoAlt: 'Charga Grill',
    favicon: '/images/logo-grill.png',
    pageTitle: 'Charga Grill | Halal Grill & Street Food in Arlington VA',
    metaDescription:
      'Charga Grill on Langston Blvd serves halal grill chicken, kabobs, and global street food favorites in Arlington, VA. Order online or explore catering.',
    heroEyebrow: 'Arlington, VA • Langston Blvd',
    heroTitle: 'Halal Grill & Street Food in Arlington',
    heroImage: '/images/hero.jpg',
    heroImagePosition: 'center 38%',
    heroSubtitle:
      'Halal grill chicken, kabobs, and street food favorites fired over charcoal and made fresh daily.',
    followAlongText: 'Food, stories, and life on Langston Blvd.',
    footerBrand: 'Charga Grill',
    footerDescription: 'Halal grill and street food on Langston Blvd in Arlington, VA.',
    menuSections: grillMenuSections,
    visitUs: {
      line1: '5151 Langston Boulevard',
      line2: 'Arlington, VA 22207',
      directionsHref:
        'https://www.google.com/maps/dir/?api=1&destination=5151%20Langston%20Boulevard%2C%20Arlington%2C%20VA%2022207',
      mapQuery: '5151%20Langston%20Boulevard%2C%20Arlington%2C%20VA%2022207',
    },
    aboutParagraphs: [
      'Charga Grill on Langston Boulevard is a halal restaurant built around charcoal-fired chicken, global grill flavors, and street food favorites in Arlington, Virginia. Named Best Casual Restaurant by The Washington Post, the focus is simple—good food, real cooking, and meals people come back for.',
      'From rotisserie and signature Charga-style chicken to kabobs, chopped cheese, and chili momos, the menu brings together South Asian, American, and global influences without overcomplicating things.',
      'Charga Grill isn\'t a high-end concept. It\'s a neighborhood spot built for regulars, quick meals, and people who care about flavor. The goal isn\'t to impress—it\'s to be consistent, satisfying, and worth coming back to.',
      'At the end of the day, it comes down to one thing: food that hits every time.',
    ],
    socialLinks: [
      { label: 'Instagram', href: INSTAGRAM_URL },
      { label: 'Facebook', href: FACEBOOK_URL },
    ],
  },
}

const siteId = import.meta.env.VITE_SITE ?? 'pike'

export default sites[siteId] ?? sites.pike
