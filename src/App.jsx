import { useState } from 'react'
import TopBar from './components/Header'
import Hero from './components/Hero'
import './App.css'
import Mid from './components/Mid'
import Bottom from './components/Bottom'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <TopBar />
      <Hero />
      <Mid />
      <Bottom />
      <Footer />
    </>
  )
}

export default App
