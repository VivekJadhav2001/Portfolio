import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

const { heading, description, groups: skillGroups } = portfolioData.skills;

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
          {heading}
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#212121] mb-10 max-w-4xl">
          {description}
        </p>

        {/* Grouped Skills */}
        <div className="flex flex-col gap-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h2 className="text-[#212121]/70 text-sm md:text-base font-semibold uppercase tracking-widest mb-4">
                {group.label}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {group.items.map((skill) => {
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
                        {typeof skill.icon === "string" ? <span>{skill.icon}</span> : <skill.icon />}
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
