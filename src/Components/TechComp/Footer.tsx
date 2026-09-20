import React from "react";
import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <div className="my-8 divider "></div>
      <div className="container mx-auto p-4">
        <div className="flex items-center ">
          <div className="max-w-lg">
            <img src={Logo} alt="" />
            <p className="text-sm text-gray-400 py-4">
              Curated tool, technologies and resources for developers building
              modern software.
            </p>
            <ul className="flex flex-row gap-2 text-sm">
              <li>Github</li>
              <li>Twitter</li>
              <li>Linkdein</li>
            </ul>
          </div>
          <div className=" pl-8 flex-1 grid grid-cols-3 gap-5 text-[4px] font-light  text-gray-400 ">
            <ul className="flex flex-col gap-2">
              <li className="font-semibold text-black mb-2">PRODUCT</li>
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-semibold text-black mb-2">COMPANY</li>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-semibold text-black mb-2">LEGAL</li>
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
            </ul>
          </div>
        </div>
        <div className="my-8 divider"></div>
        <div className="flex justify-between text-xs font-light text-gray-400 my-5">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-4">
                <p>Privacy</p>
                <p>Terms</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
