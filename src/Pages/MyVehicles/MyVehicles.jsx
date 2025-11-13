import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import MyVehicleCard from "../../Components/MyVehicleCard/MyVehicleCard";
import Loading from "../../Components/Loading/Loading";

const MyVehicles = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/my-vehicles?email=${user.email}`).then((data) => {
      // console.log(data.data);
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosSecure, user]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!vehicles || vehicles.length === 0) {
    return <p className="text-center mt-6 text-gray-500">No vehicles found.</p>;
  }

  return (
    <div className="py-24 lg:w-7xl mx-auto px-5">
      <h1 className="text-4xl md:text-5xl text-center font-bold mb-3 text-primary">
        My TravelEase Fleet
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
              <th className="max-sm:hidden">Owner</th>
              <th className="max-sm:hidden">Category</th>
              <th className="max-md:hidden">Price/Day</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {vehicles.map((vehicle) => (
              <MyVehicleCard
                key={vehicle._id}
                vehicle={vehicle}
              ></MyVehicleCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVehicles;
