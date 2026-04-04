import React from "react";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript, IoLogoGithub } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

function About2() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <RiTailwindCssFill />, name: "Tailwind" },
    { icon: <IoLogoGithub />, name: "GitHub" },
    { icon: <IoLogoVercel />, name: "Vercel" },
    { icon: <SiRedux />, name: "Redux" },
  ];

  return (
    <div className="w-full bg-zinc-900 text-white py-10">
      <div className="px-5 sm:px-10 lg:px-20 rounded-2xl bg-[#CDEA68] py-10">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold text-[#212121] mb-6">
          My Skills:
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#212121] mb-10 max-w-4xl">
          I have self-taught all the essential skills required for frontend development...
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-black text-[#FB2C36] rounded-2xl flex flex-col items-center justify-center py-6 hover:scale-105 transition cursor-pointer"
            >
              {/* Icon */}
              <div className="text-4xl md:text-5xl mb-2">
                {skill.icon}
              </div>

              {/* Label */}
              <p className="text-sm text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About2;