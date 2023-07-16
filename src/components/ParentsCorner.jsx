import React from "react";
import { FAQ, Gallery, Testimonials } from ".";
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
          <div className="mb-16 text-center flex flex-col justify-center  items-center">
            <h1 className="text-[#d83fbf] title text-center md:px-20 lg:px-40 xl:px-56">
              Parents <span className="text-black">Corner</span>
            </h1>
            <p className="font-semibold mb-4 italic font-[Lora] max-w-[400px]">
              Explore our Parents Corner for frequently asked questions,
              heartfelt testimonials, and captivating images showcasing the
              vibrant experiences at our daycare.
            </p>
          </div>
        </motion.div>
        <div>
          <Testimonials />
          <FAQ />
          <Gallery />
        </div>
      </div>
    </section>
  );
};

export default ParentsCorner;
