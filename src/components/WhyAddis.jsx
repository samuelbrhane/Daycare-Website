import React from "react";
import { motion } from "framer-motion";

const WhyAddis = () => {
  return (
    <div className="bg-white px-5 py-4 my-6 mx-4 md:mx-8 lg:mx-12 relative">
      <motion.div
        initial={{ left: -50 }}
        whileInView={{ left: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="mt-8 relative"
      >
        <h1 className="subtitle mb-2">Why you should choose Addis Maya</h1>
      </motion.div>

      <motion.div
        initial={{ bottom: -70 }}
        whileInView={{ bottom: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="mt-8 relative md:mt-12 xl:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8"
      >
        {/* certified */}
        <div className="flex justify-center pr-6 border-b-2 border-l-2 border-[#f38600] p-4 rounded">
          <div className="w-full">
            <div>
              <h1 className="font-bold text-4xl">State</h1>
              <div className="relative my-4 bg-gradient-to-r from-[#f38600]  to-transparent via-[#28980b] rounded text-center mb-2 md:mb-3 xl:mb-5 py-8 xl:py-10 px-4">
                <h1 className="font-bold text-[20px] xl:text-[30px] text-white">
                  CERTIFIED
                </h1>
                <img
                  src="/certified.png"
                  alt="rate"
                  className="absolute right-[-20px] top-[-20px] w-[80px] h-[80px] rounded"
                />
              </div>
            </div>

            <div className="mt-8 md:mt-12 ">
              <h1 className="text-gray-600 text-2xl mb-4">
                WHY ARE WE THE BEST PLACE TO LEARN?
              </h1>
              <p className="text-[#4ce049]">
                &#x2713; <span className="text-black">COC certified</span>
              </p>
              <p className="text-[#4ce049]">
                &#x2713;{" "}
                <span className="text-black">Trained in child protection</span>
              </p>

              <p className="text-[#4ce049]">
                &#x2713;{" "}
                <span className="text-black">Trained in CPR and first aid</span>
              </p>
            </div>
          </div>
        </div>

        {/* curriculum  */}
        <div className="flex justify-center pr-6 border-b-2 border-l-2 border-[#28980b] p-4 rounded">
          <div className="w-full">
            <div>
              <h1 className="font-bold text-4xl">Mixed</h1>
              <div className="relative my-4 bg-gradient-to-r from-[#f38600]  to-transparent via-[#28980b] rounded text-center mb-2 md:mb-3 xl:mb-5 py-8 xl:py-10 px-4">
                <h1 className="font-bold text-[20px] xl:text-[30px] text-white">
                  CURRICULUM
                </h1>
                <img
                  src="/staff.png"
                  alt="rate"
                  className="absolute right-[-20px] top-[-20px] w-[80px] h-[80px] rounded"
                />
              </div>
            </div>

            <div className="mt-8 md:mt-12 ">
              <h1 className="text-gray-600 text-2xl mb-4">
                HELPING CHILDREN ACHIEVE THEIR FULL POTENTIAL
              </h1>
              <p className="text-[#4ce049]">
                &#x2713;{" "}
                <span className="text-black">Project based approach</span>
              </p>
              <p className="text-[#4ce049]">
                &#x2713; <span className="text-black">Mixed curriculum</span>{" "}
                <br />
                <span className="text-black ml-6">75% Montessori</span>
                <br />
                <span className="text-black ml-6">25% Reggio Emilia</span>
              </p>
            </div>
          </div>
        </div>

        {/* meals */}
        <div className="flex justify-center pr-6 border-b-2 border-l-2 border-[#f38600] p-4 rounded">
          <div className="w-full">
            <div>
              <h1 className="font-bold text-4xl">Nutritious</h1>
              <div className="relative my-4 bg-gradient-to-r from-[#f38600]  to-transparent via-[#28980b] rounded text-center mb-2 md:mb-3 xl:mb-5 py-8 xl:py-10 px-4">
                <h1 className="font-bold text-[20px] xl:text-[30px] text-white">
                  SNACKS
                </h1>
                <img
                  src="/meals.png"
                  alt="rate"
                  className="absolute right-[-20px] top-[-20px] w-[80px] h-[80px] rounded"
                />
              </div>
            </div>

            <div className="mt-8 md:mt-12 ">
              <h1 className="text-gray-600 text-2xl mb-4">
                HEALTHY AND TASTY FOOD FOR YOUR LITTLE ONE.
              </h1>

              <p className="text-[#4ce049]">
                &#x2713; <span className="text-black">Dietitian guided</span>{" "}
              </p>
              <p className="text-[#4ce049]">
                &#x2713;{" "}
                <span className="text-black">Nutritionally balanced</span>{" "}
              </p>
              <p className="text-[#4ce049]">
                &#x2713;{" "}
                <span className="text-black">
                  Vegetarian option, Gluten free option and limited sugar
                  option.{" "}
                </span>
              </p>

              <p className="text-[#4ce049]">
                &#x2713;{" "}
                <span className="text-black">
                  Periodically updated meal plan
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyAddis;
