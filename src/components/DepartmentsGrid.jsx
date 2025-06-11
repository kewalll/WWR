import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images
import Aero from "../assets/departments/Aero.png";
import Breaking from "../assets/departments/Breaking.png";
import Car from "../assets/departments/Car.png";
import Chasis from "../assets/departments/Chasis.png";
import Composite from "../assets/departments/Composite.png";
import Data from "../assets/departments/Data.png";
import Elec from "../assets/departments/Elec.png";
import Finance from "../assets/departments/Finance.png";
import Gears from "../assets/departments/Gears.png";
import MS from "../assets/departments/M&S.png";
import Pow from "../assets/departments/Pow.png";
import Steering from "../assets/departments/Steering.png";
import Suspension from "../assets/departments/Suspension.png";
import Volt from "../assets/departments/Volt.png";
import Web from "../assets/departments/Web.png";

// Map department names to their respective images
const departmentImages = {
  Pow,
  Finance,
  Elec,
  Aero,
  Chasis,
  Composite,
  Data,
  "M&S": MS,
  Suspension,
  Web,
};

// Department Descriptions
const departmentDescriptions = {
  Aero: "Responsible for aerodynamics, designing wings, diffusers, and airflow optimization.",
  Chasis: "Works on chassis design, ensuring structural integrity and weight optimization.",
  Composite: "Develops lightweight and strong composite materials for structural components.",
  Data: "Analyzes telemetry data to optimize performance and diagnose issues.",
  Elec: "Manages electrical systems, including sensors, wiring, and control units.",
  Finance: "Handles budgeting, sponsorship, and financial management of the team.",
  "M&S": "Handles marketing and sponsorship efforts to promote the team.",
  Pow: "Responsible for powertrain systems, including engine tuning and efficiency.",
  Suspension: "Develops suspension systems for stability, comfort, and performance.",
  Web: "Manages the team’s digital presence, including the website and social media.",
};

const DepartmentsGrid = () => {
  const [flipped, setFlipped] = useState({});

  // Handle flip
  const toggleFlip = (dept) => {
    setFlipped((prev) => ({
      ...prev,
      [dept]: !prev[dept],
    }));
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center py-10 px-5">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 uppercase">
        Technical Divisions
      </h2>

      {/* Grid of Departments */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {Object.keys(departmentImages).map((dept, index) => (
          <div
            key={index}
            className="relative w-40 h-52 md:w-48 md:h-60"
            onClick={() => toggleFlip(dept)}
          >
            {/* Card Wrapper */}
            <motion.div
              className="relative w-full h-full transition-transform duration-700 transform-style-3d"
              animate={{ rotateY: flipped[dept] ? 180 : 0 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front Side - Department Logo & Name */}
              <div
                className="absolute inset-0 bg-gray-900 rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center cursor-pointer"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={departmentImages[dept]}
                  alt={dept}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto"
                />
                <p className="text-white text-center mt-3 text-lg font-semibold opacity-80">
                  {dept}
                </p>
              </div>

              {/* Back Side - Department Description */}
              <div
                className="absolute inset-0 bg-red-700 rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center text-white text-center"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-lg font-bold">{dept}</p>
                <p className="text-sm mt-2">{departmentDescriptions[dept]}</p>
                <button
                  className="mt-4 px-3 py-1 bg-white text-red-700 font-bold rounded-md hover:bg-gray-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFlip(dept);
                  }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsGrid;
