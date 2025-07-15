import React from "react";
import { motion } from "framer-motion";

const HeroNeonCard = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 backdrop-blur-[2px] bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-5xl flex flex-col justify-center hover:scale-[1.01] hover:shadow-[0_0_30px_8px_rgba(138,43,226,0.3)] transition-all duration-300"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-center sm:text-left"
                >
                    <span className="block bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent tracking-wide">
                        Transform Your Digital Presence
                    </span>
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-black bg-purple-600 text-xl sm:text-2xl px-3 py-1 rounded inline-block mt-4"
                    >
                        TOGETHER.
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1 }}
                    className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl mx-auto sm:mx-0 text-center sm:text-left"
                >
                    We help businesses scale through innovative digital marketing strategies and cutting-edge web solutions.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default HeroNeonCard;
