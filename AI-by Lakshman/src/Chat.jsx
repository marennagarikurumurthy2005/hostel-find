import React, { useContext, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import batteries from "./assets/batteries.png";
import household from "./assets/household.png";
import nearest from "./assets/recycle.png";
import recycle from "./assets/recycle2.png";
import user from "./assets/user.png";
import ai from "./assets/logo.png";
import "./Chat.css";
import { Context } from "./context/context";
import Loading from "./components/loading";
import Sidebar from "./Sidebar";

const Chat = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    chatHistory,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, loading]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex h-screen overflow-hidden w-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col relative ml-5">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex-1 p-8 md:p-12 w-screen align-middle">
                <motion.div
                  className="headings flex flex-col  gap-1 mb-12 pl-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="titleheading  select-none ">
                    Hi there! Welcome
                  </p>
                  <p className=" tiltesub text-xl mt-1 text-[#333333] font-bold">
                    How can I help you with your waste disposal or recycling
                    questions?
                  </p>
                </motion.div>

                <div className="cards">
                  <motion.div
                    className="card"
                    variants={cardVariants}
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setInput("What can I recycle in my area?");
                      onSent("What can I recycle in my area?");
                    }}
                  >
                    <p className="cardsPara">What can I recycle in my area?</p>
                    <img
                      src={recycle}
                      alt="recycleimg"
                      width={30}
                      height={25}
                    />
                  </motion.div>

                  <motion.div
                    className="card"
                    variants={cardVariants}
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setInput(
                        "How do I dispose of hazardous waste like batteries or paint?"
                      );
                      onSent(
                        "How do I dispose of hazardous waste like batteries or paint?"
                      );
                    }}
                  >
                    <p className="cardsPara">
                      How do I dispose of hazardous waste like batteries or
                      paint?
                    </p>
                    <img
                      src={batteries}
                      alt="recycleimg"
                      width={35}
                      height={25}
                    />
                  </motion.div>

                  <motion.div
                    className="card"
                    variants={cardVariants}
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setInput(
                        "What are some tips for reducing my household waste?"
                      );
                      onSent(
                        "What are some tips for reducing my household waste?"
                      );
                    }}
                  >
                    <p className="cardsPara">
                      What are some tips for reducing my household waste?
                    </p>
                    <img
                      src={household}
                      alt="recycleimg"
                      width={35}
                      height={25}
                    />
                  </motion.div>

                  <motion.div
                    className="card"
                    variants={cardVariants}
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setInput("Where is my nearest recycling center?");
                      onSent("Where is my nearest recycling center?");
                    }}
                  >
                    <p className="cardsPara">
                      Where is my nearest recycling center?
                    </p>
                    <img
                      src={nearest}
                      alt="recycleimg"
                      width={35}
                      height={25}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col p-8 md:p-12"
            >
              <div className="chat-container flex-1 overflow-y-auto mb-8">
                <div className=" max-w-4xl mx-auto">
                  {chatHistory.map((message, index) => (
                    <div
                      key={`${message.text}-${index}`}
                      className={`message flex items-start gap-3 mb-6 ${
                        message.type === "user" ? "user-msg" : "bot-msg"
                      }`}
                    >
                      <img
                        src={message.type === "user" ? user : ai}
                        alt={message.type === "user" ? "User" : "Bot"}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <p
                          className=" botText text-lg leading-7"
                          dangerouslySetInnerHTML={{ __html: message.text }}
                        />
                      </div>
                    </div>
                  ))}
                  {loading && <Loading />}
                  <div ref={chatEndRef} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="bottomchat sticky bottom-10 bg-white border-t border-gray-200 p-4">
          <div className="inputBox max-w-4xl mx-auto relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask wastey"
              className=" w-full p-2 pl-5 rounded-full border border-gray-200 outline-ring-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
            <AnimatePresence>
              {input && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => {
                    onSent();
                    setInput("");
                  }}
                >
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5klEQVR4nO3ULUvEQRCA8Z8oeiBoMAkWtVgsVo1XLWe/aDVajdbDDyAYrX4FMV04o+WCyeQLWETOE2EWtnj8xV003AMTlp2ZB2ZfmPID+uhiTiXGEUMcY7mWIMULelgrLejgOlu/4RzbpQSJHVzgPdv7Eu9jpoQgsY5TPGU5dzhCq4QgsRRN77PcB5xgRQNS0RYWJuTNx3UeZDWvOMNmE0GKx3gblzGiQ7SxkdXs4QofUTOKdfs3gtUGgt0/HVH1Q/7umj5nObcxsta/fGid2l/FuPZnN4zDXCzVOHGDA8yWbjzFJD4B3pVyKx3i0DkAAAAASUVORK5CYII="
                    alt="Send"
                    className="w-6 h-6"
                  />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
