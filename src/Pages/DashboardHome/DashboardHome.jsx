import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../../Components/Loading/Loading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  FiTrendingUp,
  FiShoppingBag,
  FiClock,
  FiActivity,
  FiArrowRight,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router";

const DashboardHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/my-bookings?email=${user.email}`).then((data) => {
      setVehicles(data.data);
      setLoading(false);
    });
  }, [axiosSecure, user]);

  if (loading) return <Loading />;

  // --- DATA PROCESSING ---
  const categoryData = vehicles.reduce((acc, curr) => {
    const found = acc.find((item) => item.name === curr.category);
    if (found) found.value++;
    else acc.push({ name: curr.category, value: 1 });
    return acc;
  }, []);

  const dateData = vehicles
    .reduce((acc, curr) => {
      const date = new Date(curr.bookedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      const found = acc.find((item) => item.date === date);
      if (found) found.count++;
      else acc.push({ date, count: 1 });
      return acc;
    }, [])
    .slice(-7);

  // Modern Professional Color Palette
  const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-base-content">
            Welcome back,{" "}
            <span className="text-primary">
              {user?.displayName?.split(" ")[0] || "User"}
            </span>
            ! 👋
          </h1>
          <p className="text-base-content/60 text-sm mt-1 font-medium">
            System status:{" "}
            <span className="text-success inline-flex items-center gap-1">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>{" "}
              Optimal
            </span>
          </p>
        </motion.div>

        <div className="flex items-center gap-2 bg-base-100 p-1 rounded-2xl border border-base-300 shadow-sm">
          <span className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-base-content/50">
            Current View: Analytics
          </span>
        </div>
      </div>

      {/* Overview Cards with Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Total Bookings",
            val: vehicles.length,
            icon: <FiShoppingBag />,
            color: "from-blue-500 to-indigo-600",
            shadow: "shadow-blue-500/20",
          },
          {
            label: "Pending Reviews",
            val: "03",
            icon: <FiClock />,
            color: "from-amber-400 to-orange-500",
            shadow: "shadow-amber-500/20",
          },
          {
            label: "Active Trips",
            val: "01",
            icon: <FiActivity />,
            color: "from-emerald-400 to-teal-600",
            shadow: "shadow-emerald-500/20",
          },
          {
            label: "Account Growth",
            val: "+12%",
            icon: <FiTrendingUp />,
            color: "from-purple-500 to-pink-600",
            shadow: "shadow-purple-500/20",
          },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className={`bg-base-100 p-6 rounded-4xl border border-base-300 shadow-sm flex items-center gap-5 transition-all hover:shadow-xl ${stat.shadow}`}
          >
            <div
              className={`p-4 rounded-2xl text-white bg-linear-to-br ${stat.color} shadow-lg`}
            >
              {React.cloneElement(stat.icon, { size: 24 })}
            </div>
            <div>
              <p className="text-[10px] text-base-content/40 font-black uppercase tracking-[0.15em]">
                {stat.label}
              </p>
              <h3 className="text-2xl font-black text-base-content">
                {stat.val}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Booking Activity (Bar Chart) */}
        <div className="lg:col-span-3 bg-base-100 p-8 rounded-[2.5rem] border border-base-300 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold">Booking Activity</h3>
            <select className="select select-sm select-bordered rounded-xl focus:outline-none border-base-300">
              <option>Last 7 Days</option>
              <option>Last Month</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dateData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                  tick={{ fill: "#64748b", fontWeight: 500 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                  tick={{ fill: "#64748b" }}
                />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="#6366f1"
                  radius={[6, 6, 0, 0]}
                  barSize={35}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Breakdown (Pie Chart) */}
        <div className="lg:col-span-2 bg-base-100 p-8 rounded-[2.5rem] border border-base-300 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold mb-8">Fleet Distribution</h3>
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      strokeWidth={0}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text for Donut */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <p className="text-2xl font-black">{vehicles.length}</p>
              <p className="text-[10px] text-base-content/40 uppercase font-bold">
                Total
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {categoryData.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 bg-base-200/50 rounded-full border border-base-300 text-[11px] font-bold"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                ></div>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-base-100 rounded-[2.5rem] border border-base-300 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-base-200 flex justify-between items-center bg-base-100">
          <div>
            <h3 className="text-xl font-bold">Recent Inquiries</h3>
            <p className="text-xs text-base-content/50 mt-1 font-medium">
              Your latest 5 booking requests
            </p>
          </div>
          <Link
            to="/dashboard/my-bookings"
            className="group btn btn-ghost btn-sm text-primary rounded-xl gap-2 font-bold hover:bg-primary/10"
          >
            Full History{" "}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-base-content/30 uppercase text-[10px] tracking-[0.2em] font-black border-none">
                <th className="px-8 py-5">Vehicle Detail</th>
                <th className="px-8 py-5">Requested On</th>
                <th className="px-8 py-5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-base-200">
              {vehicles.slice(0, 5).map((vehicle) => (
                <tr
                  key={vehicle._id}
                  className="hover:bg-primary/2 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="relative overflow-hidden rounded-2xl w-12 h-12 shadow-sm border border-base-300">
                        <img
                          src={vehicle.coverImage}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          alt=""
                        />
                      </div>
                      <div>
                        <span className="font-bold text-base-content block">
                          {vehicle.vehicleName}
                        </span>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                          {vehicle.category}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-base-content/80">
                        {new Date(vehicle.bookedAt).toLocaleDateString()}
                      </span>
                      <span className="text-[10px] text-base-content/40">
                        {new Date(vehicle.bookedAt).toLocaleTimeString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className="badge border-none bg-success/10 text-success text-[10px] font-black uppercase tracking-widest px-4 py-3">
                      Pending
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
