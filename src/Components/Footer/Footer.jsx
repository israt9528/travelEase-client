import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-16 pb-0 max-lg:p-5 bg-[#271300] text-white">
      <div className="w-11/12 mx-auto flex max-md:flex-col max-md:gap-8 mb-10">
        <div className="text-[#fee2d1]">
          <a className=" text-2xl font-medium mr-20">
            {/* <img className="w-20 h-20 mb-3 rounded-full  " src={logo} alt="" /> */}
            TravelEase
          </a>
        </div>
        <div className="flex justify-between flex-1 max-md:grid max-md:grid-cols-2 gap-8">
          <div className="max-md:col-span-2">
            <h2 className="text-xl font-medium mb-5 text-[#cacac3] ">
              Contact Info
            </h2>
            <ul className="text-[#ffffff80]">
              <li className="flex items-center my-4 gap-3">
                <MdEmail size={24} /> israt9528@gmail.com
              </li>
              <li className="flex items-center mb-4 gap-3">
                {" "}
                <FaPhoneAlt size={24} />
                +8801889984859
              </li>
              <li>
                <p>
                  Level-4, 34, Awal Centre, Banani, Dhaka <br />
                  (Available : 10:00am to 07:00pm)
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
              <FaTwitter size={24}></FaTwitter>
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
