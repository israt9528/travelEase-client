import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash, FaMagic } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { userLogin, loginWithGoogle, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // --- SINGLE DEMO LOGIN HANDLER ---
  const handleDemoLogin = () => {
    setError("");
    setEmail("israt@jahan.com");
    setPassword("1234Abc");
    toast.success("Demo credentials applied!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const handleLoginWithGoogle = () => {
    setError("");
    loginWithGoogle()
      .then((res) => {
        setUser(res.user);
        navigate(location.state || "/");
      })
      .catch((err) => setError(err.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    userLogin(email, password)
      .then(() => {
        toast.success("Welcome to TravelEase!");
        navigate(location.state || "/");
      })
      .catch(() => setError("Invalid email or password."));
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card bg-primary w-full max-w-md shadow-2xl relative overflow-hidden rounded-[2.5rem]"
      >
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>

        <div className="p-10 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-white mb-2">Login</h1>
            <p className="text-primary-content/60 text-sm">
              Enter your details to access your dashboard
            </p>
          </div>

          {/* SINGLE DEMO BUTTON - Modern Highlight Style */}
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full mb-8 py-3 px-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent rounded-lg text-white shadow-lg shadow-accent/20">
                <FaMagic className="group-hover:rotate-12 transition-transform" />
              </div>
              <div className="text-left">
                <p className="text-xs text-white/50 font-bold uppercase tracking-widest">
                  Testing the app?
                </p>
                <p className="text-sm text-white font-bold">Use Demo Account</p>
              </div>
            </div>
            <div className="text-white/30 group-hover:text-white transition-colors pr-2">
              Auto-fill
            </div>
          </button>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-bold text-center">
                {error}
              </div>
            )}

            <div className="form-control">
              <label className="label text-white/70 text-xs font-black uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@travelease.com"
                className="input input-bordered w-full bg-white/5 border-white/10 text-white focus:border-accent focus:outline-none rounded-xl"
                required
              />
            </div>

            <div className="form-control relative">
              <label className="label text-white/70 text-xs font-black uppercase tracking-widest">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input input-bordered w-full bg-white/5 border-white/10 text-white focus:border-accent focus:outline-none rounded-xl"
                required
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-4 top-8.5 text-white/30 hover:text-white"
              >
                {show ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
              </button>
            </div>

            <button className="btn btn-accent w-full rounded-xl text-white font-black text-lg shadow-lg shadow-accent/30 hover:scale-[1.01] transition-transform">
              <IoLogIn size={22} /> Sign In
            </button>

            <div className="divider text-white/10 text-[10px] font-bold uppercase tracking-widest">
              Social Login
            </div>

            <button
              type="button"
              onClick={handleLoginWithGoogle}
              className="btn w-full bg-white hover:bg-white/90 text-gray-900 border-none rounded-xl font-bold flex items-center justify-center gap-3"
            >
              <FcGoogle />
              Continue with Google
            </button>
          </form>

          <p className="text-center mt-10 text-white/50 text-sm">
            Don't have an account?{" "}
            <NavLink
              to="/auth/register"
              className="text-accent font-bold hover:underline"
            >
              Create Account
            </NavLink>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
