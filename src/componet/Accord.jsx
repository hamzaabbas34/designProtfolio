import React, { useState } from 'react';
import './acc.css'
 
function AccordionComponent({title ,line1 , line2, line3 }) {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <div className={`${activeAccordion  ? 'border border-white rounded-lg' : ''}  mypaths`}>
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white " data-inactive-classes="text-gray-500 dark:text-gray-400">
      <h2 id="accordion-flush-heading-1 border-2">
        <button
          type="button"
          className={`flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b ${activeAccordion ? "border-gray-200 dark:border-gray-700" : "border-none"} dark:text-gray-400 gap-3 pe-5`}
          onClick={() => toggleAccordion(1)}
          aria-expanded={activeAccordion === 1 ? 'true' : 'false'}
          aria-controls="accordion-flush-body-1"
        >
          <span className={`xl:text-3xl    lg:text-2xl  md:text-2xl text-[1.2rem]  font-bold px-4 relative  text-white ${activeAccordion  ? 'pb-14' : ''}`}>{title}
          {activeAccordion ? <span className={`xl:text-[1.6rem]    lg:text-[1.2rem] md:text-[1.2rem] text-[1.1rem] text-text tracking-normal text-aen absolute top-9  font-normal my-4 w-[350px] lg:right-[-135px] md:right-[-135px] right-[-160px] text-white ${title === "UI Design" ? "xl:right-[-190px] lg:right-[-190px] md:right-[-190px] left-[-40px]": ""}`}>Brandora at 4 year Expierence</span> : " "}</span>
          
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${activeAccordion === 1 ? '' : 'rotate-180'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            color='white'
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" path='white'/>
          </svg>
        </button>
      </h2>
      <div id="accordion-flush-body-1" className={activeAccordion === 1 ? '' : 'hidden '} aria-labelledby="accordion-flush-heading-1">
      <div className={`py-5 border-b border-gray-200 dark:border-gray-700  flex flex-col gap-2 ${activeAccordion === 1 ? '' : 'border-2'}`}>
          <p className="xl:text-[1.6rem] lg:text-[1.3rem] md:text-[1.3rem]  text-[.9rem] text-textlight tracking-normal text-aen xl:ps-16 lg:ps-10 md:ps-10 ps-5 ">{line1}</p>
          <p className="xl:text-[1.6rem] lg:text-[1.3rem] md:text-[1.3rem]  text-[.9rem] text-textlight tracking-tight text-aen xl:ps-16  lg:ps-10 md:ps-10 ps-5">{line2}</p>
          <p className="xl:text-[1.6rem] lg:text-[1.3rem] md:text-[1.3rem]  text-[.9rem] text-textlight tracking-tight text-aen xl:ps-16  lg:ps-10 md:ps-10 ps-5">{line3}</p>

        </div>
      </div>
      {/* Repeat the above pattern for other accordion items */}
    </div>

    </div>
  );
}

export default AccordionComponent;
