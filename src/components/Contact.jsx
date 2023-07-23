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
          <h1 className="text-[#29589f] title">
            Contact <span className="text-black">Us</span>
          </h1>
          <p className="font-semibold mb-4 font-[Lora] max-w-[500px]">
            Please feel free to contact us to set up a time when you can come
            tour our facility and meet our staff. We look forward to seeing you
            and your children!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 md:mt-8 gap-6">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <FaLocationDot className="bg-[#d71ae1] p-6 w-28 h-28 rounded-full text-[#f3f046] " />
              <p>Bole SubCity, Addis Ababa, Ethiopia</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <AiTwotoneMail className="bg-[#d71ae1] p-6 w-28 h-28 rounded-full text-[#f3f046] " />
              <p>info@example.com</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <AiFillPhone className="bg-[#d71ae1] p-6 w-28 h-28 rounded-full text-[#f3f046] " />
              <p>+251911909090</p>
            </div>
          </div>
        </div>
      </motion.div>

      <ContactContent />
    </section>
  );
};

export default Contact;
