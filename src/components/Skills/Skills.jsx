import { motion } from 'framer-motion'
import portfolioData from '../../data/portfolioData'

function Skills() {
  const allSkills = portfolioData.skills.groups.flatMap((group) => group.items)
  const skills = portfolioData.skills.homeMarquee
    .map((name) => allSkills.find((skill) => skill.name === name))
    .filter(Boolean)
  const marqueeSkills = [...skills, ...skills] // duplicated for seamless loop

  return (
    <div className="w-full min-h-[80vh] lg:min-h-screen py-14 sm:py-16 lg:py-20 bg-black overflow-hidden flex flex-col justify-center">
      <div className="w-full px-5 sm:px-10 lg:px-20 border-b-2 border-white/80 pb-8 sm:pb-10 lg:pb-14">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold">{portfolioData.skills.homeHeading}</h1>
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm md:text-base max-w-xl">
          Tools and technologies I use to build full-stack web applications.
        </p>
      </div>

      <div className="relative mt-10 sm:mt-12 lg:mt-16 w-full overflow-hidden">
        {/* edge fade so the loop doesn't look like it's cutting off */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-10 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 25 }}
        >
          {marqueeSkills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 shrink-0 transition-all duration-300 hover:scale-105 hover:border-white/30 cursor-pointer"
            >
              <div
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 group-hover:-translate-y-1"
                style={{ color: skill.color }}
              >
                {typeof skill.icon === 'string' ? <span>{skill.icon}</span> : <skill.icon />}
              </div>
              <span className="text-white/70 text-xs sm:text-sm md:text-base tracking-wide px-2 text-center leading-tight">{skill.homeName || skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills