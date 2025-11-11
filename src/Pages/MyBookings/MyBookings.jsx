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
    <div>
      book
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle}></VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
