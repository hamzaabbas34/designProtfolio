import { Carousel, ThemeProvider } from "@material-tailwind/react";
import { ChevronRight as ChevronRightIcon } from "react-feather";
import { ChevronLeft as ChevronLeftIcon } from "react-feather";
import'./my.css'

// Define your custom theme object
const customTheme = {
  carousel: {
    defaultProps: {
      prevArrow: ({ loop, handlePrev, firstIndex }) => {
        return (
          <button
            onClick={handlePrev}
            disabled={!loop && firstIndex}
            className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[8px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
          >
            <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
          </button>
        );
      },
      nextArrow: ({ loop, handleNext, lastIndex }) => (
        <button
          onClick={handleNext}
          disabled={!loop && lastIndex}
          className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center bg-red-500" // Change the background color here
        >
          <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
        </button>
      ),
      navigation: ({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 bg-red-600">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] bg-red-600 ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50 bg-red-600 "
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      ),
      autoplay: false,
      autoplayDelay: 5000,
      transition: {
        type: "tween",
        duration: 0.5,
      },
      loop: false,
      className: "",
    },
    styles: {
      base: {
        carousel: {
          position: "relative",
          width: "w-full",
          height: "h-full",
          overflowY: "overflow-y-hidden",
          display: "flex",
        },
 
        slide: {
          width: "w-full",
          height: "h-full",
          display: "inline-block",
          flex: "flex-none",
        },
      },
    },
  },
};

export function CarouselCustomNavigation() {
  return (
    // Apply the custom theme using ThemeProvider
    <ThemeProvider theme={customTheme}>
      {/* Your Carousel component with custom styles and props */}
      <Carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 bg-red-600 ">
        
          </div>
        )}
      >
        <h2 className='w-full xl:px-28 lg:px-28 md:px-20 px-16 text-center xl:text-4xl  lg:text-3xl md:text-2xl text-1xl font-extrabold font-aen italic leading-normal '>“Working with Anas Qureshi has been an absolute pleasure! There keen attention to detail and intuitive understanding of user needs truly set them a part. His consistently delivered design that not only met our requirements but exceed our expectations.”</h2>
        <h2 className='w-full xl:px-28 lg:px-28 md:px-20 px-16 text-center xl:text-4xl  lg:text-3xl md:text-2xl text-1xl font-extrabold font-aen italic leading-normal '>“Working with Anas Qureshi has been an absolute pleasure! There keen attention to detail and intuitive understanding of user needs truly set them a part. His consistently delivered design that not only met our requirements but exceed our expectations.”</h2>
        <h2 className='w-full xl:px-28 lg:px-28 md:px-20 px-16 text-center xl:text-4xl  lg:text-3xl md:text-2xl text-1xl font-extrabold font-aen italic leading-normal '>“Working with Anas Qureshi has been an absolute pleasure! There keen attention to detail and intuitive understanding of user needs truly set them a part. His consistently delivered design that not only met our requirements but exceed our expectations.”</h2>
      </Carousel>
      
    </ThemeProvider>
  );
}
