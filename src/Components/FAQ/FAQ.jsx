import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  const [activeId, setActiveId] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "What documents do I need to rent a car?",
      answer:
        "You will need a valid driver's license, a national ID or passport, and a credit card in the driver's name for the security deposit. International travelers may also require an International Driving Permit (IDP).",
    },
    {
      id: 1,
      question: "Is insurance included in the rental price?",
      answer:
        "Basic Third-Party Liability insurance is included. However, we highly recommend our Collision Damage Waiver (CDW) for extra protection against theft or accidental damage.",
    },
    {
      id: 2,
      question: "Can I pick up the car in one city and drop it in another?",
      answer:
        "Yes, we offer one-way rentals between most major cities. Please note that a 'drop-off fee' may apply depending on the distance between locations.",
    },
    {
      id: 3,
      question: "What is your fuel policy?",
      answer:
        "We typically operate on a 'Full-to-Full' policy. You will receive the car with a full tank, and you should return it full to avoid extra refueling charges.",
    },
    {
      id: 4,
      question: "Are there any age restrictions for renting?",
      answer:
        "The minimum age to rent is 21 years. Drivers under 25 may be subject to a 'Young Driver Surcharge' depending on the vehicle category selected.",
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-35 bg-base-100">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="text-secondary">Questions</span>
            </h2>
            <p className="text-gray-500">
              Everything you need to know about our car rental process.
            </p>
          </motion.div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: faq.id * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                activeId === faq.id
                  ? "border-secondary shadow-md ring-1 ring-secondary/20"
                  : "border-base-300 hover:border-gray-400"
              }`}
            >
              <button
                onClick={() => setActiveId(activeId === faq.id ? -1 : faq.id)}
                className="w-full flex items-center justify-between p-5 text-left bg-base-100 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <FaQuestionCircle
                    className={`${
                      activeId === faq.id ? "text-secondary" : "text-gray-400"
                    } transition-colors`}
                  />
                  <span
                    className={`font-semibold text-lg ${
                      activeId === faq.id
                        ? "text-secondary"
                        : "text-base-content"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                  className="text-gray-400"
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-5 pt-0 text-gray-500 leading-relaxed border-t border-base-200 bg-base-200/20">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
