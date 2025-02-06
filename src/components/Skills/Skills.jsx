import React from 'react'
import { motion } from 'framer-motion'
import './Skills.css'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";

function Skills() {
    return (
        <div className='w-full py-10 '>
            <div className="w-full px-20 border-b-[2px] border-[#FFF] pb-15 ">
                <h1 className='text-[#FFFFFF] text-7xl tracking-tight'>Skills</h1>

            </div>
            <div className=" flex   mt-15 cards w-full overflow-hidden whitespace-nowrap bg-black ">
                <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}}  className=" cursor-pointer flex justify-center rounded-4xl items-center card w-[20vw] h-[30vh] pr-10 ">
                    <FaHtml5 className='w-[20vw] h-[20vh]' />
                </motion.div>
                <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}}  className=" cursor-pointer flex justify-center rounded-4xl items-center card w-[20vw] h-[30vh] pr-10 ">
                    <FaCss3Alt className='w-[20vw] h-[20vh]' />
                </motion.div>
                <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration: 5}}  className=" cursor-pointer flex justify-center rounded-4xl items-center card w-[20vw] h-[30vh] pr-10 ">
                    <IoLogoJavascript className='w-[20vw] h-[20vh]' />
                </motion.div>
                <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}}  className=" cursor-pointer flex justify-center rounded-4xl items-center card w-[20vw] h-[30vh] pr-10 ">
                    <FaReact className='w-[20vw] h-[20vh]' />
                </motion.div>
                <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}}  className=" cursor-pointer flex justify-center rounded-4xl items-center card w-[20vw] h-[30vh] pr-10 ">
                    <RiTailwindCssFill className='w-[20vw] h-[20vh]' />
                </motion.div>
                <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}}  className=" cursor-pointer flex justify-center rounded-4xl items-center card w-[20vw] h-[30vh] pr-10 ">
                    <IoLogoGithub className='w-[20vw] h-[20vh]' />
                </motion.div>
                <motion.div initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:5}}  className=" cursor-pointer flex justify-center rounded-4xl items-center card w-[20vw] h-[30vh] ">
                    <IoLogoVercel className='w-[20vw] h-[20vh]' />
                </motion.div>


                
            </div>
        </div>
    )
}

export default Skills


// bg-amber-300