import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App

