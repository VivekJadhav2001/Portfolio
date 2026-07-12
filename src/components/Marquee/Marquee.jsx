import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  const words = ["Web Developer", "MERN Stack Developer", "Full Stack Developer"]

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-10 h-[50vh] bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      <div className="border-t-2 border-b-2 h-[32vh] flex items-center border-zinc-300 mt-[35px] overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
        >
          {[...words, ...words].map((word, i) => (
            <span key={i} className="flex items-center">
              <h1 className="text-[10vw] uppercase leading-none font-semibold pr-10">
                {word}
              </h1>
              <span className="text-[4vw] leading-none pr-10 text-zinc-100">
                ★
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee