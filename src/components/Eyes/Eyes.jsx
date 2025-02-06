import React, { useEffect, useState } from 'react'
import eyes from '../../assets/eyes.jpg'

function Eyes() {
    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX ) * (180/Math.PI)
            setRotate(angle-230)
        });
    },[])

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll  data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] ">
                <div className="absolute flex justify-between gap-10 top-1/2 -translate-x-[50%] -translate-y-[50%] left-1/2  ">
                    <div className="flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                        <div style={{transform: ` rotate(${rotate}deg)`}} className="line absolute rotate-45 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                        <div className="  w-8 h-8 rounded-full bg-white"></div>
                        </div>
                            
                        </div>
                    </div>
                    <div className=" flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                        <div style={{transform: `rotate(${rotate}deg)`}} className="line absolute rotate-45 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
                        <div className="  w-8 h-8 rounded-full bg-white"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes