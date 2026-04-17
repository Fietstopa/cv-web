import { useEffect, useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  const isHobbies = hash.startsWith('#/konicky')

  useEffect(() => {
    if (isHobbies) window.scrollTo({ top: 0, behavior: 'auto' })
  }, [isHobbies])

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {isHobbies ? (
          <Hobbies />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Education />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
