import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
