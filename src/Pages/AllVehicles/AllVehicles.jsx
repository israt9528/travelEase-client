import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import VehicleCard from "../../Components/VehicleCard/VehicleCard";
import Loading from "../../Components/Loading/Loading";

const AllVehicles = () => {
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axiosInstance.get("/vehicles").then((data) => {
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  if (loading) {
    return <Loading />;
  }

  const categories = ["All", ...new Set(vehicles.map((v) => v.category))];

  const filteredVehicles =
    selectedCategory === "All"
      ? vehicles
      : vehicles.filter((v) => v.category === selectedCategory);

  return (
    <div className="lg:w-7xl mx-auto text-center mb-14 mt-25 p-5">
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

      <div className="flex justify-center gap-4 mb-6 mt-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-secondary text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-14">
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default AllVehicles;
