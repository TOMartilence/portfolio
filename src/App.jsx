import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'
import Projects from './pages/Projects'
import About from './pages/About'
import Education from './pages/Education'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About style={{"minHeight":"100vh"}}/>
      <Education/>
      <Projects/>
    </>
  )
}

export default App
