import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { format } from "date-fns";
import { motion } from "framer-motion";
import banner1 from "../../assets/banner1.jpeg";
import banner2 from "../../assets/banner2.jpeg";
import banner3 from "../../assets/banner3.jpeg";
import banner4 from "../../assets/banner4.jpeg";
import banner5 from "../../assets/banner5.jpeg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { img } from "framer-motion/client";
import { Link } from "react-router";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function HeroSlider() {
  const slides = [banner1, banner2, banner3, banner4, banner5];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-full relative inset-0 -z-10 "
    >
      {slides.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            {/* Background image */}
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />

            {/* Text overlay with fade animation */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40 px-6"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h1 className="text-[#64B5F6] text-4xl md:text-6xl font-bold mb-4">
                “Explore Your Journey with{" "}
                <span className="text-white">Ease</span>”
              </h1>
              <p className="text-secondary-accent text-base md:text-xl mb-3 lg:w-[65%]">
                Discover a seamless way to explore and rent vehicles for your
                next trip. Whether you’re planning a weekend getaway or listing
                your own car for rent, our platform makes it effortless.
              </p>
              <p className="font-semibold mb-4 text-white">
                {format(new Date(), "EEEE, MMMM MM, yyyy")}{" "}
              </p>
              <Link to="/all-vehicles">
                <button className=" btn bg-black/20 border-base-200 border-2  text-lg ml-3 text-secondary hover:text-primary hover:bg-base-200">
                  All Vehicles <FaArrowUpRightFromSquare size={14} />
                </button>
              </Link>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
