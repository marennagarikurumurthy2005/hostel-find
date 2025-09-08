import React, { useContext, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Chat.css";
import { Context } from "./context/context";
import Loading from "./components/Loading";
import Sidebar from "./Sidebar";
import HostelCard from "./HostelCard";

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

  const handleEnter = (e) => {
    if (e.key === "Enter" && input.length > 0 && input != 0) {
      setInput("");
      onSent();
    }
  };

  return (
    <div
      className={`${
        !showResult ? "mt-5 md:mt-24" : "mt-5"
      } flex h-screen overflow-hidden bg-white relative`}
    >
      <div className="absolute top-0 left-0 h-full z-30 md:relative">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col relative max-h-screen w-full">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex-1 p-4 md:p-8 lg:p-12 w-full">
                <motion.div
                  className="headings flex flex-col gap-2 mb-8 md:mb-12 text-center md:text-left"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-black select-none">
                    Hi there! Welcome
                  </p>
                  <p className="text-base md:text-xl lg:text-2xl mt-1 md:mt-2 text-gray-700 font-medium">
                    How can I find the best hostel near my college or workplace?
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                  <motion.div
                    className="bg-white border-2 border-gray-200 rounded-xl p-4 md:p-6 cursor-pointer hover:border-black transition-all duration-200 hover:shadow-lg"
                    variants={cardVariants}
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setInput(
                        "How can I find the best hostel near my college or workplace?"
                      );
                      onSent(
                        "How can I find the best hostel near my college or workplace?"
                      );
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 font-medium text-sm md:text-base">
                        What are the best hostels available in my area during this season?
                      </p>
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">🏠</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white border-2 border-gray-200 rounded-xl p-4 md:p-6 cursor-pointer hover:border-black transition-all duration-200 hover:shadow-lg"
                    variants={cardVariants}
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setInput(
                        " What are the best hostels available in my area during this season?"
                      );
                      onSent(
                        " What are the best hostels available in my area during this season?"
                      );
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 font-medium text-sm md:text-base">
                        How can I find safe and hygienic hostels with good facilities?
                      </p>
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">🧼</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white border-2 border-gray-200 rounded-xl p-4 md:p-6 cursor-pointer hover:border-black transition-all duration-200 hover:shadow-lg"
                    variants={cardVariants}
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setInput(
                        "How can I find safe and hygienic hostels with good facilities?"
                      );
                      onSent(
                        "How can I find safe and hygienic hostels with good facilities?"
                      );
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 font-medium text-sm md:text-base">
                        Can I book a hostel directly through HostelFind AI?
                      </p>
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">📱</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white border-2 border-gray-200 rounded-xl p-4 md:p-6 cursor-pointer hover:border-black transition-all duration-200 hover:shadow-lg"
                    variants={cardVariants}
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setInput("Can I book a hostel directly through HostelFind AI?");
                      onSent("Can I book a hostel directly through HostelFind AI?");
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-gray-800 font-medium text-sm md:text-base">
                        Does HostelFind AI support multiple languages?
                      </p>
                      <div className="ml-4 flex-shrink-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">అ</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex-1 flex flex-col justify-center"
            >
              <div className="flex-1 overflow-y-auto mb-2 md:mb-6 w-full">
                <div className="chat-container w-full  px-4 md:px-8 lg:px-12">
                  <div className="space-y-6">
                    {chatHistory.map((message, index) => (
                      <div
                        key={`${message.text}-${index}`}
                        className="message w-full"
                        variants={messageVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <div
                          className={`w-full flex items-start gap-3 md:gap-4 ${
                            message.type === "user"
                              ? "justify-end"
                              : "min-w-screen justify-start"
                          }`}
                        >
                          {message.type === "bot" && (
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
                                <span className="text-white text-sm md:text-base font-bold">
                                  AI
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="flex-1 min-w-0 max-w-[75%] md:max-w-[70%]">
                            <div
                              className={`rounded-2xl p-3 md:p-4 ${
                                message.type === "user"
                                  ? "bg-gray-100 border border-gray-200"
                                  : "bg-white"
                              }`}
                            >
                              {/* ✅ JSON-aware rendering */}
                              {(() => {
                                try {
                                  const parsed = JSON.parse(message.text);
                                  if (parsed.name) {
                                    return <HostelCard hostel={parsed} />;
                                  }
                                  if (parsed.error) {
                                    return (
                                      <p className="text-red-500">{parsed.error}</p>
                                    );
                                  }
                                  if (parsed.info) {
                                    return (
                                      <p className="text-gray-600">{parsed.info}</p>
                                    );
                                  }
                                } catch {
                                  return (
                                    <p
                                      className="text-gray-800 text-sm md:text-base leading-relaxed"
                                      dangerouslySetInnerHTML={{
                                        __html: message.text,
                                      }}
                                    />
                                  );
                                }
                              })()}
                            </div>
                          </div>
                          {message.type === "user" && (
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm md:text-base font-bold">
                                  U
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {loading && (
                      <motion.div
                        className="message w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="flex items-start gap-3 md:gap-4 justify-start">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center">
                              <span className="text-white text-sm md:text-base font-bold">
                                AI
                              </span>
                            </div>
                          </div>
                          <div className="bg-white p-3 md:p-4">
                            <Loading />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 md:p-6">
          <div className="max-w-4xl mx-auto relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleEnter}
              placeholder="Ask about Hostels, Prices, Benefits..."
              className="w-full p-3 md:p-4 pr-12 md:pr-14 rounded-full border-2 border-gray-300 bg-white outline-none focus:border-black transition-colors duration-200 text-gray-800 placeholder-gray-500 text-sm md:text-base"
            />
            <AnimatePresence>
              {input && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => {
                    setInput("");
                    onSent();
                  }}
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
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
