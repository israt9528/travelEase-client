import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../../Components/Loading/Loading";
import VehicleCard from "../../Components/VehicleCard/VehicleCard";
import { FaTrashAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/my-bookings?email=${user.email}`).then((data) => {
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosSecure, user]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (!vehicles || vehicles.length === 0) {
    return (
      <p className="text-5xl font-bold min-h-screen flex justify-center items-center text-primary">
        No Booking Request Found.
      </p>
    );
  }

  const handleConfirm = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your booking request has been confirmed",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleBookingReqDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/my-bookings/${id}`).then((data) => {
          if (data.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your booking request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="py-24 lg:w-7xl mx-auto px-5">
      <h1 className="text-4xl md:text-5xl text-center font-bold mb-3 text-primary">
        My Bookings Collection
      </h1>
      <p className="text-base md:text-lg lg:w-[80%] mx-auto font-medium text-accent text-center mb-5">
        Welcome to your TravelEase Garage, where you can manage your vehicles,
        update trip details, and keep your rides ready for booking
      </p>

      <div className=" lg:overflow-x-auto py-4">
        <table className="table bg-base-200 shadow-md rounded-xl">
          <thead className="bg-base-300 ">
            <tr className="text-left text-primary text-lg">
              <th>Image</th>
              <th>Vehicle Name</th>
              <th className="max-sm:hidden">Category</th>
              <th className="max-sm:hidden">Booked By</th>

              <th className="max-md:hidden">Booked At</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {vehicles.map((vehicle) => (
              <tr
                key={vehicle._id}
                className="bg-gray-200 hover:bg-base-200 transition-all font-semibold text-accent text-base"
              >
                <td>
                  <img
                    src={vehicle.coverImage}
                    alt={vehicle.vehicleName}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </td>
                <td className="font-semibold">{vehicle.vehicleName}</td>
                <td className="max-sm:hidden">{vehicle.category}</td>
                <td className="max-sm:hidden">{vehicle.bookedBy}</td>

                <td className="max-md:hidden">
                  {new Date(vehicle.bookedAt).toLocaleString()}
                </td>
                <td className="flex flex-col lg:flex-row items-center justify-center pt-8 gap-2 mt-3 sm:mt-0">
                  <button
                    onClick={handleConfirm}
                    className="btn btn-sm btn-primary text-white flex items-center gap-2 w-full sm:w-auto"
                  >
                    <SiTicktick /> Confirm
                  </button>
                  <button
                    onClick={() => handleBookingReqDelete(vehicle._id)}
                    className="btn btn-sm btn-secondary text-white flex items-center gap-2 w-full sm:w-auto"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
