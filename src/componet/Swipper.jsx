import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import './swiper1.css'
import { useEffect, useState } from 'react';



export default () => {
  const [slidesPerView, setSlidesPerView] = useState('auto');
  useEffect(() => {
    // Function to update slidesPerView based on screen width
    const updateSlidesPerView = () => {
      if (window.innerWidth < 576) {
        // For small screens (sm), set slidesPerView to 1
        setSlidesPerView(1);
      } else {
        // For other screens, set slidesPerView to 'auto'
        setSlidesPerView(3);
      }
    };
  
    // Call updateSlidesPerView initially and on window resize
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
  
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []); 

  return (
    <Swiper
    pagination={{ el: '.swiper-pagination', clickable: true }} // Pass pagination configuration as an object
    effect={'coverflow'} // Set coverflow effect
    loop={true} // Enable loop
    centeredSlides={true} // Center the slides
    slidesPerView={slidesPerView}
    spaceBetween={0}
// Set slides per view to auto
    coverflow={{
      rotate: 0,
      stretch: 10,
      depth: 50,
      modifier: 1.5,
      slideShadows: false,
    }}
    autoplay={{ delay: 3000 }}
  >
     <SwiperSlide className='m-0'><div className="w-[200px]  h-[300px] flex flex-col items-center justify-center gap-3"><div class="imgbox w-[200px] h-[200px] rounded-full">
    <img src="https://images.unsplash.com/photo-1711473537783-908b0112f384?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" class="object-cover w-full h-full rounded-full  border-4 border-blues" />
</div>

<h2 className='name text-center'>Razadar <br/>
<span>Frontend developer</span></h2></div></SwiperSlide>
      <SwiperSlide className='m-0'><div className="w-[200px]  h-[300px] flex flex-col items-center justify-center gap-3"><div class="imgbox w-[200px] h-[200px] rounded-full">
    <img src="https://images.unsplash.com/photo-1682686580003-22d3d65399a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="" class="object-cover w-full h-full rounded-full  border-4 border-blues" />
</div>

<h2 className="name text-center">Babar <br/>
<span>Frontend developer</span></h2></div></SwiperSlide>
      <SwiperSlide className='m-0'><div className="w-[200px]  h-[300px] flex flex-col items-center justify-center gap-3"><div class="imgbox w-[200px] h-[200px] rounded-full">
    <img src="https://images.unsplash.com/photo-1711473537783-908b0112f384?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" class="object-cover w-full h-full rounded-full  border-4 border-blues" />
</div>

<h2 className='name text-center'>Razadar <br/>
<span>Frontend developer</span></h2></div></SwiperSlide>

      <SwiperSlide className='m-0'><div className="w-[200px]  h-[300px] flex flex-col items-center justify-center gap-3"><div class="imgbox w-[200px] h-[200px] rounded-full">
    <img src="https://images.unsplash.com/photo-1711126478084-e922f4812ea0?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="object-cover w-full h-full rounded-full  border-4 border-blues " />
</div>

<h2 className="name text-center">Jasim <br/>
<span>Frontend developer</span></h2></div></SwiperSlide>
    
    

      <SwiperSlide className='m-0' ><div className="w-[200px]  h-[300px] flex flex-col items-center justify-center gap-3"><div class="imgbox w-[200px] h-[200px] rounded-full">
    <img src="https://images.unsplash.com/photo-1711476326429-3b3e6083fd54?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="object-cover w-full h-full rounded-full  border-4 border-blues " />
</div>

<h2 className="name text-center">Jamal <br/>
<span>Frontend developer</span></h2></div></SwiperSlide>
<SwiperSlide className='m-0'><div className="w-[200px]  h-[300px] flex flex-col items-center justify-center gap-3"><div class="imgbox w-[200px] h-[200px] rounded-full">
    <img src="https://images.unsplash.com/photo-1711473537783-908b0112f384?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" class="object-cover w-full h-full rounded-full  border-4 border-blues" />
</div>

<h2 className='name text-center'>Razadar <br/>
<span>Frontend developer</span></h2></div></SwiperSlide>
    </Swiper>
  );
};