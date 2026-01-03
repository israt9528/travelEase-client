import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaTools, FaHandsWash, FaClock } from "react-icons/fa";

const SafetyAssurance = () => {
  const features = [
    {
      id: 1,
      title: "Secure Payments",
      desc: "All transactions are encrypted and 100% secure.",
      icon: <FaShieldAlt />,
    },
    {
      id: 2,
      title: "24/7 Roadside Help",
      desc: "Stuck? Our team is just a phone call away, anytime.",
      icon: <FaTools />,
    },
    {
      id: 3,
      title: "Sanitized Vehicles",
      desc: "Every car is deep-cleaned after every single trip.",
      icon: <FaHandsWash />,
    },
    {
      id: 4,
      title: "Instant Approval",
      desc: "Verified profiles get approved within minutes.",
      icon: <FaClock />,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-35 bg-base-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">
              Your Safety is Our <br />
              <span className="text-secondary font-black underline decoration-primary/30">
                First Priority
              </span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              We go beyond just car rentals. We ensure that every mile you drive
              is backed by our commitment to your safety and convenience.
            </p>
            <button className="btn btn-primary text-white rounded-full px-8 shadow-lg shadow-primary/20">
              Read Our Safety Protocol
            </button>
          </motion.div>

          {/* Right Side: Grid of Features */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: false }}
                className="p-6 rounded-2xl bg-base-200/50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all border border-transparent hover:border-base-300 group"
              >
                <div className="text-3xl text-secondary mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyAssurance;
