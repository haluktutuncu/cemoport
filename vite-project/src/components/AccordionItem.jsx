import React, { forwardRef } from "react";

const AccordionItem = forwardRef(
  (
    { title, content, date, showImage, hideImage, isOpen, onClick, className },
    ref
  ) => {
    return (
      <div ref={ref} className={className}>
        <button
          className="w-full lg:p-[0.6%] pb-[0.9%] md:p-[0.3%]  text-left flex justify-between focus:outline-none focus-visible:ring focus-visible:ring-purple-500 items-center"
          onClick={onClick}
        >
          <span className="text-[4.5vmax] max-1024:text-[6.5vmax] max-780:  leading-[0.7] text-left font-regular transform inline-block hover:animate-shake-horizontal scale-custom items-center">
            {title}
          </span>
          <span className="self-end text-[5vw] lg:text-[3.0vmax] leading-[1.4] lg:leading-[1.2] font-regular lg:pr-16 md:pr-16 max-780:pr-4 scale-custom">
            {date}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {isOpen && (
            <div className="w-full border-stone-950 border-t-2 p-4 lg:pr-40 md:pr-20 sm:pr-16">
              <p className="w-full text-[4vw] lg:text-[3.5vmin] scale-custom font-light tracking-tighter pt-10 leading-[1.2] lg:leading-[1.2] lg:pr-40 md:pr-20 sm:pr-16 ">
                <span>{content}</span>
              </p>
              <div className="w-full pt-4 flex justify-between font-regular text-[3vw] md:pt-20 lg:text-[2.5vmin] italic relative lg:pr-40 md:pr-20 sm:pr-16">
                <span className="scale-custom">Header1</span>
                <a
                  className="cursor-pointer underline scale-custom"
                  onMouseEnter={showImage}
                  onMouseLeave={hideImage}
                >
                  image
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default AccordionItem;
