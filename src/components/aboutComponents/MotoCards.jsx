import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

const MotoCards = () => {
    const cards = [
        {
            title: "Our Mission",
            text: "To empower businesses with innovative digital solutions that drive growth and create lasting impact in the digital landscape.",
            icon: <FaBullseye className="text-purple-500 text-3xl sm:text-4xl md:text-5xl drop-shadow-[0_0_6px_rgba(138,43,226,0.4)]" />,
        },
        {
            title: "Our Vision",
            text: "To be the leading force in digital transformation, setting new standards in marketing excellence and technological innovation.",
            icon: <FaEye className="text-purple-500 text-3xl sm:text-4xl md:text-5xl drop-shadow-[0_0_6px_rgba(138,43,226,0.4)]" />,
        },
    ];

    return (
        <div className="w-full py-16 px-4 sm:px-8 md:px-16 bg-transparent relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.2 }}
                        className="bg-white/10 backdrop-blur-[3px] border border-white/20 rounded-2xl shadow-md md:shadow-xl p-6 sm:p-8 md:p-10 min-h-[300px] md:min-h-[350px] text-white md:hover:shadow-[0_0_40px_10px_rgba(138,43,226,0.3)] transition-all duration-300 md:hover:scale-[1.03] flex flex-col justify-center"
                    >
                        <div className="flex items-center justify-center mb-4 sm:mb-6 gap-3 sm:gap-4">
                            {card.icon}
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
                                {card.title}
                            </h3>
                        </div>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed text-center">
                            {card.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MotoCards;
