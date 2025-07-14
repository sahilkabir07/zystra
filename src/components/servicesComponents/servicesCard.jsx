import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const ServiceCard = ({ icon: Icon, title, description, points }) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="bg-black/20 border border-purple-800/20 p-6 rounded-xl text-white 
                       hover:shadow-[0_0_30px_6px_rgba(138,43,226,0.3)] hover:scale-105 
                       transition-all duration-300 will-change-transform"
        >
            <div className="text-purple-500 text-4xl mb-4">
                <Icon />
            </div>

            <h3 className="text-xl font-semibold mb-2">{title}</h3>

            <p className="text-white/80 mb-4">{description}</p>

            <ul className="text-sm space-y-1 text-purple-300 list-disc list-inside">
                {points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </motion.div>
    );
};

export default ServiceCard;
