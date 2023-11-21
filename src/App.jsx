

import './App.css'
import HeroSection from './components/HeroSection.jsx'
import Navbar from "./components/Navbar.jsx"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
    
  )
}

export default App
