import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/Text_RB_Logo.png"; // Adjust the path if needed

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side - Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="WWR Logo" className="w-32 md:w-40 object-contain mb-3" />
          <p className="text-gray-400 text-sm md:text-base">Wrench Wielders Racing © 2025</p>
        </div>

        {/* Middle - Contact Info */}
        <div className="text-center md:text-left mt-5 md:mt-0">
          <h3 className="text-xl font-semibold text-red-500">Contact Us</h3>
          <p className="text-gray-300 mt-2">📧 Email: <a href="mailto:wrenchwieldersracing@sitpune.edu.in" className="hover:text-red-400">wrenchwieldersracing@sitpune.edu.in</a></p>
          <p className="mt-2 text-gray-300">📞 Captain: Paarth Shrivastava +91 9082942788</p>
          <p className="text-gray-300">📞 Vice Captain: Pruthvi Athrey +91 9880579411</p>
          <p className="text-gray-300">📞 Team Manager: Kewal Nanavati +91 9081811653</p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-6 mt-5 md:mt-0">
          <a href="https://www.facebook.com/WrenchWieldersRacing/" className="text-gray-400 hover:text-white transition"><FaFacebook size={24} /></a>
          <a href="https://www.instagram.com/wrenchwieldersracing/?hl=en" className="text-gray-400 hover:text-white transition"><FaInstagram size={24} /></a>
          <a href="https://www.linkedin.com/in/wrench-wielders-racing/" className="text-gray-400 hover:text-white transition"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
