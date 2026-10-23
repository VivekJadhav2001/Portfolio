import portfolioData from '../../data/portfolioData';

function About() {
  const { about } = portfolioData;

  return (
    <div className="w-full px-5 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      
      {/* Intro Text */}
      <h1 className="text-[#212121] text-base sm:text-lg md:text-xl lg:text-[clamp(24px,2.2vw,34px)] leading-relaxed lg:leading-[1.5] tracking-tight">
        {about.intro}
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#a1b562] pt-10 sm:pt-14 lg:pt-20 mt-10 sm:mt-14 lg:mt-20 gap-10 lg:gap-16">

        {/* Text & Button */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#212121] font-bold">{about.approach.title}</h1>
          <button className="px-7 sm:px-8 py-3.5 sm:py-4 mt-6 sm:mt-8 text-sm sm:text-base bg-zinc-900 text-white rounded-full flex items-center justify-center gap-4 mx-auto md:mx-0 hover:bg-white hover:text-zinc-900 active:scale-95 transition">
            {about.approach.buttonLabel}
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[60vh] xl:h-[70vh] rounded-3xl overflow-hidden">
          <img src={about.image.src} alt={about.image.alt} className="w-full h-full object-cover rounded-3xl" />
        </div>

      </div>
    </div>
  );
}

export default About;
