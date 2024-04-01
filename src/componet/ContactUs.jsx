import React from 'react'
import { Icon } from '@iconify/react';
import './contactus.css'
export default function ContactUs() {
  return (
    <div className='main-div bg-darkblue flex  xl:px-44  lg:px-10 md:px-10 py-16 text-white mb-32 gap-5 flex-wrap'>
      <div className="first flex-1 xl:w-[600px] lg:w-[400px] md:w-[300px] flex flex-col md:justify-center gap-8 2xl:px-0 xl:px-0 lg:px-4 md:px-4 px-4">
          <img src="/image/lastimg.png" alt="" />
          <p className='text-[18px] p-1 font-light text-textlight'>03328934593</p>
          <div className='xl:text-5xl   lg:text-4xl md:text-[1.8rem] text-[2.2rem] font-aen font-bold leading-1 md:leading-none flex flex-col 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-4  gap-2'><h2>lets Make Some Thing</h2> 
          <h2>Amazing Together</h2></div>
         <div className="maintexts flex flex-col gap-4 text-textlight">
         <div className="email flex gap-4 text-[20px]">
            <p>☎</p>
            <p>Anasqureshiipak@gmail.com</p>
          </div>
          <div className="email flex gap-4 text-[20px]">
            <p>📧</p>
            <p>Anasqureshiipak@gmail.com</p>
          </div>
          
          <div className="email flex gap-4 text-[20px]">
            <p className='font-bold'>Follow Me</p>
          </div>
          <div>

          <div className="flex gap-3 justify-center items-center w-fit pb-5">
          <Icon icon="devicon:facebook" width="2rem" height="2rem" />
          <Icon icon="skill-icons:linkedin" width="2rem" height="2rem" />
          </div>
          </div>
         </div>
      </div>
      <div className="second  flex-1  rounded-lg bg-[#140E3D] w-full px-10 pt-10 flex flex-col gap-2">
        <h2 className='text-3xl font-aen font-bold'>Contact Me</h2>
        <div className="inpbox w-full   flex flex-col gap-1 mypath">
          <label htmlFor="" className='text-[20px] md:text-[16px] py-2'>Name</label>
          <div className="w-full relative">
          <Icon icon="octicon:person-24" width="1.8rem" height="1.8rem"  style={{color: "white" ,position :"absolute" , top:"15%" , left:"2%"}} />
          <input type="text" name="" id="" className='w-full p-3 ps-14 focus:outline-none bg-inherit border  rounded-lg' placeholder="Enter Your Name " />
          </div>
        </div>
        <div className="inpbox w-full   flex flex-col gap-1 mypath">
          <label htmlFor="" className='text-[20px] md:text-[16px] py-2 font-semibold'>Email</label>
          <div className="w-full relative">
          <Icon icon="formkit:email" width="1.8rem" height="1.8rem"  style={{color: "white" ,position :"absolute" , top:"19%" , left:"2%"}}/>
          <input type="text" name="" id="" className='w-full p-3 ps-14 focus:outline-none bg-inherit border  rounded-lg' placeholder="Enter Your Emial " />
          </div>
        </div>
        <div className="inpbox w-full   flex flex-col gap-1 mypath">
          <label htmlFor="" className='text-[20px] md:text-[16px] py-2'>PhoneNumber</label>
          <div className="w-full flex relative gap-2">
          <select id="flags" className='w-[100px] custombg text-3xl border rounded-lg  px-2'>
    <option value="Pakistan">🇵🇰</option>
    <option value="India">🇮🇳</option>
    <option value="Saudi Arabia">🇸🇦</option>
    <option value="England">🏴</option>
</select>

          <input type="text" name="" id="" className='w-full p-3 ps-4 focus:outline-none bg-inherit border  rounded-lg' placeholder="Your Phone Number  " />
          </div>
        </div>
        <div className="inpbox w-full   flex flex-col gap-1">
            <label htmlFor="" className='text-[20px] md:text-[16px] py-4'>Short Berif</label>
            <div className="w-full ">
                <textarea name="" id="" className='w-full border  rounded-lg bg-inherit px-4 pt-2 focus:outline-none' rows="6"></textarea>
            </div>
        </div>
        <div className="btn w-fit py-1 text-[20px] md:text-[16px] mb-4">
        <button className='p-3 bg-blues rounded-full px-6 '>Submit Now</button>
        </div>
      </div>
    </div>
  )
}
