import React, { useContext, useEffect, useState } from "react"; // Changed use to useContext
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { LiaCarSideSolid } from "react-icons/lia";
import {
  IoCarSportOutline,
  IoHomeOutline,
  IoInformationCircleOutline,
  IoLogIn,
  IoLogOut,
} from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { TbBrandBooking } from "react-icons/tb";
import { RiRegisteredLine } from "react-icons/ri";
import logo from "../../assets/logo2.jpg";
import { GrContact } from "react-icons/gr";
import {
  MdLightMode,
  MdOutlineDarkMode,
  MdOutlineDashboard,
} from "react-icons/md";

const Navbar = ({ isHome }) => {
  const { user, userLogout } = useContext(AuthContext); // Standard practice

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [dark, setDark] = useState(theme === "dark");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
    setDark(checked);
  };

  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Fixed the syntax error here by wrapping everything inside the fragment
  const links = (
    <>
      <li>
        <NavLink to="/">
          <IoHomeOutline /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-vehicles">
          <LiaCarSideSolid /> All Vehicles
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          <IoInformationCircleOutline /> About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/Contact">
          <GrContact /> Contact Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-vehicle">
              <BsCartPlus /> Add Vehicle
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-vehicles">
              <IoCarSportOutline /> My Vehicles
            </NavLink>
          </li>
        </>
      )}

      {/* Mobile Only: Moved inside the 'links' variable so it's valid syntax */}
      <div className="lg:hidden border-t border-base-300 mt-2 pt-2">
        <li className="flex flex-row items-center justify-between px-4 py-2">
          <span className="text-sm font-medium">
            Mode: {dark ? "Dark" : "Light"}
          </span>
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            checked={dark}
            className="toggle toggle-sm bg-base-100"
          />
        </li>
        {user ? (
          <>
            <li className="menu-title text-primary">{user.displayName}</li>
            <li>
              <Link to="/dashboard">
                <MdOutlineDashboard /> Dashboard
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="text-error">
                <IoLogOut /> Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/auth/login">
                <IoLogIn /> Login
              </Link>
            </li>
            <li>
              <Link to="/auth/register">
                <RiRegisteredLine /> Register
              </Link>
            </li>
          </>
        )}
      </div>
    </>
  );

  return (
    <div
      className={`fixed text-white top-0 left-0 w-full z-20 flex items-center justify-between lg:px-33 transition-all duration-300 ${
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center text-3xl font-bold text-white gap-1.5">
            <img src={logo} alt="" className="w-10 h-10 rounded-full" />
            <p className="xs:block">
              Travel<span className="text-secondary">Ease</span>
            </p>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2 text-sm font-medium">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          <div className="items-center gap-2 flex">
            <div className="hidden lg:flex items-center">
              <button className="relative top-0 right-1">
                {dark ? (
                  <MdLightMode size={20} />
                ) : (
                  <MdOutlineDarkMode size={20} />
                )}
              </button>
              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                checked={dark}
                className="toggle toggle-sm bg-base-100"
              />
            </div>

            <div className="block">
              {user ? (
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-secondary transition-all"
                      src={user.photoURL}
                      alt={user.displayName || "User avatar"}
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black hidden lg:block"
                  >
                    <li className="px-4 py-2 font-bold text-primary border-b border-gray-100">
                      {user.displayName || "User"}
                    </li>
                    <li>
                      <Link to="/dashboard">
                        <MdOutlineDashboard /> Dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <FaUserCircle size={32} className="cursor-pointer" />
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
                <div className="flex">
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
