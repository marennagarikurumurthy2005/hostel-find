import React from "react";
import { Link } from "react-router-dom";
const navButton = () => {
  return (
    <>
      <div className=" flex  flex-col items-end  pr-14  h-1 w-full mb-20 ">
        <Link to={"/chat"}>
          <button className="pt-3 pb-3 pl-6 pr-6 bg-black border-2 text-white rounded-4xl cursor-pointer hover:bg-white hover:text-black hover:border-2 ">
            wasteyAI
          </button>
        </Link>
      </div>
    </>
  );
};

export default navButton;
