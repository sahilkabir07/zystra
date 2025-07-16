import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ServiceCard = ({ title, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/10 backdrop-blur-[6px] border border-purple-500/30 rounded-xl px-6 py-8 text-white w-full sm:w-[360px] min-h-[240px] shadow-md hover:shadow-purple-600/20 transition-all duration-200 flex items-center justify-center text-center"
        >
            <div className="flex flex-col items-center gap-3">
                <FaCheckCircle className="text-purple-400 text-xl" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-white/80">{description}</p>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
