import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Algorithms from './components/Algorithms'
import Contact from './components/Contact'

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Algorithms />
      <Contact />
    </div>
  )
}

