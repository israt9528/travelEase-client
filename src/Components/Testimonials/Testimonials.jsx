import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Business Traveler",
      image: "https://i.pravatar.cc/150?u=sarah",
      review:
        "TravelEase made my business trip so much smoother. The car was spotless and the pickup process took less than 5 minutes!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Family Vacationer",
      image: "https://i.pravatar.cc/150?u=michael",
      review:
        "Booking an SUV for our family road trip was incredibly easy. The transparent pricing with no hidden fees is what I liked most.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Adventure Seeker",
      image: "https://i.pravatar.cc/150?u=emma",
      review:
        "Great selection of vehicles! I rented a 4x4 for a weekend getaway and the customer support was extremely helpful throughout.",
      rating: 4,
    },
    {
      id: 4,
      name: "James Anderson",
      role: "Daily Commuter",
      image: "https://i.pravatar.cc/150?u=james",
      review:
        "The fuel-efficient options are fantastic. Highly recommend for anyone looking for reliable long-term rentals.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-34 bg-base-200/50 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl font-bold mb-4"
          >
            What Our <span className="text-secondary">Clients</span> Say
          </motion.h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Discover why thousands of travelers trust TravelEase for their
            journeys every day.
          </p>
        </div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16" // Space for pagination dots
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-full">
                <div className="bg-base-100 p-8 rounded-2xl shadow-sm border border-base-300 relative group hover:shadow-xl transition-all duration-300 h-60 flex flex-col justify-between">
                  <div>
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-8 text-secondary/20 group-hover:text-secondary/40 transition-colors">
                      <FaQuoteLeft size={30} />
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                          size={14}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-500 italic leading-relaxed line-clamp-4">
                      "{review.review}"
                    </p>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full border-2 border-secondary p-0.5"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{review.name}</h4>
                      <p className="text-sm text-gray-400">{review.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom CSS to style Swiper Pagination Dots to match your secondary color */}
      <style>{`
        .swiper-pagination-bullet-active {
          background: #ff7e00 !important; /* Replace with your exact secondary color hex */
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
