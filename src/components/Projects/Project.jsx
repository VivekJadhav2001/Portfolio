import portfolioData from "../../data/portfolioData";

function Project() {
  const { heading, ids, labels } = portfolioData.homeProjects;
  const projects = ids
    .map((id) => portfolioData.projectsPage.items.find((project) => project.id === id))
    .filter(Boolean)
    .map((project) => ({
      ...project,
      title: project.homeTitle || project.title,
      link: project.homeLink || project.link,
    }));

  return (
    <div className="w-full py-14 sm:py-20 bg-[#CDEA68]">
      {/* Heading */}
      <div className="px-5 sm:px-10 lg:px-20 mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#212121] font-bold">
          {heading}
        </h1>
      </div>

      {/* Cards */}
      <div className="px-5 sm:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col"
          >
            {/* Media */}
            <div className="aspect-[16/10] overflow-hidden bg-black/5">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              ) : (
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4 flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-[#212121]">
                {project.title}
              </h2>

              <p className="text-sm text-[#212121]/70 leading-relaxed line-clamp-3">
                {project.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap mt-auto">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="px-4 py-2 text-sm bg-[#212121] text-white rounded-full hover:bg-black active:scale-95 transition cursor-pointer">
                      {labels.liveDemo}
                    </button>
                  </a>
                )}

                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <button className="px-4 py-2 text-sm border-2 border-[#212121] text-[#212121] rounded-full hover:bg-[#212121] hover:text-white active:scale-95 transition cursor-pointer">
                      {labels.github}
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;