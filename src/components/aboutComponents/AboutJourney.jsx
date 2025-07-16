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
        <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent">
                Our Journey
            </h2>

            <div className="flex flex-col gap-10">
                {timeline.map((item, i) => {
                    const isEven = i % 2 === 0;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`relative bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-md p-6 md:p-8 transition-transform duration-300 hover:scale-[1.02] ${isEven ? "self-start" : "self-end"
                                }`}
                        >
                            <div className="absolute -top-5 left-4 text-sm bg-purple-600 text-white px-3 py-1 rounded-full shadow">
                                {item.year}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-white/80 text-sm">{item.desc}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default AboutJourney;
