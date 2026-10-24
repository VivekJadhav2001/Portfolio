import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FiUploadCloud } from "react-icons/fi";
import { IoLogoGithub, IoLogoJavascript } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAmazons3,
  SiClaude,
  SiExpress,
  SiJsonwebtokens,
  SiMeta,
  SiMongodb,
  SiNestjs,
  SiOpenai,
  SiPostman,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrain, TbSparkles } from "react-icons/tb";

import aboutImage from "../assets/about.jpg";
import aboutGif from "../assets/aboutImg.gif";
import alchemistPreview from "../assets/alchemist-preview.png";
import devArenaPreview from "../assets/DevArenaPreview.png";
import resumeMatcherDemo from "../assets/Resume-Matcher-Extension.mp4";

const profileImage = "/profileImage.png";
const location = "Hyderabad, Telangana, India";

const links = {
  github: "https://github.com/VivekJadhav2001",
  linkedin: "https://www.linkedin.com/in/vivek-jadhav27",
  twitter: "https://x.com/vivekjadha30076",
  instagram: "https://www.instagram.com/vivek.jadhav200127",
  resume:
    "https://drive.google.com/drive/folders/1WlR2FsCbW1I5d33l73JjiLzubXI_k-Dc?usp=drive_link",
  email: "vivek.jadhav200127@gmail.com",
};

const socials = [
  { label: "GitHub", url: links.github, icon: FaGithub },
  { label: "Twitter / X", url: links.twitter, icon: BsTwitterX },
  { label: "LinkedIn", url: links.linkedin, icon: FaLinkedin },
  { label: "Instagram", url: links.instagram, icon: GrInstagram },
];

const skills = {
  heading: "My Skills",
  homeHeading: "Skills",
  description:
    "Self-taught and project-tested — I've built full-stack apps end to end with this stack, from payment integrations to AI-powered tools.",
  homeMarquee: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Tailwind",
    "Node.js",
    "Express",
    "MongoDB",
    "GitHub",
    "Vercel",
  ],
  groups: [
    {
      label: "Frontend",
      items: [
        { name: "HTML", homeName: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", homeName: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Tailwind", icon: RiTailwindCssFill, color: "#38BDF8" },
        { name: "Zustand", icon: "🐻", color: "#000000" },
      ],
    },
    {
      label: "Backend",
      items: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#FFFFFF" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
        { name: "JWT", icon: SiJsonwebtokens, color: "#FB015B" },
        { name: "REST", icon: TbApi, color: "#38BDF8" },
        { name: "AWS S3", icon: SiAmazons3, color: "#569A31" },
        { name: "Multer", icon: FiUploadCloud, color: "#FFFFFF" },
      ],
    },
    {
      label: "AI",
      items: [
        { name: "Claude AI", icon: SiClaude, color: "#D97757" },
        { name: "LLaMA 3.1", icon: SiMeta, color: "#0668E1" },
        { name: "OpenAI API", icon: SiOpenai, color: "#FFFFFF" },
        { name: "Prompt Engineering", icon: TbBrain, color: "#A78BFA" },
        { name: "AI Integration", icon: TbSparkles, color: "#F0ABFC" },
      ],
    },
    {
      label: "Tools",
      items: [
        { name: "GitHub", icon: IoLogoGithub, color: "#FFFFFF" },
        { name: "Vercel", icon: IoLogoVercel, color: "#FFFFFF" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "MongoDB Compass", icon: SiMongodb, color: "#569A31" },
      ],
    },
  ],
};

