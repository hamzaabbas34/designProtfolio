import React from 'react'
import { Button2 } from './Button'
import  AccordionComponent from './Accord'

export default function Client() {
  return (
    <setion className='w-full h-auto flex xl:px-44 lg:px-44  md:px-10  px-4 md:gap-10 gap-24 bg-darkblue text-white pb-24 flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap'>
        <div className="left pt-24 xl:flex lg:flex md:flex flex-col gap-80  w-[200px] hidden ">
            <img src="/image/circle.png" alt=""  className='sm:animate-spin'/>
            <h2 className='origin-buttom -rotate-90 xl:text-8xl     text-8xl  m-0 leading-none '>Exprences</h2>
        </div>
        <div className="w-full h-auto  flex flex-col gap-4 pt-10">
            <div className="textbox xl:text-6xl    lg-text-5xl md:text-4xl text-3xl font-bold font-aen py-6">
                <h2 className='pb-4'>Why I am Right Person</h2>
                <h2 className=''>For Your Business</h2>
            </div>
            <div className='xl:text-[1.4rem]    lg:text-[1.2rem] md:text-[1.2rem] text-[1rem] text-textlight tracking-tighter text-aen'>
                <div className="md:hidden">
                <p>My portfolio's UI/UX design combines sleek aesthetics with intuitive navigation </p>
                <p>ensuring a seamless user experience. Through thoughtful layout and interactive</p>  
                <p>elements, it showcases my expertise and projects effectively, making it easy for</p>
                <p>visitors to explore and engage with my work.</p></div>
                <p className='hidden md:block'>My portfolio's UI/UX design combines sleek aesthetics with intuitive navigation ensuring a seamless user experience. Through thoughtful layout and interactive elements, it showcases my expertise and projects effectively, making it easy for</p>
                </div>
            <div className="btn py-4"><Button2>Learn More</Button2></div>
           {/*       */}
           <AccordionComponent title={"Visual Design"} line1={"Four Years of Profound Growth and Achievement in UI/UX at Brandora"} line2={"Timely Project Deliveries A Testament to Dedication and Efficiency"} line3={"Setting Standards as a Diligent and Creative Designer at Brandora"}/>
           <AccordionComponent title={"UX/UI Design"} line1={"Four Years of Profound Growth and Achievement in UI/UX at Brandora"} line2={"Timely Project Deliveries A Testament to Dedication and Efficiency"} line3={"Setting Standards as a Diligent and Creative Designer at Brandora"} />
           <AccordionComponent title={"UI Design"} line1={"Four Years of Profound Growth and Achievement in UI/UX at Brandora"} line2={"Timely Project Deliveries A Testament to Dedication and Efficiency"} line3={"Setting Standards as a Diligent and Creative Designer at Brandora"} />
        </div>
    </setion>
  )
}
