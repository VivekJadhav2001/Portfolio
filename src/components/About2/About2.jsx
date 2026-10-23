import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

function About2() {
  const { aboutPage, personal } = portfolioData;
  const { bio } = aboutPage;

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white py-10 px-5 sm:px-10 lg:px-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-[#CDEA68] rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row gap-10 items-center mt-[10vh]"
      >
        {/* Left Section */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h1 className="text-[#212121] text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
            {aboutPage.heading}
          </h1>
          <div className="relative">
            <img
              src={aboutPage.image.src}
              alt={aboutPage.image.alt}
              className="rounded-2xl h-[50vh] w-auto object-cover mb-4 shadow-xl"
            />
            <span className="absolute -top-3 -right-3 bg-[#212121] text-[#CDEA68] text-xs font-medium px-3 py-1 rounded-full rotate-3">
              {aboutPage.badge}
            </span>
          </div>
          <p className="text-[#212121] text-xl sm:text-2xl tracking-tight">
            {aboutPage.quote}
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#212121] text-lg sm:text-xl leading-relaxed max-w-xl"
        >
          <p>
            {bio.beforeName}
            <strong>{personal.name}</strong>
            {bio.afterName}
          </p>
          <br />
          <p>{bio.second}</p>

          {/* Quick stats row for scannability */}
          <div className="flex gap-8 mt-8 flex-wrap">
            {aboutPage.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#212121]">{stat.value}</p>
                <p className="text-sm text-[#212121]/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About2;