import React from "react";
import { facilities } from "@/utils/facilities";
import Image from "next/image";
import { motion } from "framer-motion";

const Facilities = () => {
  return (
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
          Our <span className="text-[#f38600]">Facilities</span>
        </h1>
        <p className="text-[14px] lg:text-[15px] max-w-[400px]">
          Discover our school facilities, including a healthy canteen, an
          activity room, a sleeping room and outdoor playground, which offer
          endless opportunities for exploration and discovery.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-12 py-16">
        {facilities.map((facility) => {
          return (
            <motion.div
              initial={{ bottom: -150, opacity: 0 }}
              whileInView={{ bottom: 0, opacity: 1 }}
              transition={{
                duration: facility.duration,
              }}
              className="flex flex-col justify-center items-center group relative"
              key={facility.id}
            >
              <div
                className={`h-[110px] w-[110px] rounded-full ${facility.mainColor} ${facility.hoverColor} relative`}
              >
                <div
                  className={`absolute left-[-1px] top-0 rounded-full h-[30px] w-[10px] ${facility.mainColor} ${facility.hoverColor}`}
                ></div>
                <div
                  className={`absolute right-[-1px] top-0 rounded-full h-[30px] w-[10px] ${facility.mainColor} ${facility.hoverColor}`}
                ></div>
                <div className="flex items-center justify-center h-full w-full">
                  <Image
                    width={65}
                    height={65}
                    src={facility.image}
                    alt="book"
                  />
                </div>
              </div>
              <div
                className={`h-[300px] w-[300px] rounded-full ${facility.mainColor} ${facility.hoverColor} group-hover:text-white text-black`}
              >
                <div className="flex items-center justify-center w-full h-full p-2 text-center">
                  <div>
                    <h1 className="font-bold mb-4 text-[30px] font-[Lora]">
                      {facility.title}
                    </h1>
                    <p className="text-[14px] lg:text-[15px]">
                      {facility.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
