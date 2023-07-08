import { links } from "@/utils/links";
import Image from "next/image";
import React from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="mt-6 md:mt-8 xl:mt-12   relative bg-[url('/addis4.jpeg')] bg-cover bg-center h-[630px] md:h-[410px] 2xl:h-[380px] text-white bg-no-repeat">
      <div className="absolute top-0 left-0 bottom-0 w-full px-4 md:px-12 lg:px-16 xl:px-20 bg-[#041210da] py-8 md:py-12">
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
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className="text-center text-4xl text-[#a123a2] font-[Lora] font-bold">
                      Addis-Maya{" "}
                      <span className="text-3xl text-black font-[Lobster]">
                        Daycare and Preschool
                      </span>
                    </h1>
                  </div>
                </div>
              </div>

              <p className="flex items-center gap-2">
                {" "}
                <FaLocationDot /> +251911909090
              </p>

              <p className="flex items-center gap-2">
                {" "}
                <AiTwotoneMail /> info@example.com
              </p>

              <p className="flex items-center gap-2">
                <AiFillPhone />
                Bole SubCity, Addis Ababa, Ethiopia
              </p>

              <p>Bright Child Care and Pre School</p>
            </div>
          </div>

          <div className="justify-center pt-8 md:pt-12 footerLink">
            <div>
              <h1 className="font-bold text-4xl font-[Lobster] md:text-[30px] mb-8">
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
                    className="mb-6 hover:text-[#6b98f2]"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-8 md:pt-12">
            <div>
              <h1 className="font-bold text-4xl font-[Lobster] md:text-[30px] mb-8">
                Photo Gallery
              </h1>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/addis1.jpeg"
                  alt="footer"
                  className="w-[100px] h-[80px] rounded-xl"
                />
                <img
                  src="/addis2.jpeg"
                  alt="footer"
                  className="w-[100px] h-[80px] rounded-xl"
                />
                <img
                  src="/addis3.jpeg"
                  alt="footer"
                  className="w-[100px] h-[80px] rounded-xl"
                />
                <img
                  src="/addis4.jpeg"
                  alt="footer"
                  className="w-[100px] h-[80px] rounded-xl"
                />
                <img
                  src="/addis5.jpeg"
                  alt="footer"
                  className="w-[100px] h-[80px] rounded-xl"
                />
                <img
                  src="/addis6.jpeg"
                  alt="footer"
                  className="w-[100px] h-[80px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[#a234a3] mt-4 border-dotted">
          <p className="mt-4 md:mt-6">Copyright 2023 Bright Child Care.</p>
          <p>All Rights Reserved. Websites for Daycares</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;