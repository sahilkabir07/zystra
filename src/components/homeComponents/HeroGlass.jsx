import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const HeroNeonCard = () => {
    const prefersReducedMotion = useReducedMotion();

    const isMobile = window.innerWidth < 640; // sm breakpoint

    return (
        <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
            <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: isMobile ? 0.6 : 1,
                    ease: "easeOut",
                }}
                className={`relative z-20 backdrop-blur-[2px] backdrop-filter bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-5xl min-h-[500px] flex flex-col justify-center transition-all duration-300 ${isMobile ? "" : "hover:scale-105 hover:shadow-[0_0_30px_8px_rgba(138,43,226,0.3)]"
                    }`}
            >
                <motion.h1
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: isMobile ? 0.6 : 1,
                        ease: "easeOut",
                    }}
                    className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-snug sm:leading-tight text-center sm:text-left"
                >
                    <span className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent tracking-wide block">
                        Transform Your Digital Presence
                    </span>
                    <motion.span
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: isMobile ? 0.6 : 1,
                            ease: "easeOut",
                        }}
                        className="text-black bg-purple-600 text-2xl sm:text-3xl md:text-4xl px-3 py-1 rounded inline-block mt-4"
                    >
                        TOGETHER.
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.9,
                        duration: isMobile ? 0.5 : 1,
                        ease: "easeOut",
                    }}
                    className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0 text-center sm:text-left"
                >
                    We help businesses scale through innovative digital marketing strategies and
                    cutting-edge web solutions.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default HeroNeonCard;
