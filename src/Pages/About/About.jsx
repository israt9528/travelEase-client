import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiGlobe, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router";

const About = () => {
  const stats = [
    {
      label: "Happy Clients",
      value: "50K+",
      icon: <FiUsers className="text-secondary" />,
    },
    {
      label: "Global Branches",
      value: "120+",
      icon: <FiGlobe className="text-primary" />,
    },
    {
      label: "Awards Won",
      value: "25+",
      icon: <FiAward className="text-accent" />,
    },
    {
      label: "Years Experience",
      value: "15+",
      icon: <FiCheckCircle className="text-success" />,
    },
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Founder",
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Operations",
      img: "https://i.pravatar.cc/150?u=2",
    },
    {
      name: "Michael Chen",
      role: "Customer Success",
      img: "https://i.pravatar.cc/150?u=3",
    },
  ];

  return (
    <div className="bg-base-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-base-200">
        <div className="container mx-auto px-35 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">
              Our Story
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-base-content mb-6 leading-tight">
              Redefining the way you{" "}
              <span className="text-primary">Explore</span> the world.
            </h1>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Founded in 2010, TravelEase started with a simple mission: to make
              premium vehicle rentals accessible to everyone, everywhere. We
              believe that the journey is just as important as the destination.
            </p>
            <button className="btn btn-primary text-white px-8 rounded-full shadow-lg shadow-primary/20">
              Join Our Journey
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
              alt="Luxury Car"
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-base-100 border-y border-base-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex justify-center text-3xl mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-base-content">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-tighter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 container mx-auto px-35">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Safety First",
              desc: "Every vehicle undergoes a rigorous 50-point inspection before every rental.",
            },
            {
              title: "Transparency",
              desc: "No hidden fees, no surprise charges. What you see is exactly what you pay.",
            },
            {
              title: "24/7 Support",
              desc: "Our dedicated team is always just a phone call away, no matter where you are.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-base-200/50 rounded-3xl border border-base-300 text-center"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-base-200/30">
        <div className="container mx-auto px-35">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">Meet the Experts</h2>
              <p className="text-gray-500">
                The passionate people behind TravelEase.
              </p>
            </div>
            <button className="btn btn-outline btn-primary rounded-xl px-8">
              View Careers
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative bg-base-100 rounded-3xl p-4 shadow-sm border border-base-300 transition-all hover:shadow-xl"
              >
                <div className="aspect-square overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="text-center pb-4">
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-secondary font-medium text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to start your next adventure?
            </h2>
            <p className="text-primary-content/80 mb-10 max-w-xl mx-auto">
              Join thousands of happy travelers who trust TravelEase for their
              journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/all-vehicles"
                className="btn btn-white bg-white text-primary hover:bg-gray-100 border-none px-10 rounded-full"
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline border-white text-white hover:bg-white/10 px-10 rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
