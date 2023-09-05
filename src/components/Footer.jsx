import { links } from "@/utils/links";
import Image from "next/image";
import React from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="font-[Lora] mt-6 md:mt-8 xl:mt-12 relative bg-[url('/addis4.jpeg')] bg-cover bg-center h-[680px] md:h-[410px] 2xl:h-[400px] text-white bg-no-repeat">
      <div className="absolute top-0 left-0 bottom-0 w-full px-4 md:px-12 lg:px-16 xl:px-20 bg-[#041210da] py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center">
            <div>
              <div className="flex items-center justify-center">
                <div className="xl:w-[280px] xl:h-[180px] relative">
                  <img
                    src="/logo-bg.png"
                    alt="logo-bg"
                    className="w-full h-full"
                  />
                  <div className="absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <img src="/main-logo.jpeg" alt="header-logo" />
                  </div>
                </div>
              </div>

              <p className="flex items-center gap-2">
                <FaLocationDot />
                Lideta SubCity, Addis Ababa, Ethiopia
              </p>

              <div className="flex items-center gap-2 my-1">
                <AiFillPhone />{" "}
                <div>
                  <p>+2519 0692 9258</p>
                  <p>+2519 0683 9358</p>
                </div>
              </div>

              <p className="flex items-center gap-2 mb-1">
                <AiTwotoneMail /> info@addis-maya.com
              </p>

              <p>Addis-Maya Playschool</p>
            </div>
          </div>

          <div className="justify-center pt-8 md:pt-12 footerLink">
            <div>
              <h1 className="font-bold text-4xl font-[Lora] italic md:text-[30px] mb-8">
                Quick Links
              </h1>
              <div className="flex flex-col">
                {links.map((link) => (
                  <Link
                    offset={link.title === "Home" ? -75 : -100}
                    smooth={true}
                    duration={500}
                    style={{ cursor: "pointer" }}
                    to={link.title}
                    key={link.id}
                    className="mb-6 hover:text-[#f38600]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-8 md:pt-12">
            <div>
              <h1 className="font-bold text-4xl font-[Lora] italic md:text-[30px] mb-8">
                Photo Gallery
              </h1>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/footer1.jpeg"
                  alt="footer"
                  className="w-[100px] h-[70px] rounded-xl"
                />
                <img
                  src="/gallery2.jpeg"
                  alt="footer"
                  className="w-[100px] h-[70px] rounded-xl"
                />
                <img
                  src="/footer3.jpeg"
                  alt="footer"
                  className="w-[100px] h-[70px] rounded-xl"
                />
                <img
                  src="/footer4.jpeg"
                  alt="footer"
                  className="w-[100px] h-[70px] rounded-xl"
                />
                <img
                  src="/footer5.jpeg"
                  alt="footer"
                  className="w-[100px] h-[70px] rounded-xl"
                />
                <img
                  src="/footer6.jpeg"
                  alt="footer"
                  className="w-[100px] h-[70px] rounded-xl"
                />
                <img
                  src="/footer7.jpeg"
                  alt="footer"
                  className="w-[100px] h-[70px] rounded-xl"
                />
                <img
                  src="/footer8.jpeg"
                  alt="footer"
                  className="w-[100px] h-[70px] rounded-xl"
                />
                <img
                  src="/footer9.jpeg"
                  alt="footer"
                  className="w-[100px] h-[70px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#f38600] mt-4 border-dotted">
          <p className="mt-4 md:mt-6">Copyright 2023 Addis-Maya Playschool.</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
