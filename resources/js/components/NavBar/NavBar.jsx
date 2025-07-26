import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdLogin, MdLogout } from "react-icons/md";
import { usePage } from "@inertiajs/react";

const Navbar = ({ user }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { auth } = usePage().props;
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", path: "/", isShow: true },
        { name: "About", path: "/about", isShow: true },
        { name: "Adopt", path: "/adopt", isShow: true },
        { name: "Admin", path: "/admin", isShow: auth?.user?.role == "admin" },
        {
            name: "Be a saver",
            path: "/userupload",
            isShow: auth?.user?.is_admin,
        },
        { name: "Contact", path: "/contact", isShow: true },
    ];

    const links = navItems.map(({ name, path, isShow }) => {
        const isActive = window.location.pathname === path;
        return (
            <li key={name}>
                <a
                    href={path}
                    className={`hover:underline hover:bg-transparent underline-offset-8 decoration-white transition ${
                        isActive ? "underline" : ""
                    } ${isShow ? "" : "hidden"}`}
                >
                    {name}
                </a>
            </li>
        );
    });

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
                        className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-36 p-2 bg-black/50 backdrop-blur-md text-white"
                    >
                        {links}
                        {}
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
                } navbar-end flex gap-6 items-center`}
            >
                <div className="relative group inline-block">
                    <a href="/favouritelist">
                        <FiHeart className="text-xl font-bold group-hover:text-red-600" />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 px-2 py-1 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Favourite
                        </span>
                    </a>
                </div>

                <div className="relative group inline-block">
                    {!auth?.user && (
                        <a
                            className="flex items-center cursor-pointer"
                            href="/login"
                        >
                            {user ? (
                                user.name
                            ) : (
                                <>
                                    <MdLogin className="text-xl" />
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        Login
                                    </span>
                                </>
                            )}
                        </a>
                    )}
                    {auth?.user && (
                        <a
                            className="flex items-center cursor-pointer"
                            href="/logout"
                        >
                            {auth?.user ? (
                                auth?.user.name
                            ) : (
                                <>
                                    <MdLogout className="text-xl" />
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        Logout
                                    </span>
                                </>
                            )}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
