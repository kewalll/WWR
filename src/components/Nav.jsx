import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Text_RB_Logo.png";

const Nav = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    navigate("/"); // Ensure we are on the homepage

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = document.querySelector("nav").offsetHeight; // Get navbar height
        const offset = navHeight + 10; // Add some padding
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100); // Delay to ensure the DOM is ready if navigating
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 text-white py-5 shadow-lg z-50 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Larger Logo */}
        <button onClick={() => navigate("/")} className="flex items-center">
          <img src={logo} alt="WWR Logo" className="w-20 md:w-28 lg:w-36 xl:w-44 object-contain" />
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-xl lg:text-2xl font-medium">
          <button onClick={() => scrollToSection("events")} className="hover:text-red-500 transition duration-300">
            Events
          </button>
          <button onClick={() => scrollToSection("departments")} className="hover:text-red-500 transition duration-300">
            Departments
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-red-500 transition duration-300">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
