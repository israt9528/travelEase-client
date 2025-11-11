import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { RiRegisteredLine } from "react-icons/ri";

const Navbar = () => {
  const { user, userLogout } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

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
          <div className="dropdown dropdown-end z-50 lg:hidden">
            <div tabIndex={0} role="button" className="mr-3 avatar">
              <div className="w-9 rounded-full ">
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
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {user ? (
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
              ) : (
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">Name</li>
                  <li className="text-xs">Email</li>
                </div>
              )}

              <li className="mt-3">
                <Link to={"/profile"}>
                  <FaUser /> Profile
                </Link>
              </li>

              <li>
                <a>
                  {" "}
                  <FaGear /> Settings
                </a>
              </li>
              <li>
                <div className="">
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                    >
                      <IoLogOut /> Logout
                    </button>
                  ) : (
                    <div className="flex flex-col">
                      <Link
                        to={"/auth/login"}
                        className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
                      >
                        {" "}
                        <IoLogIn /> Login
                      </Link>
                      <Link
                        to="/auth/register"
                        className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
                      >
                        {" "}
                        <RiRegisteredLine /> Register
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle"
            />

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
              <div className="space-x-1">
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
    </div>
  );
};

export default Navbar;
