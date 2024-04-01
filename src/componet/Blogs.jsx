import React from 'react'

export default function Blogs() {
  return (
    <div className='w-full xl:h-screen lg:h-auto xl:px-44 lg:px-10 md:px-10  pb-40'>
    <div className="centertext text-center pt-24 font-pop ">
      <h2 className='xl:text-[3.3rem] lg:text-[2.5rem] md:text-[2.3rem]  text-[2.5rem]  font-aen tracking-normal font-black'>The assets I’ve invested in <span className='text-blues'> invested in</span></h2>
      <p className='xl:text-[1.3rem] lg:text-[1.2rem] md:text-[1rem] text-textcolor  pt-3 pb-16 tracking-tighter	'>Thank you for exploring my portfolio showcase ! i am excited about the apportunity to collaborate on future progects and bring innovative design soloution to life</p>
    </div>


    <div className=" justify-around items-center gap-5 pt-8  grid xl:grid-flow-col lg:grid-flow-col md:grid-flow-col  grid-flow-row flex-wrap  px-4">
    <div className="card1 xl:full  flex flex-col justify-start items-start gap-5 border-2  py-10 2xl:px-8 xl:px-8 lg:px-8 md:px-2 px-8 xl:h-[33rem] lg:h-[35rem] md:h-[35rem] rounded-lg  overflow-hidden">
        <h2 className=' xl:text-3xl lg:text-2xl font-bold text-2xl'>App Design</h2>
        <p className='xl:text-[1.3rem] lg:text-[1rem] text-textcolor  text-start leading-6 '>App design involves creating user-friendly interfaces for mobile applications, focusing on visual appeal, intuitive navigation, and seamless functionality to enhance user experience</p>
        <button className='xl:text-[1.3rem] lg:text-[1.2rem] text-blues text-[1.3rem]'>Explore</button>
        <img src="/image/uidesign.png" alt="" />
      </div>
      <div className=" card1 xl:full  flex flex-col justify-start items-start gap-5 border-2  py-10 2xl:px-8 xl:px-8 lg:px-8 md:px-2 px-8 xl:h-[33rem] lg:h-[35rem]  md:h-[35rem] rounded-lg overflow-hidden ">
        <h2 className=' xl:text-3xl lg:text-2xl font-bold text-2xl '>App Design</h2>
        <p className='xl:text-1xl lg:text-[.9rem] text-textcolor  text-start leading-6'>Crafting elegant user interfaces, I breathe life into data, transforming complexity into simplicity with each click. In the realm of UI dashboard design, I orchestrate a symphony of colors and elements, seamlessly guiding users through their digital journey.<span className='md:hidden 2xl:block xl:block lg:block'>Every pixel, a brushstroke of functionality and beauty, ensuring an intuitive experience that captivates and empowers</span>.</p>
        <button className='text-[1.3rem] text-blues'>Explore</button>
        <div className="imgbox flex relative">
        <img src="/image/part2.png" alt="" className=' w-[210px]  h-auto mt-8  object-contain' />
        <img src="/image/part1.png" alt="" className=' absolute top-[-1rem] right-[-10rem] object-contain '/>
        </div>
      </div>
      <div className="card1 xl:w-full  flex flex-col justify-start items-start gap-5 border-2  py-10 2xl:px-8 xl:px-8 lg:px-8 md:px-2 px-8 xl:h-[33rem] lg:h-[35rem] md:h-[35rem] rounded-lg  overflow-hidden">
        <h2 className=' xl:text-3xl lg:text-2xl  text-2xl font-bold '>App Design</h2>
        <p className='xl:text-1xl lg:text-[.9rem] text-textcolor  text-start leading-6'>Every line of code whispers innovation, every color palette sings harmony, weaving an aesthetic tapestry of user delight. In the symphony of user interface design, each element dances in perfect rhythm, orchestrating a seamless fusion of form and function.</p>
        <button className='text-[1.3rem] text-blues'>Explore</button>
        <div className="imgbox flex ">
        <div className="w-1/2 ">
        <img src="/image/part3.png" alt="" className='w-fit' />
        </div>
        <div className="w-1/2  mt-[-2rem]">
        <img src="/image/part3.png" alt="" className='w-fit' />
        </div>
    
        </div>
      </div>
    </div>
  </div>
  )
}
