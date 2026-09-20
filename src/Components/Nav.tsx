import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <nav className="container mx-auto flex justify-between items-center p-4 sticky top-0 bg-white">
            <img src={Logo} alt="" />
            <ul className="flex gap-5 cursor-pointer">
                <li className="text-pink-600">Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex gap-8">
                <button className="cursor-pointer">Sing In</button>
                <button className="btn btn-secondary max-h-8">Sign Up</button>
            </div>
        </nav>
    );
};

export default Nav;