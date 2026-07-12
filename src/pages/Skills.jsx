import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiRedux, SiMongodb, SiExpress, SiTypescript, SiPostman } from "react-icons/si";

const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
      { icon: <FaCss3Alt />, name: "CSS", color: "#1572B6" },
      { icon: <IoLogoJavascript />, name: "JavaScript", color: "#F7DF1E" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
      { icon: <FaReact />, name: "React", color: "#61DAFB" },
      { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
      { icon: <RiTailwindCssFill />, name: "Tailwind", color: "#38BDF8" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
      { icon: <SiExpress />, name: "Express", color: "#FFFFFF" },
      { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { icon: <IoLogoGithub />, name: "GitHub", color: "#FFFFFF" },
      { icon: <IoLogoVercel />, name: "Vercel", color: "#FFFFFF" },
      { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    ],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" },
  }),
};

function SkillsGrid() {
  let flatIndex = 0;

  return (
    <div className="w-full bg-zinc-900 text-white py-10">
      <div className="px-5 sm:px-10 lg:px-20 rounded-2xl bg-[#CDEA68] py-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold text-[#212121] mb-6">
          My Skills
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#212121] mb-10 max-w-4xl">
          Self-taught and project-tested — I've built full-stack apps end to
          end with this stack, from payment integrations to AI-powered tools.
        </p>

        {/* Grouped Skills */}
        <div className="flex flex-col gap-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h2 className="text-[#212121]/70 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
                {group.label}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {group.skills.map((skill) => {
                  const i = flatIndex++;
                  return (
                    <motion.div
                      key={skill.name}
                      custom={i}
                      variants={cardVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      className="group bg-black rounded-2xl flex flex-col items-center justify-center py-6 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <div
                        className="text-4xl md:text-5xl mb-2 transition-colors"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <p className="text-sm text-white/80 group-hover:text-white">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsGrid;