import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
