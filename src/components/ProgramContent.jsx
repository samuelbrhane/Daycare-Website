import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const ProgramContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 xl:gap-20 2xl:gap-28 w-full px-4 md:px-12 lg:px-16 xl:px-20 py-12 md:py-20 lg:py-32 xl:py-36">
      {/* program content */}
      <div className="">
        <h1 className="text-[#d83fbf] title">
          Our <span className="text-black">Programs</span>
        </h1>
        <p className="font-semibold mb-4 italic font-[Lora]">
          Our center prides itself on placing each child&apos;s development
          growth and safety as top priority. Above all else, our teachers
          develop age-appropriate activities for the different age groups at the
          center. In addition, our staff will revise those activities in ways to
          that will maximize each child&apos;s particular needs. Our goal is to
          interact with each child at their level.
        </p>
        <p className="font-bold text-3xl mb-2 italic font-[Lora]">
          We offer a balance of freedom and instruction.
        </p>

        {/* description */}
        <div className="font-[Lora]">
          <p className="flex gap-2">
            <span>
              <AiOutlineRight className="text-[#a23dea]" />
            </span>
            In the Preschool program, your child builds skills vital to success
            in kindergarten, but also gains respect for others, and a strong
            confidence in him or herself. Learning experiences develop literacy,
            mathematical thinking, problem-solving skills, and creativity.
          </p>
          <p className="flex gap-2">
            <AiOutlineRight className="text-[#a23dea]" />
            To further prepare for school, children will:
          </p>
          <p className="flex gap-2">
            <AiOutlineRight className="text-[#a23dea]" />
            Take on challenges.
          </p>
          <p className="flex gap-2">
            <AiOutlineRight className="text-[#a23dea]" />
            Develop their own learning goals.
          </p>
          <p className="flex gap-2">
            <AiOutlineRight className="text-[#a23dea]" />
            See situations from different perspectives.
          </p>
          <p className="flex gap-2">
            <AiOutlineRight className="text-[#a23dea]" />
            Make connections with one another.
          </p>
        </div>
        {/* program detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 italic font-[Lora]">
          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-4xl">Program for</h1>
              <h1 className="font-bold text-[28px] text-[#cb53f0] mb-1">
                INFANTS
              </h1>
              <div className="w-full h-[6px] rounded bg-gradient-to-r from-[#a234a2] to-[#046099]" />
              <p className="mt-4">
                We provide a safe and nurturing environment for your precious
                little one to blossom.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-4xl">Program for</h1>
              <h1 className="font-bold text-[28px] text-[#4166ee] mb-1">
                TODDLERS
              </h1>
              <div className="w-full h-[6px] rounded bg-gradient-to-r from-[#a234a2] to-[#046099]" />
              <p className="mt-4">
                Introduction to play, creative arts, language development &
                sensory exploration.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-4xl">Program for</h1>
              <h1 className="font-bold text-[28px] text-[#3cf3a0] mb-1">
                PRESCHOOL
              </h1>
              <div className="w-full h-[6px] rounded bg-gradient-to-r from-[#a234a2] to-[#046099]" />
              <p className="mt-4">
                Developing the critical thinking and problem-solving skills they
                will need to succeed in school.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-4xl">Program for</h1>
              <h1 className="font-bold text-[28px] text-[#dce351] mb-1">
                SCHOOL-AGE
              </h1>
              <div className="w-full h-[6px] rounded bg-gradient-to-r from-[#a234a2] to-[#046099]" />
              <p className="mt-4">
                A safe environment for additional homework & study time before &
                after school.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* program images */}
      <div className="relative mb-12">
        <div className="flex justify-center rounded-xl">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] rounded-full border-[10px] border-[#6534ed79] hover:border-[#6534ed] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1587616211892-f743fcca64f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRheWNhcmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="program"
              className="h-full w-full hover:scale-105"
            />
          </div>
        </div>

        <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] 2xl:w-[280px] 2xl:h-[280px] overflow-hidden rounded-full border-[10px] border-[#34ede479] hover:border-[#34ede4] hover:scale-[1.01] absolute bottom-[-50px] md:top-[250px] xl:top-[300px] 2xl:top-[350px] left-10">
          <img
            src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="program"
            className="h-full w-full hover:scale-105"
          />
        </div>

        <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] 2xl:w-[280px] 2xl:h-[280px] rounded-full border-[10px] border-[#34ede479] hover:border-[#34ede4] hover:scale-[1.01] absolute bottom-[-50px] md:top-[250px] xl:top-[300px] 2xl:top-[350px] right-10 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="program"
            className="h-full w-full hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramContent;