const projects = [
  {
    id: "dev-arena",
    title: "Dev Arena",
    desc: "DevArena is a competitive developer platform that analyzes GitHub activity into a personalized Developer DNA and enables realtime 1v1 and royale coding battles with server-side scoring, XP, badges, leaderboards, public profiles, LeetCode insights, live spectating, and shareable developer recaps.",
    img: devArenaPreview,
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Redux Toolkit","Three.js","Websockets"],
    link: "https://dev-arena-plum.vercel.app/",
    github: "",
    featured: true,
  },
  {
    id: "code-alchemist",
    title: "The Code Alchemist",
    desc: "AI-powered placement prep platform with mock interviews, MCQ tests, resume-JD scoring, mentor booking, and a full Razorpay payment flow with webhook-based order verification.",
    img: alchemistPreview,
    tech: ["React", "Node.js", "MongoDB", "Razorpay", "Redux Toolkit"],
    link: "https://thecodealchemist.vercel.app/",
    github: "",
    featured: false,
  },
  {
    id: "resume-jd-matcher",
    title: "Resume JD Matcher",
    desc: "Chrome extension that scores resumes against job descriptions using ATS logic and keyword analysis. Content scripts detect highlighted job text on sites like LinkedIn and inject a live tooltip with an instant match score.",
    video: resumeMatcherDemo,
    tech: ["Chrome Extension", "React", "Node.js", "Express", "Groq AI"],
    link: "https://drive.google.com/file/d/194kNk7yQx70BvtuD9eHBh5tdvF5ieFLL/view?usp=drive_link",
    github: "https://github.com/VivekJadhav2001/Match-My-Resume",
  },
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    desc: "Resume builder with AI-generated content via Groq, PDF export, and a clean editing flow built on Redux Toolkit.",
    img: "https://files.catbox.moe/j3b7bn.png",
    tech: ["React", "Redux Toolkit", "Groq AI", "jsPDF"],
    link: "https://ai-resume-builder-accio.vercel.app/",
    github: "https://github.com/VivekJadhav2001/AI_Resume_Builder",
  },
  // {
  //   id: "private-social-media-app",
  //   title: "Private Social Media App",
  //   desc: "Private, invite-based social platform focused on closed-circle sharing rather than public feeds.",
  //   img: "https://files.catbox.moe/ugglnh.png",
  //   tech: ["React", "Node.js", "MongoDB"],
  //   link: "https://private-instagram-phase1.vercel.app/",
  //   github: "https://github.com/VivekJadhav2001/Private_Instagram_Phase1",
  // },
  {
    id: "connexa",
    title: "Connexa",
    desc: "Role-based social platform with JWT authentication, RBAC permissions, and AWS S3 media uploads.",
    img: "https://files.catbox.moe/1duy0j.png",
    tech: ["React", "Node.js", "JWT", "AWS S3"],
    link: "https://drive.google.com/file/d/1e5UV7G69bgll82DVKhmpsIrqMgeSZ6oC/view?usp=sharing",
    homeLink: "https://github.com/VivekJadhav2001/Connexa",
    github: "https://github.com/VivekJadhav2001/Connexa",
  },
  // {
  //   id: "finance-dashboard",
  //   title: "Zorvyn Finance Dashboard",
  //   homeTitle: "Finance Dashboard",
  //   desc: "Finance dashboard with real-time charts, INR-formatted figures, and a Zustand-driven state layer.",
  //   img: "https://files.catbox.moe/936fl0.png",
  //   tech: ["React", "Vite", "Recharts", "Zustand"],
  //   link: "https://zorvyn-finance-dashboard-sable.vercel.app/",
  //   github: "https://github.com/VivekJadhav2001/zorvyn-finance-dashboard",
  // },
];

