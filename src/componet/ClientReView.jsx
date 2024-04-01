import { CarouselCustomNavigation } from './CarouselCustomNavigation';
import Swipper from "./Swipper";


export default () => {
  return (
    <div className="w-full h-auto xl:px-44  lg:px-10 md:px-10 pt-16  bg-light flex flex-col justify-center items-center">
        <div className="text-center pt-8 ">
        <h2 className='xl:text-[3.3rem]   px-4 lg:text-[2.5rem] md:text-[2.4rem] text-[2.2rem] font-aen tracking-normal font-bold'>What <span className='text-blues'>Client Say </span>About Me</h2>
        </div>
        <div className="flex text-center justify-center items-center    gap-2  py-8">
       <img src="/image/star.png" alt="" />
       <img src="/image/star.png" alt="" />
       <img src="/image/star.png" alt="" />
       <img src="/image/star.png" alt="" />
       <img src="/image/star.png" alt="" />
        </div>
        <div className="w-full h-auto py-5 pb-10 ">
        <CarouselCustomNavigation/>
        </div>
        <div className="pb-10 flex justify-center items-center xl:w-[90%]    lg:w-[85%] md:w-[100%]  w-[100%]">
        <Swipper/>
        </div>
    </div>
  );
};