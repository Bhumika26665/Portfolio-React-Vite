import { useState } from 'react'


import Navbar from '../components/navbar'
import Header from '../components/header'
import About from '../components/about'
import Services from '../components/services'
import ToolsSection from '../components/toolsSectopn'
import ProjectsSection from '../components/project'
import ContactSection from '../components/GetInTouch'
import Footer from '../components/footer'

function HomePage() {
  
  return (
    <>
     <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <ToolsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default HomePage
