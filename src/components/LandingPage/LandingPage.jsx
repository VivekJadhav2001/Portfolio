import { motion } from 'framer-motion';

import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";




function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-48 px-5 sm:px-10 lg:px-20">
        {["HI There !", "IM Vivek Jadhav", "FrontEnd Developer"].map((item, index) => {
          return (
            <div
              className="masker w-full flex justify-start items-center sm:overflow-hidden lg:overflow-visible"
              key={index}
            >
              <div className="w-fit flex items-center overflow-hidden">
                {index === 2 && (
                  <motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className="mr-[1vw] mt-[5px] w-[10vw] h-[5vw] bg-red-500 rounded-md"></motion.div>
                )}
                <h1 className="uppercase text-[6vw] sm:text-[5vw] lg:text-[4vw] min-w-[200px] min-h-[50px] leading-[7vw] sm:leading-[5vw] lg:leading-[4vw] tracking-tighter font-medium text-center">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>


      {/* <div className="textstructure mt-48 px-20">
                {["HI There !", "IM Vivek Jadhav", "FrontEnd Developer"].map((item, index) => {
                    return <div className="masker">
                        <div className="w-fit flex items-center overflow-hidden">
                            {index === 2 && (<div className='mr-[1vw] mt-[5px] w-[9vw] relative h-[5vw] bg-red-500 rounded-md'></div>)}
                            <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-medium'>{item}</h1>
                        </div>
                    </div>
                })}
            </div> */}
      <div className="border-t-2 border-zinc-700 mt-30 flex justify-between items-center py-5 px-20">
        {["Turning visions into interactive experiences", "Bridging creativity and functionality through design"]
          .map((item, index) => (<p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>))}

        <div className="start flex items-center gap-5 text-sm uppercase">
          {/* <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full cursor-pointer'>Start The Project</div> */}
          <div className="relative px-5 py-2 border-[2px] border-zinc-500 rounded-full cursor-pointer overflow-hidden group">
            <span className="absolute inset-0 bg-zinc-100 scale-0 group-hover:scale-100 transition-transform ease-out duration-600"></span>
            <a href='https://github.com/VivekJadhav2001' target='_blank'><span className="relative z-10 text-white group-hover:text-black">GitHub</span></a>
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center border-[2px] border-zinc-500">

            <span className="rotate-[45deg] cursor-pointer">
              <FaArrowUpLong />
            </span>


          </div>
        </div>

      </div>
      
    </div>

  )
}

export default LandingPage