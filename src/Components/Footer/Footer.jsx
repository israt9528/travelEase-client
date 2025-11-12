import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo2.jpg";

const Footer = () => {
  return (
    <div className="p-16 pb-0 max-lg:p-5 bg-[#271300] text-white">
      <div className="w-11/12 mx-auto flex max-md:flex-col max-md:gap-8 mb-10">
        <div className="text-[#fee2d1] md:w-[25%]">
          <div className="flex items-center">
            <img className="w-12 h-12 mb-3 rounded-full  " src={logo} alt="" />
            <a className=" text-2xl font-medium ml-2 mb-2">TravelEase</a>
          </div>

          <p className="text-gray-400 ">
            Premium vehicles, easy booking, unforgettable journeys — that’s{" "}
            <br />
            TravelEase.
          </p>
        </div>
        <div className="flex justify-between flex-1 max-md:grid max-md:grid-cols-2 gap-8">
          <div className="max-md:col-span-2">
            <h2 className="text-xl font-medium mb-5 text-[#cacac3] ">
              Contact Info
            </h2>
            <ul className="text-[#ffffff80]">
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
            <h2 className="text-xl font-medium mb-5 text-[#cacac3]">
              Privacy Policy
            </h2>
            <ul className="space-y-3 text-[#ffffff80]">
              <li>Information that we collect</li>
              <li>Your privacy controls</li>
              <li>About this policy</li>
              <li>Update</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-medium mb-5 text-[#cacac3]">
              Social Links
            </h2>
            <div className="flex gap-5">
              <FaXTwitter size={24}></FaXTwitter>

              <FaInstagram size={24}></FaInstagram>
              <FaFacebook size={24}></FaFacebook>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 border-t border-t-gray-600 text-[#a6abafa3]">
        <p>© 2025 WarmPaws. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
