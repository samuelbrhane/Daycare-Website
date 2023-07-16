import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { name, text, title, image } = testimonial;
  return (
    <div className="relative flex flex-col justify-between h-[350px] rounded-md border-r-[4px] border-b-[4px] border-[#137ec6] min-w-[330px] bg-white testimonial hover:scale-[1.01] cursor-pointer shadow hover:shadow-md px-8 py-4">
      <div>
        <p className="text-2xl font-bold mt-4 mb-3">{title}</p>
        <p>{text}</p>
      </div>

      <div className="flex items-center gap-4 bg-[#137ec6] rounded-md p-4 text-white">
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
          <img src={image} alt="userImage" className="w-full h-full" />
        </div>

        <h2 className="font-bold text-3xl">{name}</h2>
      </div>
    </div>
  );
};

export default TestimonialCard;
