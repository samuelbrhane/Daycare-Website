import React from "react";
import { Facilities, ProgramContent } from ".";

const Information = () => {
  return (
    <section id="Information" className="relative">
      <img
        src="/blog-divider.png"
        alt="bg"
        className="absolute top-[-15px] md:top-[-35px] lg:top-[-40px] xl:top-[-50px] 2xl:top-[-65px] left-0 right-0 w-full"
      />

      <div className="bg-[url('/blog-bg.png')] w-full">
        <div className="px-4 md:px-12 lg:px-16 xl:px-20 py-12 md:py-20 lg:py-32 xl:py-36">
          {/* intro */}
          <div className="mb-16">
            <h1 className="text-[#d83fbf] title text-center md:px-20 lg:px-40 xl:px-56">
              Information <span className="text-black">Center</span>
            </h1>
            <p className="font-semibold mb-4 text-center md:px-20 lg:px-40 xl:px-56 italic font-[Lora]">
              Our daycare facility offers a nurturing and enriching environment
              for your child&apos; early development. <br /> With spacious
              classrooms, well-equipped play areas, and experienced staff,
              <br /> we provide a safe and engaging experience.
            </p>
          </div>

          {/* school facilities */}
          <Facilities />
        </div>
      </div>
    </section>
  );
};

export default Information;
