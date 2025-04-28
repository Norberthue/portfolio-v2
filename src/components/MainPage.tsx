import About from "./About"
import Header from "./Header"
import Hero from "./Hero"
import Projects from "./Projects"
import Contact from "./Contact"
import Navbar from "./Navbar"

interface MainPageForms {
    setSectionActive: (section: string) => void;
    sectionActive: string
}

const MainPage = ({setSectionActive, sectionActive}: MainPageForms) => {
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

export default MainPage