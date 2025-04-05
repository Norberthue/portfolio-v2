import { useState } from "react"
import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  const [sectionActive , setSectionActive] = useState('')
  
  return (
      <div className="grid" style={{ gridTemplateColumns: "60px 1fr" }}>
        <Navbar sectionActive={sectionActive}/>
        <main>
          <Header></Header>
          <Hero setSectionActive={setSectionActive}/>
          <About setSectionActive={setSectionActive}/>
          <Projects setSectionActive={setSectionActive}/>
          <Contact setSectionActive={setSectionActive}/>
        </main>
      </div>
  )
}

export default App
