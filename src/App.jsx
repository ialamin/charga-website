import { useEffect, useState } from 'react'
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

function App() {
  const getPageFromPath = (path) => {
    if (path === '/menu') return 'menu'
    if (path === '/locations') return 'locations'
    if (path === '/about') return 'about'
    return 'home'
  }

  const getPathFromPage = (page) => {
    if (page === 'menu') return '/menu'
    if (page === 'locations') return '/locations'
    if (page === 'about') return '/about'
    return '/'
  }

  const [activePage, setActivePage] = useState(() => getPageFromPath(window.location.pathname))
  const [mobileOrderDockProgress, setMobileOrderDockProgress] = useState(0)
  const isHome = activePage === 'home'

  const handleNavigate = (page, path) => {
    const nextPage = page ?? getPageFromPath(path ?? window.location.pathname)
    const nextPath = path ?? getPathFromPage(nextPage)
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, '', nextPath)
    }
    setActivePage(nextPage)
  }

  useEffect(() => {
    if (isHome) {
      setMobileOrderDockProgress(0)
    }
  }, [isHome])

  useEffect(() => {
    const onPopState = () => setActivePage(getPageFromPath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return (
    <>
      <Header
        onNavigate={handleNavigate}
        mobileOrderDockProgress={isHome ? mobileOrderDockProgress : 1}
      />
      <main>
        {activePage === 'home' ? (
          <>
            <Hero onMobileOrderDockProgressChange={setMobileOrderDockProgress} />
            <MenuHighlights />
            <SocialProof />
            <VisitUs />
            <FollowAlong />
          </>
        ) : activePage === 'menu' ? (
          <Menu />
        ) : activePage === 'locations' ? (
          <Locations onNavigate={handleNavigate} />
        ) : (
          <About />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  )
}

export default App
