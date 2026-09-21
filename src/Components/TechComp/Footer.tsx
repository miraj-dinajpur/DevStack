
import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="my-8 divider "></div>
      <div className="p-4">
        <div className="flex flex-col  md:flex-row items-center ">
          <div className="max-w-lg flex items-center flex-col md:items-start">
            <img src={Logo} alt="" />
            <p className="text-sm text-gray-400 py-4 text-center md:text-start">
              Curated tool, technologies and resources for developers building
              modern software.
            </p>
            <ul className="flex flex-row gap-2 text-sm cursor-pointer pb-6 md:pb-0">
              <li>Github</li>
              <li>Twitter</li>
              <li>Linkdein</li>
            </ul>
          </div>
          <div className=" hidden pl-8 flex-1 md:grid grid-cols-3 gap-5 text-[4px] font-light  text-gray-400 ">
            <ul className="flex flex-col gap-2">
              <li className="font-semibold text-black mb-2 ">PRODUCT</li>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Technologies</li>
              <li className="cursor-pointer">Projects</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-semibold text-black mb-2">COMPANY</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Careers</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-semibold text-black mb-2">LEGAL</li>
              <li className="cursor-pointer">Privacy Policy</li>
              <li className="cursor-pointer">Terms of Services</li>
            </ul>
          </div>
        </div>
        <div className="my-8 divider"></div>
        <div className="flex justify-between text-xs font-light text-gray-400 my-5">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex gap-1 md:gap-4">
                <p className="cursor-pointer">Privacy</p>
                <p className="cursor-pointer">Terms</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
