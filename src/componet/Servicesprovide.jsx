import React from 'react'

export default function Servicesprovide() {
    return (
        <div className='w-full h-auto xl:px-44    lg:px-10  px-4 pb-40 'id='serices'>
          <div className="centertext text-center pt-24 font-pop ">
            <h2 className='xl:text-[3.3rem]    lg:text-[2.5rem] text-[2rem] md:text-[2.2rem] font-aen tracking-normal font-black'>The Services <span className='text-blues'>Offered</span> by Me</h2>
            <p className='xl:text-[1.3rem]    lg:text-[1.2rem] md:text-[1.2rem] text-textcolor  pt-3 pb-16 tracking-tighter	 px-4'>I Offer tailored user-centered design solutions, including wireframing, prototype, and UI/UX Design</p>
          </div>
          <div className="flex justify-around items-center  2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap gap-5 md:gap-2 pt-8 md:px-[2rem] ">
          <div className="card1 xl:w-1/2 lg:w-1/2 md:w-1/2 flex flex-col justify-center items-center gap-5 border-2  py-10 px-8 md:px-2 h-[400px] rounded-lg">
              <img src="/image/app.png" alt="" />
              <h2 className='xl:text-3xl    lg:text-[1.2rem]  md:text-[1rem] font-bold'>App Design</h2>
              <p className='xl:text-[1.3rem]    lg:text-[1.2rem] md:text-[1rem] text-textcolor  text-center leading-6'>App design involves creating user-friendly interfaces for mobile applications, focusing on visual appeal, intuitive navigation, and seamless functionality to enhance user experience</p>
            </div>
            <div className="card1 xl:w-1/2 lg:w-1/2 md:w-1/2  flex flex-col justify-center items-center gap-5 border-2  py-10 px-8 md:px-2 h-[400px] rounded-lg  bg-blues text-white">
              <img src="/image/desh.png" alt="" />
              <h2 className='xl:text-3xl    lg:text-[1.2rem] md:text-[1rem] font-bold'>Deshboard Design</h2>
              <p className='xl:text-[1.3rem]    lg:text-[1.2rem] text-center md:text-[1rem] leading-6'>A "dashboard design" can be summarized as creating a visually intuitive and user-friendly interface that presents key data and information in a concise and easily understandable format.</p>
            </div>
            <div className="card1 xl:w-1/2 lg:w-1/2 md:w-1/2  flex flex-col justify-center items-center gap-5 border-2  py-10 px-8 md:px-2 h-[400px] rounded-lg">
              <img src="/image/design.png" alt="" />
              <h2 className='xl:text-3xl    lg:text-[1.2rem] md:text-[1rem] font-bold'>Website Design</h2>
              <p className='xl:text-[1.3rem]    lg:text-[1.2rem] md:text-[1rem]  text-textcolor  text-center leading-6'>App design involves creating user-friendly interfaces for mobile applications, focusing on visual appeal, intuitive navigation, and seamless functionality to enhance user experience</p>
            </div>
          </div>
        </div>
      );
}
