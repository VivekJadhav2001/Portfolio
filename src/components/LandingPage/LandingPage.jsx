import { Fragment } from "react";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import portfolioData from "../../data/portfolioData";

const lineVariants = {
  hidden: {
    y: "100%",
  },

  visible: (i) => ({
    y: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

function LandingPage() {
  const { hero, personal } = portfolioData;
  const heroLines = hero.lines;

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="relative w-full min-h-[100svh] bg-zinc-900 pt-1 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute top-[20%] left-[45%] -translate-x-1/2 w-[80vw] h-[80vw] sm:w-[55vw] sm:h-[55vw] max-w-[900px] max-h-[900px] bg-red-500/10 rounded-full blur-[110px] sm:blur-[150px]" />

      <div className="pointer-events-none absolute right-0 top-[15%] w-[55vw] h-[55vw] sm:w-[35vw] sm:h-[35vw] max-w-[560px] max-h-[560px] bg-red-500/5 rounded-full blur-[90px] sm:blur-[120px]" />

      {/* Grid */}
      <div
        className="
          pointer-events-none 
          absolute inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:40px_40px]
          sm:bg-[size:64px_64px]
        "
      />

      {/* Available Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="
          relative z-10
          flex justify-center sm:justify-start
          px-5 sm:px-10 lg:px-20
          pt-24 sm:pt-28 lg:pt-32
        "
      >
        <div
          className="
            flex items-center gap-2
            px-4 sm:px-5 py-1.5 sm:py-2
            border border-zinc-700
            rounded-full
            text-[10px] sm:text-xs md:text-sm
            uppercase
            tracking-widest
            text-zinc-300
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          {personal.availability}
        </div>
      </motion.div>

      {/* Hero */}
      <div
        className="
          relative z-10
          mt-8 sm:mt-12 lg:mt-20
          px-5 sm:px-10 lg:px-20
          flex flex-col
          lg:flex-row
          lg:items-center
          gap-10 sm:gap-12 lg:gap-16
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 min-w-0 w-full">
          {/* Main Heading */}
          <div className="space-y-0">
            {heroLines.map((item, index) => (
              <div key={index} className="masker overflow-hidden w-full">
                <div className="flex items-center w-full overflow-hidden">
                  {/* Red block */}
                  {index === 2 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "clamp(36px, 6vw, 90px)" }}
                      transition={{
                        duration: 1,
                        delay: 0.6,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="
      mr-2 sm:mr-3 lg:mr-[1.5vw]
      mt-1
      h-[clamp(30px,3.5vw,65px)]
      bg-red-500
      rounded-md
      shrink-0
    "
                    />
                  )}

                  <div className="overflow-hidden min-w-0">
                    <motion.h1
                      custom={index}
                      variants={lineVariants}
                      initial="hidden"
                      animate="visible"
                      className="
            uppercase
            text-[clamp(1.55rem,8vw,2.75rem)]
            sm:text-[clamp(2.35rem,6.5vw,3.25rem)]
            lg:text-[clamp(48px,3.8vw,78px)]
            leading-[0.95]
            tracking-[-0.045em]
            font-medium
            text-white
            break-words
          "
                    >
                      {item}
                    </motion.h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="mt-8 sm:mt-10 max-w-2xl"
          >
            <p
              className="
                text-zinc-300
                text-base
                sm:text-lg
                lg:text-xl
                leading-relaxed
                font-light
              "
            >
              {hero.intro.primary}
            </p>

            <p
              className="
                mt-3 sm:mt-4
                text-zinc-500
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
                max-w-xl
              "
            >
              {hero.intro.secondary}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
            className="
              mt-6 sm:mt-7
              flex flex-wrap
              items-center
              gap-x-3 sm:gap-x-5
              gap-y-2
              text-[10px] sm:text-xs md:text-sm
              uppercase
              tracking-widest
              text-zinc-500
            "
          >
            {hero.techStack.map((tech, index) => (
              <Fragment key={tech}>
                <span className="text-zinc-300">{tech}</span>
                {index < hero.techStack.length - 1 && <span>•</span>}
              </Fragment>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.3,
              duration: 0.8,
            }}
            className="
              mt-8 sm:mt-9
              flex
              flex-col sm:flex-row
              flex-wrap
              gap-3 sm:gap-4
            "
          >
            {/* Projects */}
            <Link
              to={hero.actions.projects.to}
              className="
                relative
                inline-flex
                items-center
                justify-center
                w-full sm:w-auto
                px-6 sm:px-7
                py-3
                border-2
                border-red-500
                bg-red-500
                text-black
                rounded-full
                overflow-hidden
                group
                active:scale-95
                transition-transform
              "
            >
              <span className="relative z-10 text-sm sm:text-base font-medium">{hero.actions.projects.label}</span>
            </Link>

            {/* GitHub */}
            <a
              href={hero.actions.github.href}
              target="_blank"
              rel="noreferrer"
              className="
                relative
                inline-flex
                items-center
                justify-center
                w-full sm:w-auto
                px-6 sm:px-7
                py-3
                border-2
                border-zinc-600
                rounded-full
                overflow-hidden
                group
                active:scale-95
                transition-transform
              "
            >
              <span
                className="
                  absolute inset-0
                  bg-white
                  scale-0
                  group-hover:scale-100
                  transition-transform
                  duration-500
                  origin-center
                "
              />

              <span
                className="
                  relative z-10
                  text-sm sm:text-base
                  font-medium
                  text-white
                  group-hover:text-black
                  transition-colors
                "
              >
                {hero.actions.github.label}
              </span>
            </a>

            {/* Resume */}
            <a
              href={hero.actions.resume.href}
              target="_blank"
              rel="noreferrer"
              className="
                relative
                flex
                items-center
                justify-center
                w-full sm:w-auto
                gap-3
                px-6 sm:px-7
                py-3
                border-2
                border-zinc-600
                rounded-full
                overflow-hidden
                group
                active:scale-95
                transition-transform
              "
            >
              <span
                className="
                  absolute inset-0
                  bg-white
                  scale-0
                  group-hover:scale-100
                  transition-transform
                  duration-500
                  origin-center
                "
              />

              <span
                className="
                  relative z-10
                  text-sm sm:text-base
                  font-medium
                  text-white
                  group-hover:text-black
                  transition-colors
                "
              >
                {hero.actions.resume.label}
              </span>

              <span
                className="
                  relative z-10
                  rotate-45
                  text-white
                  group-hover:text-black
                  transition-all
                  group-hover:rotate-[60deg]
                "
              >
                <FaArrowUpLong />
              </span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            relative
            w-full
            max-w-[18rem] sm:max-w-xs md:max-w-sm
            mx-auto
            mt-2 lg:mt-0
            lg:mx-0
            lg:w-[34vw]
            xl:w-[36vw]
            lg:max-w-lg
            shrink-0
          "
        >
          {/* Image Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-5
              bg-red-500/15
              rounded-3xl
              blur-3xl
            "
          />

          {/* Image */}
          <div
            className="
              relative
              rounded-2xl
              border
              border-zinc-700
              overflow-hidden
              shadow-2xl
              bg-zinc-950
            "
          >
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="
                w-full
                h-full
                object-cover
                aspect-[4/5]
              "
            />

            {/* <Container image="./profileImage.png" /> */}
          </div>

          {/* Small Image Label */}
          <div
            className="
              absolute
              -bottom-3 sm:-bottom-4
              left-4 sm:left-6
              px-3.5 sm:px-5
              py-1.5 sm:py-2
              bg-zinc-900
              border
              border-zinc-700
              rounded-full
              text-[10px] sm:text-xs
              uppercase
              tracking-widest
              text-zinc-400
            "
          >
            {hero.image.label}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div
        className="
          relative z-10
          flex
          flex-col
          md:flex-row
          md:justify-between
          md:items-center
          border-t-2
          border-zinc-700
          mt-12 sm:mt-16 lg:mt-20
          gap-4 sm:gap-6
          py-5
          px-5
          sm:px-10
          lg:px-20
        "
      >
        {/* Left */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          {hero.footerLines.map((line, index) => (
            <p
              key={line}
              className={`text-sm md:text-base font-light tracking-tight ${
                index === 0 ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Links */}
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="
          hidden
          xl:flex
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          z-10
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-widest
            text-zinc-500
          "
        >
          {hero.scrollLabel}
        </span>

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
          className="
            w-5
            h-8
            rounded-full
            border
            border-zinc-600
            flex
            items-start
            justify-center
            pt-1.5
          "
        >
          <div className="w-1 h-1.5 rounded-full bg-zinc-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LandingPage;
