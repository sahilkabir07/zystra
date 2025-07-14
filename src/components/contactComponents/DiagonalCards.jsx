import React from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

const cards = [
    {
        icon: <FaEnvelope />,
        title: "Email Us",
        info: "hello@zystratech.com",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Call Us",
        info: "+1 (555) 123-4567",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Visit Us",
        info: "123 Digital Avenue, Tech City",
    },
];

const DiagonalContactCards = () => {
    return (
        <div className="w-full py-16 px-6 md:px-12 bg-black text-white z-10">
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                        className="relative group bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 overflow-hidden cursor-pointer transition-all duration-300 shadow-md h-[220px] flex flex-col justify-center items-center"
                    >
                        {/* Sliding up info card from bottom */}
                        <motion.div
                            variants={{
                                rest: { y: 100, opacity: 0 },
                                hover: { y: 0, opacity: 1 },
                            }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute bottom-4 w-[90%] h-[90px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl z-10 flex items-center justify-center text-center px-4 text-sm text-white shadow-lg"
                        >
                            {card.info}
                        </motion.div>

                        {/* Foreground icon and title */}
                        <div className="z-20 flex flex-col items-center gap-3">
                            <div className="text-4xl text-purple-500 drop-shadow-[0_0_8px_rgba(138,43,226,0.6)] transition-transform duration-300 group-hover:scale-110">
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default DiagonalContactCards;
