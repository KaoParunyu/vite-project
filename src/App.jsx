import MainLayout from "./layout/MainLayout"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Aire from "./componants/Content/Subhome/Aire"
import Correlated from "./componants/Content/Subhome/Correlated"
function App() {
  

  return (
  
    <Router>
      <Routes>
        <Route   path="/" element={<MainLayout />} />
        <Route path="/Aire" element={<Aire/>}/>
        <Route path="/Correlated" element={<Correlated/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
