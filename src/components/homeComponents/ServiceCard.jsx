import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ServiceCard = ({ title, description, delay = 0 }) => {
    const isMobile = window.innerWidth < 640;

    return (
        <motion.div
            initial={!isMobile ? { y: 50, opacity: 0 } : false}
            whileInView={!isMobile ? { y: 0, opacity: 1 } : {}}
            transition={{
                duration: 0.4,
                delay,
                ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={!isMobile ? {
                scale: 1.04,
                transition: { duration: 0.05, ease: "easeInOut" },
            } : {}}
            className="bg-white/10 backdrop-blur-[6px] border border-purple-500/30 rounded-xl px-8 py-10 text-white w-full sm:w-[360px] min-h-[260px] shadow-md z-10 hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.4)] transition-all duration-200 flex items-center justify-center text-center"
        >
            <div className="flex flex-col items-center gap-3">
                <FaCheckCircle className="text-purple-400 text-2xl" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-white/80">{description}</p>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
