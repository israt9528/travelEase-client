import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const owners = [
  {
    name: "Lila Morgan",
    role: "Luxury Car Owner",
    img: "https://i.ibb.co.com/v6B0QNpG/54a361cae08a57b5469bd359ac9dac82.jpg", // replace with your actual image path
  },
  {
    name: "Ethan Sullivan",
    role: "SUV & Offroad Specialist",
    img: "https://i.ibb.co.com/GQ0mmdzP/4fd33089767ca39262d5901c905e1ab5.jpg",
  },
  {
    name: "Sophia Bennett",
    role: "Eco Car Partner",
    img: "https://i.ibb.co.com/WWpC6nQ7/08b3aa0c4eafdb5d79aa3edf8dec12a8.jpg",
  },
];

const Owners = () => {
  return (
    <section className="py-16 bg-linear-to-b from-gray-900 to-black ">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
          Meet Our Trusted Car Owners
        </h2>
        <p className="text-primary-content max-w-2xl mx-auto">
          At <span className="font-semibold text-secondary">TravelEase</span>,
          we partner with passionate car owners who ensure your journeys are
          smooth, safe, and comfortable.
        </p>
      </motion.div>

      {/* Owner Cards */}
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {owners.map((owner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden w-full sm:w-80 hover:shadow-blue-500/40 transition-shadow duration-300"
          >
            <img
              src={owner.img}
              alt={owner.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-accent-content mb-1">
                {owner.name}
              </h3>
              <p className="text-accent mb-4">{owner.role}</p>
              <div className="flex justify-center gap-4 text-blue-500 text-xl">
                <a href="#">
                  <FaXTwitter className="hover:text-accent-content transition" />
                </a>
                <a href="#">
                  <FaFacebook className="hover:text-accent-content transition" />
                </a>
                <a href="#">
                  <FaInstagram className="hover:text-accent-content transition" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Owners;
