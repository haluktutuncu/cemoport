import React, { forwardRef } from "react";

const AccordionItem = forwardRef(
  (
    { title, content, date, showImage, hideImage, isOpen, onClick, className },
    ref
  ) => {
    return (
      <div ref={ref} className={className}>
        <button
          className="w-full py-[2.7%] pl-[2%] md:py-[0.9%] md:pl-[2%] lg:py-[1.1%] lg:pl-[1%] text-left flex justify-between focus:outline-none focus-visible:ring focus-visible:ring-purple-500 items-center"
          onClick={onClick}
        >
          <span className="text-[6.5vmax] md:text-[6.5vmax] lg:text-[5vmax] leading-[0.72]  text-left font-regular transform inline-block hover:animate-shake-horizontal scale-custom items-center line">
            {title}
          </span>
          <span className="self-end text-[5vw] lg:text-[3.0vmax] leading-[1.4] lg:leading-[1.2]  font-regular lg:pr-16 md:pr-20 max-780:pr-4 scale-custom max-780:hidden">
            {date}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[1000px] overflow-y-auto" : "max-h-0"
          }`}
        >
          {isOpen && (
            <div className="w-full border-stone-950 border-t-2 p-4 lg:pr-40 md:pr-20 sm:pr-16">
              <p className="w-full text-[6vmin] sm:text-[4.2vmin] scale-custom font-light tracking-tighter pt-10 leading-[1.2] lg:leading-[1.2] lg:pr-40 md:pr-20 sm:pr-16 ">
                <span>{content}</span>
              </p>
              <div className="w-full pt-20 sm:pt-20 max-780:hidden flex justify-between font-regular text-[4vmin] md:pt-20 lg:text-[2.5vmin] italic relative lg:pr-40 md:pr-20 sm:pr-16 ">
                <span className="scale-custom">Header1</span>
                <a
                  className="cursor-pointer underline scale-custom"
                  onMouseEnter={showImage}
                  onMouseLeave={hideImage}
                >
                  image
                </a>
              </div>
              <div
                className={`w-full h-full z-[10] max-780:flex items-center justify-center hidden pt-20 `}
              >
                <img
                  className="w-full h-full object-contain pointer-events-none "
                  src="/photos/26hole.jpg"
                  alt="Descriptive alt text"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default AccordionItem;
