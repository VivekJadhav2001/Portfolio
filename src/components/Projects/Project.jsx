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
      <div className="px-5 sm:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col"
          >
            {/* Image */}
            <div className="h-[180px] sm:h-[200px] md:h-[240px] lg:h-[260px] overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#212121]">
                {project.title}
              </h2>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap mt-auto">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <button className="px-4 sm:px-5 py-2 text-sm sm:text-base bg-[#212121] text-white rounded-full hover:bg-black active:scale-95 transition cursor-pointer">
                    {labels.liveDemo}
                  </button>
                </a>

                <a href={project.github} target="_blank" rel="noreferrer">
                  <button className="px-4 sm:px-5 py-2 text-sm sm:text-base border-2 border-[#212121] text-[#212121] rounded-full hover:bg-[#212121] hover:text-white active:scale-95 transition cursor-pointer">
                    {labels.github}
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