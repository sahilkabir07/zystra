import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contactData = [
    { icon: <FaPhone />, label: "Call Us", info: "+91 98765 43210", direction: "left" },
    { icon: <FaEnvelope />, label: "Mail Us", info: "info@zystra.com", direction: "down" },
    { icon: <FaMapMarkerAlt />, label: "Visit Us", info: "Delhi, India", direction: "right" },
];

const getMotionOffset = (direction, show) => {
    const base = { opacity: show ? 1 : 0 };
    const offset = 60;
    switch (direction) {
        case "left": return { ...base, x: show ? -offset : 0, y: show ? offset : 0 };
        case "right": return { ...base, x: show ? offset : 0, y: show ? offset : 0 };
        default: return { ...base, x: 0, y: show ? offset : 0 };
    }
};

const DiagonalCard = ({ icon, label, info, direction }) => {
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const timeout = setTimeout(() => setHovered(true), 800 + Math.random() * 500);
            return () => clearTimeout(timeout);
        }
    }, [isMobile]);

    return (
        <div
            className="relative group"
            onMouseEnter={() => !isMobile && setHovered(true)}
            onMouseLeave={() => !isMobile && setHovered(false)}
            onClick={() => isMobile && setHovered(prev => !prev)}
        >
            <motion.div
                className="w-50 h-50 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg flex flex-col items-center justify-center text-white transition-all duration-300 hover:shadow-[0_0_40px_12px_rgba(138,43,226,0.4)]"
            >
                <div className="text-3xl text-purple-500 drop-shadow-[0_0_12px_rgba(138,43,226,0.7)] mb-2">
                    {icon}
                </div>
                <div className="text-sm font-semibold bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
                    {label}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={getMotionOffset(direction, hovered)}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-10"
            >
                <div
                    className="w-40 h-40 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg flex flex-col items-center justify-center text-white transition-all duration-300 hover:shadow-[0_0_40px_12px_rgba(138,43,226,0.4)]"
                >
                    <div className="text-sm font-semibold bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
                        {info}
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default function DiagonalContactCards() {
    return (
        <div className="min-h-screen flex justify-center items-center gap-8 px-4 py-20 flex-wrap bg-transparent">
            {contactData.map((item, idx) => (
                <DiagonalCard key={idx} {...item} />
            ))}
        </div>
    );
}
