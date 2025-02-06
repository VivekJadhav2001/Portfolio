import React from 'react'

import LandingPage from '../LandingPage/LandingPage'
import Marquee from '../Marquee/Marquee'
import About from '../About/About'
import Eyes from '../Eyes/Eyes'
import Skills from '../Skills/Skills'
import Project from '../Projects/Project'

function Home() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
       <LandingPage/>
       <Marquee/> 
       <About/>
       <Eyes/>
       <Skills/>
       <Project/>     
    </div>
  )
}

export default Home