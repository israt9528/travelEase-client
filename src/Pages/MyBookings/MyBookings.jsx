import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../../Components/Loading/Loading";
import VehicleCard from "../../Components/VehicleCard/VehicleCard";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/my-bookings?email=${user.email}`).then((data) => {
      console.log(data.data);
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosSecure, user]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="lg:w-7xl mx-auto my-24 px-5">
      <h1 className="text-4xl text-center font-bold mb-8 text-accent-content">
        My TravelEase Bookings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle}></VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
