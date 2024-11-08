import React from 'react'
import Navbar from './sections/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import WorkExperience from './sections/Experience'
import Study from './sections/Study'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <main className='max-w-7xl mx-auto relative'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Study/>
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  )
}

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App