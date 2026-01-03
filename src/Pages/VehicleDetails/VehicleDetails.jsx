import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link, useParams } from "react-router";
import Loading from "../../Components/Loading/Loading";
import { motion } from "framer-motion";

import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa6";
import useAxios from "../../hooks/useAxios";

const VehicleDetails = () => {
  const axiosSecure = useAxiosSecure();
  const axiosInstance = useAxios();
  const { user } = useAuth();
  const { id } = useParams();
  const [vehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get(`/vehicles/${id}`).then((data) => {
      //   console.log(data.data);
      setVehicle(data.data);
      setLoading(false);
    });
  }, [id, axiosInstance]);

  const handleBooked = () => {
    const {
      vehicleName,
      owner,
      category,
      pricePerDay,
      location,
      availability,
      description,
      coverImage,
    } = vehicle;

    const bookedVehicle = {
      vehicleName,
      owner,
      category,
      pricePerDay,
      location,
      availability,
      description,
      coverImage,
      bookedBy: user.email,
      bookedAt: new Date(),
    };
    axiosSecure.post("/my-bookings", bookedVehicle).then((res) => {
      if (res.data.insertedId) {
        toast.success("Thanks for Booking!");
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <div className="max-w-5xl mx-auto px-4 my-30 ">
        <h1 className="text-4xl md:text-5xl text-center font-bold mb-10 text-primary">
          Vehicle Details
        </h1>

        <Link
          to="/all-vehicles"
          className="flex items-center font-bold gap-1 text-primary mb-5 ml-2 hover:-translate-x-2"
        >
          <FaArrowLeft></FaArrowLeft>
          Back
        </Link>
        <div className="bg-[#f1fffe] shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <figure className="">
              <img
                src={vehicle.coverImage}
                alt={vehicle.vehicleName}
                className="w-full h-64 md:h-[480px] object-cover"
              />
            </figure>
          </motion.div>

          {/* Info Section */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className=" p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">
                  {vehicle.vehicleName}
                </h2>
                <p className="text-accent font-medium mb-4">
                  Owned by:{" "}
                  <span className="text-accent-content font-bold">
                    {vehicle.owner}
                  </span>
                </p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="badge badge-outline text-accent">
                    {vehicle.category}
                  </span>
                  <span
                    className={`badge ${
                      vehicle.availability === "Available"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {vehicle.availability}
                  </span>
                </div>

                <p className="text-base text-accent font-medium mb-8 mt-3">
                  {vehicle.description}
                </p>

                <div className="space-y-2 text-accent-content font-semibold text-lg">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>{vehicle.location}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-success" />
                    <span className="font-semibold text-2xl">
                      ${vehicle.pricePerDay}
                      <span className="text-accent text-base">/day</span>
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-info" />
                    <span>{vehicle.userEmail}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaClock className="text-warning" />
                    <span>
                      Added on{" "}
                      <span className="text-accent">
                        {new Date(vehicle.createdAt).toLocaleDateString()}
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  onClick={handleBooked}
                  className="btn border border-accent-content bg-accent-content text-white hover:bg-white hover:text-accent-content transition-colors duration-200 w-full md:w-auto"
                  disabled={vehicle.availability !== "Available"}
                >
                  {vehicle.availability === "Available"
                    ? "Book Now"
                    : "Currently Booked"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
