import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const AboutBanner = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 z-20">
            <motion.div
                className="relative z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_0_40px_8px_rgba(138,43,226,0.2)] p-6 sm:p-10 w-full max-w-7xl flex flex-col md:flex-row gap-8 sm:gap-10 overflow-hidden transition-all duration-500 group hover:shadow-[0_0_50px_10px_rgba(138,43,226,0.4)]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Image Section */}
                <motion.div
                    className="relative w-full md:w-1/2 flex justify-center items-center"
                    variants={childVariants}
                >
                    <div
                        className={`rounded-2xl overflow-hidden border border-white/20 shadow-xl transition-all duration-500 ${!isMobile ? "group-hover:-rotate-2 group-hover:scale-105" : ""
                            }`}
                    >
                        <img
                            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?cs=srgb&dl=pexels-fauxels-3183197.jpg&fm=jpg"
                            alt="About us"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col justify-center text-left"
                    variants={childVariants}
                >
                    <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight drop-shadow-md">
                        About Zystra Webtech
                    </motion.h2>

                    <motion.p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
                        We're a team of digital innovators passionate about helping businesses succeed in the digital world. Our expertise lies in crafting growth-driven digital solutions tailored to your brand.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutBanner;
