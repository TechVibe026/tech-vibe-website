import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Solutions from './components/Solutions/Solutions'
import Process from './components/Process/Process'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import Privacy from './pages/Privacy/Privacy'
import Terms from './pages/Terms/Terms'

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Solutions />
        <Process />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacidade" element={<Privacy />} />
      <Route path="/termos" element={<Terms />} />
    </Routes>
  )
}

export default App