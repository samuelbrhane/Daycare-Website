import { schedules } from "@/utils/schedules";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Schedules = () => {
  return (
    <div>
      <div className="px-4 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          className="relative"
          initial={{ left: -50 }}
          whileInView={{ left: 0 }}
          transition={{
            duration: 1,
          }}
        >
          <h1 className="subtitle">
            School <span className="text-[#e75842]">Schedules</span>
          </h1>
          <p className="font-[Lora] italic font-bold max-w-[400px]">
            We are delighted to offer a daycare program that caters to children
            of different age groups. Our daycare provides a nurturing and
            stimulating environment for toddlers and preschoolers.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:gap-12 gap-4 px-4 md:px-12 lg:px-16 xl:px-20">
        {schedules.map((schedule, index) => {
          return (
            <div
              key={index}
              className="w-full h-[200px] overflow-hidden relative text-white"
            >
              <div className="absolute pt-[40px] h-full left-0 bottom-0 right-0 bg-gradient-to-t px-8 xl:px-12 from-[#30af3063] rounded to-[#d624dca7] via-[#6829bf9b]">
                <h1 className="font-bold font-[Lora] pb-4 text-4xl text-[#ffffff] ">
                  {schedule.name}
                </h1>
                <h2 className="font-semibold pb-4">Age: {schedule.age}</h2>
                <p>{schedule.description}</p>
                <h2 className="mt-4 mb-2">Option 1: {schedule.option1}</h2>
                <h2>Option 2: {schedule.option2}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedules;
