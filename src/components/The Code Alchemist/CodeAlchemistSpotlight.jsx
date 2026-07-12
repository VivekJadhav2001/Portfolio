// components/CodeAlchemistSpotlight/CodeAlchemistSpotlight.jsx
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import alchemistImg from "../../assets/alchemist-preview.png";

function CodeAlchemistSpotlight() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const stats = [
    { label: "1:1 mock interviews", value: "AI-scored" },
    { label: "Payments", value: "Razorpay live" },
    { label: "Booking", value: "Real-time slots" },
  ];

  return (
    <div className="relative w-full py-24 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-[#1a1033] via-[#12091f] to-black overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[30vw] h-[30vw] bg-fuchsia-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: copy */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-500/10 border border-purple-400/30 px-4 py-1.5 rounded-full mb-6">
            Featured build
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] tracking-tight mb-6">
            The Code
            <br />
            Alchemist
          </h2>

          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            A platform where students book 1:1 sessions — mock interviews,
            career guidance, resume reviews — and test their resume's ATS score
            against different job descriptions. Built end to end with live
            mentor booking and a full Razorpay payment flow with webhook
            verification. This is the project I'd want you to open first.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10 max-w-md mx-auto lg:mx-0">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-white font-semibold text-sm sm:text-base">
                  {s.value}
                </p>
                <p className="text-white/40 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://thecodealchemist.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="group cursor-pointer flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:bg-purple-100 active:scale-95 transition">
                  Try a mock interview
                  <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </a>
              {/* <a
                href="https://github.com/VivekJadhav2001"
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white rounded-full text-sm hover:bg-white/10 active:scale-95 transition">
                  View code
                  <FiExternalLink />
                </button>
              </a> */}
            </div>

            <span className="flex items-center gap-1.5 text-xs text-purple-300">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Your first mock interview is completely free
            </span>
          </div>
        </div>

        {/* Right: tilting browser mockup */}
        <div className="w-full lg:w-3/5" style={{ perspective: 1200 }} >
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm shadow-2xl overflow-hidden cursor-pointer"
          >
            {/* browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-4 text-xs text-white/30 truncate">
                thecodealchemist.vercel.app
              </span>
            </div>

            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={alchemistImg}
                alt="The Code Alchemist platform preview"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CodeAlchemistSpotlight;
