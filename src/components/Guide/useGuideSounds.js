// Tiny synth SFX engine — no audio files needed, all Web Audio API.
import { useRef, useCallback } from "react";

export function useGuideSounds(enabled = true) {
  const ctxRef = useRef(null);
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;

  const getCtx = () => {
    if (typeof window === "undefined") return null;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    if (!ctxRef.current) ctxRef.current = new AC();
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    return ctxRef.current;
  };

  const tone = useCallback((freq, dur, type = "sine", vol = 0.15, when = 0, slideTo = null) => {
    if (!enabledRef.current) return;
    try {
      const ctx = getCtx();
      if (!ctx) return;
      const t = ctx.currentTime + when;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(vol, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + dur + 0.05);
    } catch {
      /* ignore */
    }
  }, []);

  const noise = useCallback((dur = 0.4, vol = 0.08, when = 0, filterFreq = 800) => {
    if (!enabledRef.current) return;
    try {
      const ctx = getCtx();
      if (!ctx) return;
      const t = ctx.currentTime + when;
      const bufferSize = Math.floor(ctx.sampleRate * dur);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
      }
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(filterFreq, t);
      filter.frequency.exponentialRampToValueAtTime(filterFreq * 3, t + dur);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(vol, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start(t);
    } catch {
      /* ignore */
    }
  }, []);

  return {
    // whoosh for walking in / out
    whoosh: useCallback(() => noise(0.6, 0.12, 0, 400), [noise]),
    // footsteps while walking
    step: useCallback(() => {
      tone(140, 0.09, "triangle", 0.12);
      noise(0.08, 0.05, 0, 900);
    }, [tone, noise]),
    // bubble pop when a line appears
    pop: useCallback(() => tone(520, 0.12, "sine", 0.18, 0, 880), [tone]),
    // boing on exit
    boing: useCallback(() => tone(180, 0.45, "sine", 0.2, 0, 620), [tone]),
    // UI click
    click: useCallback(() => tone(700, 0.07, "square", 0.06), [tone]),
    // cheerful fanfare when tour completes / intro ends
    fanfare: useCallback(() => {
      tone(523, 0.15, "triangle", 0.16, 0);
      tone(659, 0.15, "triangle", 0.16, 0.12);
      tone(784, 0.25, "triangle", 0.18, 0.24);
    }, [tone]),
    // sparkle for hover
    sparkle: useCallback(() => tone(1200, 0.12, "sine", 0.08, 0, 2000), [tone]),
  };
}

// Speech helper — uses built-in speechSynthesis, no API key needed.
export function speakText(text, enabled = true) {
  if (!enabled || typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.02;
    u.pitch = 1.05;
    u.volume = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const pick =
      voices.find((v) => v.lang.startsWith("en") && /google|natural|samantha|zira|david/i.test(v.name)) ||
      voices.find((v) => v.lang.startsWith("en"));
    if (pick) u.voice = pick;
    window.speechSynthesis.speak(u);
  } catch {
    /* ignore */
  }
}

export function stopSpeech() {
  try {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  } catch {
    /* ignore */
  }
}
