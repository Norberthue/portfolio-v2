import { useState } from "react"
import MainPage from "./components/MainPage"

function App() {
  const [sectionActive , setSectionActive] = useState('')
  
  return (
      <div>
          <MainPage sectionActive={sectionActive} setSectionActive={setSectionActive}></MainPage>
      </div>
  )
}

export default App
