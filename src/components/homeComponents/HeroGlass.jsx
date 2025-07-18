import React from "react";
import { motion } from "framer-motion";

const HeroNeonCard = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-10 py-12 sm:py-20 overflow-visible">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl shadow-[0_0_40px_10px_rgba(168,85,247,0.15)] hover:shadow-[0_0_60px_20px_rgba(168,85,247,0.25)] transition-all duration-500 p-6 sm:p-10 w-full max-w-5xl min-h-[480px] flex flex-col justify-center"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-snug sm:leading-tight text-center sm:text-left"
                >
                    <span className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent tracking-wide block">
                        Transform Your Digital Presence
                    </span>
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                        className="text-black bg-purple-500/90 text-2xl sm:text-3xl md:text-4xl px-3 py-1 rounded inline-block mt-4"
                    >
                        TOGETHER.
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                    className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0 text-center sm:text-left"
                >
                    We help businesses scale through innovative digital marketing strategies and cutting-edge web solutions.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default HeroNeonCard;