export const portfolioData = {
  // ---------------------------------------------------------------------------
  // Personal details
  // ---------------------------------------------------------------------------
  personal: {
    name: "Vivek Jadhav",
    logo: "JADHAV",
    role: "Software Developer",
    availability: "Available for work",
    email: links.email,
    location,
    profileImage,
    avatar: profileImage,
    links,
  },

  navigation: [
    { to: "/", label: "Home" },
    { to: "/about2", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
  ],

  navAria: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  socials,

  // ---------------------------------------------------------------------------
  // Home — hero
  // ---------------------------------------------------------------------------
  hero: {
    lines: ["Hi there!", "I'm Vivek Jadhav", "Software Developer"],
    intro: {
      primary:
        "I build full-stack products end to end — from polished interfaces and scalable APIs to payment flows and AI-powered applications.",
      secondary:
        "I enjoy turning complex ideas into simple, useful, and interactive digital experiences with a strong focus on clean architecture and thoughtful UI.",
    },
    techStack: ["React", "Node.js", "Next.js", "MongoDB", "AI"],
    actions: {
      projects: { label: "View Projects", to: "/projects" },
      github: { label: "GitHub", href: links.github },
      resume: { label: "Resume", href: links.resume },
    },
    image: {
      src: profileImage,
      alt: "Vivek Jadhav",
      label: "Software Developer",
    },
    footerLines: [
      "Turning ideas into interactive experiences.",
      "Building products where engineering meets creativity.",
    ],
    scrollLabel: "Scroll",
  },

  marquee: {
    words: [
      "Web Developer",
      "MERN Stack Developer",
      "Full Stack Developer",
    ],
    separator: "★",
  },

  // ---------------------------------------------------------------------------
  // Home — featured project spotlight
  // ---------------------------------------------------------------------------
  // featured: {
  //   eyebrow: "Featured build",
  //   titleLines: ["The Code", "Alchemist"],
  //   description:
  //     "A platform where students book 1:1 sessions — mock interviews, career guidance, resume reviews — and test their resume's ATS score against different job descriptions. Built end to end with live mentor booking and a full Razorpay payment flow with webhook verification. This is the project I'd want you to open first.",
  //   stats: [
  //     { label: "1:1 mock interviews", value: "AI-scored" },
  //     { label: "Payments", value: "Razorpay live" },
  //     { label: "Booking", value: "Real-time slots" },
  //   ],
  //   cta: {
  //     label: "Try a mock interview",
  //     href: "https://thecodealchemist.vercel.app/",
  //   },
  //   note: "Your first mock interview is completely free",
  //   preview: {
  //     image: alchemistPreview,
  //     alt: "The Code Alchemist platform preview",
  //     urlLabel: "thecodealchemist.vercel.app",
  //   },
  // },
  featured: {
    eyebrow: "Featured build",
    titleLines: ["Dev Arena"],
    description:
      "DevArena is a competitive developer platform that analyzes GitHub activity into a personalized Developer DNA and enables realtime 1v1 and royale coding battles with server-side scoring, XP, badges, leaderboards, public profiles, LeetCode insights, live spectating, and shareable developer recaps.",
    stats: [
      { label: "75XP", value: "XP-Score" },
      { label: "1v1 coding Battle", value: "Battle Live" },
      { label: "Realtime Year Wrap", value: "Wrapper" },
    ],
    cta: {
      label: "Lets Battle",
      href: "https://dev-arena-plum.vercel.app/",
    },
    note: "Watch Live Battle For Free",
    preview: {
      image: devArenaPreview,
      alt: "Dev-Arena platform preview",
      urlLabel: "dev-arena-plum.vercel.app",
    },
  },

  // ---------------------------------------------------------------------------
  // Home — about
  // ---------------------------------------------------------------------------
  about: {
    intro:
      "I'm a software developer who enjoys working across different technologies and tackling projects that push me to learn something new — from payment gateways, RBAC systems, and AI integrations to cloud deployments. I enjoy the craft of frontend development (clean UI, thoughtful UX) as much as the engineering behind it (auth, APIs, databases), and I'm most in my element when a project needs both.",
    approach: {
      title: "My Approach:",
      buttonLabel: "Read Me",
    },
    image: {
      src: aboutImage,
      alt: "About",
    },
  },

  // ---------------------------------------------------------------------------
  // About page
  // ---------------------------------------------------------------------------
  aboutPage: {
    heading: "About Me",
    badge: "open to work",
    quote: "I'm no Batman 🦇 but I like to code at night 🌃",
    image: {
      src: aboutGif,
      alt: "Vivek coding",
    },
    bio: {
      beforeName: "I'm ",
      afterName:
        ", a MERN stack developer who likes turning hard problems into shipped products. Recent builds include a placement platform with a full Razorpay payment flow and mock-interview scoring, an AI resume builder, and a role-based social platform with JWT auth and S3 uploads.",
      second:
        "JavaScript is home base — React and Redux on the frontend, Node and MongoDB on the backend — but I'm just as happy debugging a race condition at midnight as I am polishing a UI at noon. Currently looking for a frontend or full-stack role where I can keep building things people actually use.",
    },
    stats: [
      { value: "5+", label: "Full-stack projects shipped" },
      { value: "MERN", label: "Primary stack" },
      { value: "∞", label: "Coffee-to-code ratio" },
    ],
  },

  // ---------------------------------------------------------------------------
  // Home — eyes playground
  // ---------------------------------------------------------------------------
  eyes: {
    backgroundImage:
      "https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg",
  },

  // ---------------------------------------------------------------------------
  // Skills
  // ---------------------------------------------------------------------------
  skills,

  // ---------------------------------------------------------------------------
  // Projects
  // ---------------------------------------------------------------------------
  homeProjects: {
    heading: "Projects",
    labels: {
      liveDemo: "Live Demo →",
      github: "GitHub ↗",
    },
    ids: ["code-alchemist", "resume-jd-matcher", "dev-arena"],
  },

  projectsPage: {
    heading: "Projects",
    description:
      "A selection of full-stack builds — from payment integrations to AI-powered tools.",
    featuredLabel: "Featured",
    labels: {
      liveDemo: "Live Demo",
      code: "Code",
    },
    items: projects,
  },

  resumePage: {
    heading: "Resume",
  },

  // ---------------------------------------------------------------------------
  // Footer
  // ---------------------------------------------------------------------------
  footer: {
    socialHeading: "Find Me On",
    socialText: {
      prefix: "Feel free to ",
      highlight: "connect",
      suffix: " with me",
    },
    contactHeading: "Contact",
    emailLabel: "E-mail",
    email: links.email,
    addressLabel: "Address",
    location,
  },

  // ---------------------------------------------------------------------------
  // Portfolio guide
  // ---------------------------------------------------------------------------
  guide: {
    avatar: profileImage,
    avatarAlt: "Vivek — your guide",
    nameTag: "Vivek • Guide",
    introLines: [
      "Heyyy! I'm Vivek! 👋",
      "I build full-stack products — React, Node.js, AI & payments.",
      "This is MY portfolio… let me show you around. Follow me! 🚀",
    ],
    tourStops: [
      {
        id: "landing",
        label: "Start",
        emoji: "🏠",
        title: "Landing — first impression",
        text: "This is the front door. Vivek Jadhav — Software Developer. Available for work, building polished UIs, scalable APIs and AI apps. Check the View Projects button!",
      },
      {
        id: "featured",
        label: "Star Project",
        emoji: "⭐",
        title: "The Code Alchemist",
        text: "His proudest build! Students book 1:1 mock interviews, get AI-scored resumes, pay with Razorpay. Your first mock interview is free — go click it!",
      },
      {
        id: "about",
        label: "Mindset",
        emoji: "🧠",
        title: "How he thinks",
        text: "MERN full-stack. He loves the craft side — clean UI, thoughtful UX — AND the plumbing — auth, APIs, databases. Learns by picking hard projects.",
      },
      {
        id: "playground",
        label: "Eyes",
        emoji: "👀",
        title: "The fun bit",
        text: "Move your mouse around… see? The eyes follow YOU. Vivek loves playful, interactive details like this.",
      },
      {
        id: "skills",
        label: "Skills",
        emoji: "🛠️",
        title: "The toolbox",
        text: "HTML, CSS, JavaScript, TypeScript, React, Redux, Tailwind, Node, Express, MongoDB. Everything needed to ship end-to-end.",
      },
      {
        id: "projects",
        label: "Work",
        emoji: "🚀",
        title: "Proof of work",
        text: "Four live projects — AI Resume Builder, Private Social App, Connexa, Finance Dashboard. Every card has a Live Demo and GitHub link!",
      },
    ],
    copy: {
      walkingIn: "Vivek is walking in…",
      skip: "Skip ✕",
      footsteps: "👟 *footsteps approaching…*",
      statusEntering: "entering from the left →",
      statusSpeaking: "● live intro ●",
      statusExiting: "→ exiting to the right, brb!",
      dockTitle: "Need a tour? 🙋",
      dockSubtitle: "Vivek-guide is here!",
      panelTitle: "Vivek — your guide 🧭",
      panelStatus: "Online & ready to show off",
      welcome: "Hey, it's me again! Pick a stop and I'll take you there.",
      tourComplete:
        "That's the whole tour! Vivek would love to hear from you.",
      takeTour: "Take full tour",
      takingTour: "🚶 Taking you around…",
      replay: "Replay entry",
      next: "Next",
      soundOn: "voice + sfx on",
      soundOff: "muted",
      builtForFun: "built for fun",
      burstEmojis: ["🎉", "✨", "🚀", "👋", "⭐"],
      toggleSound: "Toggle sound",
      openGuide: "Open Vivek guide",
      closeGuide: "Close guide",
      muteSounds: "Mute sounds + voice",
      unmute: "Unmute",
    },
  },

  // ---------------------------------------------------------------------------
  // Experience & education (add entries here when needed)
  // ---------------------------------------------------------------------------
  experience: [],
  education: [],
};

export default portfolioData;
