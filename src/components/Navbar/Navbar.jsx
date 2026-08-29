import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `relative py-2 pr-4 pl-3 duration-200 ${
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
    <motion.div
      id="font"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="backdrop-blur-md shadow-md fixed z-[999] w-full flex justify-between items-center px-5 sm:px-10 lg:px-20 py-5 lg:py-8 font-['Neue_Montreal'] text-white"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        whileHover={{ scale: 1.05, letterSpacing: "0.03em" }}
        whileTap={{ scale: 0.96 }}
        className="logo cursor-pointer text-2xl sm:text-3xl lg:text-4xl font-extrabold transition-all"
      >
        <h3>JADHAV</h3>
      </motion.div>

      {/* Desktop links */}
      <div className="links cursor-pointer hidden lg:block">
        <ul className="nav-menu text-[17px] capitalize font-semibold flex gap-10">
          {links.map((link, index) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25 + index * 0.08,
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="relative group"
            >
              <motion.div whileTap={{ scale: 0.92 }}>
                <NavLink to={link.to} className={navLinkClass}>
                  {link.label}
                </NavLink>
              </motion.div>

              {/* Animated underline on hover */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-orange-700 origin-left scale-x-0 group-hover:scale-x-100"
                style={{ transformOrigin: "left" }}
              />
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile hamburger toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.85, rotate: isOpen ? -10 : 10 }}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-3xl z-[1000]"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="block"
            >
              <HiX />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="block"
            >
              <HiMenu />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="lg:hidden fixed inset-0 top-0 h-screen w-full bg-zinc-900/98 backdrop-blur-md flex flex-col items-center justify-center gap-8"
          >
            <ul className="flex flex-col items-center gap-8 text-2xl capitalize font-semibold">
              {links.map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    delay: 0.1 + index * 0.08,
                    duration: 0.4,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 transition-colors`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar