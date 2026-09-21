import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <nav className="container mx-auto flex justify-between md:justify-between md: items-center p-4 sticky top-0 bg-white">
            <button className=" md:hidden text-3xl cursor-pointer ">
                <RxHamburgerMenu />
            </button>
            <img className="pl-8 md:pl-0" src={Logo} alt="" />
            <ul className="hidden md:flex  gap-5 cursor-pointer">
                <li className="text-pink-600">Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex gap-2 md:gap-8 text-xs md:text-lg  md:pl-0 ">
                <button className="cursor-pointer">Sing In</button>
                <button className="btn border-2 py-0.5 px-2 bg-pink-600 text-white  rounded-2xl max-h-8 cursor-pointer md:btn md:btn-secondary">Sign Up</button>
            </div>
        </nav>
    );
};

export default Nav;