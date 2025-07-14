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
            icon: <FaBullseye className="text-purple-500 text-4xl md:text-5xl drop-shadow-[0_0_8px_rgba(138,43,226,0.6)]" />,
        },
        {
            title: "Our Vision",
            text: "To be the leading force in digital transformation, setting new standards in marketing excellence and technological innovation.",
            icon: <FaEye className="text-purple-500 text-4xl md:text-5xl drop-shadow-[0_0_8px_rgba(138,43,226,0.6)]" />,
        },
    ];

    return (
        <div className="w-full py-18 px-4 md:px-16 bg-transparent relative z-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.2 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-10 min-h-[350px] text-white hover:shadow-[0_0_40px_10px_rgba(138,43,226,0.3)] transition-all duration-300 hover:scale-[1.03] flex flex-col justify-center"
                    >
                        <div className="flex items-center justify-center mb-6 gap-4">
                            {card.icon}
                            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
                                {card.title}
                            </h3>
                        </div>
                        <p className="text-white/90 text-lg leading-relaxed text-center">
                            {card.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MotoCards;
