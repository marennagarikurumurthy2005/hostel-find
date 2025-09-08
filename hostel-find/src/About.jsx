import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./home.css";
import Sidebar from "./Sidebar.jsx";

const About = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const contentVariants = {
    expanded: {
      marginLeft: "240px",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    collapsed: {
      marginLeft: "80px",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white w-screen">
      <Sidebar type="nav" onExpandChange={setIsSidebarExpanded} />

      <motion.main
        className="flex-1 overflow-y-auto"
        variants={contentVariants}
        initial="collapsed"
        animate={isSidebarExpanded ? "expanded" : "collapsed"}
      >
        <div className="container mx-auto px-4 py-8 md:px-8 lg:px-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
          ></motion.div>

          <motion.div
            className="max-w-4xl mx-auto mt-8 flex flex-col gap-6 items-center text-center md:gap-8"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <motion.div className="heading" variants={textVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif">
                About Hostel Find AI
              </h1>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-3xl w-full"
              variants={textVariants}
            >
              <div className="flex flex-col gap-3 font-serif text-sm md:text-base lg:text-lg text-start">
                <motion.p className="leading-relaxed" variants={textVariants}>
                  HostelFind AI is an intelligent accommodation assistant designed to simplify hostel discovery and booking. It provides expert guidance on location, budget-friendly options, amenities, safety, and comfort, offering clear and actionable advice to accommodation queries. By enabling interactive conversations in multiple languages, HostelFind AI helps students and travelers make informed decisions about finding the best hostels and enjoying convenient, secure stays.
                </motion.p>

                <motion.p className="leading-relaxed" variants={textVariants}>
                Powered by the Gemini API and developed by Kurumurthy M, HostelFind AI delivers accurate and personalized responses tailored to diverse accommodation needs. This project aims to support students, travelers, and hostel communities in discovering the best living options and enhancing their overall stay experience. Continuous learning and user feedback help improve its knowledge base and maximize its impact on simplifying hostel search and ensuring comfortable, affordable, and safe accommodations.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default About;
