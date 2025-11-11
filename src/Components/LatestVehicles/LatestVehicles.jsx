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
    <div>
      <h1>Latest vehicles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default LatestVehicles;
