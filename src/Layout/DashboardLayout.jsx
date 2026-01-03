import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router";
import {
  FiUser,
  FiSettings,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
  FiMenu, // Hamburger Icon
  FiX, // Close Icon
} from "react-icons/fi";
import { TbBrandBooking } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { AuthContext } from "../Context/AuthContext";
import logo from "../assets/logo2.jpg";
import { FaHome } from "react-icons/fa";

const DashboardLayout = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false); // New state for mobile toggle

  // Close mobile sidebar when a link is clicked
  const closeMobileSidebar = () => setIsMobileOpen(false);

  const handleLogout = () => {
    userLogout().catch((err) => console.log(err));
  };

  const sideLinks = [
    { name: "Home", path: "/dashboard", icon: <FaHome size={20} />, end: true },
    { name: "Profile", path: "/dashboard/profile", icon: <FiUser size={20} /> },
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
    <div className="flex min-h-screen bg-base-200/50 font-sans relative">
      {/* MOBILE OVERLAY (Darkens screen when sidebar is open) */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-60 lg:hidden"
          onClick={closeMobileSidebar}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`bg-base-100 border-r border-base-300 transition-all duration-300 ease-in-out flex flex-col fixed lg:sticky top-0 h-screen z-70
        ${isCollapsed ? "lg:w-20" : "lg:w-72"}
        ${
          isMobileOpen
            ? "translate-x-0 w-72"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-base-300 bg-base-100">
          <Link to="/" className="flex items-center gap-3 min-w-max">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 rounded-xl shadow-md object-cover"
            />
            <span
              className={`text-xl font-bold tracking-tight text-base-content ${
                isCollapsed ? "lg:hidden" : "block"
              }`}
            >
              Travel<span className="text-secondary">Ease</span>
            </span>
          </Link>
          {/* Close button inside sidebar for mobile only */}
          <button
            className="lg:hidden p-2 text-base-content"
            onClick={closeMobileSidebar}
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto mt-2">
          {sideLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.end}
              onClick={closeMobileSidebar}
              className={({ isActive }) =>
                `flex items-center gap-4 px-3 py-3 rounded-xl transition-all group min-w-max ${
                  isActive
                    ? "bg-secondary text-secondary-content shadow-md shadow-secondary/30"
                    : "text-base-content/70 hover:bg-base-200"
                }`
              }
            >
              <div className="shrink-0">{link.icon}</div>
              <span
                className={`text-[15px] ${isCollapsed ? "lg:hidden" : "block"}`}
              >
                {link.name}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Collapse Toggle (Desktop Only) */}
        <div className="p-3 border-t border-base-300 hidden lg:block">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="btn btn-ghost w-full flex items-center justify-center gap-2 rounded-xl bg-base-200/50"
          >
            {isCollapsed ? (
              <FiChevronRight size={20} className="text-secondary" />
            ) : (
              <FiChevronLeft size={20} className="text-secondary" />
            )}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP NAVBAR */}
        <header className="h-16 bg-base-100/80 backdrop-blur-md border-b border-base-300 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-40">
          <div className="flex items-center gap-3">
            {/* MOBILE MENU TRIGGER ICON */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-2 hover:bg-base-200 rounded-lg lg:hidden text-secondary"
            >
              <FiMenu size={24} />
            </button>

            <div className="h-8 w-1 bg-secondary rounded-full hidden md:block"></div>
            <h1 className="font-bold text-base-content text-sm uppercase tracking-[0.2em] hidden sm:block">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="btn btn-ghost btn-sm gap-2 rounded-lg text-base-content/70 border border-base-300"
            >
              <IoHomeOutline size={18} />
              <span className="hidden sm:inline">Portal</span>
            </Link>

            {/* User Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring-2 ring-secondary/20 ring-offset-2 ring-offset-base-100 transition-all"
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
                className="mt-4 z-100 p-2 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-2xl w-64 border border-base-300"
              >
                <li className="px-4 py-4 border-b border-base-200 mb-2">
                  <p className="font-bold text-base-content">
                    {user?.displayName || "Guest"}
                  </p>
                  <p className="text-xs text-base-content/50 truncate">
                    {user?.email}
                  </p>
                </li>
                <li>
                  <Link to="/dashboard/profile" onClick={closeMobileSidebar}>
                    <FiUser /> My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/my-bookings"
                    onClick={closeMobileSidebar}
                  >
                    <TbBrandBooking /> History
                  </Link>
                </li>
                <div className="divider my-1 opacity-50"></div>
                <li>
                  <button onClick={handleLogout} className="text-error">
                    <FiLogOut /> Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-4 md:p-8 flex-1">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
