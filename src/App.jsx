import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Projects from "./components/Projects.jsx"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="bg-[#f3f3f3] text-black">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App