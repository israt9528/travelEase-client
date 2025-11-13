import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../Components/Loading/Loading";
import toast from "react-hot-toast";

const UpdateVehicle = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [vehicle, setVehicle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure.get(`/vehicles/${id}`).then((data) => {
      // console.log(data.data);
      setVehicle(data.data);
      setLoading(false);
    });
  }, [id, axiosSecure]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const vehicleName = e.target.vehicleName.value;
    const category = e.target.category.value;
    const pricePerDay = parseInt(e.target.price.value);
    const location = e.target.location.value;
    const availability = e.target.availability.value;
    const description = e.target.description.value;
    const coverImage = e.target.coverImage.value;

    const updateVehicle = {
      vehicleName,
      category,
      pricePerDay,
      location,
      availability,
      description,
      coverImage,
    };
    // console.log(updateVehicle);

    axiosSecure
      .put(`/vehicles/${vehicle._id}`, updateVehicle)
      .then((data) => {
        // console.log(data.data);
        toast.success("Your vehicle Info has been updated successfully!!");
        navigate("/all-vehicles");
      })
      .catch((error) => {
        toast.error("Can't Update! Please try again.");
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-base-200 py-20 px-3">
      <div className="card border border-base-300 bg-base-300 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="text-4xl text-primary font-bold text-center mb-6">
            Update Vehicle Data
          </h2>
          <form onSubmit={handleUpdate} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium text-white">
                Vehicle Name
              </label>
              <input
                type="text"
                name="vehicleName"
                defaultValue={vehicle.vehicleName}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter vehicle name"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="label font-medium text-white">Category</label>
              <select
                // defaultValue={vehicle.category}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option defaultValue={vehicle.category} disabled>
                  Select a category
                </option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Electric">Electric</option>
                <option value="Van">Van</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="label font-medium text-white">
                Price Per Day
              </label>
              <input
                type="number"
                name="price"
                defaultValue={vehicle.pricePerDay}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter price per day"
              />
            </div>
            <div>
              <label className="label font-medium text-white">Location</label>
              <input
                type="text"
                name="location"
                defaultValue={vehicle.location}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="label font-medium text-white">
                Availability
              </label>
              <input
                type="text"
                name="availability"
                defaultValue={vehicle.availability}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter availability"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium text-white">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={vehicle.description}
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[100px]"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="label font-medium text-white">
                Cover Image
              </label>
              <input
                type="url"
                name="coverImage"
                defaultValue={vehicle.coverImage}
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full btn-primary hover:bg-base-300 hover:text-primary "
            >
              Update Vehicle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateVehicle;
