import React, { use } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, userLogout } = use(AuthContext);

  const handleLogout = () => {
    userLogout()
      .then(() => {
        // console.log("You logged out successfully");
        toast.success(`${user.email} logged out successfully!`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, errorCode);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-vehicles">All Vehicles</NavLink>
      </li>
      <li>
        <NavLink to="/add-vehicle">Add Vehicle</NavLink>
      </li>
      <li>
        <NavLink to="/my-vehicles">My Vehicles</NavLink>
      </li>
      <li>
        <NavLink to="/my-bookings">My Bookings</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" text-xl">TravelEase</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer"
                src={user.photoURL}
                alt={user.displayName || "User avatar"}
              />
              <span className="absolute left-1/2 -translate-x-1/2 top-12 px-3 py-1 text-sm text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {user.displayName}
              </span>
            </div>
          ) : (
            <FaUserCircle size={32} />
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="btn text-lg ml-3 bg-[#da945a] text-white"
            >
              Logout
            </button>
          ) : (
            <div>
              <Link to="/auth/login" className="btn">
                Login
              </Link>
              <Link to="/auth/register" className="btn">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
