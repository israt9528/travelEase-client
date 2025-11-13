import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Best Price",
    desc: "You can get the best price",
    img: "https://i.ibb.co.com/dJPqNrmp/a2011915986ed7d6c90c1f0b974ef0a2.jpg", // Replace with your image path
    icon: "💰",
  },
  {
    id: 2,
    title: "24/7 Support",
    desc: "24/7 Support will provide",
    img: "https://i.ibb.co.com/1SZNBwG/873267e81c7c5f8a720f8db64ee5a5f3.jpg",
    icon: "📞",
  },
  {
    id: 3,
    title: "Secure Booking",
    desc: "100% secure payment system",
    img: "https://i.ibb.co.com/RpnWtqvt/secure-booking.jpg",
    icon: "🔒",
  },
  {
    id: 4,
    title: "Wide Selection",
    desc: "Choose from over 1000+ cars",
    img: "https://i.ibb.co.com/GjYbKt8/13063b634cd332d48613158ffb9216cd.jpg",
    icon: "🚗",
  },
];

const AboutUs = () => {
  return (
    <section className="py-20 px-4 bg-base-200">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-accent-content">
          Drive Your Dreams with{" "}
          <span className="text-secondary">TravelEase</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-accent max-w-2xl mx-auto ">
          <span className="text-secondary">TravelEase</span> makes every journey
          effortless and enjoyable. With a fleet of premium vehicles,
          transparent pricing, and a seamless booking experience.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition duration-300"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 bg-black/60 p-3 rounded-xl">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-xl font-semibold mt-2 text-secondary">
                {item.title}
              </h3>
              <p className="text-sm text-white">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
