import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddVehicle = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  // console.log(user);

  const axiosSecure = useAxiosSecure();

  const handleAddVehicle = (e) => {
    e.preventDefault();
    const vehicleName = e.target.vehicleName.value;
    const owner = e.target.ownerName.value;
    const category = e.target.category.value;
    const pricePerDay = parseInt(e.target.price.value);
    const location = e.target.location.value;
    const availability = e.target.availability.value;
    const description = e.target.description.value;
    const coverImage = e.target.coverImage.value;
    const userEmail = user.email;
    const createdAt = new Date();

    const newVehicle = {
      vehicleName,
      owner,
      category,
      pricePerDay,
      location,
      availability,
      description,
      coverImage,
      userEmail,
      createdAt,
    };
    // console.log(newVehicle);

    axiosSecure.post("/vehicles", newVehicle).then((data) => {
      console.log(data.data);
      toast.success("New vehicle has been added successfully!!");
      navigate("/all-vehicles");
    });
  };

  return (
    <div className="bg-base-200 py-24 px-3">
      <div className="card border border-gray-300 bg-base-300 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">
            Add Vehicle for Rent
          </h2>
          <form onSubmit={handleAddVehicle} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium text-secondary-content">
                Vehicle Name
              </label>
              <input
                type="text"
                name="vehicleName"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter vehicle name"
              />
            </div>
            <div>
              <label className="label font-medium text-secondary-content">
                Owner Name
              </label>
              <input
                type="text"
                name="ownerName"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter owner name"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="label font-medium text-secondary-content">
                Category
              </label>
              <select
                defaultValue={""}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Electric">Electric</option>
                <option value="Van">Van</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="label font-medium text-secondary-content">
                Availability
              </label>
              <select
                name="availability"
                defaultValue={""}
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select Availability
                </option>
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
              </select>
              {/* <input
                type="text"
                name="availability"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter availability"
              /> */}
            </div>

            <div>
              <label className="label font-medium text-secondary-content">
                Price Per Day
              </label>
              <input
                type="number"
                name="price"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter price per day"
              />
            </div>
            <div>
              <label className="label font-medium text-secondary-content">
                Location
              </label>
              <input
                type="text"
                name="location"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter location"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium text-secondary-content">
                Description
              </label>
              <textarea
                name="description"
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[150px]"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Thumbnail URL */}
            <div>
              <label className="label font-medium text-secondary-content">
                Cover Image
              </label>
              <input
                type="url"
                name="coverImage"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="label font-medium text-secondary-content">
                User Email
              </label>
              <input
                type="email"
                name="email"
                // defaultValue={`${user.email}`}
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder={`${user.email}`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full rounded-3xl text-base font-bold btn-primary hover:bg-base-300 hover:text-primary text-white"
            >
              Add Vehicle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
