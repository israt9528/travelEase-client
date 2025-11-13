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
      // console.log(data.data);
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="lg:w-7xl mx-auto text-center mb-14 mt-20 p-5">
      <h1 className="text-4xl md:text-5xl font-bold text-accent-content mb-3">
        “Choose the <span className="text-secondary">Perfect</span> one for
        Every Journey”
      </h1>
      <p className="text-base md:text-lg lg:w-[80%] mx-auto font-medium my-4 text-secondary-content">
        Choose from a wide range of reliable and well-maintained vehicles that
        fit your travel needs and budget. Whether it’s a short city drive or a
        long road trip, our flexible rental options make your journey smooth and
        stress-free. Book instantly, manage your trips easily, and hit the road
        with confidence.
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default AllVehicles;
