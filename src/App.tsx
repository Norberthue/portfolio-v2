import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
      <div className="grid" style={{ gridTemplateColumns: "60px 1fr" }}>
        <Navbar/>
        <main>
          <Header></Header>
          <Hero/>
          <About/>
        </main>
      </div>
  )
}

export default App
