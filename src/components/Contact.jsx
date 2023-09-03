import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";
import { ContactContent } from ".";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="Contact Us"
      className="px-4 md:px-12 lg:px-16 xl:px-20 pt-8 md:pt-12 lg:pt-20 xl:pt-28"
    >
      <motion.div
        initial={{ bottom: -50 }}
        whileInView={{ bottom: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="relative"
      >
        <div className="text-center flex flex-col justify-center  items-center">
          <h1 className="text-[#f38600] title">
            Contact <span className="text-black">Us</span>
          </h1>
          <p className="text-[15px] lg:text-[16px] mb-4 text-center max-w-[720px]">
            Please feel free to contact us to set up a time when you can come
            tour our facility and meet our staff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 md:mt-8 gap-6">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <FaLocationDot className="text-[#f38600] p-6 w-28 h-28 rounded-full bg-[#27980b47] " />
              <p>Lideta SubCity, Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <AiTwotoneMail className="text-[#f38600] p-6 w-28 h-28 rounded-full bg-[#27980b47]" />
              <p>info@addis-maya.com</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <AiFillPhone className="text-[#f38600] p-6 w-28 h-28 rounded-full bg-[#27980b47] " />
              <p>+2519 0692 9258</p>
            </div>
          </div>
        </div>
      </motion.div>

      <ContactContent />
    </section>
  );
};

export default Contact;
