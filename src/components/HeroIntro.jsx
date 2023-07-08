import React from "react";
import { motion } from "framer-motion";

const HeroIntro = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 w-full flex items-center">
      <div className="heroText">
        {/* main title */}
        <motion.div
          initial={{ top: -30 }}
          whileInView={{ top: 0 }}
          transition={{
            duration: 1.5,
          }}
          className="relative font-bold text-xl md:text-3xl lg:text-[30px] xl:text-[40px] flex flex-col 2xl:text-[60px] text-[#c234c0] mb-2 md:mb-3 xl:mb-5"
        >
          <h1>
            High Quality <span className="text-[#ffffff]">Child Care</span>
          </h1>
          <h1>
            <span className="text-[#ffffff]">&</span> Early Education
          </h1>
        </motion.div>

        {/* title */}
        <motion.div
          initial={{ right: -100 }}
          whileInView={{ right: 0 }}
          transition={{
            duration: 1.5,
          }}
          className="relative font-bold text-white text-lg  md:text-xl lg:text-[20px] xl:text-[30px] flex flex-col 2xl:text-[50px] mb-2 md:mb-3 xl:mb-5 font-[Lobster]"
        >
          <h1>Make a Brighter Future For</h1>
          <h1>Your Child</h1>
        </motion.div>

        <motion.h1
          initial={{ left: -100 }}
          whileInView={{ left: 0 }}
          transition={{
            duration: 1,
          }}
          className="relative font-bold text-lg md:text-xl xl:text-4xl 2xl:text-[38px] font-[Lora] italic mb-2 md:mb-3 xl:mb-5"
        >
          <span className="text-[#3abf95]">Learn.</span>
          <span className="text-[#c53dac]">Play.</span>
          <span className="text-[#b0f148]">Grow</span>
        </motion.h1>

        {/* enrollmentTitle */}
        <motion.div
          initial={{ left: -100 }}
          whileInView={{ left: 0 }}
          transition={{
            duration: 1,
          }}
          className="relative text-white font-bold text-lg md:text-xl xl:text-4xl 2xl:text-[22px] flex flex-col mb-2 font-[Lora] italic"
        >
          <h1>
            Now accepting{" "}
            <span className="text-[#66dc4b] mt-2">enrollment</span>{" "}
          </h1>
          <h1 className="!text-[#66dc4b]">applications</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroIntro;
