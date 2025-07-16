import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomepage = location.pathname === "/";
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
            <NavLink
                to={path}
                className={({ isActive }) =>
                    `hover:underline hover:bg-transparent underline-offset-8 ${isHomepage ? "decoration-white" : "decoration-indigo-900"}  transition ${isActive ? "underline" : ""
                    }`
                }
            >
                {name}
            </NavLink>
        </li>
    ));

    return (
        <div
            className={`navbar fixed top-0 w-full z-50 md:px-20 mx-auto transition-all duration-300 ${isScrolled ? "bg-white/30 backdrop-blur-md shadow-md" : ""
                }`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                <Link onClick={() => { window.scrollTo(0, 0) }} to="/" className={`${isHomepage && !isScrolled ? "text-white" : "text-indigo-900"} text-2xl font-semibold`}>
                    AdoptBuddy
                </Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className={`${isHomepage && !isScrolled ? "text-white" : "text-indigo-900"} menu menu-horizontal px-1 font-semibold`}>
                    {links}
                </ul>
            </div>

            <div className={`${isHomepage && !isScrolled ? "text-white" : "text-indigo-900"} navbar-end flex gap-2 items-center`}>
                <Link to="/favouritelist">
                    <FiHeart className="text-xl font-bold hover:text-2xl hover:text-red-600" />
                </Link>
                <Link to="/login">Profile/Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
