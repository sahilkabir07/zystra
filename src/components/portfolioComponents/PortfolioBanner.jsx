import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const PortfolioBanner = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20 z-20">
            <motion.div
                className="relative z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_0_40px_8px_rgba(138,43,226,0.2)] p-10 w-full max-w-7xl flex flex-col md:flex-row gap-10 overflow-hidden hover:shadow-[0_0_50px_10px_rgba(138,43,226,0.4)] transition-all duration-500 group"
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
                    <div className="transform group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                        <img
                            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Portfolio Showcase"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="w-full md:w-1/2 flex flex-col justify-center text-left"
                    variants={childVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-md"
                    >
                        Our Portfolio
                    </motion.h2>

                    <motion.p
                        className="text-white/90 text-lg md:text-xl leading-relaxed mb-8"
                    >
                        Explore our curated collection of impactful projects where strategy meets creativity. From websites to campaigns — every project is built for results.
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PortfolioBanner;
