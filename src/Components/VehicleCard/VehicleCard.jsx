import React from "react";
import { Link } from "react-router";

const VehicleCard = ({ vehicle }) => {
  const {
    _id,
    vehicleName,
    category,
    pricePerDay,
    coverImage,
    availability,
    owner,
  } = vehicle;

  return (
    <div className="bg-[#f1fffe] rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-all duration-300 w-full hover:shadow-blue-500/40">
      {/* Vehicle Image */}
      <div className="p-5 flex flex-col ">
        <img
          src={
            coverImage || "https://via.placeholder.com/400x250?text=No+Image"
          }
          alt={vehicleName}
          className="w-full h-[280px] object-cover rounded-xl mb-3"
        />

        {/* Card Info */}
        <div className="flex justify-between items-center my-2 ">
          <h2 className="text-xl font-bold text-primary">{vehicleName}</h2>

          {/* Availability Badge */}
          <span
            className={` text-xs font-semibold px-2 py-1 rounded-lg ${
              availability === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {availability}
          </span>
        </div>
        <div className="font-medium text-sm text-accent text-left border-b border-base-300 pb-3">
          <p className="">
            Owned by: <span className="text-accent-content">{owner}</span>{" "}
          </p>
          <p className="">
            Category: <span className="text-accent-content">{category}</span>
          </p>
        </div>

        <div className="flex justify-between items-center mt-3">
          <p className="text-accent-content font-bold text-2xl">
            ${pricePerDay}
            <span className="text-accent text-lg">/day</span>
          </p>
          <Link to={`/vehicle-details/${_id}`}>
            <button className=" text-sm px-3 py-2 rounded-lg border border-accent-content text-white font-medium bg-accent-content hover:bg-white hover:text-accent-content transition-colors duration-200">
              View Details
            </button>
          </Link>
        </div>

        {/* Buttons */}
      </div>
    </div>
  );
};

export default VehicleCard;
