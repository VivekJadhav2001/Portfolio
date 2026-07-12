import React from 'react';
import image from '../../assets/about.jpg';

function About() {
  return (
    <div className="w-full px-6 md:px-20 py-16 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      
      {/* Intro Text */}
      <h1 className="text-[#212121] text-xl md:text-[2.5vw] leading-relaxed md:leading-[3.5vw] tracking-tight">
        I'm a full-stack developer working primarily in the MERN stack, with a habit of picking projects that force me to learn something new — payment gateways, RBAC systems, AI integrations, cloud deployments. I like the craft side of frontend work (clean UI, thoughtful UX) as much as the plumbing side (auth, APIs, databases), and I'm most in my element when a project needs both.
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#a1b562] pt-16 mt-16 gap-10">

        {/* Text & Button */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl md:text-6xl text-[#212121] font-bold">My Approach:</h1>
          <button className="px-8 py-4 mt-8 bg-zinc-900 text-white rounded-full flex items-center justify-center gap-4 mx-auto md:mx-0 hover:bg-white hover:text-zinc-900 transition">
            Read Me
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full h-[300px] md:h-[70vh] rounded-3xl overflow-hidden">
          <img src={image} alt="About" className="w-full h-full object-cover rounded-3xl" />
        </div>

      </div>
    </div>
  );
}

export default About;
