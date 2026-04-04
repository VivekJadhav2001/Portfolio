import React from "react";

function Project() {
  const projects = [
    {
      title: "AI Resume Builder",
      img: "https://files.catbox.moe/j3b7bn.png",
      link: "https://ai-resume-builder-accio.vercel.app/",
      github: "https://github.com/VivekJadhav2001/AI_Resume_Builder",
    },
    {
      title: "Private Social Media App",
      img: "https://files.catbox.moe/ugglnh.png",
      link: "https://private-instagram-phase1.vercel.app/",
      github: "https://github.com/VivekJadhav2001/Private_Instagram_Phase1",
    },
    {
      title: "Connexa",
      img: "https://files.catbox.moe/1duy0j.png",
      link: "https://github.com/VivekJadhav2001/Connexa",
      github: "https://github.com/VivekJadhav2001/Connexa",
    },
    {
      title: "Finance Dashboard",
      img: "https://files.catbox.moe/936fl0.png",
      link: "https://zorvyn-finance-dashboard-sable.vercel.app/",
      github: "https://github.com/VivekJadhav2001/zorvyn-finance-dashboard",
    },
  ];

  return (
    <div className="w-full py-20 bg-[#CDEA68]">
      {/* Heading */}
      <div className="px-6 md:px-20 mb-12">
        <h1 className="text-5xl md:text-7xl text-[#212121] font-bold">
          Projects
        </h1>
      </div>

      {/* Cards */}
      <div className="px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Image */}
            <div className="h-[220px] md:h-[260px] overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#212121]">
                {project.title}
              </h2>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <button className="px-5 py-2 bg-[#212121] text-white rounded-full hover:bg-black active:scale-95 transition cursor-pointer">
                    Live Demo →
                  </button>
                </a>

                <a href={project.github} target="_blank" rel="noreferrer">
                  <button className="px-5 py-2 border-2 border-[#212121] text-[#212121] rounded-full hover:bg-[#212121] hover:text-white active:scale-95 transition cursor-pointer">
                    GitHub ↗
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;