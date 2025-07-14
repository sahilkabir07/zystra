import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
    FaPhone,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
};

const icons = [
    { icon: <FaWhatsapp />, name: "WhatsApp" },
    { icon: <FaEnvelope />, name: "Mail" },
    { icon: <FaPhone />, name: "Phone" },
    { icon: <FaFacebookF />, name: "Facebook" },
    { icon: <FaInstagram />, name: "Instagram" },
];

const ContactUsBanner = () => {
    const [currentIconIndex, setCurrentIconIndex] = useState(0);
    const imageControls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIconIndex((prev) => (prev + 1) % icons.length);
        }, 1200);
        return () => clearInterval(interval);
    }, []);

    const handleHoverStart = () => {
        imageControls.start({ scale: 1.05, rotate: -3 });
    };

    const handleHoverEnd = () => {
        imageControls.start({ scale: 1, rotate: 0 });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-transparent">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-6 md:p-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 hover:shadow-[0_0_50px_12px_rgba(138,43,226,0.4)] transition-shadow duration-500"
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
            >
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <motion.div
                        animate={imageControls}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="rounded-2xl overflow-hidden border border-white/20 shadow-xl"
                    >
                        <img
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Contact"
                            className="w-full h-full object-cover max-h-[350px]"
                        />
                    </motion.div>
                </div>

                {/* Text and Icons */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent mb-6 drop-shadow-md">
                        Contact Us
                    </h2>

                    <div className="flex items-center justify-center h-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={icons[currentIconIndex].name}
                                variants={iconVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.6 }}
                                className="text-purple-500 text-7xl drop-shadow-[0_0_30px_rgba(138,43,226,0.7)]"
                            >
                                {icons[currentIconIndex].icon}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUsBanner;
