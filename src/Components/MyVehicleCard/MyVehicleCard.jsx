import React from "react";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";

const MyVehicleCard = ({ vehicle }) => {
  //   const { vehicleName, owner, pricePerDay, coverImage } = vehicle;
  const { _id, vehicleName, owner, category, pricePerDay, coverImage } =
    vehicle;
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
          // onClick={() => onDelete(vehicle)}
          className="btn btn-sm btn-error text-white flex items-center gap-2 w-full sm:w-auto"
        >
          <FaTrashAlt /> Delete
        </button>
      </td>
    </tr>
  );
};

export default MyVehicleCard;
