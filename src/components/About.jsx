import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { AboutContent, VisionMission } from ".";
import { GiPlantWatering } from "react-icons/gi";
import { BiSolidNetworkChart } from "react-icons/bi";

const About = () => {
  return (
    <section
      id="About Us"
      className="px-4 md:px-12 lg:px-16 xl:px-20 pt-8 md:pt-12 lg:pt-20 xl:pt-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 w-full ">
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
          <p className="mb-4">
            At Addis-Maya, we strive to nurture a passion for learning and
            discovery in every child. Our priority is to create a secure and
            welcoming environment that fosters growth, motivation, and
            creativity. We firmly believe that play is an essential component of
            learning, and our curriculum is designed to cater to the holistic
            development of each child - from cognitive and social skills to
            physical, emotional, linguistic, self-help, and artistic abilities.
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
            src="/addis5.jpeg"
            alt="program"
            className="w-full h-full rounded"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ left: -50 }}
        whileInView={{ left: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="mt-8 relative"
      >
        <h1 className="font-bold text-4xl font-[Lora] mb-2">
          Why you should choose Addis Maya
        </h1>
        <h2 className="font-bold text-2xl font-[Lora] mb-6">
          We are dedicated to inspiring your children!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-4">
          <div className="flex gap-4 items-center">
            <div className="min-w-[80px] min-h-[80px] text-[#6af55b] rounded-full bg-gradient-to-t from-[#000000] to-[#7b097b9f] flex items-center justify-center">
              <GiPlantWatering className="w-[50px] h-[50px]" />
            </div>

            <p>
              Our mixed curriculum includes projects with play, music, art,
              sports, and book lessons to create a developmentally appropriate
              and academically rigorous foundation. This approach prepares
              children for social and emotional success in future schooling and
              adulthood.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <div className="min-w-[80px] min-h-[80px] text-[#6af55b] rounded-full bg-gradient-to-t from-[#000000] to-[#7b097b9f] flex items-center justify-center">
              <BiSolidNetworkChart className="w-[50px] h-[50px]" />
            </div>

            <p>
              Our warm and nurturing environment encourages purposeful play in
              the compound. We provide a unique and progressive learning
              environment that fosters intellectual, physical, and social growth
              in each student. Our staff members have limited shift working
              hours, and our students stay on campus for 7 to 12 hours.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ bottom: -50 }}
        whileInView={{ bottom: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="grid grid-cols-1 md:grid-cols-2 mt-8 md:gap-12 gap-4 relative"
      >
        <div>
          <h1 className="font-bold mb-4 font-[Lora] text-4xl text-[#2e87ba]">
            The Founders
          </h1>
          <p>
            Addis-Maya is founded by two aspiring and experienced women with a
            combined 15 years of international school experience. Both moms
            themselves, Sewbesew and Yamrot share a passion to nurture curiosity
            and inspire creativity in children.
          </p>
        </div>

        <div>
          <h1 className="font-bold mb-4 font-[Lora] text-4xl text-[#2e87ba]">
            Our Staff
          </h1>
          <p>
            We require on-going training for our staff through state classes,
            orientation videos, in-house training, and other certified
            professionals in the education field. All of our staff are trained
            in First Aid and CPR. We also have all required clearances to work
            with children.
          </p>
        </div>
      </motion.div>
      <AboutContent />
    </section>
  );
};

export default About;
