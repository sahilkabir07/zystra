import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const HeroNeonCard = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    const container = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
            <motion.div
                variants={container}
                initial="hidden"
                animate={controls}
                className="relative z-20 backdrop-blur-[2px] bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-10 w-full max-w-5xl min-h-[500px] flex flex-col justify-center transition-transform duration-300 hover:scale-[1.02]"
            >
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-snug text-center sm:text-left">
                    <span className="text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent tracking-wide block">
                        Transform Your Digital Presence
                    </span>
                    <span className="text-black bg-purple-600 text-2xl sm:text-3xl md:text-4xl px-3 py-1 rounded inline-block mt-4">
                        TOGETHER.
                    </span>
                </h1>

                <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">
                    We help businesses scale through innovative digital marketing strategies and cutting-edge web solutions.
                </p>
            </motion.div>
        </div>
    );
};

export default HeroNeonCard;
