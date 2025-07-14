import React from "react";
import { motion } from "framer-motion";
import { FaShareAlt, FaBullseye, FaSearch, FaMapMarkerAlt, FaCode, FaMobileAlt } from "react-icons/fa";

const services = [
    {
        title: "Social Media Marketing",
        description: "Strategic social media management and content creation to build your brand presence.",
        points: ["Content Strategy", "Community Management", "Social Analytics", "Engagement Growth"],
        icon: <FaShareAlt className="text-purple-500 text-4xl mb-4" />,
    },
    {
        title: "Meta & Google Ads",
        description: "Targeted advertising campaigns that deliver measurable results.",
        points: ["Campaign Strategy", "Ad Creation", "Performance Tracking", "ROI Optimization"],
        icon: <FaBullseye className="text-purple-500 text-4xl mb-4" />,
    },
    {
        title: "Search Engine Optimization",
        description: "Comprehensive SEO services to improve your search engine rankings.",
        points: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
        icon: <FaSearch className="text-purple-500 text-4xl mb-4" />,
    },
    {
        title: "Local SEO",
        description: "Boost your local presence and attract more customers in your area.",
        points: ["Google Business Profile", "Local Citations", "Review Management", "Local Content"],
        icon: <FaMapMarkerAlt className="text-purple-500 text-4xl mb-4" />,
    },
    {
        title: "Web Development",
        description: "Modern and responsive websites tailored to your business needs.",
        points: ["Responsive Design", "Frontend & Backend", "SEO Optimization", "Performance Tuning"],
        icon: <FaCode className="text-purple-500 text-4xl mb-4" />,
    },
    {
        title: "App Development",
        description: "High-performance mobile applications for Android and iOS platforms.",
        points: ["Cross-Platform Apps", "UI/UX Design", "API Integration", "App Store Deployment"],
        icon: <FaMobileAlt className="text-purple-500 text-4xl mb-4" />,
    },

];

const ServicesPart = () => {
    return (
        <section className="relative py-24 px-6 md:px-12 z-10">
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <video
                    className="w-full h-full object-cover opacity-20"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/videos/bg.mp4"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent mb-16 relative z-10"
            >
                Our Services
            </motion.h2>

            <div className="relative z-10 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl text-white hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(138,43,226,0.3)] transition-all duration-300"
                    >
                        <div className="flex flex-col items-start">
                            {service.icon}
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-white/80 text-sm mb-4">{service.description}</p>
                            <ul className="list-disc list-inside space-y-1 text-sm text-purple-300">
                                {service.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesPart;
