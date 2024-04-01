
import React from 'react'
import Cards from './Cards'

function Lastblog() {
  return (
    <div className='w-full h-auto xl:px-44 lg:px-10 md:px-10 pb-40 px-4 flex flex-col  justify-center items-center'>
        <div className="centertext text-center pt-24 font-pop ">
            <h2 className='text-[3.3rem] font-aen tracking-normal font-black'>My <span className='text-blues'> Latest</span> Blog</h2>
            <p className='xl:text-[1.4rem] lg:text-[1.1rem] text-textcolor  pt-3 pb-16 tracking-tighter lg:px-10	'>Thank you for exploring my portfolio showcase ! i am excited about the apportunity to collaborate on future progects and bring innovative design soloution to life</p>
        </div>
        <div className="cardsboxs  flex 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap  items-center gap-2 w-full   ">
         <div className="card1 2xl:w-[70%] xl:w-[70%] lg:w-[210%] flex 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap sm:flex-nowrap  flex-wrap  xl:pe-2  lg:pe-10 md:pe-2  2xl:flex-row lg:flex xl:flex md:flex   justify-start  border-2   rounded-lg  xl:p-3  lg:p-2 lg:gap-1 xl:gap-2 md:gap-2 md:p-2  pe-0  pt-4 2xl:-p-0 ">
            <div className="">
            <img src="/image/card1.png" alt="" className='w-[95%] m-auto 2xl:h-[370px] xl:h-[330px] lg:h-[313px] md:h-[318px] md:m-auto '  />
            </div>
            <div className="textdev  md:ps-4  xl:flex lg:flex md:flex    flex-col lg:gap-3 md:gap-3  xl:gap-5 gap-10 justify-center items-start  xl:w-[65%] lg:w-[65%] md:w-[65%] px-4 ">
                <p className='p-4 md:p-2 bg-light w-fit rounded-full  lg:my-0 xl:my-0 md:my-0 my-4 '>5 Hours ago</p>
                <p className=' w-fit rounded-full font-aen'>The Power of Micro Interaction. Enhancing <br/>User Engagement</p>
                <h2 className='font-light leading-1 tracking-tight '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nostrum repudiandae consequunturCorporis,   <span className='md:hidden lg:hidden xl:block 2xl:block'>incidunt ea?   Deleniti exercitationem aliquid voluptatem suscipit molestias non   hic veniam!</span></h2>
               <div className="w-fit  lg:my-0 xl:my-0 md:my-0 my-4  ">
                <button className='text-blues'>Read More  ↗</button>
               </div>
            </div>
         </div>
         <Cards btn='Read Hire ↗' title='Designing for delight Elevating User Experience with UI/UX Principles' hour='1 week ago' src='/image/card2.png'></Cards>
        </div>
        <div className="threeCards flex 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap sm:flex-nowrap  flex-wrap  md:flex gap-2 2xl:px-0 lg:px-0 md:px-0  py-2   ">
        <Cards btn='Read Hire ↗' title='Designing for delight Elevating User Experience with UI/UX Principles' hour='1 week ago' src='/image/card3.png'></Cards>
        <Cards btn='Read Hire ↗' title='Designing for delight Elevating User Experience with UI/UX Principles' hour='1 week ago' src='/image/card4.png'></Cards>
        <Cards btn='Read Hire ↗' title='Designing for delight Elevating User Experience with UI/UX Principles' hour='1 week ago' src='/image/card5.png'></Cards>
        </div>
    </div>
  )
}

export default Lastblog