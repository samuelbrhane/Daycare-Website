import { faq } from "@/utils/questions";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };
  return (
    <div className="px-4 md:px-12 lg:px-16 xl:px-20 mt-6 md:mt-12">
      <h1 className="subtitle">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 xl:gap-20 2xl:gap-28 w-full mt-6 md:mt-8 xl:mt-12">
        <motion.div
          initial={{ left: -50 }}
          whileInView={{ left: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="relative"
        >
          {faq.map((item, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 ${
                index === activeQuestion ? "bg-gray-100" : ""
              }`}
            >
              <button
                className="flex justify-between w-full py-8 px-6 text-left hover:bg-[#1b2820] hover:text-white focus:text-white focus:outline-none focus:bg-[#1b2820] transition-all duration-150"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium">{item.question}</span>
                <svg
                  className={`h-5 w-5 transform ${
                    index === activeQuestion ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-0 transition-max-height flex items-center duration-[1s] ease-out overflow-hidden ${
                  index === activeQuestion
                    ? "h-[70px] bg-[#1b2820b7] border-t-2 text-white border-[#a2239e] border-dotted"
                    : "h-0"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="bg-[#fb14fb] p-8 rounded-md border-[20px] border-[#4efd5f] relative"
          initial={{ bottom: -50 }}
          whileInView={{ bottom: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <img
            src="/gallery12.jpeg"
            alt="program"
            className="w-full h-full rounded"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
