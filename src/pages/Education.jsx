import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiAward } from "react-icons/fi";
import portfolioData from "../data/portfolioData";

function Education() {
  const education = portfolioData.education || [];

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
          Education
        </h1>
        <p className="text-[#212121]/70 mt-4 text-sm md:text-base max-w-xl">
          Academic background and qualifications.
        </p>
      </div>

      {/* Cards */}
      <div className="px-6 md:px-20 mt-10 flex flex-col gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
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
                  {edu.degree}
                  {edu.field && ` in ${edu.field}`}
                </h2>
                <h3 className="text-lg md:text-xl text-[#CDEA68] mt-1">
                  {edu.institution}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-3 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <FiCalendar />
                    <span>
                      {edu.startYear} - {edu.endYear}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              {edu.grade && (
                <div className="flex items-center gap-2 text-[#212121] bg-[#CDEA68] w-fit px-3 py-1 rounded-full">
                  <FiAward />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    {edu.grade.value} {edu.grade.type}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;
