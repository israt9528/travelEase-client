import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo2.jpg";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className=" p-16 pb-0 max-lg:p-5 bg-[#271300] text-white bg-[url(https://i.ibb.co.com/7J0kzPp7/Screenshot-12-11-2025-15747-bgjar-com.jpg)] bg-no-repeat bg-cover">
      <div className="max-w-[1240px] mx-auto flex max-md:flex-col max-md:gap-8 mb-10">
        <div className="text-[#fee2d1] md:w-[25%]">
          <div className="flex items-center">
            <img className="w-10 h-10 mb-3 rounded-full  " src={logo} alt="" />
            <a className=" text-3xl font-bold ml-2 mb-2">
              Travel<span className="text-secondary">Ease</span>
            </a>
          </div>

          <p className="">
            Premium vehicles, easy booking, unforgettable journeys — that’s{" "}
            <br />
            TravelEase.
          </p>
        </div>
        <div className="flex justify-between flex-1 max-md:grid max-md:grid-cols-2 gap-8">
          <div className="max-md:col-span-2">
            <h2 className="text-xl font-medium mb-5 text-primary-content ">
              Contact Info
            </h2>
            <ul className="">
              <li className="flex items-center my-4 gap-3">
                <MdEmail size={20} /> israt9528@gmail.com
              </li>
              <li className="flex items-center mb-4 gap-3">
                {" "}
                <FaPhoneAlt size={20} />
                +8801889984859
              </li>
              <li className="flex items-center mb-4 gap-3">
                <FaLocationDot size={20}></FaLocationDot>

                <p>
                  Level-4, 34, Awal Centre, Banani, Dhaka <br />
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-5 text-primary-content">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li>
                <Link to="/all-vehicles">All Vehicles</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/add-vehicle">Add Vehicle</Link>
              </li>
              <li>
                <Link to="/My-vehicles">My Vehicles</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-5 text-primary-content">
              Social Links
            </h2>
            <div className="flex gap-5 ">
              <FaXTwitter size={24}></FaXTwitter>
              <FaInstagram size={24}></FaInstagram>
              <FaFacebook size={24}></FaFacebook>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 border-t border-t-accent text-sm">
        <p>© 2025 TravelEase. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
