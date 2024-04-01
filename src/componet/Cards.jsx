import React from 'react'

export default function Cards({btn , hour , title , src}) {
  return (<div className="card2  xl:w-1/3  lg:w-full md:w-full  w-full p-4 border-2 flex flex-col md:gap-7  gap-0ç rounded-lg xl:mb-0 lg:mb-0 md:mb-0 mb-2">
                         <div className="imgdiv">
                             <img src={src} alt="" />
                         </div>
                        <div className="textdev flex flex-col gap-2">
                            <p className='py-2 px-3 bg-light w-fit rounded-full '>{hour}</p>
                        <p className=' w-fit rounded-full font-aen'>{title}</p>
                            <div className="w-fit"><button className='text-blues'>{btn}</button></div>
                        </div>
</div>
  )
}
