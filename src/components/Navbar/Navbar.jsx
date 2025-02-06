import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

import About from '../About/About'
import Eyes from '../Eyes/Eyes'
import LandingPage from '../LandingPage/LandingPage'
import Marquee from '../Marquee/Marquee'
import Project from '../Projects/Project'
import Skills from '../Skills/Skills'

function Navbar() {
  return (
    <div id='font' className="backdrop-blur-md shadow-md fixed z-[999] w-full flex justify-between items-center px-20 py-8 font-['Neue Montreal'] text-white">
        <div className='logo cursor-pointer text-4xl font-extrabold'>
        <h3>JADHAV</h3>
        </div>
        {/* <div className='links flex gap-10 cursor-pointer'>
            {["Home","About","Projects","Skills","Resume","Let's Talk"].map((item,index) => (
                <a key={index} className={` text-[17px] capitalize font-regular ${ index === 5 && "ml-35"}`}>{item}</a>
            ))}
        </div> */}
        <div className="links  cursor-pointer">
        <ul className="nav-menu text-[17px] capitalize font-semibold flex gap-10 ">
          <li>
            <NavLink to='/'className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`} >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about2' className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }>About</NavLink>
          </li>
          <li>
            <NavLink to='/skills' className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }>Skills</NavLink>
          </li>
          {/* <li>
            <NavLink to='/resume' className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }>Resume</NavLink>
          </li> */}
          <li>
            <NavLink to='/projects' className={({isActive}) =>`block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }>Projects</NavLink>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar