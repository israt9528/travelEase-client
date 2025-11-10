import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router";
import Loading from "../../Components/Loading/Loading";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const VehicleDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [vehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/vehicles/${id}`).then((data) => {
      //   console.log(data.data);
      setVehicle(data.data);
      setLoading(false);
    });
  }, [id, axiosSecure]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="max-w-5xl mx-auto my-10 px-4">
        <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Image Section */}
          <figure className="md:w-1/2">
            <img
              src={vehicle.coverImage}
              alt={vehicle.vehicleName}
              className="w-full h-64 md:h-full object-cover"
            />
          </figure>

          {/* Info Section */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                {vehicle.vehicleName}
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                Owned by {vehicle.owner}
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="badge badge-outline">{vehicle.category}</span>
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

              <p className="text-base text-gray-700 mb-4">
                {vehicle.description}
              </p>

              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>{vehicle.location}</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-success" />
                  <span className="font-semibold">
                    ${vehicle.pricePerDay}/day
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-info" />
                  <span>{vehicle.userEmail}</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaClock className="text-warning" />
                  <span>
                    Added on {new Date(vehicle.createdAt).toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6">
              <button
                className="btn btn-primary w-full md:w-auto"
                disabled={vehicle.availability !== "Available"}
              >
                {vehicle.availability === "Available"
                  ? "Book Now"
                  : "Currently Booked"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
