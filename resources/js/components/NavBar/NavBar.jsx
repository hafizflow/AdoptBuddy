import { useEffect, useRef, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { MdLogin, MdLogout } from "react-icons/md";
import { usePage } from "@inertiajs/react";
import { CgProfile } from "react-icons/cg";

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
            isShow: !!auth?.user && auth.user.role !== "admin",
        },
        { name: "Contact", path: "/contact", isShow: true },
    ];

    const links = navItems.map(({ name, path, isShow }) => {
        const isActive = window.location.pathname === path;
        return (
            <li key={name}>
                <a
                    href={path}
                    className={`hover:underline hover:bg-transparent underline-offset-8 decoration-white transition ${isActive ? "underline" : ""
                        } ${isShow ? "" : "hidden"}`}
                >
                    {name}
                </a>
            </li>
        );
    });

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        window.location.href = "/logout";
    };

    return (
        <div
            className={`navbar bg-[#1b1a1b] fixed top-0 w-full z-50 md:px-20 mx-auto transition-all duration-300 ${isScrolled ? "bg-white/30 backdrop-blur-md" : ""
                }`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost hover:bg-[#07553B] hover:border-none hover:shadow-none lg:hidden"
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
                        { }
                    </ul>
                </div>
                <a
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                    href="/"
                    className={`${isScrolled ? "pc" : "text-white"
                        } text-2xl font-semibold`}
                >
                    AdoptBuddy
                </a>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul
                    className={`${isScrolled ? "pc" : "text-white"
                        } menu menu-horizontal px-1 font-semibold`}
                >
                    {links}
                </ul>
            </div>

            <div
                className={`${isScrolled ? "pc" : "text-white"
                    } navbar-end flex gap-6 items-center`}
            >
                <div className="relative group inline-block">
                    <a href="/likes">
                        <FiHeart className="text-xl font-bold group-hover:text-red-600" />
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 px-2 py-1 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Favourite
                        </span>
                    </a>
                </div>

                {/* <div className="relative group inline-block">
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
                </div> */}
                <div className="relative group inline-block" ref={dropdownRef}>
                    {!auth?.user ? (
                        <a
                            href="/login"
                            className="flex items-center cursor-pointer relative"
                        >
                            <MdLogin className="text-xl" />
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                Login
                            </span>
                        </a>
                    ) : (
                        <>
                            <button
                                onClick={() => setDropdownOpen((prev) => !prev)}
                                className="flex items-center gap-2 px-3 py-1 rounded cursor-pointer border border-gray-600 text-sm font-medium"
                            >
                                {auth.user.name}
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-lg z-50">
                                    <button
                                        onClick={() => {
                                            window.location.href = "/profile";
                                        }}
                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 cursor-pointer"
                                    >
                                        <CgProfile className="text-lg" />
                                        Profile
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-indigo-50 cursor-pointer"
                                    >
                                        <MdLogout className="text-lg" />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
