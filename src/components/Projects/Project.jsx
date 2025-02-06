import React from 'react'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
function Project() {
    return (
        <div className='w-full py-20 bg-[#CDEA68]'>
            <div className="w-full px-20 border-b-[2px]  border-[#a1b562] pb-15">
                <h1 className="text-7xl tracking-tight text-[#212121]">Projects</h1>
            </div>
            <div className="px-20 mt-10 "> 
            <div className="cards w-full flex gap-10 ">
                <div className="cardcontainer relative w-1/2 h-[60vh] ">
                {/* <h1 className='absolute left-full  z-[9] text-7xl leading-none -translate-x-1/2 translate-y-45 text-[#ceea68]'>FYDEfvasvsav</h1> */}
                <a href='https://app-write-blog-ochre.vercel.app/' target='_blank'><div className=" card w-full h-full  rounded-lg overflow-hidden">
                        <img src={project1} alt="" className='w-full h-full bg-cover  cursor-pointer'/>
                    </div></a>
                </div>
                <div className="cardcontainer  relative w-1/2 h-[60vh] ">
                    <div className=" card w-full h-full  rounded-lg overflow-hidden">
                    {/* <h1 className='absolute right-full  z-[9] text-7xl leading-none translate-x-43 translate-y-45 text-red-500'>{"VISE".split('').map((item,index)=><span className=''>{item}</span>)}</h1> */}
                    <img src={project2} alt="" className='w-full h-full bg-cover  cursor-pointer'/>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default Project
