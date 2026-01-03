import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiUser,
  FiCalendar,
  FiShield,
  FiEdit3,
  FiMapPin,
} from "react-icons/fi";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  // Mock metadata (You can get these from your DB later)
  const userData = {
    role: "Premium Member",
    since: user?.metadata?.creationTime
      ? new Date(user.metadata.creationTime).toLocaleDateString()
      : "Jan 2026",
    location: "Dhaka, Bangladesh",
    phone: "+880 123456789",
    status: "Verified",
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-base-100 rounded-3xl overflow-hidden shadow-sm border border-base-300"
      >
        {/* Cover Photo */}
        <div className="h-40 w-full bg-gradient-to-r from-secondary to-primary opacity-90"></div>

        {/* Profile Info Overlay */}
        <div className="px-8 pb-8">
          <div className="relative flex flex-col md:flex-row items-end -mt-16 gap-6">
            <div className="relative group">
              <img
                src={user?.photoURL || "https://i.pravatar.cc/150"}
                alt="Profile"
                className="w-32 h-32 rounded-2xl border-4 border-base-100 shadow-xl object-cover bg-base-100"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-white text-black rounded-lg shadow-lg hover:bg-secondary hover:text-white transition-colors">
                <FiEdit3 size={16} />
              </button>
            </div>

            <div className="flex-1 pb-2">
              <h2 className="text-2xl font-bold text-base-content">
                {user?.displayName || "User Name"}
              </h2>
              <p className="text-secondary font-medium flex items-center gap-2">
                <FiShield size={14} /> {userData.role}
              </p>
            </div>

            <div className="pb-2">
              <button className="btn btn-secondary rounded-xl gap-2">
                <FiEdit3 /> Edit Profile
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Stats/Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
            <h3 className="text-lg font-bold mb-4">Personal Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-500">
                <div className="p-2 bg-base-200 rounded-lg text-secondary">
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold">
                    Email
                  </p>
                  <p className="text-base-content text-sm">{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                <div className="p-2 bg-base-200 rounded-lg text-secondary">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold">
                    Location
                  </p>
                  <p className="text-base-content text-sm">
                    {userData.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                <div className="p-2 bg-base-200 rounded-lg text-secondary">
                  <FiCalendar />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold">
                    Joined
                  </p>
                  <p className="text-base-content text-sm">{userData.since}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Account Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-base-100 p-6 rounded-3xl shadow-sm border border-base-300">
            <h3 className="text-lg font-bold mb-6">Account Settings</h3>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Full Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  className="input input-bordered rounded-xl focus:border-secondary"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  className="input input-bordered rounded-xl bg-base-200"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Phone Number</span>
                </label>
                <input
                  type="text"
                  defaultValue={userData.phone}
                  className="input input-bordered rounded-xl focus:border-secondary"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Language</span>
                </label>
                <select className="select select-bordered rounded-xl">
                  <option>English (US)</option>
                  <option>Bengali</option>
                </select>
              </div>
              <div className="md:col-span-2 mt-4">
                <button
                  type="button"
                  className="btn btn-primary rounded-xl px-10 shadow-lg shadow-primary/20"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* Security Summary Card */}
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500 text-white rounded-2xl shadow-lg">
                <FiShield size={24} />
              </div>
              <div>
                <h4 className="font-bold text-emerald-900">
                  Your account is secure
                </h4>
                <p className="text-emerald-700 text-sm">
                  Two-factor authentication is active.
                </p>
              </div>
            </div>
            <button className="btn btn-sm btn-ghost text-emerald-700">
              Manage
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
