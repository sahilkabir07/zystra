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
                scale: 1.08,
                transition: { duration: 0.1, ease: "easeOut" },
                boxShadow: "0 0 30px 8px rgba(138,43,226,0.4)",
            }}
            className="backdrop-blur-[2px] backdrop-filter bg-white/10 border border-white/20 rounded-2xl shadow-2xl w-full sm:w-[360px] min-h-[280px] text-white transition-transform duration-200 flex items-center justify-center"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-600/30 p-3 rounded-full text-purple-400">
                    <Icon className="text-3xl" />
                </div>
                <div>
                    <h2 className="text-6xl font-bold bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent">{count}</h2>
                    <p className="text-white/80 text-shadow-md">{label}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default StatCard;
