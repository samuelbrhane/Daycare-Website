import React, { useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { TestimonialCard } from ".";
import { testimonials } from "@/utils/testimonials";
import { motion } from "framer-motion";

const Testimonials = () => {
  const categoryRef = useRef(null);

  const handleScroll = (direction) => {
    if (categoryRef.current) {
      const { scrollLeft, clientWidth } = categoryRef.current;

      const scrollDirection =
        direction === "right"
          ? scrollLeft + clientWidth
          : scrollLeft - clientWidth;

      categoryRef.current.scrollTo({
        left: scrollDirection,
        behavior: "smooth",
      });
    }
  };
  return (
    <motion.div
      initial={{ left: -50 }}
      whileInView={{ left: 0 }}
      transition={{
        duration: 0.5,
      }}
      className="px-4 md:px-12 lg:px-16 xl:px-20 relative"
    >
      <h1 className="subtitle">Testimonials</h1>
      <div
        className="flex items-center gap-12 md:gap-12 xl:gap-12 overflow-x-scroll scrollbar-hide py-6"
        ref={categoryRef}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center gap-4">
        <BsArrowLeft
          className=" cursor-pointer text-white hover:text-gray-700 hover:scale-[1.1] text-4xl bg-[#23f4ae] w-[40px] h-[40px] p-2 rounded-full"
          onClick={() => handleScroll("left")}
        />
        <BsArrowRight
          className=" cursor-pointer text-white hover:text-gray-700 hover:scale-[1.1] text-4xl bg-[#23f4ae] w-[40px] h-[40px] p-2 rounded-full"
          onClick={() => handleScroll("right")}
        />
      </div>
    </motion.div>
  );
};

export default Testimonials;
