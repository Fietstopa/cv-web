import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
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
    if (isHobbies) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
    // Coming back from the hobbies route the target section mounts after the hash changes
    const target = hash.length > 1 && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
  }, [isHobbies, hash])

  return (
    <>
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
            <Experience />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
