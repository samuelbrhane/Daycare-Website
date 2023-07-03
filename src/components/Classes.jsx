import { classes } from "@/utils/classes";
import Image from "next/image";
import React from "react";

const Classes = () => {
  return (
    <div className="px-4 md:px-12 lg:px-16 xl:px-20">
      <h1 className="subtitle">
        School <span className="text-[#e75842]">Classes</span>
      </h1>
      <p className="font-[Lora] italic font-bold max-w-[400px]">
        Explore the diverse range of classes offered at our daycare, where
        children can engage in a variety of educational and creative pursuits.
      </p>

      <div className="mt-4 md:mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {classes.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-center mb-8 md:mb-12"
            >
              <div className="hover:scale-[1.02]">
                <div className="w-[300px] h-[300px] rounded-full overflow-hidden z-20 border-[#eee5623c] border-[10px]">
                  <Image
                    src={item.image}
                    alt="classes"
                    width={300}
                    height={300}
                    className="w-full h-full"
                  />
                </div>
                <div className="bg-[#eee5623c] mt-[-30px] rounded px-8 py-6">
                  <h1 className="text-center font-bold font-[Lobster] text-4xl pt-12 pb-6">
                    {item.title}
                  </h1>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="border-[#f62525] border-t-[6px] rounded text-center">
                      <h2 className="pt-4 pb-2 text-[#f62525] font-bold">
                        Age:{" "}
                      </h2>
                      <p>{item.age}</p>
                    </div>
                    <div className="border-[#1de321] border-t-[6px] rounded text-center">
                      <h2 className="pt-4 pb-2 text-[#1de321] font-bold">
                        Time:{" "}
                      </h2>
                      <p>{item.time}</p>
                    </div>
                    <div className="border-[#2758ec] border-t-[6px] rounded text-center">
                      <h2 className="pt-4 pb-2 text-[#2758ec] font-bold">
                        Capacity:{" "}
                      </h2>
                      <p>{item.capacity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Classes;
