import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

function About2() {
  return (
    <div className='w-full max-h-screen pt-1  bg-zinc-900 text-white overflow-hidden'>
            <div className="Skills_container h-screen mt-38 px-5 sm:px-10 lg:px-20 rounded-2xl bg-[#CDEA68] ">
                <div className=' '>
                  <h1 className='tracking-tight text-[#212121] font-semibold pt-2 pb-2 text-7xl '>My Skills:</h1>
                </div>
                <div className="description mt-3.5">
                    <p className=' text-2xl tracking-tighter text-[#212121]'>I have self-taught all the essential skills required for frontend development, despite coming from a mechanical engineering background. The transition was challenging at first, but dedicated learning, consistency and structured YouTube tutorials helped me navigate the journey smoothly. A special thanks to Hitesh Chaudhary <span className='text-[#FB2C36] cursor-pointer'><a href='https://www.youtube.com/@chaiaurcode' target='_black'>(Chai Aur Code)</a></span>, <span className='text-[#FB2C36] cursor-pointer'><a href='https://www.youtube.com/@CodeWithHarry' target='_black'>Code With Harry</a></span>, and <span className='text-[#FB2C36] cursor-pointer'><a href='https://www.youtube.com/@ApnaCollegeOfficial' target='_black'>Apna College</a></span>, whose insightful content played a crucial role in shaping my understanding of web development.</p>
                  </div>
                <div className="card-container h-[70vh] pt-10 ">
                  <div className="cards gap-10 flex flex-wrap ">
                    <div className="bg-black text-[#FB2C36] cursor-pointer rounded-4xl ">
                    <FaHtml5 className='w-[20vw] h-[20vh]' />
                    </div>
                    <div className="bg-black text-[#FB2C36] cursor-pointer rounded-4xl">
                    <FaCss3Alt  className='w-[20vw] h-[20vh]' />
                    </div>
                    <div className="bg-black text-[#FB2C36] cursor-pointer rounded-4xl">
                    <IoLogoJavascript className='w-[20vw] h-[20vh]' />
                    </div>
                    <div className="bg-black text-[#FB2C36] cursor-pointer rounded-4xl">
                    <FaReact className='w-[20vw] h-[20vh]' />
                    </div>
                    <div className="bg-black text-[#FB2C36] cursor-pointer rounded-4xl">
                    <RiTailwindCssFill className='w-[20vw] h-[20vh]' />
                    </div>
                    <div className="bg-black text-[#FB2C36] cursor-pointer rounded-4xl">
                    <IoLogoGithub className='w-[20vw] h-[20vh]' />
                    </div>
                    <div className="bg-black text-[#FB2C36] cursor-pointer rounded-4xl">
                    <IoLogoVercel className='w-[20vw] h-[20vh]' />
                    </div>
                    <div className="bg-black  text-[#FB2C36] cursor-pointer rounded-4xl">
                    <SiRedux className='w-[20vw] h-[20vh]' />
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>
  )
}

export default About2