import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
    </div>
  )
}

export default App

