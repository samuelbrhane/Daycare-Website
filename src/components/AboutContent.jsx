import React from "react";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ bottom: -70 }}
      whileInView={{ bottom: 0 }}
      transition={{
        duration: 0.5,
      }}
      className="mt-8 relative md:mt-12 xl:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-8"
    >
      {/* tuition */}
      <div className="flex justify-center pr-6 border-b-2 border-l-2 border-[#a234a3] p-4 rounded">
        <div className="w-full">
          <div>
            <h1 className="font-bold text-4xl">Quality Care &</h1>
            <div className="relative my-4 bg-gradient-to-l from-[#23f4ff]  to-[#c5ed12] via-[#b4309e] rounded text-center mb-2 md:mb-3 xl:mb-5 py-8 xl:py-10 px-4">
              <h1 className="font-bold text-[20px] xl:text-[30px] text-white">
                COMPETITIVE
              </h1>
              <img
                src="/rates.png"
                alt="rate"
                className="absolute right-[-20px] top-[-20px] w-[80px] h-[80px] rounded"
              />
            </div>
            <h1 className="font-bold text-3xl text-right">RATES</h1>
          </div>

          <div className="mt-8 md:mt-12 ">
            <h1 className="text-gray-600 text-2xl mb-4">
              AFFORDABLE TUITION WITH CONVENIENT PAYMENT OPTIONS
            </h1>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">
                Affordable Tuition with Convenient Payment
              </span>
            </p>
            <p className="text-[#4ce049]">
              &#x2713; <span className="text-black">Multi-child discounts</span>{" "}
            </p>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">
                All inclusive tuition rates & fees
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* certified */}
      <div className="flex justify-center pr-6 border-b-2 border-l-2 border-[#a234a3] p-4 rounded">
        <div className="w-full">
          <div>
            <h1 className="font-bold text-4xl">State</h1>
            <div className="relative my-4 bg-gradient-to-l from-[#0ecad4d5]  to-[#c5ed12] via-[#b4309e] rounded text-center mb-2 md:mb-3 xl:mb-5 py-8 xl:py-10 px-4">
              <h1 className="font-bold text-[20px] xl:text-[30px] text-white">
                LICENSED &
              </h1>
              <img
                src="/certified.png"
                alt="rate"
                className="absolute right-[-20px] top-[-20px] w-[80px] h-[80px] rounded"
              />
            </div>
            <h1 className="font-bold text-3xl text-right">CERTIFIED</h1>
          </div>

          <div className="mt-8 md:mt-12 ">
            <h1 className="text-gray-600 text-2xl mb-4">
              WHY ARE WE THE BEST PLACE TO LEARN?
            </h1>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">Age-appropriate curriculum</span>
            </p>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">
                Flexible hours and enrollment plans
              </span>
            </p>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">
                Strict safety policies and CPR/First Aid Certified Staff
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* staff */}
      <div className="flex justify-center pr-6 border-b-2 border-l-2 border-[#a234a3] p-4 rounded">
        <div className="w-full">
          <div>
            <h1 className="font-bold text-4xl">Highly-Qualified</h1>
            <div className="relative my-4 bg-gradient-to-l from-[#23f4ff9a]  to-[#c5ed12] via-[#b4309e] rounded text-center mb-2 md:mb-3 xl:mb-5 py-8 xl:py-10 px-4">
              <h1 className="font-bold text-[20px] xl:text-[30px] text-white">
                TEACHERS &
              </h1>
              <img
                src="/staff.png"
                alt="rate"
                className="absolute right-[-20px] top-[-20px] w-[80px] h-[80px] rounded"
              />
            </div>
            <h1 className="font-bold text-3xl text-right">STAFFS</h1>
          </div>

          <div className="mt-8 md:mt-12 ">
            <h1 className="text-gray-600 text-2xl mb-4">
              HELPING CHILDREN ACHIEVE THEIR FULL POTENTIAL
            </h1>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">
                Highly skilled and trained in early childhood care.
              </span>
            </p>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">
                Multiple levels of education and certification
              </span>{" "}
            </p>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">
                CPR / First-Aid Certified Staff
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* meals */}
      <div className="flex justify-center pr-6 border-b-2 border-l-2 border-[#a234a3] p-4 rounded">
        <div className="w-full">
          <div>
            <h1 className="font-bold text-4xl">Nutritious</h1>
            <div className="relative my-4 bg-gradient-to-l from-[#29999f8c]  to-[#c5ed12] via-[#b4309e] rounded text-center mb-2 md:mb-3 xl:mb-5 py-8 xl:py-10 px-4">
              <h1 className="font-bold text-[20px] xl:text-[30px] text-white">
                MEALS &
              </h1>
              <img
                src="/meals.png"
                alt="rate"
                className="absolute right-[-20px] top-[-20px] w-[80px] h-[80px] rounded"
              />
            </div>
            <h1 className="font-bold text-3xl text-right">SNACKS</h1>
          </div>

          <div className="mt-8 md:mt-12 ">
            <h1 className="text-gray-600 text-2xl mb-4">
              HEALTHY AND TASTY FOOD FOR YOUR LITTLE ONE.
            </h1>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">
                Breakfast, lunch & snacks included
              </span>
            </p>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">
                Nutritionally balanced & delicious
              </span>{" "}
            </p>
            <p className="text-[#4ce049]">
              &#x2713;{" "}
              <span className="text-black">
                Meal calendars available to parents
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutContent;
