import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery111.jpeg",
  "/gallery2.jpeg",
  "/gallery3.jpeg",
  "/gallery4.jpeg",
  "/gallery5.jpeg",
  "/gallery6.jpeg",
  "/gallery7.jpeg",
  "/gallery8.jpeg",
  "/gallery9.jpeg",
  "/gallery10.jpeg",
  "/gallery11.jpeg",
  "/gallery12.jpeg",
  "/gallery13.jpeg",
  "/gallery14.jpeg",
  "/gallery15.jpeg",
];

const Gallery = () => {
  const scrollRef = useRef(null);

  // handle scroll
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "right"
          ? scrollLeft + clientWidth
          : scrollLeft - clientWidth;
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ left: -50 }}
      whileInView={{ left: 0 }}
      transition={{
        duration: 0.5,
      }}
      className="bg-white px-5 py-4 my-6 mx-4 md:mx-8 lg:mx-12 relative"
    >
      <h1 className="subtitle mb-8">Gallery</h1>
      <div className="relative h-[300px] ">
        <div className="h-full absolute left-0 z-40 flex items-center">
          <div
            className=" text-xl md:text-2xl lg:text-3xl bg-slate-300 hover:bg-slate-200  px-3 md:px:4 py-8 md:py-10"
            onClick={() => handleScroll("left")}
          >
            <AiOutlineLeft />
          </div>
        </div>
        <div className="h-full absolute right-0 z-40 flex items-center ">
          <div
            className=" text-xl md:text-2xl lg:text-3xl bg-slate-300 hover:bg-slate-200  px-3 md:px:4 py-8 md:py-10"
            onClick={() => handleScroll("right")}
          >
            <AiOutlineRight />
          </div>
        </div>
        <div
          className="flex items-center  overflow-x-scroll gap-4 scrollbar-hide"
          ref={scrollRef}
        >
          {images?.map((image, index) => (
            <div
              className="relative h-[300px] min-w-[400px] 2xl:min-w-[350px] overflow-hidden"
              key={index}
            >
              <Image
                src={image}
                className="rounded-sm  md:rounded hover:scale-[1.02] md:hover:scale-105  transition duration-200"
                layout="fill"
                alt="img"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
