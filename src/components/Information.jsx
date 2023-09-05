import React from "react";
import { Classes, Facilities, Schedules } from ".";

const Information = () => {
  return (
    <section id="Visit" className="relative">
      <img
        src="/blog-divider.png"
        alt="bg"
        className="absolute top-[-15px] md:top-[-35px] lg:top-[-40px] xl:top-[-50px] 2xl:top-[-65px] left-0 right-0 w-full"
      />

      <div className="bg-[url('/blog-bg.png')] w-full">
        <div className="pt-12 md:pt-20 lg:pt-32 xl:pt-36">
          {/* intro */}
          <div className="mb-16 flex flex-col items-center">
            <h1 className="text-[#f38600] title text-center md:px-20 lg:px-40 xl:px-56">
              Visit
            </h1>
            <p className="text-[15px] lg:text-[16px] mb-4 text-center max-w-[700px]">
              Our playschool facility offers a nurturing and enriching
              environment for your child&apos;s early development. With spacious
              classrooms, well-equipped play areas, and experienced staff, we
              provide a safe and engaging experience.
            </p>
          </div>

          {/* school facilities */}
          <Facilities />

          {/* school classes */}
          <Classes />

          {/* schedules */}
          <Schedules />
        </div>
      </div>
    </section>
  );
};

export default Information;
