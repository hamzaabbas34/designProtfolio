import React from 'react'
import Navbar from '../../src/componet/Navbar'
import { Button1, Button2 } from './Button'
import Servicesprovide from './Servicesprovide'
import Client from './Client'
import Blogs from './Blogs'
import ClientReView from './ClientReView'
import Lastblog from './Lastblog'
import ContactUs from './ContactUs'
import Last from './Last'


export default function Home() {
  return (
   <> 
            <div className='w-full xl:px-44 px-4  lg:px-10 md:px-10 lg:pb-14 xl:h-screen lg:h-screen md:h-auto h-auto'>
              <Navbar/>
              <div className="main w-full justify-between  grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:gap-1  lg:py-10 xl:py-10 md:py-0 md:pb-10">
                  <div className="left flex flex-col 2xl:gap-14 gap-12 md:gap-6 xl:gap-8 lg:gap-8 items-start lg:py-10 xl:py-12  md:py-0 w-50" >
                    <div className="flex 2xl:gap-2 xl:gap-2  lg:gap-4 md:gap-1 flex-col pt-20">
                    <h2 className='xl:t ext-7xl  lg:text-5xl md:text-5xl  font-semibold font-pop text-4xl   '>👋🏻 HI!</h2>
                    <h2 className='xl:text-7xl  lg:text-5xl  md:text-4xl text-4xl font-bold font-pop  py-2 md:py-1 m-0 '>I’m Anas Qureshi <br /></h2>
                    <h2 className='xl:text-7xl  lg:text-5xl  md:text-4xl font-bold text-blues font-pop  m-0 text-4xl '>UI/UX Designer</h2>
                    </div>
                    <p className='xl:text-[1.2rem]  lg:text-[1.1rem] md:text-[.9rem] md:pe-5 xl:pe-5 lg:pe-5  text-textcolor leading-6 font-pop tracking-tighter '>Welcome to my portfolio, where innovation meets excellence .Explore my comprehensive services,cutting -edge soloutions and exceptional experties, Let’s  embark on a journey of success together.</p>
                    <div className="flex gap-5 items-start">
                      <Button2>Download Resume</Button2>
                      <Button1>Hire Me</Button1>
                    </div>
                  </div>
                {/* ---------------------------  this right side for iamge  -----------------------------*/}
                      <div className="right w-full  xl:ps-[10rem] pt-6">
                        <div className="w-full relative  ">
                          <img src="/image/client.png" className="box absolute  xl:left-[-8rem]  md:left-[-4rem] xl:w-[25rem]  lg:w-[20rem]  xl:h-[6rem]  md:w-[19rem] md:h-[5rem] lg:h-[5rem] pzn xl:bottom-[5rem] lg:bottom-[4rem] md:bottom-[3rem] rounded-full bg-white"/>
                          <img src="/image/anas.png" className='xl:w-[28rem]  lg:w-[25rem] 
                          md:w-[18rem] w-[18rem] m-auto py-32  xl:py-0 lg:py-0 md:py-0 lg:ms-14 xl:ms-14 md:ms-10' alt="" />
                        </div>
                      </div>
                  </div>
               </div>
               <section className='flex xl:justify-between lg:justify-between justify-center  md:justify-between items-center bg-darkblue text-white  xl:h-56 lg:h-56 md:h-56 h-auto xl:px-44  lg:px-20    flex-wrap '>
                    <div className="years flex flex-col items-center justify-center sm:flex-wrap  p-10 xl:p-0 lg:p-0 md:p-0">
                      <span className='xl:text-6xl   text-4xl font-bold '>4+</span>
                      <span className='xl:text-4xl  text-3xl'>Year of Expierence</span>
                    </div>
                    <div className="client flex flex-col items-center justify-center p-10 xl:p-0 lg:p-0 md:p-0">
                      <span className='xl:text-6xl  text-4xl  font-bold '>200+</span>
                      <span className='xl:text-4xl  text-3xl'>Happy Client</span>
                    </div>
                    <div className="project flex flex-col items-center justify-center p-10 xl:p-0 lg:p-0 md:p-0">
                      <span className='xl:text-6xl  text-4xl font-bold '>250+</span>
                      <span className='xl:text-4xl  text-3xl  '>Projects</span>
                    </div>
               </section>
               {/* providing services  */}
               <Servicesprovide/>
               <Client/>
               <Blogs/>
               <ClientReView/>
               <Lastblog/>
               <ContactUs/>
               <Last/>        
                 
          
   </>
  )
}
