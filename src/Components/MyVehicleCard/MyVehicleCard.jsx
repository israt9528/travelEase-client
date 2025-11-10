import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyVehicleCard = ({ vehicle }) => {
  const { _id, vehicleName, owner, category, pricePerDay, coverImage } =
    vehicle;

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/vehicles/${_id}`).then((data) => {
          console.log(data.data);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          navigate("/all-vehicles");
        });
      }
    });
  };

  return (
    <tr className="hover:bg-base-200 transition-all">
      <td>
        <img
          src={coverImage}
          alt={vehicleName}
          className="w-16 h-16 object-cover rounded-md"
        />
      </td>
      <td className="font-semibold">{vehicleName}</td>
      <td>{owner}</td>
      <td>{category}</td>
      <td className="text-success font-medium">${pricePerDay}</td>
      <td className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-3 sm:mt-0">
        <Link to={`/vehicle-details/${_id}`}>
          <button
            // onClick={() => onView(vehicle)}
            className="btn btn-sm btn-info text-white flex items-center gap-2 w-full sm:w-auto"
          >
            <FaEye /> View Details
          </button>
        </Link>
        <Link to={`/update/${_id}`}>
          <button
            // onClick={() => onUpdate(vehicle)}
            className="btn btn-sm btn-warning text-white flex items-center gap-2 w-full sm:w-auto"
          >
            <FaEdit /> Update
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="btn btn-sm btn-error text-white flex items-center gap-2 w-full sm:w-auto"
        >
          <FaTrashAlt /> Delete
        </button>
      </td>
    </tr>
  );
};

export default MyVehicleCard;
