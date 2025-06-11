import React from "react";
import bgCar from "../assets/car.jpg"; // Background image

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgCar}
          alt="Race Car"
          className="w-full h-full object-cover"
        />
        {/* Left Smooth Blur */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        {/* Bottom Smooth Blur */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Hero Content with Stronger Gradient Behind Text */}
      <div className="absolute bottom-10 left-10 z-10">
        <div className="relative inline-block px-6 py-4">
          {/* Background Gradient Behind Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-transparent opacity-90 rounded-lg blur-md"></div>

          {/* Actual Text */}
          <h1 className="relative text-6xl md:text-9xl font-extrabold uppercase leading-tight text-white">
            Wrench <br />
            Wielders <br />
            <span className="text-red-500">Racing</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
