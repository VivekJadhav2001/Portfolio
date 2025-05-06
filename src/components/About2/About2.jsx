import React from 'react';
import aboutImg from '../../assets/aboutImg.gif';

function About2() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white py-10 px-5 sm:px-10 lg:px-40">
      <div className="bg-[#CDEA68] rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row gap-10 items-center mt-[10vh]">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-[#212121] text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
            About Me:
          </h1>
          <img
            src={aboutImg}
            alt="About"
            className="rounded-2xl h-[50vh] w-auto object-cover mb-4"
          />
          <p className="text-[#212121] text-xl sm:text-2xl tracking-tight">
            I’m no Batman 🦇 but, I like to code at Night 🌃
          </p>
        </div>

        {/* Right Section */}
        <div className="text-[#212121] text-lg sm:text-xl leading-relaxed max-w-xl">
          <p>
            My name is <strong>Vivek Jadhav</strong>. I am a professional and enthusiastic programmer in my daily life. I’m a quick learner with a self-learning attitude. I love to explore new technologies and am passionate about problem-solving.
          </p>
          <br />
          <p>
            I enjoy working on full-stack web development and aim to make the web more open to the world. My core skill is JavaScript, and I prefer using it across the stack. I'm open to any opportunity that aligns with my skills and interests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About2;
