import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Intro from './components/Intro'

const App = () => {
  return (
    <>
    <Navbar/>
    <section id="home" className="sm:h-screen bg-blue-100 ">
        {/* <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1> */}
        <Intro/>
      </section>

      <section id="about" className="sm:min-h-screen bg-slate-100  ">
        <About/>
      </section>

      <section id="skills" className=" mt-5 sm:mt-0 bg-blue-100  ">
        <Skills/>
      </section>

      <section id="projects" className=" bg-slate-100 ">
       <Projects/>
      </section>

      <section id="contact" className=" bg-blue-100  text-white flex items-center justify-center">
        <Contact/>
      </section>

      <Footer/>
    
    </>
  )
}

export default App