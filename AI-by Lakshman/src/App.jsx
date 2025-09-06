import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Contact from "./Contact.jsx";

import Chat from "./Chat.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
};

export default App;
