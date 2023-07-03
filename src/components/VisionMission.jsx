import React from "react";

const VisionMission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 italic font-[Lora]">
      {/* mission */}
      <div>
        <div className="flex items-center justify-center">
          <img
            src="/mission.png"
            alt="mission"
            className="w-[180px] h-[130px] mb-6"
          />
        </div>
        <div className="border-l-[16px] border-[#fb1b1b] p-4 md:p-8 xl:p-12 shadow rounded-md">
          <h1 className="font-bold mb-2 text-3xl">Our Mission</h1>
          <p>
            Nurturing growth and inspiring children to embrace opportunities
            through a structured and proven learning approach.
          </p>
        </div>
      </div>

      {/* vision */}
      <div>
        <div className="flex items-center justify-center">
          <img
            src="/vision.png"
            alt="mission"
            className="w-[180px] h-[130px] mb-6"
          />
        </div>
        <div className="border-l-[16px] border-[#1af125] p-4 md:p-8 xl:p-12 shadow rounded-md">
          <h1 className="font-bold mb-2 text-3xl"> Our Vision</h1>
          <p>
            To be a trusted partner, shaping a bright future through nurturing,
            empowering, and individualized education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
