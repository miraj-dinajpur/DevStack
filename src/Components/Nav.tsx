import Logo from "../assets/logo-text.png"
const Nav = () => {
    return (
        <nav className="container mx-auto flex justify-between items-center p-4">
            <img src={Logo} alt="" />
            <ul className="flex gap-5">
                <li className="text-pink-500">Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex gap-4">
                <button>Sing In</button>
                <button>Sign Up</button>
            </div>
        </nav>
    );
};

export default Nav;