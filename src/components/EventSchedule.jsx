import React from "react";
import bic from "../assets/bicc.webp";

const scheduleData = [
  { date: "13th August", event: "Technical Inspection" },
  { date: "14th August", event: "Static Events" },
  { date: "15th August", event: "Autocross, ACC, Skidpad" },
  { date: "16th August", event: "Endurance" },
];

const EventSchedule = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 py-10 mt-1 lg:mx-10">
      {/* Left Side - Event Schedule */}
      <div className="w-full md:w-1/2">
        <h2 className="text-red-500 text-4xl font-bold mb-2">NEXT EVENT</h2>
        <h2 className="text-red-500 text-5xl font-bold mb-6">SAE SUPRA 2025</h2>
        <p className="text-gray-400 mb-6 text-lg">BUDDH INTERNATIONAL CIRCUIT</p>

        <div className="space-y-4">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-t border-red-500 py-4"
            >
              <span className="text-white text-xl font-semibold">{item.date}</span>
              <span className="text-gray-300 text-xl">{item.event}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-red-500 py-4" ></div>
      </div>

      {/* Right Side - Track Map */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative bg-gray-900 rounded-lg p-4 shadow-lg">
          <img
            src={bic}
            alt="BIC Track Map"
            className="max-w-[500px] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
