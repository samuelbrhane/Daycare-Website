import React from "react";
import { ContactForm } from ".";
import { motion } from "framer-motion";

const ContactContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 xl:gap-20 2xl:gap-28 w-full mt-6 md:mt-8 xl:mt-12">
      <motion.div
        className="relative"
        initial={{ left: -50 }}
        whileInView={{ left: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="font-bold text-4xl text-[#29589f] mb-2">
          Enroll Now or Join the Waitlist!
        </h1>
        <p className="font-bold mb-2">
          Thank you for your interest in Bright Child Care and Preschool.
        </p>

        <span>
          In order to enroll your child at our daycare, please download, fill
          in, and bring the enrollment form PDF attached to this contact form.{" "}
        </span>
        <a
          href="/enrollment.pdf"
          className="text-[#ce3ac4] font-bold hover:scale-[1.05] hover:text-[#ce3ac4c8]"
        >
          Download Now.
        </a>

        <h1 className="mt-6 md:mt-8 mb-2 font-bold text-4xl text-[#29589f]">
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.973344989569!2d38.860547274672776!3d9.066192590996614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b852e7090e477%3A0x7269a2c279e47924!2zRmFtaWx5IERheWNhcmUg4Y2L4Yia4YiKIOGLqOGIheGNg-GKk-GJtSDhiJvhiYbhi6s!5e0!3m2!1sen!2set!4v1688388730391!5m2!1sen!2set"
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
