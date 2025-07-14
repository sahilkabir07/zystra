import React from "react";
import { motion } from "framer-motion";

const HeroNeonCard = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 backdrop-blur-[2px] backdrop-filter bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl min-h-[500px] flex flex-col justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_8px_rgba(138,43,226,0.3)]"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    className="text-white text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
                >
                    <span className="text-6xl bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent  tracking-wide">Transform Your Digital Presence</span> <br />
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                        className="text-black bg-purple-600 text-4xl px-3 py-1 rounded inline-block mt-2"
                    >
                        TOGETHER.
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
                    className="text-white/90 text-lg max-w-2xl"
                >
                    We help businesses scale through innovative digital marketing strategies and
                    cutting-edge web solutions.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default HeroNeonCard;
