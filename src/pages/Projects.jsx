import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import portfolioData from "../data/portfolioData";

function Project() {
  const { projectsPage } = portfolioData;
  const projects = projectsPage.items;

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
          {projectsPage.heading}
        </h1>
        <p className="text-[#212121]/70 mt-4 text-sm md:text-base max-w-xl">
          {projectsPage.description}
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
                  {projectsPage.featuredLabel}
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
                      {projectsPage.labels.liveDemo} <FiExternalLink />
                    </button>
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer">
                  <button className="flex items-center gap-2 px-5 py-2 border border-white/30 text-white rounded-full hover:bg-white hover:text-[#212121] active:scale-95 transition cursor-pointer text-sm">
                    {projectsPage.labels.code} <FiGithub />
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