import React from "react";
import { motion } from "framer-motion";

const WinSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-4 lg: mt-10">
      <motion.div
        className="flex whitespace-nowrap text-4xl md:text-6xl font-bold text-white uppercase"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
      >
        <p className="">Designed to Perform</p>
        <span className="text-red-500">•</span>
        <p className="mr-16">Manufactured to Win</p>
      </motion.div>
    </div>
  );
};

export default WinSlider;
