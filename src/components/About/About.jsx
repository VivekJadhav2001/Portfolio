import React from 'react'
import image from '../../assets/about.jpg'
function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-[#212121] text-[3vw] leading-[4.5vw] tracking-tighter'>A passionate frontend developer with a strong foundation built through continuous learning and hands-on experience. I take pride in writing clean, maintainable code and crafting seamless user experiences. Always eager to explore new possibilities, I focus on building intuitive and high-performance web applications.</h1>
        <div className="flex justify-between w-full border-t-[1px] pt-20 mt-20 border-[#a1b562]">
            <div className="w-1/2">
            <h1 className='text-7xl text-[#212121]'>My Approach:</h1>
            <button className='px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white flex justify-between items-center gap-7 hover:bg-[#FFF] hover:text-[#18181B] '>Read Me
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
            </div>
            <div className="w-1/2 h-[70vh] bg-[#b0c172] rounded-3xl"><img className='w-full h-full rounded-3xl object-cover'src={image} alt="" /></div>
        </div>
    </div>
  )
}

export default About
