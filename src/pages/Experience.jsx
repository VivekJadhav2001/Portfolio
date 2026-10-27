import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import portfolioData from "../data/portfolioData";

function Experience() {
  const experiences = portfolioData.experiences || [];

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const formatDate = (date) => {
    if (!date) return "Present";
    return `${date.month} ${date.year}`;
  };

  return (
    <div className="w-full py-20 bg-[#CDEA68]">
      {/* Heading */}
      <div className="w-full px-6 md:px-20 border-b-[2px] border-[#a1b562] pb-8">
        <h1 className="text-5xl md:text-7xl font-semibold text-[#212121]">
          Experience
        </h1>
        <p className="text-[#212121]/70 mt-4 text-sm md:text-base max-w-xl">
          My professional journey and the impact I've delivered.
        </p>
      </div>

      {/* Cards */}
      <div className="px-6 md:px-20 mt-10 flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#18181B] border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-white/20 transition-all duration-300 p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {exp.role}
                </h2>
                <h3 className="text-lg md:text-xl text-[#CDEA68] mt-1">
                  {exp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <FiCalendar />
                    <span>
                      {formatDate(exp.startDate)} -{" "}
                      {exp.currentlyWorking
                        ? "Present"
                        : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              {exp.currentlyWorking && (
                <span className="text-xs font-semibold uppercase tracking-widest text-[#212121] bg-[#CDEA68] w-fit px-3 py-1 rounded-full">
                  Current
                </span>
              )}
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {exp.description}
            </p>

            {exp.highlights && exp.highlights.length > 0 && (
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-white/70 text-sm flex items-start gap-3"
                    >
                      <span className="text-[#CDEA68] mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
