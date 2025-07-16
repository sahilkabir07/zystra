import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, title, description, points }) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const cardVariants = {
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
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            whileHover={
                !isMobile && {
                    scale: 1.05,
                    boxShadow: "0 0 30px 6px rgba(138,43,226,0.3)",
                    transition: { duration: 0.2, ease: "easeOut" },
                }
            }
            className="bg-black/20 border border-purple-800/20 p-6 rounded-xl text-white transition-all duration-300 will-change-transform"
        >
            <div className="text-purple-500 text-3xl sm:text-4xl mb-3 sm:mb-4">
                <Icon />
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{title}</h3>

            <p className="text-white/80 text-sm sm:text-base mb-3 sm:mb-4">{description}</p>

            <ul className="text-xs sm:text-sm space-y-1 text-purple-300 list-disc list-inside">
                {points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </motion.div>
    );
};

export default ServiceCard;
