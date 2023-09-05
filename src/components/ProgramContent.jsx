import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";

const ProgramContent = () => {
  return (
    <div className="font-[Lora] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 xl:gap-20 2xl:gap-28 w-full px-4 md:px-12 lg:px-16 xl:px-20 py-12 md:py-20 lg:py-32 xl:py-36">
      {/* program content */}
      <motion.div
        className="relative"
        initial={{ left: -50 }}
        whileInView={{ left: 0 }}
        transition={{
          duration: 1,
        }}
      >
        <h1 className="text-[#f38600] title relative">
          Our <span className="text-black">Programs</span>
        </h1>
        <p className="mb-4 text-[14px] lg:text-[16px]">
          We offer a unique learning environment and innovative curriculum for
          toddlers and preschoolers from ages 1 to 4. Our programs are 5, 3, 2
          days-per-week, including full and half days program, focusing on
          sensory and social development through art, sports, music, science,
          language, and math to support each student as he or she develops
          confidence in learning. Our classes are taught in a fun, caring,
          nurturing, positive and clean environment.
        </p>
        <p className="mt-2 mb-4 text-[14px] lg:text-[16px]">
          Our innovative curriculum builds beyond the fundamentals as teachers
          encourage interactive literacy and make connection that strengthen
          social and intellectual learning through physical science, social
          studies, gymnastics, dance and art. Our doors are open from 7:30 am
          through 6 pm. We use a 360° approach by training caretakers, children,
          and parents.
        </p>
        <p className="font-bold text-3xl mb-2 font-[Lora]">
          We offer a balance of freedom and instruction.
        </p>

        {/* description */}
        <div className="font-[Lora] text-[14px] lg:text-[16px]">
          <p className="flex gap-2">
            In the Preschool program, your child builds skills vital to success
            in kindergarten, but also gains respect for others, and a strong
            confidence in him or herself. Learning experiences develop literacy,
            mathematical thinking, problem-solving skills, and creativity. To
            further prepare for school, children will:
          </p>

          <p className="gap-4 pl-12 mt-4 flex items-center">
            <span className="w-[8px] h-[8px] rounded-full bg-[#b6ad32]" />
            Take on challenges.
          </p>
          <p className="gap-4 pl-12 mt-2 flex items-center">
            <span className="w-[8px] h-[8px] rounded-full bg-[#b6ad32]" />
            See situations from different perspectives.
          </p>
          <p className="gap-4 pl-12 mt-2 flex items-center">
            <span className="w-[8px] h-[8px] rounded-full bg-[#b6ad32]" />
            Make connections with one another.
          </p>
        </div>
        {/* program detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6 italic font-[Lora]">
          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-4xl">Program for</h1>
              <h1 className="font-bold text-[28px] text-[#28980b] mb-1">
                TODDLERS
              </h1>
              <div className="w-full h-[6px] rounded bg-gradient-to-r from-[#f38600]  to-transparent via-[#28980b]" />
              <p className="mt-4 font-[Lora]">
                Introduction to play, creative arts, language development &
                sensory exploration.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-4xl">Program for</h1>
              <h1 className="font-bold text-[28px] text-[#f38600] mb-1">
                PRESCHOOLERS
              </h1>
              <div className="w-full h-[6px] rounded bg-gradient-to-r from-[#f38600]  to-transparent via-[#28980b]" />
              <p className="mt-4">
                Develop critical thinking and problem solving skills, improve
                cognitive & social development skills.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* program images */}
      <motion.div
        className="relative mb-12"
        initial={{ bottom: -50 }}
        whileInView={{ bottom: 0 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="flex justify-center rounded-xl">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] 2xl:w-[500px] 2xl:h-[500px] rounded-full border-[10px] border-[#27980bb3] hover:border-[#28980b] overflow-hidden">
            <img
              src="/addis7.jpeg"
              alt="program"
              className="hover:scale-105 w-full h-full"
            />
          </div>
        </div>

        <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] 2xl:w-[280px] 2xl:h-[280px] overflow-hidden rounded-full border-[10px] border-[#f386009c] hover:border-[#f38600] hover:scale-[1.01] absolute bottom-[-50px] md:top-[250px] xl:top-[300px] 2xl:top-[350px] left-10">
          <Image
            src="/addis3.jpeg"
            fill
            alt="program"
            className="hover:scale-105"
          />
        </div>

        <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] 2xl:w-[280px] 2xl:h-[280px] rounded-full border-[10px] border-[#f386009c] hover:border-[#f38600] hover:scale-[1.01] absolute bottom-[-50px] md:top-[250px] xl:top-[300px] 2xl:top-[350px] right-10 overflow-hidden">
          <Image
            src="/addis4.jpeg"
            fill
            alt="program"
            className="hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProgramContent;
