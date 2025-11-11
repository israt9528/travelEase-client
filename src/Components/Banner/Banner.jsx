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
      className="w-full h-screen relative inset-0 -z-10"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-[#f6ddc6]  text-5xl md:text-6xl font-bold mb-4">
                “Explore Your Journey with Ease”
              </h1>
              <p className="text-[#fcd5b1] text-lg md:text-xl mb-3 lg:w-[65%]">
                Discover a seamless way to explore and rent vehicles for your
                next trip. Whether you’re planning a weekend getaway or listing
                your own car for rent, our platform makes it effortless.
              </p>
              <p className="font-semibold text-accent mb-4">
                {format(new Date(), "EEEE, MMMM MM, yyyy")}{" "}
              </p>
              <button className="btn">
                <Link to="/all-vehicles">All Vehicles</Link>
              </button>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
