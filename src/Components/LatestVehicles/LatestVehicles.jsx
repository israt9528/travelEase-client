import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import VehicleCard from "../VehicleCard/VehicleCard";
import Loading from "../Loading/Loading";

const LatestVehicles = () => {
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get("/latest-vehicles").then((data) => {
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-7xl mx-auto my-20 text-center">
      <h1 className="text-5xl font-bold">Our Latest Vehicle Arrivals</h1>
      <p className="text-lg font-medium w-[65%] mx-auto my-4">
        Discover the newest arrivals in our collection. From sleek sedans to
        powerful SUVs, explore the latest vehicles available for rent or
        purchase and find the perfect ride that suits your style and needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default LatestVehicles;
