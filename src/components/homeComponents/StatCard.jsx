import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ icon: Icon, count, label, index }) => {
    return (
        <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 1, 0.5, 1],
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
            className="backdrop-blur-[2px] bg-white/10 border border-white/20 rounded-2xl shadow-lg w-full max-w-sm min-h-[240px] text-white p-6 flex items-center justify-center"
        >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                <div className="bg-purple-600/30 p-3 rounded-full text-purple-400">
                    <Icon className="text-3xl" />
                </div>
                <div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent">{count}</h2>
                    <p className="text-white/80 text-sm sm:text-base">{label}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default StatCard;
