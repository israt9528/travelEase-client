import React from "react";
import { motion } from "framer-motion";

const stats = [
  { id: 1, label: "Happy Clients", value: "15k+" },
  { id: 2, label: "Verified Vehicles", value: "850+" },
  { id: 3, label: "Pickup Locations", value: "40+" },
  { id: 4, label: "Cities Covered", value: "12+" },
];

const Stats = () => {
  return (
    <section className="my-16 py-16 bg-secondary text-white lg:mx-34 lg:rounded-3xl shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: stat.id * 0.1 }}
              viewport={{ once: false }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-2">
                {stat.value}
              </h3>
              <p className="text-white/80 font-medium uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
