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
    <div>
      <h1 className="text-2xl font-bold mb-4">My Vehicles</h1>

      <div className="w-full overflow-x-auto my-4">
        <table className="table w-full bg-base-100 shadow-md rounded-xl">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600">
              <th>Image</th>
              <th>Vehicle Name</th>
              <th>Owner</th>
              <th>Category</th>
              <th>Price / Day</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
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
