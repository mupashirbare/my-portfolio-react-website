import React from 'react'
import Header from '../components/Header'
import Bio from '../components/Bio'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '../components/About'
import Footer from '../components/Footer'
import Projectheader from '../components/Project-header'
import SkillsHeader from '../components/Skills-Header'
import Aboutheader from '../components/About-header'


function Home() {
  return (
    <div>
      <Header/><br />
      <hr />
      <Bio/>
      <br />
      <hr />
      <Aboutheader/>
      <About/>
      <SkillsHeader/>
      <Skills/>
      <br />
      <hr />
      <Projectheader/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home
