import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../../Components/Loading/Loading";
import { SiTicktick } from "react-icons/si";
import {
  MdOutlineCancel,
  MdDirectionsCar,
  MdOutlineDateRange,
} from "react-icons/md";
import { motion } from "framer-motion";
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

  if (loading) return <Loading />;

  if (!vehicles || vehicles.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
        <div className="bg-base-200 p-8 rounded-full mb-4">
          <MdDirectionsCar size={60} className="text-base-300" />
        </div>
        <h2 className="text-3xl font-bold text-base-content">
          No Bookings Found
        </h2>
        <p className="text-gray-500 mt-2">
          You haven't made any booking requests yet.
        </p>
      </div>
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
            const remaining = vehicles.filter((vehicle) => vehicle._id !== id);
            setVehicles(remaining);
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
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-base-content">
            My Bookings
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and track your upcoming travel requests.
          </p>
        </div>
        <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-xl border border-secondary/20 text-sm font-bold">
          Total Bookings: {vehicles.length}
        </div>
      </div>

      {/* Desktop View Table */}
      <div className="hidden lg:block bg-base-100 rounded-3xl border border-base-300 shadow-sm overflow-hidden">
        <table className="table w-full border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-5 px-6 uppercase text-[11px] font-bold tracking-wider">
                Vehicle
              </th>
              <th className="py-5 px-6 uppercase text-[11px] font-bold tracking-wider">
                Category
              </th>
              <th className="py-5 px-6 uppercase text-[11px] font-bold tracking-wider">
                Booking Date
              </th>
              <th className="py-5 px-6 uppercase text-[11px] font-bold tracking-wider text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-base-200">
            {vehicles.map((vehicle) => (
              <tr
                key={vehicle._id}
                className="hover:bg-base-200/30 transition-colors"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={vehicle.coverImage}
                      alt={vehicle.vehicleName}
                      className="w-14 h-14 object-cover rounded-xl shadow-sm border border-base-300"
                    />
                    <div>
                      <p className="font-bold text-base-content">
                        {vehicle.vehicleName}
                      </p>
                      <p className="text-xs text-gray-400">
                        ID: {vehicle._id.slice(-6).toUpperCase()}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="badge badge-ghost font-medium">
                    {vehicle.category}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {new Date(vehicle.bookedAt).toLocaleDateString()}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {new Date(vehicle.bookedAt).toLocaleTimeString()}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={handleConfirm}
                      className="btn btn-sm btn-primary rounded-lg text-white"
                      title="Confirm Booking"
                    >
                      <SiTicktick /> Confirm
                    </button>
                    <button
                      onClick={() => handleBookingReqDelete(vehicle._id)}
                      className="btn btn-sm btn-outline btn-error rounded-lg"
                      title="Cancel Booking"
                    >
                      <MdOutlineCancel size={18} /> Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile/Tablet View (Card Layout) */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
        {vehicles.map((vehicle) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            key={vehicle._id}
            className="bg-base-100 p-5 rounded-2xl border border-base-300 shadow-sm space-y-4"
          >
            <div className="flex items-center gap-4 border-b border-base-200 pb-4">
              <img
                src={vehicle.coverImage}
                alt={vehicle.vehicleName}
                className="w-16 h-16 object-cover rounded-xl shadow-inner"
              />
              <div className="flex-1">
                <h3 className="font-bold text-lg leading-tight">
                  {vehicle.vehicleName}
                </h3>
                <span className="text-xs font-semibold text-secondary uppercase">
                  {vehicle.category}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <MdOutlineDateRange className="text-secondary" />
                <span>{new Date(vehicle.bookedAt).toLocaleDateString()}</span>
              </div>
              <div className="text-right font-medium text-xs text-gray-400">
                ID: {vehicle._id.slice(-6).toUpperCase()}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={handleConfirm}
                className="btn btn-primary btn-sm flex-1 rounded-xl text-white shadow-lg shadow-primary/20"
              >
                <SiTicktick /> Confirm
              </button>
              <button
                onClick={() => handleBookingReqDelete(vehicle._id)}
                className="btn btn-outline btn-error btn-sm flex-1 rounded-xl"
              >
                <MdOutlineCancel size={18} /> Cancel
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
