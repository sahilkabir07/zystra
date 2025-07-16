import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ icon: Icon, count, label, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            className="backdrop-blur-[2px] bg-white/10 border border-white/20 rounded-2xl shadow-xl w-full sm:w-[360px] min-h-[260px] text-white flex items-center justify-center transition-transform duration-200 hover:scale-[1.03]"
        >
            <div className="flex items-center gap-4">
                <div className="bg-purple-600/30 p-3 rounded-full text-purple-400">
                    <Icon className="text-3xl" />
                </div>
                <div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent">{count}</h2>
                    <p className="text-white/80 text-base">{label}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default StatCard;
