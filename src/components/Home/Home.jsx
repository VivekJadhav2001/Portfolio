import LandingPage from '../LandingPage/LandingPage'
import Marquee from '../Marquee/Marquee'
import About from '../About/About'
import Eyes from '../Eyes/Eyes'
import Skills from '../Skills/Skills'
import Project from '../Projects/Project'
import CodeAlchemistSpotlight from '../The Code Alchemist/CodeAlchemistSpotlight'
import PortfolioGuide from '../Guide/PortfolioGuide'

function Home() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white overflow-x-hidden'>
       <PortfolioGuide />
       <section id="landing" className="scroll-mt-20 lg:scroll-mt-24">
         <LandingPage/>
       </section>
       <section id="featured" className="scroll-mt-20 lg:scroll-mt-24">
         <CodeAlchemistSpotlight/>
       </section>
       <Marquee/> 
       <section id="about" className="scroll-mt-20 lg:scroll-mt-24">
         <About/>
       </section>
       <section id="playground" className="scroll-mt-20 lg:scroll-mt-24">
         <Eyes/>
       </section>
       <section id="skills" className="scroll-mt-20 lg:scroll-mt-24">
         <Skills/>
       </section>
       <section id="projects" className="scroll-mt-20 lg:scroll-mt-24">
         <Project/>     
       </section>
    </div>
  )
}

export default Home