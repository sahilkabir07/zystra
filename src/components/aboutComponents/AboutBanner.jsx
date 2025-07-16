import React from "react";
import { motion } from "framer-motion";

const AboutBanner = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-6 sm:p-10 w-full max-w-6xl flex flex-col md:flex-row gap-10"
            >
                <motion.div className="w-full md:w-1/2">
                    <div className="overflow-hidden rounded-2xl border border-white/20 shadow">
                        <img
                            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                            alt="About us"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
                <motion.div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent mb-4">
                        About Zystra Webtech
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                        We're a team of digital innovators passionate about helping businesses succeed in the digital world. Our expertise lies in crafting growth-driven digital solutions tailored to your brand.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutBanner;
