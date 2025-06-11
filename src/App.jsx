import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeScreen from "./components/WelcomeScreen";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import EventSchedule from "./components/EventSchedule";
import Footer from "./components/Footer";
import WinSlider from "./components/WinSlider";
import DepartmentsGrid from "./components/DepartmentsGrid";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [pathname, hash]);

  return null;
};

const MainContent = () => {
  return (
    <motion.div
      key="main-content"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col min-h-screen"
    >
      <Nav />
      <Hero />
      <div id="events">
        <WinSlider />
      </div>
      <EventSchedule />
      <div id="departments">
        <DepartmentsGrid />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </motion.div>
  );
};

const App = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white">
        {/* Welcome Screen with Exit Animation */}
        <AnimatePresence mode="wait">
          {!showMain && <WelcomeScreen onExit={() => setShowMain(true)} />}
        </AnimatePresence>

        {/* Main Content Appears Smoothly */}
        <AnimatePresence>
          {showMain && <MainContent />}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
