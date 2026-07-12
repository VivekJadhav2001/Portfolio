import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

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
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="relative w-full min-h-screen bg-zinc-900 pt-1 overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-red-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Available Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 flex justify-center sm:justify-start px-5 sm:px-10 lg:px-20 pt-10"
      >
        <div className="flex items-center gap-2 px-4 py-1.5 border border-zinc-700 rounded-full text-xs uppercase tracking-widest text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
          </span>
          Available for work
        </div>
      </motion.div>

      {/* Hero Text */}
      <div className="relative z-10 mt-20 sm:mt-32 lg:mt-40 px-5 sm:px-10 lg:px-20">
        {[
          "Hi there!",
          "I'm Vivek Jadhav",
          "Full-Stack MERN Developer",
        ].map((item, index) => (
          <div
            key={index}
            className="masker flex items-center overflow-hidden"
          >
            <div className="flex items-center overflow-hidden">
              {index === 2 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="mr-[3vw] sm:mr-[1vw] mt-[5px] h-[7vw] sm:h-[5vw] bg-red-500 rounded-md shrink-0"
                />
              )}

              <div className="overflow-hidden">
                <motion.h1
                  custom={index}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  className="uppercase text-[9vw] sm:text-[6vw] lg:text-[4vw] leading-[9.5vw] sm:leading-[6.5vw] lg:leading-[4vw] tracking-tighter font-medium text-white"
                >
                  {item}
                </motion.h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 text-zinc-400 text-sm sm:text-base max-w-md px-5 sm:px-10 lg:px-20 mt-8"
      >
        I build full-stack products end to end — from payment flows to
        AI-powered tools — and I'm currently looking for a frontend or
        full-stack role.
      </motion.p>

      {/* Bottom Section */}
      <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center border-t-2 border-zinc-700 mt-16 md:mt-24 gap-6 py-5 px-5 sm:px-10 md:px-20">
        <div className="flex flex-col gap-3 text-center md:text-left">
          {[
            "Turning visions into interactive experiences",
            "Bridging creativity and functionality through design",
          ].map((item, index) => (
            <p
              key={index}
              className="text-sm md:text-base font-light tracking-tight leading-snug text-zinc-400"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 text-sm uppercase">
          {/* GitHub */}
          <a
            href="https://github.com/VivekJadhav2001"
            target="_blank"
            rel="noreferrer"
            className="relative px-5 py-2 border-2 border-zinc-500 rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></span>

            <span className="relative z-10 text-white group-hover:text-black transition-colors">
              GitHub
            </span>
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/drive/folders/1WlR2FsCbW1I5d33l73JjiLzubXI_k-Dc?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="relative flex items-center gap-2 px-5 py-2 border-2 border-zinc-500 rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></span>

            <span className="relative z-10 text-white group-hover:text-black transition-colors">
              Resume
            </span>

            <span className="relative z-10 rotate-45 text-white group-hover:text-black transition-all group-hover:rotate-[60deg]">
              <FaArrowUpLong />
            </span>
          </a>
        </div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-500">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
          className="w-5 h-8 rounded-full border border-zinc-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-zinc-400"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LandingPage;