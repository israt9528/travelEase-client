import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Header */}
      <section className="bg-primary/5 py-25 border-b border-base-200">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have questions about our fleet or need help with a booking? Our team
            is here to help you 24/7.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-35 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Information & Map */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-gray-500">+1 (555) 000-1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-gray-500">support@travelease.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold">Headquarters</p>
                    <p className="text-gray-500">
                      123 Mobility Drive, San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Wrapper */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-base-300 h-80 relative group">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019297801889!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-base-200/50 p-8 md:p-12 rounded-[2.5rem] border border-base-200"
          >
            <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-10">
              We typically respond within 2-4 business hours.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control w-full">
                <label className="label font-semibold text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered rounded-xl bg-base-100 border-base-300 focus:border-primary w-full"
                />
              </div>
              <div className="form-control w-full">
                <label className="label font-semibold text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="input input-bordered rounded-xl bg-base-100 border-base-300 focus:border-primary w-full"
                />
              </div>
              <div className="form-control w-full md:col-span-2">
                <label className="label font-semibold text-sm">Subject</label>
                <select className="select select-bordered rounded-xl bg-base-100 border-base-300 focus:border-primary w-full">
                  <option>General Inquiry</option>
                  <option>Booking Issues</option>
                  <option>Corporate Partnership</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="form-control w-full md:col-span-2">
                <label className="label font-semibold text-sm">
                  Your Message
                </label>
                <textarea
                  className="textarea textarea-bordered rounded-xl bg-base-100 border-base-300 focus:border-primary w-full h-32"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="btn btn-primary w-full md:w-auto px-10 rounded-xl gap-2 shadow-lg shadow-primary/20">
                  <FiSend /> Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Office Hours Footer */}
      <section className="py-12 bg-base-200/30 border-t border-base-200">
        <div className="container mx-auto px-6 lg:px-35 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-gray-500">
            <FiClock className="text-primary" />
            <span>
              <strong>Office Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM
            </span>
          </div>
          <div className="flex gap-4">
            <span className="badge badge-success badge-outline">
              24/7 Roadside Assistance Available
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
