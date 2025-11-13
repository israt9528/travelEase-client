import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { RiRegisteredLine } from "react-icons/ri";
import logo from "../../assets/logo2.jpg";
import {
  MdDarkMode,
  MdLightMode,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";

const Navbar = ({ isHome }) => {
  const { user, userLogout } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
    setDark(!dark);
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
    <div
      className={`fixed text-white top-0 left-0 w-full z-20 flex items-center justify-between lg:px-8 transition-all duration-300 ${
        isHome ? " bg-black/30 " : " bg-black/25 shadow-md"
      }`}
    >
      <div className="navbar ">
        <div className="navbar-start ">
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
              className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}

              <li>
                <div className="">
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="btn rounded-full btn-xs bg-primary-content text-white hover:text-primary hover:bg-base-200"
                    >
                      <IoLogOut /> Logout
                    </button>
                  ) : (
                    <div className="flex flex-col">
                      <Link
                        to={"/auth/login"}
                        className="btn rounded-full btn-xs bg-primary-content text-white hover:text-primary hover:bg-base-200"
                      >
                        {" "}
                        <IoLogIn /> Login
                      </Link>
                      <Link
                        to="/auth/register"
                        className="btn rounded-full btn-xs bg-primary-content text-white hover:text-primary hover:bg-base-200"
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
          <div className="flex items-center text-3xl font-bold text-white gap-1.5">
            <img src={logo} alt="" className="w-12 h-12 rounded-full" />
            <p>
              Travel<span className="text-secondary">Ease</span>
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          <div className=" items-center gap-2 flex">
            <div className="">
              <button className="relative top-1.5 right-1">
                {dark ? (
                  <MdLightMode size={20} />
                ) : (
                  <MdOutlineDarkMode size={20} />
                )}
              </button>

              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem("theme") === "dark"}
                className="toggle bg-base-100"
              />
            </div>

            <div>
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

            <div className="hidden lg:flex">
              {user ? (
                <button
                  onClick={handleLogout}
                  className={`btn text-lg ml-3 ${
                    isHome
                      ? "bg-black/5 text-secondary border-base-200 hover:text-primary hover:bg-base-200"
                      : "hover:bg-primary hover:text-white text-accent-content bg-white border-primary"
                  }`}
                >
                  <IoLogOut /> Logout
                </button>
              ) : (
                <div className="">
                  <Link
                    to="/auth/login"
                    className={`btn text-lg ml-3 ${
                      isHome
                        ? "bg-black/5 text-secondary border-base-200 hover:text-primary hover:bg-base-200"
                        : "hover:bg-primary hover:text-white text-accent-content bg-white border-primary"
                    }`}
                  >
                    <IoLogIn size={18} /> Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className={`btn text-lg ml-3 ${
                      isHome
                        ? "bg-black/5 text-secondary border-base-200 hover:text-primary hover:bg-base-200"
                        : "hover:bg-primary hover:text-white text-accent-content bg-white border-primary"
                    }`}
                  >
                    <RiRegisteredLine size={18} /> Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
