import { classes } from "@/utils/classes";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Classes = () => {
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
          Our <span className="text-[#b4309e]">Classes</span>
        </h1>
        <p className="font-[Lora] font-bold max-w-[400px]">
          Explore the diverse range of classes offered at our daycare, where
          children can engage in a variety of educational and creative pursuits.
        </p>
      </motion.div>

      <div className="mt-4 md:mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {classes.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-center mb-8 md:mb-12"
            >
              <motion.div
                className="hover:scale-[1.02] relative"
                initial={{ bottom: -150 }}
                whileInView={{ bottom: 0 }}
                transition={{
                  duration: item.duration,
                }}
              >
                <div className="w-[300px] h-[300px] rounded-full overflow-hidden z-20 border-[#b6328ed7] border-[10px]">
                  <Image
                    src={item.image}
                    alt="classes"
                    width={300}
                    height={300}
                    className="w-full h-full"
                  />
                </div>
                <div className="bg-[#b6328ed7] mt-[-30px] rounded px-8 py-6 text-white">
                  <h1 className="text-center font-bold font-[Lora] italic text-4xl pt-8 pb-2">
                    {item.title}
                  </h1>
                  <h2 className="text-center font-bold font-[Lora]">
                    {item.subtitle}
                  </h2>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Classes;
