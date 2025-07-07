import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Adopt", path: "/adopt" },
        { name: "Donate", path: "/donate" },
        { name: "Contact", path: "/contact" },
    ];

    const links = navItems.map(({ name, path }) => (
        <li key={name}>
            <NavLink
                to={path}
                className={({ isActive }) =>
                    `hover:underline hover:bg-transparent underline-offset-8 decoration-amber-950 transition ${isActive ? "underline" : ""
                    }`
                }
            >
                {name}
            </NavLink>
        </li>
    ));
    return (
        <div className="navbar mx-auto md:px-5 lg:px-20 absolute z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to='/' className="text-2xl font-semibold text-amber-950">AdoptBuddy</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu  menu-horizontal px-1 text-amber-950 font-semibold">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'>
                    Profile/Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;