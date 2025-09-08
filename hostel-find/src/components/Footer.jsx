import React from "react";
import {
  LogoFacebook,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
  LogoInstagram,
  LogoWhatsapp
} from "react-ionicons";
const Footer = () => {
  return (
    <div className="min-w-full z-50 p-8 bg-gray-200  bottom-0 text-center">
      <h1>&#169;2025 Farmly All rights reserved.</h1>
      <div>
        <h3 className="font-semibold mt-5 ">Follow Us</h3>
        <div className="flex  flex-row items-center justify-center gap-2">
          <a href="https://github.com/marennagarikurumurthy2005" target="_blank">
            <div className="p-3 rounded-full hover:bg-white cursor-pointer">
              <LogoGithub width="25px" height="25px" color="#000" />
            </div>
          </a>
          <a href="www.linkedin.com/in/kurumurthy" target="_blank">
            <div className="p-3 rounded-full hover:bg-white cursor-pointer">
              <LogoLinkedin width="25px" height="25px" color="#000" />
            </div>
          </a>
          <a href="https://x.com/MKurumurth62121?t=A571SVaDGclPPhEclF59SA&s=09" target="_blank">
            <div className="p-3 rounded-full hover:bg-white cursor-pointer">
              <LogoTwitter width="25px" height="25px" color="#000" />
            </div>
          </a>
          <a href="https://www.facebook.com/share/1Vho5iB9Pz/" target="_blank">
            <div className="p-3 rounded-full hover:bg-white cursor-pointer">
              <LogoFacebook width="25px" height="25px" color="#000" />
            </div>
          </a>
          <a href="https://www.instagram.com/urs_truly__mk?utm_source=qr&igsh=cHBha3Fkczdhc2Zj" target="_blank">
            <div className="p-3 rounded-full hover:bg-white cursor-pointer">
              <LogoInstagram width="25px" height="25px" color="#000" />
            </div>
          </a>
          <a href="https://wa.me/917989020757?text=Hello%20I%20want%20to%20know%20more!" target="_blank">
            <div className="p-3 rounded-full hover:bg-white cursor-pointer">
              <LogoWhatsapp width="25px" height="25px" color="#000" />
            </div>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
