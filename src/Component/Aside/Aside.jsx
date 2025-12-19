import React from "react";

import {
    FiHome,
    FiUsers,
    FiDroplet,
    FiDollarSign,
    FiUser,
    FiLogOut,
    FiPlusCircle,
} from "react-icons/fi";
import { NavLink } from "react-router";

const Aside = () => {
    const baseClass =
        "flex items-center gap-4 px-4 py-3 rounded-lg transition cursor-pointer";
    const activeClass = "bg-white/10 text-white";
    const inactiveClass = "hover:bg-white/10 text-slate-200";

    return (
        <aside
            className="
        fixed md:static top-0 left-0
        h-screen
        w-20 md:w-64
        bg-slate-900
        text-slate-100
        flex flex-col
        transition-all duration-300
      "
        >
            {/* Logo */}
            <div className="h-16 flex items-center px-5 gap-2 text-lg font-semibold">
                <span>🩸</span>
                <span className="hidden md:block">BloodCare</span>
            </div>

            {/* Menu */}
            <nav className="flex-1 mt-6 space-y-1 px-2">

                <NavLink
                    to="/dashboard/main"
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? activeClass : inactiveClass}`
                    }
                >
                    <FiHome className="text-xl" />
                    <span className="hidden md:inline text-sm font-medium">
                        Dashboard
                    </span>
                </NavLink>

                <NavLink
                    to="/dashboard/all-users"
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? activeClass : inactiveClass}`
                    }
                >
                    <FiUsers className="text-xl" />
                    <span className="hidden md:inline text-sm font-medium">
                        All Users
                    </span>
                </NavLink>

                <NavLink
                    to="/dashboard/blood-requests"
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? activeClass : inactiveClass}`
                    }
                >
                    <FiDroplet className="text-xl" />
                    <span className="hidden md:inline text-sm font-medium">
                        Blood Requests
                    </span>
                </NavLink>

                <NavLink
                    to="/dashboard/funding"
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? activeClass : inactiveClass}`
                    }
                >
                    <FiDollarSign className="text-xl" />
                    <span className="hidden md:inline text-sm font-medium">
                        Funding
                    </span>
                </NavLink>

                {/* Create Donation */}
                <NavLink
                    to="/dashboard/createdonation"
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? activeClass : inactiveClass}`
                    }
                >
                    <FiPlusCircle className="text-xl" />
                    <span className="hidden md:inline text-sm font-medium">
                        Create Donation
                    </span>
                </NavLink>

                <div className="my-4 h-px bg-slate-700" />

                <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? activeClass : inactiveClass}`
                    }
                >
                    <FiUser className="text-xl" />
                    <span className="hidden md:inline text-sm font-medium">
                        Profile
                    </span>
                </NavLink>

                {/* Logout (UI only) */}
                <div
                    className="
            flex items-center gap-4
            px-4 py-3
            rounded-lg
            cursor-pointer
            text-red-400
            hover:bg-red-500/10
            transition
          "
                >
                    <FiLogOut className="text-xl" />
                    <span className="hidden md:inline text-sm font-medium">
                        Logout
                    </span>
                </div>

            </nav>
        </aside>
    );
};

export default Aside;
