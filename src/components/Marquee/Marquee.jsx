import { motion } from 'framer-motion'
import portfolioData from '../../data/portfolioData'

function Marquee() {
  const { words, separator } = portfolioData.marquee

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full h-[38vh] min-h-[240px] sm:h-[44vh] lg:h-[50vh] bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden flex items-center">
      <div className="border-t-2 border-b-2 w-full h-[26vh] min-h-[150px] sm:h-[30vh] lg:h-[32vh] flex items-center border-zinc-300 overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
        >
          {[...words, ...words].map((word, i) => (
            <span key={i} className="flex items-center">
              <h1 className="text-[10vw] uppercase leading-none font-semibold pr-6 sm:pr-10">
                {word}
              </h1>
              <span className="text-[4vw] leading-none pr-6 sm:pr-10 text-zinc-100">
                {separator}
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee