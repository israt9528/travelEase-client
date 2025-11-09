import React from "react";
import useAxios from "../../hooks/useAxios";

const AllVehicles = () => {
  const axiosInstance = useAxios();

  axiosInstance.get("/vehicles").then((data) => {
    console.log(data.data);
  });

  return <div>all vehicles</div>;
};

export default AllVehicles;
