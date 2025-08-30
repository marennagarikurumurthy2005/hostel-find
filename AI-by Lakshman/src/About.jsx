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
                About FarmlyAI
              </h1>
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-3xl w-full"
              variants={textVariants}
            >
              <div className="flex flex-col gap-3 font-serif text-sm md:text-base lg:text-lg text-start">
                <motion.p className="leading-relaxed" variants={textVariants}>
                  Farmly AI is an intelligent agricultural assistant designed
                  to revolutionize farming practices and crop management. It
                  provides expert guidance on crop selection, soil health,
                  irrigation techniques, pest control, and sustainable farming
                  methods, offering clear and actionable advice to agricultural
                  queries. By enabling interactive conversations in multiple
                  languages, Farmly AI helps cultivators make informed
                  decisions about maximizing crop yields and adopting modern
                  farming techniques.
                </motion.p>

                <motion.p className="leading-relaxed" variants={textVariants}>
                  Powered by the Gemini API and developed by Lakshman, Farmly
                  AI ensures accurate and region-specific responses tailored to
                  diverse agricultural needs. This project aims to support
                  small-scale Farmly, agricultural communities, and farming
                  organizations in developing effective cultivation strategies
                  and improving agricultural productivity. Continuous learning
                  and farmer feedback help enhance its knowledge base and
                  maximize its impact on sustainable agriculture.
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
