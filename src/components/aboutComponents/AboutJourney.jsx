import React from "react";
import { motion } from "framer-motion";

const timeline = [
    { year: "2020", title: "Company Founded", desc: "Started with a vision to transform digital marketing." },
    { year: "2021", title: "Rapid Growth", desc: "Expanded our team and service offerings." },
    { year: "2022", title: "Industry Recognition", desc: "Received multiple awards for digital excellence." },
    { year: "2023", title: "Global Expansion", desc: "Started serving clients worldwide." },
];

const AboutJourney = () => {
    return (
        <section className="relative z-20 py-20 px-4 md:px-12 max-w-5xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent z-50"
            >
                Our Journey
            </motion.h2>

            <div className="flex flex-col gap-14 relative z-10">
                {timeline.map((item, i) => {
                    const isEven = i % 2 === 0;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.04 }}
                            className={`
                                group w-full md:w-[80%] mx-auto 
                                bg-white/10 border border-white/15 backdrop-blur-sm 
                                rounded-2xl shadow-lg p-5 md:p-8 
                                transition-transform duration-300 
                                ${isEven ? "self-start" : "self-end"} 
                                hover:md:shadow-[0_0_25px_5px_rgba(138,43,226,0.2)]
                                hover:md:scale-[1.06]
                            `}
                        >
                            <div className="absolute -top-5 left-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-xl shadow-md">
                                {item.year}
                            </div>

                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-white/80 text-sm sm:text-base">{item.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default AboutJourney;
