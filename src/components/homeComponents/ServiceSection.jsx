import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const services = [
    {
        title: "Social Media Marketing",
        description: "Professional social media marketing services tailored to your business needs",
    },
    {
        title: "Meta & Google Ads",
        description: "Professional meta & google ads services tailored to your business needs",
    },
    {
        title: "Search Engine Optimization",
        description: "Improve your visibility with expert SEO strategies.",
    },
    {
        title: "Local SEO",
        description: "Optimize your presence for location-based searches.",
    },
    {
        title: "Content Marketing",
        description: "Engage audiences through high-value, SEO-friendly content.",
    },
    {
        title: "Web Analytics",
        description: "Track, analyze and improve your marketing performance.",
    },
];

const ServicesSection = () => {
    return (
        <section className="relative z-10 py-20 px-6">
            <div className="relative z-20 max-w-6xl mx-auto text-center backdrop-blur-[2px] bg-black/50 rounded-xl p-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className=" text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-900 bg-clip-text text-transparent ">Our Services</h2>
                    <p className="text-white/70 mb-12 max-w-2xl mx-auto">
                        Comprehensive digital solutions to help your business thrive in the online world
                    </p>

                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {services.map((service, idx) => (
                        <ServiceCard
                            key={idx}
                            title={service.title}
                            description={service.description}
                            delay={idx * 0.15}
                        />
                    ))}
                </div>
            </div>
        </section>

    );
};

export default ServicesSection;
