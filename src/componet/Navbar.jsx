import { Icon } from '@iconify/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
      <nav className='w-full  xl:py-8 lg:py-8 md:py-4 flex items-center justify-between'>
        <div className="flex items-center">
          <img src="/image/logo.png" alt="" />
          <h2 className='xl:text-2xl  lg:text-1xl  font-bold font-pop'>Anas Qureshi</h2>
        </div>
            <ul className='hidden items-center md:hidden sm:hidden gap-8 lg:gap-6 xl:gap-8   font-pop lg:flex xl:flex  '>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/service">Services</NavLink></li>
              <li><NavLink to="/blogs">About</NavLink></li>
              <li><NavLink to="/Lastblog">Protfolio</NavLink></li>
              <li><NavLink to="/ContactUs">Blog</NavLink></li>
            </ul>
            <div className="hidden lg:flex xl:flex ">
              <button className='border-2 border-blue-800 rounded-full xl:py-2 xl:px-8  lg:py-4 lg:px-3  xltext-[21px] lg:text-[16px] font-pop'>Contact Me</button>
            </div>
            <div className="   xl:hidden lg:hidden  ">
            <Icon icon="gg:menu" width="2rem" height="2rem"  style={{color: "#5438FD"}} />
            </div>
      </nav>

  )
}
