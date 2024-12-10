import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StarryBackground from './components/StarryBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white relative">
      <StarryBackground />
      <Header />
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </main>
  )
}

