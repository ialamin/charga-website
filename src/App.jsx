import { useEffect, useState } from 'react'
import { trackPageView } from './analytics.js'
import { getLandingPageBySlug } from './data/landingPages.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MenuHighlights from './components/MenuHighlights.jsx'
import SocialProof from './components/SocialProof.jsx'
import VisitUs from './components/VisitUs.jsx'
import FollowAlong from './components/FollowAlong.jsx'
import Footer from './components/Footer.jsx'
import Menu from './pages/Menu.jsx'
import Locations from './pages/Locations.jsx'
import About from './pages/About.jsx'
import SeoLandingPage from './pages/SeoLandingPage.jsx'

function parsePath(path) {
  if (path === '/menu') return { page: 'menu', slug: null }
  if (path === '/locations') return { page: 'locations', slug: null }
  if (path === '/about') return { page: 'about', slug: null }

  const slug = path.replace(/^\/|\/$/g, '')
  if (slug && getLandingPageBySlug(slug)) {
    return { page: 'seo', slug }
  }

  return { page: 'home', slug: null }
}

function getPathFromRoute({ page, slug }) {
  if (page === 'menu') return '/menu'
  if (page === 'locations') return '/locations'
  if (page === 'about') return '/about'
  if (page === 'seo' && slug) return `/${slug}`
  return '/'
}

function App() {
  const [route, setRoute] = useState(() => parsePath(window.location.pathname))
  const [mobileOrderDockProgress, setMobileOrderDockProgress] = useState(0)
  const isHome = route.page === 'home'

  const handleNavigate = (page, path) => {
    const nextRoute = page
      ? { page, slug: null }
      : parsePath(path ?? window.location.pathname)
    const nextPath = path ?? getPathFromRoute(nextRoute)

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath)
    }

    setRoute(nextRoute)
  }

  useEffect(() => {
    if (isHome) {
      setMobileOrderDockProgress(0)
    }
  }, [isHome])

  useEffect(() => {
    const onPopState = () => setRoute(parsePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    trackPageView(getPathFromRoute(route))
  }, [route])

  return (
    <>
      <Header
        onNavigate={handleNavigate}
        mobileOrderDockProgress={isHome ? mobileOrderDockProgress : 1}
      />
      <main>
        {route.page === 'home' ? (
          <>
            <Hero onMobileOrderDockProgressChange={setMobileOrderDockProgress} />
            <MenuHighlights />
            <SocialProof />
            <VisitUs />
            <FollowAlong />
          </>
        ) : route.page === 'menu' ? (
          <Menu />
        ) : route.page === 'locations' ? (
          <Locations onNavigate={handleNavigate} />
        ) : route.page === 'seo' ? (
          <SeoLandingPage slug={route.slug} onNavigate={handleNavigate} />
        ) : (
          <About />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  )
}

export default App
