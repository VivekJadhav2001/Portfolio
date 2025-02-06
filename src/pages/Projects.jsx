import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
function Project() {
  return (
    <div className='w-full py-25 h-screen bg-[#CDEA68]'>
      <div className="w-full px-20 border-b-[2px] pt-5 border-[#a1b562] pb-8">
        <h1 className="text-7xl font-semibold tracking-tight text-[#212121]">Projects</h1>
      </div>
      <div className="px-20 mt-10 ">
        <div className="cards w-full flex justify-between gap-10 ">
          <div className="cardcontainer-appwrite-blogApp relative w-[40vw] h-[40vh] ">
            {/* <h1 className='absolute left-full  z-[9] text-7xl leading-none -translate-x-1/2 translate-y-45 text-[#ceea68]'>FYDEfvasvsav</h1> */}
            <a href='https://app-write-blog-ochre.vercel.app/' target='_blank'>
            <div className=" card w-full h-full border-[3px] border-black rounded-lg overflow-hidden">
              <img src={project1} alt="" className='w-full h-full bg-cover cursor-pointer' />
            </div></a>
            <div className='mt-3.5 text-xl tracking-tighter'>
              <p>Built with Appwrite, my blog application supports user authentication, including sign-up & login. It enables post management with full CRUD functionality, allowing users to create, edit, and delete posts stored in Appwrite’s database. Role-based access control ensures only authorized users can edit or manage posts. The app features real-time updates, file storage for blog images, search and filtering, and responsive design for a seamless user experience across devices.</p>
            </div>
          </div>
          <div className="cardcontainer-e-commerce-website  relative w-[40vw] h-[40vh]  ">
            <a target='_blank'>
            <div className=" card w-full h-full border-[3px] border-black rounded-lg overflow-hidden">
              {/* <h1 className='absolute right-full  z-[9] text-7xl leading-none translate-x-43 translate-y-45 text-red-500'>{"VISE".split('').map((item,index)=><span className=''>{item}</span>)}</h1> */}
              <img src={project2} alt="" className='w-full h-full bg-cover  cursor-pointer' />
            </div>
            </a>

            <div className='mt-3.5 text-xl tracking-tighter'>
              <p>I have built a fully functional e-commerce page where users can browse and select products from dedicated Men, Women, and Kids sections. Each product displays both its original price and discounted price for better user engagement. Users can add products to the cart, remove them when needed, and seamlessly navigate between sections.For state management, I utilized Context API, ensuring smooth cart updates and product selection. React Router Toolkit is used for efficient routing between different sections.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project
