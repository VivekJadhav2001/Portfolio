import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoGithub } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { IoLogoVercel } from 'react-icons/io5'
import { SiMongodb, SiExpress, SiRedux, SiTypescript } from 'react-icons/si'

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
  { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
  { icon: <IoLogoJavascript />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
  { icon: <FaReact />, name: 'React', color: '#61DAFB' },
  { icon: <SiRedux />, name: 'Redux', color: '#764ABC' },
  { icon: <RiTailwindCssFill />, name: 'Tailwind', color: '#38BDF8' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
  { icon: <SiExpress />, name: 'Express', color: '#FFFFFF' },
  { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
  { icon: <IoLogoGithub />, name: 'GitHub', color: '#FFFFFF' },
  { icon: <IoLogoVercel />, name: 'Vercel', color: '#FFFFFF' },
]

function Skills() {
  const marqueeSkills = [...skills, ...skills] // duplicated for seamless loop

  return (
    <div className="w-full min-h-screen py-10 bg-black overflow-hidden">
      <div className="w-full px-6 md:px-20 border-b-[2px] border-white pb-10 md:pb-15">
        <h1 className="text-white text-4xl md:text-7xl tracking-tight font-semibold">Skills</h1>
        <p className="text-gray-400 mt-4 text-sm md:text-base max-w-xl">
          Tools and technologies I use to build full-stack web applications.
        </p>
      </div>

      <div className="relative mt-15 w-full overflow-hidden">
        {/* edge fade so the loop doesn't look like it's cutting off */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-6 md:gap-10 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 25 }}
        >
          {marqueeSkills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm w-40 h-40 md:w-52 md:h-52 shrink-0 transition-all duration-300 hover:scale-105 hover:border-white/30 cursor-pointer"
            >
              <div
                className="text-5xl md:text-7xl transition-transform duration-300 group-hover:-translate-y-1"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-white/70 text-sm md:text-base tracking-wide">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills