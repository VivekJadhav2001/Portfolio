import { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolioData'

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
        <div className='eyes w-full h-[70vh] min-h-[420px] sm:h-[80vh] lg:h-screen overflow-hidden'>
            <div
                data-scroll
                data-scroll-speed="-.7"
                className="relative w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${portfolioData.eyes.backgroundImage}')` }}
            >
                <div className="absolute inset-0 flex items-center justify-center gap-[8vw] sm:gap-[6vw]">
                    <div className="flex justify-center items-center w-[clamp(88px,20vw,260px)] h-[clamp(88px,20vw,260px)] rounded-full bg-zinc-100 ">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                        <div style={{transform: ` rotate(${rotate}deg)`}} className="line absolute rotate-45 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[clamp(24px,4vw,48px)] ">
                        <div className="w-[clamp(18px,7vw,36px)] h-[clamp(18px,7vw,36px)] rounded-full bg-white"></div>
                        </div>
                            
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-[clamp(88px,20vw,260px)] h-[clamp(88px,20vw,260px)] rounded-full bg-zinc-100 ">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                        <div style={{transform: `rotate(${rotate}deg)`}} className="line absolute rotate-45 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[clamp(24px,4vw,48px)] ">
                        <div className="w-[clamp(18px,7vw,36px)] h-[clamp(18px,7vw,36px)] rounded-full bg-white"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes