import React from "react";
import {
  LogoFacebook,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "react-ionicons";
const Footer = () => {
  return (
    <div className="min-w-full z-50 p-8 bg-gray-200  bottom-0 text-center">
      <h1>&#169;2025 Farmly All rights reserved.</h1>
      <div>
        <h3 className="font-semibold mt-5 ">Follow Us</h3>
        <div className="flex  flex-row items-center justify-center gap-2">
          <a href="https://github.com/Laxman2546" target="_blank">
            <div className="p-3 rounded-full hover:bg-white cursor-pointer">
              <LogoGithub width="25px" height="25px" color="#000" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/lakshman-25L46" target="_blank">
            <div className="p-3 rounded-full hover:bg-white cursor-pointer">
              <LogoLinkedin width="25px" height="25px" color="#000" />
            </div>
          </a>
          <a href="https://x.com" target="_blank">
            <div className="p-3 rounded-full hover:bg-white cursor-pointer">
              <LogoTwitter width="25px" height="25px" color="#000" />
            </div>
          </a>
          <a href="https://facebook.com" target="_blank">
            <div className="p-3 rounded-full hover:bg-white cursor-pointer">
              <LogoFacebook width="25px" height="25px" color="#000" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
