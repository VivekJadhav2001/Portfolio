import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
  const heroLines = ["Hi there!", "I'm Vivek Jadhav", "Software Developer"];

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="relative w-full min-h-screen bg-zinc-900 pt-1 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute top-[20%] left-[45%] -translate-x-1/2 w-[55vw] h-[55vw] bg-red-500/10 rounded-full blur-[150px]" />

      <div className="pointer-events-none absolute right-0 top-[15%] w-[35vw] h-[35vw] bg-red-500/5 rounded-full blur-[120px]" />

      {/* Grid */}
      <div
        className="
          pointer-events-none 
          absolute inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:64px_64px]
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
          pt-10
        "
      >
        <div
          className="
            flex items-center gap-2
            px-5 py-2
            border border-zinc-700
            rounded-full
            text-xs sm:text-sm
            uppercase
            tracking-widest
            text-zinc-300
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Available for work
        </div>
      </motion.div>

      {/* Hero */}
      <div
        className="
          relative z-10
          mt-12 sm:mt-16 lg:mt-20
          px-5 sm:px-10 lg:px-20
          flex flex-col
          lg:flex-row
          lg:items-center
          gap-12
          lg:gap-16
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 min-w-0">
          {/* Main Heading */}
          <div className="space-y-0">
            {heroLines.map((item, index) => (
              <div key={index} className="masker overflow-hidden w-full">
                <div className="flex items-center w-full overflow-hidden">
                  {/* Red block */}
                  {index === 2 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "clamp(45px, 6vw, 90px)" }}
                      transition={{
                        duration: 1,
                        delay: 0.6,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="
      mr-[1.5vw]
      mt-[5px]
      h-[clamp(35px,3.5vw,65px)]
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
            text-[10vw]
            sm:text-[7vw]
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
            className="mt-10 max-w-2xl"
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
              I build full-stack products end to end — from polished interfaces
              and scalable APIs to payment flows and AI-powered applications.
            </p>

            <p
              className="
                mt-4
                text-zinc-500
                text-sm
                sm:text-base
                lg:text-lg
                leading-relaxed
                max-w-xl
              "
            >
              I enjoy turning complex ideas into simple, useful, and interactive
              digital experiences with a strong focus on clean architecture and
              thoughtful UI.
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
              mt-7
              flex flex-wrap
              items-center
              gap-x-5
              gap-y-2
              text-xs
              sm:text-sm
              uppercase
              tracking-widest
              text-zinc-500
            "
          >
            <span className="text-zinc-300">React</span>
            <span>•</span>

            <span className="text-zinc-300">Node.js</span>
            <span>•</span>

            <span className="text-zinc-300">Next.js</span>
            <span>•</span>

            <span className="text-zinc-300">MongoDB</span>
            <span>•</span>

            <span className="text-zinc-300">AI</span>
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
              mt-9
              flex
              flex-wrap
              gap-4
            "
          >
            {/* Projects */}
            <Link
              to="/projects"
              className="
                relative
                px-7
                py-3
                border-2
                border-red-500
                bg-red-500
                text-black
                rounded-full
                overflow-hidden
                group
              "
            >
              <span className="relative z-10 font-medium">View Projects</span>
            </Link>

            {/* GitHub */}
            <a
              href="https://github.com/VivekJadhav2001"
              target="_blank"
              rel="noreferrer"
              className="
                relative
                px-7
                py-3
                border-2
                border-zinc-600
                rounded-full
                overflow-hidden
                group
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
                  text-white
                  group-hover:text-black
                  transition-colors
                "
              >
                GitHub
              </span>
            </a>

            {/* Resume */}
            <a
              href="https://drive.google.com/drive/folders/1WlR2FsCbW1I5d33l73JjiLzubXI_k-Dc?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="
                relative
                flex
                items-center
                gap-3
                px-7
                py-3
                border-2
                border-zinc-600
                rounded-full
                overflow-hidden
                group
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
                  text-white
                  group-hover:text-black
                  transition-colors
                "
              >
                Resume
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
            max-w-md
            mx-auto
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
              src="./profileImage.png"
              alt="Vivek Jadhav"
              className="
                w-full
                h-full
                object-cover
                aspect-[4/5]
              "
            />
          </div>

          {/* Small Image Label */}
          <div
            className="
              absolute
              -bottom-4
              left-6
              px-5
              py-2
              bg-zinc-900
              border
              border-zinc-700
              rounded-full
              text-xs
              uppercase
              tracking-widest
              text-zinc-400
            "
          >
            Software Developer
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
          mt-16
          lg:mt-20
          gap-6
          py-5
          px-5
          sm:px-10
          md:px-20
        "
      >
        {/* Left */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p
            className="
              text-sm
              md:text-base
              font-light
              tracking-tight
              text-zinc-400
            "
          >
            Turning ideas into interactive experiences.
          </p>

          <p
            className="
              text-sm
              md:text-base
              font-light
              tracking-tight
              text-zinc-500
            "
          >
            Building products where engineering meets creativity.
          </p>
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
          Scroll
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
