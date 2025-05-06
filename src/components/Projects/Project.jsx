import React from 'react';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import { Link } from 'react-router-dom';

function Project() {
    return (
        <div className="w-full py-20 bg-[#CDEA68]">
            <div className="w-full px-6 md:px-20 border-b-[2px] border-[#a1b562] pb-8 md:pb-15">
                <h1 className="text-5xl md:text-7xl tracking-tight text-[#212121]">Projects</h1>
            </div>
            <div className="px-6 mt-8 md:px-20 ">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    <div className="relative w-full md:w-1/2 h-[40vh] md:h-[70vh]">
                        <div className="card w-full h-full rounded-lg overflow-hidden">
                            <p className='text-[#212121] font-extrabold text-2xl mb-[-8vh]'>Expense Tracker</p>
                            <Link to="https://personal-finance-tracker-0avw.onrender.com/" target="_blank">
                                <img
                                    src={project1}
                                    alt="Expense Tracker"
                                    className="w-full h-full object-contain cursor-pointer rounded-2xl"
                                />
                            </Link>
                            <Link to="https://personal-finance-tracker-0avw.onrender.com/" target="_blank"><button className="w-[12vw] h-[4vh] bg-red-500 text-white font-bold rounded-2xl cursor-pointer">Live Demo</button></Link>
                        </div>
                        {/* <h1 className='absolute left-full z-[9] text-5xl md:text-7xl leading-none -translate-x-1/2 translate-y-1/2 md:translate-y-45 text-[#ceea68]'>FYDEfvasvsav</h1> */}
                    </div>
                    <div className="relative w-full md:w-1/2 h-[40vh] md:h-[70vh]">
                        <div className="card w-full h-full rounded-lg overflow-hidden">
                            <p className='text-[#212121] font-extrabold text-2xl mb-[-8vh]'>Booking Application</p>
                            <Link to="https://github.com/VivekJadhav2001/Booking_Application" target='_blank' >
                                <img
                                    src={project2}
                                    alt="Booking Application"
                                    className="w-full h-full object-contain cursor-pointer rounded-2xl"
                                />
                            </Link>
                            <Link to="https://github.com/VivekJadhav2001/Booking_Application" target="_blank"><button className="w-[12vw] h-[4vh] bg-red-500 text-white font-bold rounded-2xl cursor-pointer">Live Demo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;