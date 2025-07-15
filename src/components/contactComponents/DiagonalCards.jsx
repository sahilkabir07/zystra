import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

const contactData = [
    {
        icon: <FaPhone />,
        label: "Call Us",
        info: "+91 98765 43210",
        direction: "left",
    },
    {
        icon: <FaEnvelope />,
        label: "Mail Us",
        info: "info@zystra.com",
        direction: "down",
    },
    {
        icon: <FaMapMarkerAlt />,
        label: "Visit Us",
        info: "Delhi, India",
        direction: "right",
    },
];

const getMotionOffset = (direction, show) => {
    const base = { opacity: show ? 1 : 0 };
    const offset = 50;
    switch (direction) {
        case "left":
            return { ...base, x: show ? -offset : 0, y: show ? offset : 0 };
        case "right":
            return { ...base, x: show ? offset : 0, y: show ? offset : 0 };
        case "down":
        default:
            return { ...base, x: 0, y: show ? offset : 0 };
    }
};

const DiagonalContactCards = () => {
    return (
        <div className="min-h-screen flex justify-center items-center gap-8 px-4 py-20 flex-wrap bg-transparent">
            {contactData.map((item, index) => (
                <DiagonalCard key={index} {...item} />
            ))}
        </div>
    );
};

const DiagonalCard = ({ icon, label, info, direction }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div
                className="w-40 h-40 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-xl flex flex-col items-center justify-center text-white transition-all duration-300 hover:shadow-[0_0_30px_10px_rgba(138,43,226,0.3)]"
            >
                <div className="text-3xl text-purple-500 drop-shadow-[0_0_10px_rgba(138,43,226,0.6)] mb-2">
                    {icon}
                </div>
                <div className="text-sm font-semibold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                    {label}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={getMotionOffset(direction, hovered)}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-10`}
            >
                <div className="w-32 h-32 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md text-white text-center text-sm flex items-center justify-center shadow-md pointer-events-none">
                    {info}
                </div>
            </motion.div>
        </div>
    );
};

export default DiagonalContactCards;
