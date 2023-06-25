import React from "react";
import { facilities } from "@/utils/facilities";

const Facilities = () => {
  return (
    <div>
      <h1 className="subtitle">
        School <span className="text-[#e75842]">Facilities</span>
      </h1>
      <p className="font-[Lora] italic font-bold">
        Discover our school facilities, including a library, art room, healthy
        canteen <br /> and outdoor playground, which offer endless opportunities
        for <br />
        exploration and discovery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-12 py-16">
        {facilities.map((facility) => {
          return (
            <div
              className="flex flex-col justify-center items-center group"
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
                  <img
                    src={facility.image}
                    alt="book"
                    className="w-[65px] h-[65px]"
                  />
                </div>
              </div>
              <div
                className={`h-[300px] w-[300px] rounded-full ${facility.mainColor} ${facility.hoverColor} group-hover:text-black text-white`}
              >
                <div className="flex items-center justify-center w-full h-full p-10 text-center">
                  <div>
                    <h1 className="font-bold mb-4 text-[30px] font-[Lobster]">
                      {facility.title}
                    </h1>
                    <p className="font-[Lora] italic font-semibold">
                      {facility.subtitle}
                    </p>
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

export default Facilities;
