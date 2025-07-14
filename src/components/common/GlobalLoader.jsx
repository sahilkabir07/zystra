// GlobalLoader.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const GlobalLoader = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-white text-3xl md:text-5xl font-bold tracking-widest"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    ZYSTRA <span className="text-purple-500">WEBTECH</span>
                </motion.h1>
            </motion.div>
        </AnimatePresence>
    );
};

export default GlobalLoader;
