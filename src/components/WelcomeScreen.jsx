import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const WelcomeScreen = ({ onExit }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExit(true);
      setTimeout(() => onExit(), 800); // Exit after animation completes
    }, 2000); // Reduced duration before exit
  }, [onExit]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div 
          className="flex flex-col items-center justify-center h-screen bg-black text-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 relative overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }} // Faster fade out
        >
          {/* Background Preview Fades In */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center opacity-0"
            style={{ backgroundImage: "url('../assets/preview.png')" }} // Replace with actual preview image
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Logo Entry & Exit */}
          <motion.img 
            src={logo}
            alt="WWR Logo"
            className="w-40 sm:w-52 md:w-64 lg:w-80 xl:w-[28rem] object-contain mb-6 sm:mb-8 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
            exit={{ y: -100, opacity: 0, transition: { duration: 0.8 } }}
          />

          {/* Title Entry & Exit */}
          <motion.h1 
            className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 relative z-10 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.8 } }}
          >
            Wrench Wielders Racing
          </motion.h1>

          {/* Slogan Entry & Exit */}
          <motion.p 
            className="text-gray-400 italic text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl relative z-10 text-center px-2 sm:px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.8 } }}
          >
            Passion Rides Within
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
