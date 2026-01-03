import React, { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import {
  FiUser,
  FiSettings,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { TbBrandBooking } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { AuthContext } from "../Context/AuthContext";
import logo from "../assets/logo2.jpg";
import { FaHome } from "react-icons/fa";

const DashboardLayout = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    userLogout().catch((err) => console.log(err));
  };

  const sideLinks = [
    {
      name: "Home",
      path: "/dashboard",
      icon: <FaHome size={20} />,
      end: true, // Ensures active class only hits exact match for base dashboard
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <FiUser size={20} />,
    },
    {
      name: "My Bookings",
      path: "/dashboard/my-bookings",
      icon: <TbBrandBooking size={20} />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <FiSettings size={20} />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-base-200/50 font-sans">
      {/* SIDEBAR */}
      <aside
        className={`bg-base-100 border-r border-base-300 transition-all duration-300 ease-in-out flex flex-col sticky top-0 h-screen z-50 
        ${isCollapsed ? "w-20" : "w-72"}`}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center px-4 border-b border-base-300 overflow-hidden bg-base-100">
          <Link to="/" className="flex items-center gap-3 min-w-max">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 rounded-xl shadow-md shrink-0 object-cover"
            />
            {!isCollapsed && (
              <span className="text-xl font-bold tracking-tight text-base-content">
                Travel<span className="text-secondary">Ease</span>
              </span>
            )}
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto overflow-x-hidden custom-scrollbar mt-2">
          {sideLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group min-w-max ${
                  isActive
                    ? "bg-secondary text-secondary-content shadow-md shadow-secondary/30 font-semibold"
                    : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                }`
              }
            >
              <div className="shrink-0 transition-transform group-hover:scale-110">
                {link.icon}
              </div>
              {!isCollapsed && <span className="text-[15px]">{link.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* Collapse Toggle Button */}
        <div className="p-3 border-t border-base-300">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="btn btn-ghost w-full flex items-center justify-center gap-2 rounded-xl border border-transparent hover:border-base-300 bg-base-200/50"
          >
            {isCollapsed ? (
              <FiChevronRight size={20} className="text-secondary" />
            ) : (
              <>
                <FiChevronLeft size={20} className="text-secondary" />
                <span className="text-sm font-medium">Collapse View</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP NAVBAR */}
        <header className="h-16 bg-base-100/80 backdrop-blur-md border-b border-base-300 flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <div className="h-8 w-1 bg-secondary rounded-full hidden md:block"></div>
            <h1 className="font-bold text-base-content text-sm uppercase tracking-[0.2em] hidden md:block">
              User Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="btn btn-ghost btn-sm gap-2 rounded-lg text-base-content/70 hover:text-secondary border border-base-300"
            >
              <IoHomeOutline size={18} />
              <span className="hidden sm:inline">Portal</span>
            </Link>

            {/* User Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring-2 ring-secondary/20 ring-offset-2 ring-offset-base-100 transition-all hover:ring-secondary/50"
              >
                <div className="w-10 rounded-full shadow-inner">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/mR79Y6B/user.png"}
                    alt="Avatar"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-4 z-100 p-2 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-2xl w-64 border border-base-300 animate-in fade-in slide-in-from-top-2"
              >
                <li className="px-4 py-4 border-b border-base-200 mb-2">
                  <p className="font-bold text-base-content text-base">
                    {user?.displayName || "Guest User"}
                  </p>
                  <p className="text-xs text-base-content/50 truncate">
                    {user?.email}
                  </p>
                </li>
                <li>
                  <Link
                    to="/dashboard/profile"
                    className="py-2 px-4 rounded-lg flex gap-3 items-center"
                  >
                    <FiUser className="text-secondary" /> My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/my-bookings"
                    className="py-2 px-4 rounded-lg flex gap-3 items-center"
                  >
                    <TbBrandBooking className="text-secondary" /> Bookings
                    History
                  </Link>
                </li>
                <div className="divider my-1 opacity-50"></div>
                <li>
                  <button
                    onClick={handleLogout}
                    className="py-2 px-4 rounded-lg flex gap-3 items-center text-error hover:bg-error/10"
                  >
                    <FiLogOut /> Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-8 flex-1">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
