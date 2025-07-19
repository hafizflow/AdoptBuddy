import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Adopt", path: "/adopt" },
        { name: "Admin", path: "/admin" },
        { name: "Contact", path: "/contact" },
    ];

    const links = navItems.map(({ name, path }) => (
        <li key={name}>
            <a
                href={path}
                className={({ isActive }) =>
                    `hover:underline hover:bg-transparent underline-offset-8 decoration-white transition ${
                        isActive ? "underline" : ""
                    }`
                }
            >
                {name}
            </a>
        </li>
    ));

    return (
        <div
            className={`navbar bg-[#1b1a1b] fixed top-0 w-full z-50 md:px-20 mx-auto transition-all duration-300 ${
                isScrolled ? "bg-white/30 backdrop-blur-md shadow-md" : ""
            }`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost hover:bg-indigo-900 hover:border-none hover:shadow-none lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 bg-white/30 backdrop-blur-md"
                    >
                        {links}
                    </ul>
                </div>
                <a
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                    href="/"
                    className={`${
                        isScrolled ? "text-indigo-900" : "text-white"
                    } text-2xl font-semibold`}
                >
                    AdoptBuddy
                </a>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul
                    className={`${
                        isScrolled ? "text-indigo-900" : "text-white"
                    } menu menu-horizontal px-1 font-semibold`}
                >
                    {links}
                </ul>
            </div>

            <div
                className={`${
                    isScrolled ? "text-indigo-900" : "text-white"
                } navbar-end flex gap-2 items-center`}
            >
                <a href="/favouritelist">
                    <FiHeart className="text-xl font-bold hover:text-2xl hover:text-red-600" />
                </a>
                <a className="flex items-center" to="/login">
                    Login
                    <MdLogin className="text-xl" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;
