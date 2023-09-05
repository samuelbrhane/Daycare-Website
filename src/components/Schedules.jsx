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
            Our <span className="text-[#f38600]">Schedules</span>
          </h1>
          <p className="text-[14px] lg:text-[15px] max-w-[400px] p-0 m-0">
            We are delighted to offer a playschool program that caters to
            children of different age groups. Our playschool provides a
            nurturing and stimulating environment for toddlers and preschoolers.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 px-4 md:px-12 lg:px-16 xl:px-20 pb-12">
        {schedules.map((schedule, index) => {
          return (
            <div
              key={index}
              className="w-full h-[170px] overflow-hidden relative text-[14px] lg:text-[16px]"
            >
              <div className="absolute pt-[18px] h-full left-0 bottom-0 right-0 rounded">
                <h1
                  className={`font-bold font-[Lora] pb-4 text-4xl ${schedule.color}`}
                >
                  {schedule.name}
                </h1>
                <h2 className="font-semibold pb-2">Age: {schedule.age}</h2>
                <p>{schedule.description}</p>
                <h2 className="mt-2 mb-2">{schedule.option1}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedules;
