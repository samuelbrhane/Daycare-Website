import React from "react";
import { motion } from "framer-motion";

const ThirdHero = ({ firstText, secondText }) => {
  return (
    <div className="absolute top-0 left-0 bottom-0 w-full flex">
      <div className="heroText mt-12 md:mt-20 lg:mt-28 xl:mt-40 2xl:mt-52 w-full">
        <motion.div
          initial={{ top: -30 }}
          whileInView={{ top: 0 }}
          transition={{
            duration: 1.5,
          }}
          className="relative font-bold italic font-[Lora] text-[24px] md:text-[35px] lg:text-[40px] text-white xl:text-[50px] 2xl:text-[60px] flex flex-col  mb-6 md:mb-8 xl:mb-12"
        >
          <h1>{firstText}</h1>
        </motion.div>

        <motion.div
          initial={{ left: -30 }}
          whileInView={{ left: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="relative mt-4 bg-gradient-to-r ml-16 md:ml-28 xl:ml-36 2xl:ml-40 w-[150px] md:w-[250px] lg:w-[300px] xl:w-[400px] from-[#f38600]  via-[#28980b]  to-transparent rounded text-center mb-2 md:mb-3 xl:mb-5 py-2 md:py-6 lg:py-10 xl:py-14 px-4"
        >
          <h1 className="font-bold italic font-[Lora] text-xl md:text-2xl lg:text-[26px] xl:text-[35px] 2xl:text-[45px] text-white">
            {secondText}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default ThirdHero;
