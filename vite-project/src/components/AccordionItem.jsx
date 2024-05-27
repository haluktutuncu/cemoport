import React, { forwardRef } from "react";

const AccordionItem = forwardRef(
  ({ title, content, date, showImage, hideImage, isOpen, onClick }, ref) => {
    return (
      <div
        ref={ref}
        className="border-stone-950 border-b-2 relative transition-all duration-500 ease-in-out"
      >
        <button
          className="w-full p-[0.5%] pb-[0.45%] text-left flex justify-between focus:outline-none focus-visible:ring focus-visible:ring-purple-500"
          onClick={onClick}
        >
          <span className="text-[6vw] lg:text-[3.5vmax] leading-[1.1] lg:leading-[0.9] font-regular transform inline-block hover:animate-shake-horizontal scale-custom">
            {title}
          </span>
          <span className="self-end text-[5vw] lg:text-[3.0vmax] md:pr-20 sm:pr-20  leading-[1.4] lg:leading-[1.2] font-regular lg:pr-8 scale-custom">
            {date}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {isOpen && (
            <div className="w-full border-stone-950 border-t-2 p-4 lg:p-6  md:pr-20">
              <p className="w-full text-[4vw] lg:text-[3.5vmin] scale-custom font-light tracking-tighter pt-10 leading-[1.2] lg:leading-[1.2] lg:pr-40">
                <span>{content}</span>
              </p>
              <div className="w-full pt-4 flex justify-between font-regular text-[3vw] md:pt-20 lg:text-[2.5vmin] italic relative">
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
