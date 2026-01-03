import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import VehicleCard from "../../Components/VehicleCard/VehicleCard";
import Loading from "../../Components/Loading/Loading";
import {
  FiSearch,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const AllVehicles = () => {
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();
  const [vehicles, setVehicles] = useState([]);

  // New States
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Set items per page

  useEffect(() => {
    axiosInstance.get("/vehicles").then((data) => {
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  if (loading) return <Loading />;

  // 1. Get Categories dynamically
  const categories = ["All", ...new Set(vehicles.map((v) => v.category))];

  // 2. Logic: Search -> Filter -> Sort
  let processedVehicles = [...vehicles];

  // Search functionality (Check name or category)
  if (searchQuery) {
    processedVehicles = processedVehicles.filter(
      (v) =>
        v.vehicleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filter by Category
  if (selectedCategory !== "All") {
    processedVehicles = processedVehicles.filter(
      (v) => v.category === selectedCategory
    );
  }

  // Sorting functionality
  if (sortBy === "priceLowHigh") {
    processedVehicles.sort((a, b) => a.pricePerDay - b.pricePerDay);
  } else if (sortBy === "priceHighLow") {
    processedVehicles.sort((a, b) => b.pricePerDay - a.pricePerDay);
  } else if (sortBy === "newest") {
    processedVehicles.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  // 3. Pagination Logic
  const totalItems = processedVehicles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedVehicles = processedVehicles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle resets when filters change
  const handleFilterChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="lg:w-7xl mx-auto text-center mb-14 mt-25 p-5">
      <h1 className="text-4xl md:text-5xl font-bold text-accent-content mb-3">
        “Choose the <span className="text-secondary">Perfect</span> one for
        Every Journey”
      </h1>
      <p className="text-base md:text-lg lg:w-[80%] mx-auto font-medium my-4 text-secondary-content">
        Explore our fleet with ease using our advanced search and filtering
        options.
      </p>

      {/* Control Panel: Search & Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 mb-6 bg-base-200 p-6 rounded-3xl border border-base-300 shadow-sm">
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by vehicle name..."
            className="input input-bordered w-full pl-12 rounded-xl bg-base-100 border-base-300 focus:outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <FiFilter className="text-secondary" />
          <select
            className="select select-bordered rounded-xl bg-base-100 border-base-300 w-full md:w-48"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="newest">Newest Added</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full font-bold transition-all border ${
              selectedCategory === category
                ? "bg-secondary text-white border-secondary shadow-lg shadow-secondary/20"
                : "bg-base-100 border-base-300 hover:border-secondary hover:text-secondary"
            }`}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results Section */}
      {paginatedVehicles.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-14">
            {paginatedVehicles.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="btn btn-circle btn-outline btn-secondary disabled:opacity-30"
              >
                <FiChevronLeft size={20} />
              </button>

              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 rounded-full font-bold transition-all ${
                      currentPage === index + 1
                        ? "bg-secondary text-white"
                        : "bg-base-200 hover:bg-base-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="btn btn-circle btn-outline btn-secondary disabled:opacity-30"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="mt-20 text-gray-400">
          <p className="text-xl">No vehicles match your search criteria.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-secondary underline mt-2"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default AllVehicles;
