import React from "react";
import { ProgramContent } from ".";

const Program = () => {
  return (
    <section id="Program" className="relative">
      <img
        src="/white-bg.png"
        alt="bg"
        className="absolute top-[-25px] md:top-[-35px] lg:top-[-40px] xl:top-[-50px] 2xl:top-[-65px] left-0 right-0 w-full"
      />

      <ProgramContent />
    </section>
  );
};

export default Program;
