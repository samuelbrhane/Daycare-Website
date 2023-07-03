import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { AboutContent, VisionMission } from ".";

const About = () => {
  return (
    <section
      id="About Us"
      className="px-4 md:px-12 lg:px-16 xl:px-20 py-8 md:py-12 lg:py-20 xl:py-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 xl:gap-20 2xl:gap-28 w-full ">
        <motion.div
          className="relative"
          initial={{ left: -50 }}
          whileInView={{ left: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <h1 className="text-[#d83fbf] title">
            About <span className="text-black">Us</span>
          </h1>
          <p className="font-semibold mb-4 italic font-[Lora]">
            At our center, we prioritize the growth, development, and safety of
            every child. Our dedicated teachers understand the unique needs of
            each age group and create age-appropriate activities that promote
            holistic development. We believe in tailoring these activities to
            meet the specific needs of each child, maximizing their potential
            and fostering a positive learning experience.
          </p>

          <VisionMission />
        </motion.div>

        <motion.div
          className="p-6 bg-[#fb14fb] rounded-md border-[10px] border-[#7d4efd] relative"
          initial={{ bottom: -50 }}
          whileInView={{ bottom: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <img
            src="/program1.jpg"
            alt="program"
            className="w-full h-full rounded"
          />
        </motion.div>
      </div>
      <AboutContent />
    </section>
  );
};

export default About;
