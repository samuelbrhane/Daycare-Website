import React from "react";
import { FAQ, Gallery, Testimonials, WhyAddis } from ".";
import { motion } from "framer-motion";

const ParentsCorner = () => {
  return (
    <section
      id="Parents Corner"
      className="relative pt-12 md:pt-20 lg:pt-32 xl:pt-36 "
    >
      <div>
        <motion.div
          initial={{ bottom: -50 }}
          whileInView={{ bottom: 0 }}
          transition={{
            duration: 0.5,
          }}
          className="relative"
        >
          <div className="mb-8 text-center flex flex-col justify-center  items-center">
            <h1 className="text-[#f38600] title text-center md:px-20 lg:px-40 xl:px-56">
              Parents <span className="text-black">Corner</span>
            </h1>
            <p className="text-[15px] lg:text-[16px] mb-4 text-center max-w-[700px]">
              Explore our parents corner for frequently asked questions and
              captivating images.
            </p>
          </div>
        </motion.div>
        <div>
          <motion.div
            initial={{ left: -50 }}
            whileInView={{ left: 0 }}
            transition={{
              duration: 0.5,
            }}
            className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 xl:gap-16 px-4 md:px-12 lg:px-16 xl:px-20"
          >
            <p className="corner text-[14px] lg:text-[15px]">
              We prioritize weekly communication with parents to keep them
              informed about their child&apos;s progress. At the end of each
              day, our professional caregivers provide an overview of the
              day&apos;s activities and connect with each parent or caregiver
              individually to discuss their child&apos;s achievements and areas
              for improvement.
            </p>
            <p className="my-2 corner text-[14px] lg:text-[15px]">
              Before each day begins, our caretakers are available to answer any
              questions or concerns. We also use an online tool to simplify
              communication between teachers and keep parents up-to-date on
              their child&apos;s activities, events, and volunteer
              opportunities.
            </p>
            <p className="mb-2 corner text-[14px] lg:text-[15px]">
              Mid-year and end-of-year reports provide a comprehensive
              developmental profile of each child&apos;s progress in various
              areas such as social, cognitive, emotional, and physical
              development. These reports vary based on age group and cover
              topics such as literacy skills, motor skills, and imaginative
              play.
            </p>
          </motion.div>
          <FAQ />
          <WhyAddis />
          <Gallery />
        </div>
      </div>
    </section>
  );
};

export default ParentsCorner;
