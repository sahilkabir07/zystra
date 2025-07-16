import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const MotoCards = () => {
    const cards = [
        {
            title: "Our Mission",
            text: "To empower businesses with innovative digital solutions that drive growth and create lasting impact.",
            icon: <FaBullseye className="text-purple-500 text-3xl sm:text-4xl drop-shadow" />,
        },
        {
            title: "Our Vision",
            text: "To be the leading force in digital transformation, setting new standards in marketing and innovation.",
            icon: <FaEye className="text-purple-500 text-3xl sm:text-4xl drop-shadow" />,
        },
    ];

    return (
        <section className="px-4 md:px-16 py-16">
            <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 text-white hover:shadow-[0_0_30px_10px_rgba(138,43,226,0.3)] transition-transform duration-300 hover:scale-[1.02]"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">{card.icon}</div>
                        <h3 className="text-2xl font-bold text-center">{card.title}</h3>
                        <p className="text-white/90 text-sm sm:text-base text-center mt-2">{card.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MotoCards;
