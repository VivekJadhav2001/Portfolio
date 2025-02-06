import React from 'react'
import aboutImg from '../../assets/aboutImg.gif'
function About2() {
  return (
    <div className='w-full h-screen pt-1 flex bg-zinc-900 text-white'>
        <div className="About_container   mt-38 px-5 sm:px-10 lg:px-20 flex justify-between rounded-2xl bg-[#CDEA68]">
            <div className="pt-10">
                <h1 className='text-[#212121] text-7xl font-semibold'>About Me:</h1>
                <div className=' mt-6 w-full h-screen overflow-hidden '>
                <img src={aboutImg}  alt="" className=' rounded-4xl h-[55vh] w-[35vw]' />
                <div>
            <p className='text-[#212121] text-3xl mt-2.5 tracking-tight'>Im no Batman 🦇 but, I like to code at Night 🌃</p>
            </div>
                </div>
            </div>
            <div className="h-[70vh] w-[45vw] mr-20 mt-15 overflow-hidden ">
                <p className='text-[#212121] text-3xl tracking-wide '>My name is VIVEK JADHAV. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving.<br/><br/> I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.</p>
            
            </div>
        </div>
    </div>
  )
}

export default About2