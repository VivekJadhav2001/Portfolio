import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-orange-700" : "text-white"
    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`

  const links = [
    { to: "/", label: "Home" },
    { to: "/about2", label: "About" },
    { to: "/skills", label: "Skills" },
    // { to: "/resume", label: "Resume" },
    { to: "/projects", label: "Projects" },
  ]

  return (
    <div
      id="font"
      className="backdrop-blur-md shadow-md fixed z-[999] w-full flex justify-between items-center px-5 sm:px-10 lg:px-20 py-5 lg:py-8 font-['Neue_Montreal'] text-white"
    >
      <div className="logo cursor-pointer text-2xl sm:text-3xl lg:text-4xl font-extrabold">
        <h3>JADHAV</h3>
      </div>

      {/* Desktop links */}
      <div className="links cursor-pointer hidden lg:block">
        <ul className="nav-menu text-[17px] capitalize font-semibold flex gap-10">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile hamburger toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-3xl z-[1000]"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 h-screen w-full bg-zinc-900/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl capitalize font-semibold">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 transition-colors`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar