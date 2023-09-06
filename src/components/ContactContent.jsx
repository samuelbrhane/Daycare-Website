import React from "react";
import { ContactForm } from ".";
import { motion } from "framer-motion";

const ContactContent = () => {
  return (
    <div className="grid grid-cols-1 text-[14px] lg:text-[16px] lg:grid-cols-2 gap-8 md:gap-16 xl:gap-20 2xl:gap-28 w-full mt-6 md:mt-8 xl:mt-12">
      <motion.div
        className="relative"
        initial={{ left: -50 }}
        whileInView={{ left: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="font-bold text-4xl text-[#f38600] mb-2">Enroll Now!</h1>
        <p className="font-bold mb-2">
          Thank you for your interest in Addis-Maya Playschool.
        </p>

        <span>
          In order to enroll your child at our playschool, please download, fill
          out and send the pdf form to info@addis-maya.com.{" "}
        </span>
        <a
          href="/admission.pdf"
          className="text-[#28980b] font-bold hover:scale-[1.05] hover:text-[#27980ba7]"
        >
          Download Now.
        </a>

        <h1 className="mt-6 md:mt-8 mb-2 font-bold text-4xl text-[#f38600]">
          Inquiry Form
        </h1>

        {/* inquiry form */}
        <ContactForm />
      </motion.div>
      <motion.div
        className="relative"
        initial={{ bottom: -50 }}
        whileInView={{ bottom: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31526.136724738477!2d38.68369937431641!3d8.993566800000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8713d1f1d109%3A0x50cebcd436b2c9b8!2sAddis%20Maya%20Early%20Years!5e0!3m2!1sen!2set!4v1693725885576!5m2!1sen!2set"
          className="w-full h-[400px] md:h-[450px] xl:h-full rounded"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactContent;
