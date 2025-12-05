import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';

const NavBar = () => {

    const { user } = useContext(AuthContext)

    const navClass = ({ isActive }) =>
        isActive
            ? "text-primary font-bold underline"
            : "text-gray-700";

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">
            <div className="navbar-start">
                {/* Mobile dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
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
                <Link to="/" className=" text-3xl font-extrabold font">PawMart</Link>
            </div>

            {/* Desktop menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
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
            <div className="navbar-end flex items-center gap-3">
                {/* Login button */}
                {!user && <Link to="/login" className="btn">Login</Link>}

                {/* Avatar dropdown */}
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
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
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
