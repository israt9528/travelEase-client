import React from "react";
import { motion } from "framer-motion"; // Import motion
import { FaSearchLocation, FaCalendarCheck, FaCarSide } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Vehicle",
      description:
        "Browse our extensive fleet of cars and find the perfect match for your journey.",
      icon: <FaSearchLocation className="text-3xl" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Confirm Booking",
      description:
        "Select your dates, provide necessary details, and confirm your booking instantly.",
      icon: <FaCalendarCheck className="text-3xl" />,
      color: "bg-secondary",
    },
    {
      id: 3,
      title: "Enjoy Your Ride",
      description:
        "Pick up your keys and hit the road. We ensure a smooth and safe travel experience.",
      icon: <FaCarSide className="text-3xl" />,
      color: "bg-green-500",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each step
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 lg:px-33 bg-base-100 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Renting a car has never been this easy. Follow these three simple
            steps to get started on your adventure.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-gray-300 -z-0"></div>

          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center group cursor-default"
            >
              {/* Icon Circle */}
              <div
                className={`w-20 h-20 ${step.color} text-white rounded-full flex items-center justify-center shadow-xl mb-6 transform transition-transform duration-300 group-hover:rotate-12 z-10`}
              >
                {step.icon}
              </div>

              {/* Step Number Badge */}
              <div className="absolute top-0 right-1/3 md:right-1/4 w-9 h-9 bg-white border-4 border-base-100 rounded-full flex items-center justify-center font-bold text-sm text-gray-800 shadow-md">
                {step.id}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
