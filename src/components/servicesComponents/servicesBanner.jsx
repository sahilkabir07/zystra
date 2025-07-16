import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const ServicesBanner = () => {
    const isMobile = window.innerWidth < 768; // crude but works for client-side behavior

    const containerVariants = {
        hidden: { opacity: 0, y: isMobile ? 30 : 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: isMobile ? 0.6 : 0.9,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: isMobile ? 0.15 : 0.3,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: isMobile ? 20 : 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: isMobile ? 0.4 : 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 sm:py-24 z-20">
            <motion.div
                className="relative z-20 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-[0_0_40px_10px_rgba(138,43,226,0.2)] p-6 sm:p-10 w-full max-w-7xl flex flex-col md:flex-row gap-10 overflow-hidden hover:shadow-[0_0_50px_12px_rgba(138,43,226,0.4)] transition-all duration-500 group"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* 📷 Left Image */}
                <motion.div
                    className="relative w-full md:w-1/2 flex justify-center items-center"
                    variants={childVariants}
                >
                    <div className="transform group-hover:rotate-2 group-hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                        <img
                            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                            alt="Service Banner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* 📝 Right Text */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col justify-center text-left"
                    variants={childVariants}
                >
                    <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight drop-shadow-md">
                        Transforming Ideas into Digital Reality
                    </motion.h2>

                    <motion.p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                        Our services are tailored to deliver real results — from branding to full-stack development. We empower startups and enterprises to innovate and grow.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ServicesBanner;
