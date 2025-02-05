import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./sidebar.css";
const Sidebar = () => {
  const [Extended, setExtended] = useState("false");

  return (
    <>
      <div className="div select-none mt-8">
        <div className="sidebar max-w-48 min-h-full py-4 px-10 flex flex-col">
          <div className="logoname w-36 h-8 text-black font-bold font-sans text-2.5 text-2xl flex flex-row items-center justify-between align-middle">
            <Link to="/" className=" flex flex-row items-center gap-1.5 ">
              <div className="text ">
                <h2>Wastey</h2>
              </div>
              <div className="img">
                <img
                  src="https://img.icons8.com/?size=100&id=tDtvWzs979he&format=png&color=000000"
                  alt="icon"
                  width={15}
                  height={15}
                />
              </div>
            </Link>
            <div className=" icon" onClick={() => setExtended((prev) => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="sideicon cursor-pointer z-50"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 12.5 11 A 1.50015 1.50015 0 0 0 11 12.5 L 11 35.5 A 1.50015 1.50015 0 0 0 12.5 37 L 18.5 37 A 1.50015 1.50015 0 0 0 20 35.5 L 20 12.5 A 1.50015 1.50015 0 0 0 18.5 11 L 12.5 11 z M 14 14 L 17 14 L 17 34 L 14 34 L 14 14 z"></path>
              </svg>
            </div>
          </div>
          <div className="bottom w-0  h-60 py-44 flex flex-col justify-between  m-4 items-center">
            {Extended ? (
              <motion.div
                initial={{ x: -200, opacity: 0 }} // Start hidden
                animate={{ x: 0, opacity: 1 }} // Slide in
                exit={{ x: -200, opacity: 0 }} // Slide out when closed
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="main"
              >
                <div className="navbarLinks min-w-full flex flex-col items-start h-38 justify-between ml-12">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to="/" className="links">
                      Home
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to="/about" className="links">
                      About
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to="/contact" className="links">
                      Contact us
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
