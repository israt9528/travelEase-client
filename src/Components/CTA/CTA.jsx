import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaCar } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-20 px-6 lg:px-35">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="relative rounded-3xl overflow-hidden bg-neutral text-white shadow-2xl"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 py-16 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left md:max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Hit the Road? <br />
              <span className="text-secondary">Your Adventure</span> Starts
              Here.
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join over 10,000+ happy travelers. Book your perfect ride today
              and enjoy 10% off on your first rental!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Link
                to="/all-vehicles"
                className="btn btn-secondary btn-lg text-white rounded-full px-8 gap-2 group border-none hover:scale-105 transition-all"
              >
                Book Your Ride{" "}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-outline btn-lg text-white rounded-full px-8 hover:bg-white hover:text-black border-white/30"
              >
                Create Account
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            {/* You can replace this icon with a high-quality car PNG image for a better look */}
            <div className="relative">
              <FaCar className="text-[180px] text-white/10 rotate-15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-secondary p-6 rounded-2xl shadow-2xl">
                  <p className="text-xs uppercase tracking-widest font-bold">
                    First Rental
                  </p>
                  <p className="text-3xl font-black">10% OFF</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
