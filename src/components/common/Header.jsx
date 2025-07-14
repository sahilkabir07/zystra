import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: "Home" },
        { label: "About" },
        { label: "Services" },
        { label: "Portfolio" },
        { label: "Archive" },
        { label: "ContactUs" },
    ];

    const handleNavigation = (label) => {
        setMenuOpen(false);
        if (label === "Home") {
            navigate("/");
        } else {
            navigate(`/${label.toLowerCase()}`);
        }
    };

    const currentPath = location.pathname.toLowerCase();

    return (
        <header className="w-full bg-black py-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-md w-11/12 max-w-7xl mx-auto text-white px-6 md:px-12 py-8 relative z-50 hover:shadow-[0_0_30px_8px_rgba(138,43,226,0.3)]">

                <div className="flex items-center justify-between w-full gap-x-12">

                    <div className="flex items-center gap-4">
                        <div className="bg-purple-600 h-10 w-10 rounded-md" />
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-bold leading-tight text-purple-600">ZYSTRA WEBTECH</h1>
                            <span className="text-sm hidden sm:inline">Digital Marketing Agency</span>
                        </div>
                    </div>

                    <nav className="hidden lg:flex gap-8 items-center">
                        {navItems.map((item, i) => {
                            const routePath = item.label === "Home" ? "/" : `/${item.label.toLowerCase()}`;
                            const isActive = currentPath === routePath;

                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{
                                        rotateX: 6,
                                        rotateY: -34,
                                        transition: { type: "spring", stiffness: 300 },
                                    }}
                                    initial={{ rotateX: 0, rotateY: 0 }}
                                    animate={{ rotateX: 0, rotateY: 0 }}
                                >
                                    <motion.button
                                        onClick={() => handleNavigation(item.label)}
                                        className={`text-sm font-medium px-4 py-2 border border-white/30 rounded-xl transition-colors duration-300 
                                            ${isActive
                                                ? "text-purple-500 shadow-[0_0_20px_rgba(138,43,226,0.4)]"
                                                : "text-white hover:text-purple-400"
                                            }`}
                                    >
                                        {item.label}
                                    </motion.button>
                                </motion.div>
                            );
                        })}
                    </nav>

                    <div className="lg:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? (
                                <FiX className="text-white text-2xl" />
                            ) : (
                                <FiMenu className="text-white text-2xl" />
                            )}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="lg:hidden mt-4 bg-[#111111] text-white py-6 px-4 flex flex-col gap-4 rounded-b-2xl z-40">
                        {navItems.map((item, i) => {
                            const routePath = item.label === "Home" ? "/" : `/${item.label.toLowerCase()}`;
                            const isActive = currentPath === routePath;

                            return (
                                <button
                                    key={i}
                                    className={`text-left w-full text-sm font-medium px-2 py-2 rounded-md transition-colors 
                                        ${isActive ? "text-purple-500 bg-white/10" : "hover:text-purple-400"}`}
                                    onClick={() => handleNavigation(item.label)}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
