import { useState } from "react"
import Resume from "./components/Resume"
import { Routes, Route} from 'react-router-dom'
import MainPage from "./components/MainPage"

function App() {
  const [sectionActive , setSectionActive] = useState('')
  
  return (
      <div>
        <Routes>
          <Route path="/" element={<MainPage sectionActive={sectionActive} setSectionActive={setSectionActive}></MainPage>}></Route>
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </div>
  )
}

export default App
