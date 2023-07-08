import React from "react";

const VisionMission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14 italic font-[Lora]">
      {/* mission */}
      <div>
        <div className="flex items-center justify-center">
          <img
            src="/mission.png"
            alt="mission"
            className="w-[180px] h-[130px] mb-6"
          />
        </div>
        <div className="border-l-[16px] border-[#fb1b1b] p-4 md:p-8 shadow rounded-md">
          <h1 className="font-bold mb-2 text-4xl">Our Mission</h1>
          <p>
            Our mission at addis-maya is to provide a safe and nurturing
            environment where children can develop a love for learning and take
            the baby steps towards thriving, socially, emotionally and
            academically.
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
        <div className="border-l-[16px] border-[#1af125] p-4 md:p-8 shadow rounded-md">
          <h1 className="font-bold mb-2 text-4xl"> Our Vision</h1>
          <p>
            We aim to instil a strong foundation of values and skills that will
            equip kids with the tools they need to succeed in life. Our goal is
            to nurture curiosity, creativity, and critical thinking in our
            students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
