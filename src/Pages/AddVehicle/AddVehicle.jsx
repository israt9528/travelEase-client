import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddVehicle = () => {
  const { user } = useAuth();
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
    console.log(newVehicle);

    axiosSecure.post("/vehicles", newVehicle).then((data) => {
      console.log(data.data);
      toast.success("New vehicle has been added successfully!!");
    });
  };

  return (
    <div>
      <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
        <div className="card-body p-6 relative">
          <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>
          <form onSubmit={handleAddVehicle} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="label font-medium">Vehicle Name</label>
              <input
                type="text"
                name="vehicleName"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter vehicle name"
              />
            </div>
            <div>
              <label className="label font-medium">Owner Name</label>
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
              <label className="label font-medium">Category</label>
              <select
                defaultValue={""}
                name="category"
                required
                className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Electric">Electric</option>
                <option value="Van">Van</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="label font-medium">Price Per Day</label>
              <input
                type="number"
                name="price"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter price per day"
              />
            </div>
            <div>
              <label className="label font-medium">Location</label>
              <input
                type="text"
                name="location"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="label font-medium">Availability</label>
              <input
                type="text"
                name="availability"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Enter availability"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <label className="label font-medium">Description</label>
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
              <label className="label font-medium">Cover Image</label>
              <input
                type="url"
                name="coverImage"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="label font-medium">User Email</label>
              <input
                type="email"
                name="email"
                defaultValue={`${user.email}`}
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="user@example.com"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
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
