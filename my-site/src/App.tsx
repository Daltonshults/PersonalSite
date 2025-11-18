import { useState } from 'react'
import React from 'react'

import Header from './components/header'
import AboutMe from './components/aboutme'
import MainBody from './components/mainBody'

import './App.css'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header />
      <AboutMe />
      <MainBody />
      <Footer/>
  
    </>
  )
}

export default App
