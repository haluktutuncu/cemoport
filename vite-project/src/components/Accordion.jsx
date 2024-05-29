import React, { useRef, useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [animate, setAnimate] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const divRefs = useRef([]);

  const showImage = () => {
    setAnimate("animate-slideInLeft");
    setIsImageVisible(true);
  };

  const hideImage = () => {
    setAnimate("animate-slideOutLeft");
    setTimeout(() => setIsImageVisible(false), 500);
  };

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
    setTimeout(() => {
      if (divRefs.current[index]) {
        const elementTop = divRefs.current[index].getBoundingClientRect().top;
        window.scrollTo({
          top: window.scrollY + elementTop, // 20px padding from top
          behavior: "smooth",
        });
      }
    }, 300); // Accordion açılma animasyonunu beklemek için
  };

  return (
    <div className="w-full mb-20 ">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          date={item.date}
          setIsImageVisible={setIsImageVisible}
          showImage={showImage}
          hideImage={hideImage}
          ref={(el) => (divRefs.current[index] = el)}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
          className={`border-stone-950 border-b-2 relative transition-all duration-500 ease-in-out`}
        />
      ))}
      {isImageVisible && (
        <div
          className={`fixed top-0 left-0 w-full h-full z-[10000] flex items-center justify-center pointer-events-none ${animate}`}
        >
          <img
            className="w-full h-full object-contain pointer-events-none"
            src="/photos/26hole.jpg"
            alt="Descriptive alt text"
          />
        </div>
      )}
    </div>
  );
};

export default Accordion;
