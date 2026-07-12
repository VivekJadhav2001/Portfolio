import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import alchemistImg from "../assets/alchemist-preview.png";
import resumeMatcherDemo from "../assets/Resume-Matcher-Extension.mp4";

function Project() {
  const projects = [
    {
      title: "The Code Alchemist",
      desc: "AI-powered placement prep platform with mock interviews, MCQ tests, resume-JD scoring, mentor booking, and a full Razorpay payment flow with webhook-based order verification.",
      img: alchemistImg,
      tech: ["React", "Node.js", "MongoDB", "Razorpay", "Redux Toolkit"],
      link: "https://thecodealchemist.vercel.app/",
      github: "",
      featured: true,
    },
    {
      title: "Resume JD Matcher",
      desc: "Chrome extension that scores resumes against job descriptions using ATS logic and keyword analysis. Content scripts detect highlighted job text on sites like LinkedIn and inject a live tooltip with an instant match score.",
      video: resumeMatcherDemo,
      tech: ["Chrome Extension", "React", "Node.js", "Express", "Groq AI"],
      link: "https://drive.google.com/file/d/194kNk7yQx70BvtuD9eHBh5tdvF5ieFLL/view?usp=drive_link",
      github: "https://github.com/VivekJadhav2001/Match-My-Resume",
    },
    {
      title: "AI Resume Builder",
      desc: "Resume builder with AI-generated content via Groq, PDF export, and a clean editing flow built on Redux Toolkit.",
      img: "https://files.catbox.moe/j3b7bn.png",
      tech: ["React", "Redux Toolkit", "Groq AI", "jsPDF"],
      link: "https://ai-resume-builder-accio.vercel.app/",
      github: "https://github.com/VivekJadhav2001/AI_Resume_Builder",
    },
    {
      title: "Connexa",
      desc: "Role-based social platform with JWT authentication, RBAC permissions, and AWS S3 media uploads.",
      img: "https://files.catbox.moe/1duy0j.png",
      tech: ["React", "Node.js", "JWT", "AWS S3"],
      link: "https://drive.google.com/file/d/1e5UV7G69bgll82DVKhmpsIrqMgeSZ6oC/view?usp=sharing",
      github: "https://github.com/VivekJadhav2001/Connexa",
    },
    {
      title: "Zorvyn Finance Dashboard",
      desc: "Finance dashboard with real-time charts, INR-formatted figures, and a Zustand-driven state layer.",
      img: "https://files.catbox.moe/936fl0.png",
      tech: ["React", "Vite", "Recharts", "Zustand"],
      link: "https://zorvyn-finance-dashboard-sable.vercel.app/",
      github: "https://github.com/VivekJadhav2001/zorvyn-finance-dashboard",
    },
    {
      title: "Private Social Media App",
      desc: "Private, invite-based social platform focused on closed-circle sharing rather than public feeds.",
      img: "https://files.catbox.moe/ugglnh.png",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://private-instagram-phase1.vercel.app/",
      github: "https://github.com/VivekJadhav2001/Private_Instagram_Phase1",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <div className="w-full py-20 bg-[#CDEA68]">
      {/* Heading */}
      <div className="w-full px-6 md:px-20 border-b-[2px] border-[#a1b562] pb-8">
        <h1 className="text-5xl md:text-7xl font-semibold text-[#212121]">
          Projects
        </h1>
        <p className="text-[#212121]/70 mt-4 text-sm md:text-base max-w-xl">
          A selection of full-stack builds — from payment integrations to AI-powered tools.
        </p>
      </div>

      {/* Cards */}
      <div className="px-6 md:px-20 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`bg-[#18181B] border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-white/20 transition-all duration-300 group ${
              project.featured ? "md:col-span-2 md:flex" : ""
            }`}
          >
            {/* Media */}
            <div className={`overflow-hidden bg-black/40 ${project.featured ? "md:w-1/2 h-[260px] md:h-auto" : "h-[220px] md:h-[260px]"}`}>
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              ) : (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 md:flex-1">
              {project.featured && (
                <span className="text-xs font-semibold uppercase tracking-widest text-[#212121] bg-[#CDEA68] w-fit px-3 py-1 rounded-full">
                  Featured
                </span>
              )}

              <h2 className="text-xl md:text-2xl font-bold text-white">
                {project.title}
              </h2>

              <p className="text-white/60 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-2">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="flex items-center gap-2 px-5 py-2 bg-[#CDEA68] text-[#212121] rounded-full hover:bg-[#dcf28f] active:scale-95 transition cursor-pointer text-sm font-medium">
                      Live Demo <FiExternalLink />
                    </button>
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer">
                  <button className="flex items-center gap-2 px-5 py-2 border border-white/30 text-white rounded-full hover:bg-white hover:text-[#212121] active:scale-95 transition cursor-pointer text-sm">
                    Code <FiGithub />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;