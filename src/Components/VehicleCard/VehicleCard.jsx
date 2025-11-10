import React from "react";
import { Link } from "react-router";

const VehicleCard = ({ vehicle }) => {
  const { _id, vehicleName, category, pricePerDay, coverImage, availability } =
    vehicle;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 w-full">
      {/* Vehicle Image */}
      <div className="">
        <img
          src={
            coverImage || "https://via.placeholder.com/400x250?text=No+Image"
          }
          alt={vehicleName}
          className="w-full h-[280px] object-cover"
        />
      </div>

      {/* Card Info */}
      <div className="p-4 flex flex-col ">
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-xl font-bold text-gray-800">{vehicleName}</h2>

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
        <p className="font-medium text-gray-500">Category: {category}</p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-indigo-600 font-bold">${pricePerDay}/day</p>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <Link to={`/vehicle-details/${_id}`}>
            <button className="flex-1 text-sm px-3 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
