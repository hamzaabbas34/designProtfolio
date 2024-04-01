import { Icon } from '@iconify/react'
import React from 'react'

export default function Last() {
  return (
    <div className="w-full overflow-hidden h-auto xl:px-44  px-10 bg-light flex flex-col justify-center items-center">
    <div className="text-center pt-8  bg-darklight">
    <h2 className='text-[41px] font-aen tracking-normal font-bold'>What <span className='text-blues'>Client Say </span>About Me</h2>
     <p className='text-[1.3rem] text-textcolor  pt-3 pb-16 tracking-tighter lg:px-16 xl:px-20 md:px-10	'>Thank you for exploring my portfolio showcase ! i am excited about the apportunity to collaborate on future progects and bring innovative design soloution to life</p>
    </div>
    
    <div className="main w-full flex justify-center items-center">
    <div className="w-3/4 relative ">
          <Icon icon="octicon:person-24" width="1.8rem" height="1.8rem"  style={{color: "white" ,position :"absolute" , top:"20%" , left:"2%"}} />
          <input type="text" name="" id="" className='w-full p-4 ps-14  bg-white border  focus:outline-none  rounded-lg' placeholder="Enter Your Name " />
          </div>
    </div>
    <div className="main w-full flex justify-center items-center py-10  overflow-hidden ">
    <div className="w-3/4 relative  text-[20px]  2xl:px-44 xl:px-44 lg:px-44 md:px-10  ">
        <ul className=' justify-between items-center hidden  2xl:flex xl:flex lg:flex md:flex *:'>
        <li>Home</li>
        <li>About</li>
        <li>Protfolio</li>
        <li>Design</li>
        <li>Blog</li>
        </ul>
    </div>
    </div>
    <div className="h-[1px] bottom-2  w-[90%] md:w-[100%] xl:w-full divide-y bg-textcolor "></div>
    <div className='flex justify-between items-center w-full  xl:pt-4 pb-12  md:px-0 text-[18px]'>
      <h2 className=" 2xl:text-2xl xl:text-2xl lg:text-2xl  md:text-[18px] text-[12px] mt-4">privacy police | terms/condations</h2>
      <div className="hidden  2xl:flex xl:flex lg:flex md:flex items-center overflow-hidden ">
          <img src="/image/logo.png" alt="" />
          <h2 className='2xl:text-2xl xl:text-2xl lg:text-2xl  md:text-[18px] text-[16px] font-bold font-pop'>Anas Qureshi</h2>
        </div>
      <h2 className=" 2xl:text-2xl xl:text-2xl lg:text-2xl  md:text-[18px] text-[12px] mt-4">Alright Obedia Technologices</h2>
    </div>
    </div>
  )
}
