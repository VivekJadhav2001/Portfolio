import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaVolumeUp,
  FaVolumeMute,
  FaTimes,
  FaPlay,
  FaRedo,
  FaMapMarkedAlt,
  FaChevronRight,
} from "react-icons/fa";
import { useGuideSounds, speakText, stopSpeech } from "./useGuideSounds";
import portfolioData from "../../data/portfolioData";

const {
  avatar: AVATAR,
  avatarAlt: AVATAR_ALT,
  nameTag: NAME_TAG,
  introLines: INTRO_LINES,
  tourStops: TOUR_STOPS,
  copy: GUIDE_COPY,
} = portfolioData.guide;

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Typewriter text
function useTypewriter(text, speed = 22, start = true) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!start) {
      setOut("");
      return;
    }
    setOut("");
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text, speed, start]);
  return out;
}

// eslint-disable-next-line react/prop-types
function WalkerAvatar({ size = "clamp(120px, 22vw, 175px)", walking = false, wave = false }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* shadow */}
      <motion.div
        animate={walking ? { scaleX: [1, 0.82, 1] } : { scaleX: 1 }}
        transition={walking ? { repeat: Infinity, duration: 0.45 } : {}}
        className="absolute -bottom-3 h-4 w-3/4 rounded-[100%] bg-black/60 blur-md"
      />
      <motion.div
        animate={
          walking
            ? { y: [0, -14, 0], rotate: [0, -2, 2, 0] }
            : wave
            ? { y: [0, -6, 0], rotate: [0, 3, -3, 0] }
            : { y: [0, -5, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: walking ? 0.45 : 1.6,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <div
          className="overflow-hidden rounded-full border-4 border-red-500 bg-zinc-800 shadow-[0_0_50px_rgba(239,68,68,0.45)]"
          style={{ width: size, height: size }}
        >
          <img
            src={AVATAR}
            alt={AVATAR_ALT}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://api.dicebear.com/7.x/adventurer/svg?seed=Vivek";
            }}
          />
        </div>
        {/* waving hand */}
        {wave && (
          <motion.div
            animate={{ rotate: [0, 25, -10, 25, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="absolute -right-2 top-4 text-4xl"
          >
            👋
          </motion.div>
        )}
        {/* name tag */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-red-400/40 bg-zinc-950 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-red-300 shadow-lg">
          {NAME_TAG}
        </div>
      </motion.div>
    </div>
  );
}

export default function PortfolioGuide() {
  const [phase, setPhase] = useState("hidden"); // hidden | entering | speaking | exiting | docked
  const [lineIndex, setLineIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(true);
  const [panelOpen, setPanelOpen] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);
  const [touring, setTouring] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [burst, setBurst] = useState(false);
  const timers = useRef([]);
  const sounds = useGuideSounds(soundOn);

  const later = (fn, ms) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
    return t;
  };
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const toggleSound = () => {
    if (soundOn) stopSpeech();
    setSoundOn((s) => !s);
  };

  // ---------- INTRO SEQUENCE ----------
  const startIntro = useCallback(() => {
    stopSpeech();
    setPanelOpen(false);
    setTouring(false);
    setLineIndex(0);
    setPhase("entering");
    sounds.whoosh();
    // footsteps
    let n = 0;
    const stepTimer = setInterval(() => {
      sounds.step();
      if (++n > 6) clearInterval(stepTimer);
    }, 260);
    timers.current.push(stepTimer);
    // arrive center -> start speaking
    later(() => setPhase("speaking"), 1700);
  }, []); // sounds stable enough

  const finishIntro = useCallback(() => {
    setPhase("exiting");
    sounds.boing();
    sounds.whoosh();
    later(() => {
      setPhase("docked");
      setBurst(true);
      sounds.fanfare();
      try {
        sessionStorage.setItem("vj-guide-seen", "1");
      } catch {
        // sessionStorage unavailable
      }
      later(() => setBurst(false), 2200);
    }, 1500);
  }, []);

  // auto-play once per session
  useEffect(() => {
    let seen = null;
    try {
      seen = sessionStorage.getItem("vj-guide-seen");
    } catch {
      // sessionStorage unavailable
    }
    if (!seen) {
      const t = setTimeout(startIntro, 900);
      return () => clearTimeout(t);
    }
    setPhase("docked");
  }, [startIntro]);

  // speak each intro line
  const speaking = phase === "speaking";
  const currentLine = INTRO_LINES[lineIndex] || "";
  const typed = useTypewriter(currentLine, 26, speaking);

  useEffect(() => {
    if (!speaking) return;
    sounds.pop();
    speakText(INTRO_LINES[lineIndex], soundOn);
    const lineTime = Math.max(2200, INTRO_LINES[lineIndex].length * 55);
    const t = setTimeout(() => {
      if (lineIndex < INTRO_LINES.length - 1) {
        setLineIndex((i) => i + 1);
      } else {
        later(() => finishIntro(), 900);
      }
    }, lineTime);
    timers.current.push(t);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speaking, lineIndex]);

  const skipIntro = () => {
    stopSpeech();
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setPhase("docked");
    try {
      sessionStorage.setItem("vj-guide-seen", "1");
    } catch {
      // sessionStorage unavailable
    }
  };

  // ---------- TOUR (docked guide) ----------
  const activeStop = TOUR_STOPS[tourIndex];
  const tourTyped = useTypewriter(
    panelOpen ? activeStop.text : "",
    16,
    panelOpen
  );

  const narrateStop = (i) => {
    setTourIndex(i);
    const stop = TOUR_STOPS[i];
    sounds.click();
    speakText(`${stop.title}. ${stop.text}`, soundOn);
    scrollToSection(stop.id);
  };

  const runFullTour = () => {
    if (touring) return;
    setTouring(true);
    sounds.fanfare();
    let i = 0;
    narrateStop(0);
    const step = () => {
      i += 1;
      if (i >= TOUR_STOPS.length) {
        setTouring(false);
        speakText(GUIDE_COPY.tourComplete, soundOn);
        sounds.fanfare();
        return;
      }
      narrateStop(i);
      timers.current.push(setTimeout(step, 5200));
    };
    timers.current.push(setTimeout(step, 5200));
  };

  const openPanel = () => {
    setPanelOpen(true);
    setHasUnread(false);
    sounds.pop();
    speakText(GUIDE_COPY.welcome, soundOn);
  };

  // ---------- RENDER ----------
  const inIntro = phase === "entering" || phase === "speaking" || phase === "exiting";

  // x position for walker: left off-screen -> center -> right off-screen
  const walkerX =
    phase === "entering" ? "0vw" : phase === "speaking" ? "0vw" : "58vw";
  const walkerStartX = "-52vw";

  return (
    <>
      {/* ===== INTRO OVERLAY ===== */}
      <AnimatePresence>
        {inIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden bg-zinc-950/80 backdrop-blur-sm"
          >
            {/* spotlight */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/15 blur-[100px]" />

            {/* top bar */}
            <div className="absolute left-0 right-0 top-0 flex flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-10 sm:py-4">
              <div className="flex min-w-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-zinc-300 sm:px-4 sm:text-[11px] sm:tracking-[0.25em]">
                <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-red-500" />
                <span className="truncate">{GUIDE_COPY.walkingIn}</span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={toggleSound}
                  className="rounded-full border border-white/15 bg-white/5 p-2 sm:p-2.5 text-zinc-200 transition hover:bg-white/15"
                  aria-label={GUIDE_COPY.toggleSound}
                >
                  {soundOn ? <FaVolumeUp /> : <FaVolumeMute />}
                </button>
                <button
                  onClick={skipIntro}
                  className="rounded-full border border-white/15 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-zinc-200 transition hover:bg-white hover:text-black"
                >
                  {GUIDE_COPY.skip}
                </button>
              </div>
            </div>

            {/* walker + bubble */}
            <div className="relative flex w-full max-w-3xl flex-col items-center px-4 sm:px-5">
              {/* speech bubble */}
              <AnimatePresence mode="wait">
                {phase === "speaking" && (
                  <motion.div
                    key={lineIndex}
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    className="relative z-10 mb-5 sm:mb-6 w-full max-w-xl rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-center shadow-2xl sm:px-7 sm:py-4"
                  >
                    <p className="min-h-[3.5rem] sm:min-h-[3.2rem] text-sm font-medium leading-relaxed text-zinc-900 sm:text-xl">
                      {typed}
                      <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-red-500 align-middle" />
                    </p>
                    {/* tail */}
                    <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-white" />
                    {/* progress dots */}
                    <div className="mt-2 flex items-center justify-center gap-1.5">
                      {INTRO_LINES.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all ${
                            i === lineIndex ? "w-6 bg-red-500" : "w-1.5 bg-zinc-300"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {phase === "entering" && (
                <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm tracking-wide text-zinc-300">
                  {GUIDE_COPY.footsteps}
                </div>
              )}

              {/* THE PERSON */}
              <motion.div
                initial={{ x: walkerStartX }}
                animate={{ x: walkerX }}
                transition={
                  phase === "entering"
                    ? { duration: 1.6, ease: [0.65, 0, 0.35, 1] }
                    : { duration: 1.4, ease: [0.76, 0, 0.24, 1] }
                }
              >
                <WalkerAvatar
                  walking={phase !== "speaking"}
                  wave={phase === "speaking"}
                />
              </motion.div>

              {/* ground line */}
              <div className="mt-5 h-[3px] w-3/4 rounded-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
              <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                {phase === "entering" && GUIDE_COPY.statusEntering}
                {phase === "speaking" && GUIDE_COPY.statusSpeaking}
                {phase === "exiting" && GUIDE_COPY.statusExiting}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== DOCKED GUIDE (after intro) ===== */}
      {phase === "docked" && (
        <>
          {/* celebration burst */}
          <AnimatePresence>
            {burst && (
              <motion.div className="pointer-events-none fixed bottom-20 right-4 z-[950] sm:bottom-24 sm:right-8">
                {GUIDE_COPY.burstEmojis.map((e, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 1, x: 0, y: 0, scale: 0.5 }}
                    animate={{
                      opacity: 0,
                      x: (i - 2) * 55,
                      y: -90 - i * 18,
                      scale: 1.4,
                    }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="absolute text-2xl"
                  >
                    {e}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* floating avatar button */}
          {!panelOpen && (
            <motion.button
              initial={{ scale: 0, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              onClick={openPanel}
              onMouseEnter={() => sounds.sparkle()}
              className="group fixed bottom-4 right-4 z-[900] flex max-w-[calc(100vw-2rem)] items-center gap-2 sm:gap-3 rounded-full border border-red-500/40 bg-zinc-950/90 py-2 pl-2 pr-3 sm:pr-4 shadow-[0_0_35px_rgba(239,68,68,0.35)] backdrop-blur-md transition hover:scale-105 sm:bottom-6 sm:right-6"
              aria-label={GUIDE_COPY.openGuide}
            >
              <span className="relative">
                <span className="absolute -inset-1 animate-ping rounded-full bg-red-500/30" />
                <img
                  src={AVATAR}
                  alt={AVATAR_ALT}
                  className="relative h-11 w-11 rounded-full border-2 border-red-500 object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://api.dicebear.com/7.x/adventurer/svg?seed=Vivek";
                  }}
                />
                {hasUnread && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                    1
                  </span>
                )}
              </span>
              <span className="text-left leading-tight">
                <span className="block text-xs font-bold text-white">
                  {GUIDE_COPY.dockTitle}
                </span>
                <span className="block text-[11px] text-zinc-400">
                  {GUIDE_COPY.dockSubtitle}
                </span>
              </span>
            </motion.button>
          )}

          {/* guide panel */}
          <AnimatePresence>
            {panelOpen && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="fixed bottom-3 right-3 z-[900] flex max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-sm flex-col overflow-y-auto overscroll-contain rounded-3xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-xl sm:bottom-6 sm:right-6 sm:max-h-[86vh] sm:w-[calc(100vw-3rem)]"
              >
                {/* header */}
                <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-red-500/15 to-transparent p-4">
                  <img
                    src={AVATAR}
                    alt={AVATAR_ALT}
                    className="h-12 w-12 rounded-full border-2 border-red-500 object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://api.dicebear.com/7.x/adventurer/svg?seed=Vivek";
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-white">
                      {GUIDE_COPY.panelTitle}
                    </p>
                    <p className="flex items-center gap-1.5 text-[11px] text-green-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                      {GUIDE_COPY.panelStatus}
                    </p>
                  </div>
                  <button
                    onClick={toggleSound}
                    className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/15"
                    aria-label={GUIDE_COPY.toggleSound}
                    title={soundOn ? GUIDE_COPY.muteSounds : GUIDE_COPY.unmute}
                  >
                    {soundOn ? <FaVolumeUp size={14} /> : <FaVolumeMute size={14} />}
                  </button>
                  <button
                    onClick={() => {
                      stopSpeech();
                      setPanelOpen(false);
                      setTouring(false);
                    }}
                    className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/15"
                    aria-label={GUIDE_COPY.closeGuide}
                  >
                    <FaTimes size={14} />
                  </button>
                </div>

                {/* narration bubble */}
                <div className="p-4 pb-2">
                  <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.06] p-3.5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-red-400">
                      {activeStop.emoji} {activeStop.title}
                    </p>
                    <p className="mt-1.5 min-h-[4.2rem] text-sm leading-relaxed text-zinc-200">
                      {tourTyped}
                      <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-red-400 align-middle" />
                    </p>
                  </div>
                </div>

                {/* stops */}
                <div className="grid grid-cols-3 gap-2 px-4 py-2">
                  {TOUR_STOPS.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => narrateStop(i)}
                      className={`flex flex-col items-center gap-1 rounded-2xl border px-2 py-2.5 text-[11px] font-semibold transition active:scale-95 ${
                        i === tourIndex
                          ? "border-red-500 bg-red-500/15 text-white"
                          : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-red-500/50 hover:text-white"
                      }`}
                    >
                      <span className="text-lg">{s.emoji}</span>
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* actions */}
                <div className="flex flex-col gap-2 p-4 pt-2">
                  <button
                    onClick={runFullTour}
                    disabled={touring}
                    className="flex items-center justify-center gap-2 rounded-full bg-red-500 px-5 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(239,68,68,0.4)] transition hover:bg-red-400 active:scale-95 disabled:opacity-60"
                  >
                    {touring ? (
                      <>{GUIDE_COPY.takingTour}</>
                    ) : (
                      <>
                        <FaMapMarkedAlt /> {GUIDE_COPY.takeTour}
                      </>
                    )}
                  </button>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setPanelOpen(false);
                        later(startIntro, 300);
                      }}
                      className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition hover:bg-white hover:text-black"
                    >
                      <FaRedo size={12} /> {GUIDE_COPY.replay}
                    </button>
                    <button
                      onClick={() => {
                        sounds.click();
                        narrateStop((tourIndex + 1) % TOUR_STOPS.length);
                      }}
                      className="flex flex-1 items-center justify-center gap-1 rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition hover:bg-white hover:text-black"
                    >
                      {GUIDE_COPY.next} <FaChevronRight size={11} />
                    </button>
                  </div>
                  <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                    <FaPlay size={8} /> {soundOn ? GUIDE_COPY.soundOn : GUIDE_COPY.soundOff} • {GUIDE_COPY.builtForFun}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}
