import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-20 bg-black/40 backdrop-blur-md border-t border-purple-600/30 text-white py-10 px-6"
        >
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
                <div>
                    <h2 className="text-2xl font-bold mb-2">ZYSTRA <span className="text-purple-500">WEBTECH</span></h2>
                    <p className="text-sm text-white/70">
                        Empowering your digital journey with stunning web solutions and scalable growth strategies.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm text-white/70">
                        <li><a href="#services" className="hover:text-purple-400 transition">Services</a></li>
                        <li><a href="#about" className="hover:text-purple-400 transition">About Us</a></li>
                        <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
                        <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center sm:items-end">
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4 text-purple-400 text-xl">
                        <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-white transition"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-white/60 text-sm">
                © {new Date().getFullYear()} ZYSTRA WEBTECH. All rights reserved.
            </div>
        </motion.footer>
    );
};

export default Footer;
