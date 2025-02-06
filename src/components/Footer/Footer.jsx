import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className=' flex w-full h-[40vh] bg-zinc-900 text-white overflow-hidden'>
      <div className="w-1/2 mt-2 ml-10 ">
        <div className=" flex flex-col justify-center items-center w-[25vw] h-[40vh] ">
          <h1 className='uppercase text-5xl mb-10 font-semibold tracking-tight selection:bg-[#FB2C36]'>Find Me On</h1>
          <p className='text-2lg mt-3 pb-10'>Feel free to <span className='text-[#FB2C36] font-bold'>connect</span> with me</p>
          <div className="icons mt-4 flex gap-4 ">
            <a href='https://github.com/VivekJadhav2001' target='_black'>
            <FaGithub className='w-[30px] h-[30px] cursor-pointer hover:text-[#FB2C36]'/>
            </a>
            <a href='https://x.com/vivekjadha30076' target='_blank'>
            <BsTwitterX className='w-[30px] h-[30px] cursor-pointer hover:text-[#FB2C36]'/>
            </a>
            <a href='https://www.linkedin.com/in/vivek-jadhav-2032ab262/' target='_blank'>
            <FaLinkedin className='w-[30px] h-[30px] cursor-pointer hover:text-[#FB2C36]'/>
            </a>
            <a href='https://www.instagram.com/vivek.jadhav200127/?igsh=aGNrMmY2cXc5c2V0#' target='_blank'>
            <GrInstagram className='w-[30px] h-[30px] cursor-pointer hover:text-[#FB2C36]'/>
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 mt-2 mr-10 flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center w-[25vw] h-[40vh] ">
      <h1 className='uppercase text-5xl mb-7 font-semibold tracking-tight selection:bg-[#FB2C36]'>Contact</h1>
      <p className='uppercase mb-2 text-[#FB2C36]'>E-mail</p>
      <p className='cursor-pointer mb-7 selection:bg-[#FB2C36]'>vivek.jadhav200127@gmail.com</p>
      <p className='uppercase mb-2 text-[#FB2C36]'>address</p>
      <p className='cursor-pointer selection:bg-[#FB2C36]'>Hyderabad, Telangana, India</p>
      </div>
      </div>
    </div>
  )
}

export default Footer