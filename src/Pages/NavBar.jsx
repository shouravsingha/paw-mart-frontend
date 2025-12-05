import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';

const NavBar = () => {

    const { user } = useContext(AuthContext);

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeToggle = (e) => {
        setTheme(e.target.checked ? "dark" : "light");
    };

    // Dark mode friendly nav link styling
    const navClass = ({ isActive }) =>
        isActive
            ? "text-primary font-bold underline"
            : "text-base-content";  // auto white in dark mode

    const handleSignOut = () => signOut(auth);

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 text-base-content">
            <div className="navbar-start">

                {/* Mobile menu */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/" className={navClass} end>Home</NavLink></li>
                        <li><NavLink to="/services" className={navClass}>Pets & Supplies</NavLink></li>

                        {user && (
                            <>
                                <li><NavLink to="/addlisting" className={navClass}>Add Listing</NavLink></li>
                                <li><NavLink to="/mylisting" className={navClass}>My Listing</NavLink></li>
                                <li><NavLink to="/myorders" className={navClass}>My Orders</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>

                {/* Logo */}
                <Link to="/" className="text-3xl font-extrabold text-base-content font">
                    PawMart
                </Link>
            </div>

            {/* Desktop menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 navbar">
                    <li><NavLink to="/" className={navClass} end>Home</NavLink></li>
                    <li><NavLink to="/services" className={navClass}>Pets & Supplies</NavLink></li>

                    {user && (
                        <>
                            <li><NavLink to="/addlisting" className={navClass}>Add Listing</NavLink></li>
                            <li><NavLink to="/mylisting" className={navClass}>My Listing</NavLink></li>
                            <li><NavLink to="/myorders" className={navClass}>My Orders</NavLink></li>
                        </>
                    )}
                </ul>
            </div>

            {/* Navbar end */}
            <div className="navbar-end flex items-center gap-4">

                {/* Theme Toggle */}
                <label className="flex cursor-pointer gap-2 items-center text-base-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>

                    <input
                        type="checkbox"
                        className="toggle theme-controller"
                        checked={theme === "dark"}
                        onChange={handleThemeToggle}
                    />

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </label>

                {/* Login button */}
                {!user && <Link to="/login" className="btn">Login</Link>}

                {/* Avatar */}
                {user && (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="Avatar" className="w-10 h-10 rounded-full" />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">
                                    {user?.displayName?.charAt(0).toUpperCase() || "U"}
                                </div>
                            )}
                        </label>

                        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                            <li><NavLink to="/myprofile">My Profile</NavLink></li>
                            <li><button onClick={handleSignOut}>Logout</button></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
