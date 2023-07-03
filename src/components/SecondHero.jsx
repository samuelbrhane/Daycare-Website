import React from "react";
import { motion } from "framer-motion";

const SecondHero = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 w-full flex items-center">
      <div className="heroText w-full">
        <motion.div
          initial={{ top: -30 }}
          whileInView={{ top: 0 }}
          transition={{
            duration: 1.5,
          }}
          className="relative font-bold font-[Lobster] text-lg md:text-2xl lg:text-[24px] text-white xl:text-[30px] 2xl:text-[50px] flex flex-col  mb-2 md:mb-3 xl:mb-5"
        >
          <h1>
            Our Goal <span className="text-[#ef38e6]">Is To</span>{" "}
          </h1>
        </motion.div>

        <motion.div
          initial={{ left: -30 }}
          whileInView={{ left: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="relative mt-4 bg-gradient-to-l w-[150px] md:w-[250px] lg:w-[300px] xl:w-[400px] from-[#09cec4] via-[#e317cf] to-[#34cf1c] rounded text-center mb-2 md:mb-3 xl:mb-5 py-2 md:py-6 lg:py-10 xl:py-14 px-4"
        >
          <h1 className="font-bold text-lg md:text-xl lg:text-[20px] xl:text-[30px] 2xl:text-[40px] text-white">
            ENRICH MINDS
          </h1>
        </motion.div>

        <motion.div
          initial={{ bottom: -30 }}
          whileInView={{ bottom: 0 }}
          transition={{
            duration: 1,
          }}
          className="relative w-full flex items-center justify-center md:pt-10 lg:pt-20"
        >
          <div className="text-center bg-[#43330a81] py-2 md:py-4 lg:py-8 px-5 rounded flex flex-col">
            <h1 className="font-[Lora] text-sm md:text-xl xl:text-4xl 2xl:text-[32px] font-bold uppercase text-[#34daec]">
              Learn through discovery & experience
            </h1>
            <div className="text-[8px] md:text-lg xl:text-2xl 2xl:text-3xl lg:mt-6 text-white italic font-[Lobster]">
              <p>
                we have a Infant, Toddler, Preschool and School age program with
                interesting ways of learning.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SecondHero;
