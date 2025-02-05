import React from "react";
import Trybutton from "./components/Trybutton";
import "./home.css";
import Navbtn from "./components/Navbtn";

const home = () => {

  return (
    <>
      <div className="main w-full flex flex-col relative mt-10">
        <Navbtn />
        <div className="Homemain flex flex-col gap-8 mt-20 items-center ">
          <div className="heading  text-6xl font-medium  flex items-center  text-balance  font-serif">
            <h1>Introducing WasteyAI</h1>
          </div>
          <div className="button  ">
            <Trybutton />
          </div>
          <div className="paragraph w-auto flex flex-col gap-3 font-serif">
            <p>
              I've developed an AI chatbot to assist with waste management
              efforts. This chatbot is designed to interact conversationally,
              providing guidance and information on various aspects of waste
              disposal, recycling, and related topics. The conversational format
              allows users to ask follow-up questions, clarify their doubts, and
              receive tailored advice.
            </p>
            <p>
              This chatbot is built using the Gemini API, enabling it to
              understand and respond to a wide range of queries related to waste
              management best practices. We believe this tool can be a valuable
              resource for individuals, communities, and organizations looking
              to improve their waste management strategies. We are eager to
              gather feedback on its performance and identify areas for
              improvement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
