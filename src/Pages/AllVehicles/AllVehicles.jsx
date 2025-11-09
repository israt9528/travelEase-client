import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import VehicleCard from "../../Components/VehicleCard/VehicleCard";
import Loading from "../../Components/Loading/Loading";

const AllVehicles = () => {
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axiosInstance.get("/vehicles").then((data) => {
      console.log(data.data);
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="lg:w-[1350px] mx-auto">
      all vehicles{vehicles.length}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default AllVehicles;
