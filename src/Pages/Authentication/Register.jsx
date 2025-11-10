import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser, loginWithGoogle } = use(AuthContext);

  const [error, setError] = useState("");

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
    setError("");
    loginWithGoogle()
      .then((res) => {
        const user = res.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage, errorCode);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    const casePattern = /^(?=.*[A-Z])(?=.*[a-z]).*$/;
    const lengthPattern = /^.{6,}$/;
    setError("");
    if (!casePattern.test(password)) {
      setError("Password must have an upperCase & a lowerCase character!!");
      return;
    } else if (!lengthPattern.test(password)) {
      setError("Password length must have at least 6 characters!!");
      return;
    }

    setError("");

    createUser(email, password)
      .then((res) => {
        const user = res.user;

        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            toast.success(
              "🎉 You’re in! Thanks for joining the TravelEase family!"
            );

            navigate("/");
          })
          .catch((error) => {
            setError(error.errorMessage);
            setUser(user);
          });
        e.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };

  const handlePasswordToggle = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="bg-[#fdfaf8] py-30">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto p-5">
        <h1 className="text-[#4e312d]  text-5xl font-bold text-center">
          Signup <span className="text-2xl text-[#aa9997]">for free!</span>
        </h1>

        <div className="card-body">
          <form onSubmit={handleSignup}>
            {error && (
              <div className="mb-5 p-5 rounded bg-red-200 text-red-700 font-semibold text-center">
                {error}
              </div>
            )}

            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input"
                placeholder="Enter your photoURL"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
                required
              />
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Type password"
                  required
                />

                <button
                  onClick={handlePasswordToggle}
                  className=" absolute right-2.5 top-7.5 z-10"
                >
                  {show ? <FaRegEyeSlash size={16} /> : <FaRegEye size={16} />}
                </button>
              </div>

              <button className="btn mt-4 bg-[#4e312d] text-white">
                SignUp
              </button>
              <button
                onClick={handleLoginWithGoogle}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>
          </form>
          <p className="text-[#4e312d] ">
            Already Have an Account? Please{" "}
            <NavLink
              className="text-blue-500 hover:text-blue-700 hover:underline"
              to="/auth/login"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
