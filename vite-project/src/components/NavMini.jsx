import React, { useRef, useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ about }) => {
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
    <div className="w-full ">
      {about.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          ref={(el) => (divRefs.current[index] = el)}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
          className={`border-white bg-black text-white border-b-2 relative transition-all duration-500 ease-in-out`}
        />
      ))}
    </div>
  );
};

export default Accordion;
