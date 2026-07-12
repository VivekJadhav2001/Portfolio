import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../../assets/aboutImg.gif';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

function About2() {
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
            About Me
          </h1>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Vivek coding"
              className="rounded-2xl h-[50vh] w-auto object-cover mb-4 shadow-xl"
            />
            <span className="absolute -top-3 -right-3 bg-[#212121] text-[#CDEA68] text-xs font-medium px-3 py-1 rounded-full rotate-3">
              open to work
            </span>
          </div>
          <p className="text-[#212121] text-xl sm:text-2xl tracking-tight">
            I'm no Batman 🦇 but I like to code at night 🌃
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
            I'm <strong>Vivek Jadhav</strong>, a MERN stack developer who likes turning
            hard problems into shipped products. Recent builds include a placement platform
            with a full Razorpay payment flow and mock-interview scoring, an AI resume
            builder, and a role-based social platform with JWT auth and S3 uploads.
          </p>
          <br />
          <p>
            JavaScript is home base — React and Redux on the frontend, Node and MongoDB
            on the backend — but I'm just as happy debugging a race condition at midnight
            as I am polishing a UI at noon. Currently looking for a frontend or full-stack
            role where I can keep building things people actually use.
          </p>

          {/* Quick stats row for scannability */}
          <div className="flex gap-8 mt-8 flex-wrap">
            <div>
              <p className="text-3xl font-bold text-[#212121]">5+</p>
              <p className="text-sm text-[#212121]/70">Full-stack projects shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#212121]">MERN</p>
              <p className="text-sm text-[#212121]/70">Primary stack</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#212121]">∞</p>
              <p className="text-sm text-[#212121]/70">Coffee-to-code ratio</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About2;