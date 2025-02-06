import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return ( 
    <div data-scroll data-scrool-sction data-scroll-speed=".1" className='w-full py-10 h-[50vh] bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
      <div className="text border-t-2 border-b-2 h-[32vh] flex  border-zinc-300 mt-[35px] overflow-hidden whitespace-nowrap ">
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className='text-[10vw] uppercase leading-none font-semibold -mb-[8vw] pt-10 -mt-4 pr-10'>Web Developer</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className='text-[10vw] uppercase leading-none font-semibold -mb-[8vw] pt-10 -mt-4 pr-10'>Web Developer</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}} className='text-[10vw] uppercase leading-none font-semibold -mb-[8vw] pt-10 -mt-4 pr-10'>Web Developer</motion.h1>
      </div>
    </div>
  )
}

export default Marquee