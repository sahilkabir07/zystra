import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

const formVariants = {
    hidden: { opacity: 0, y: isMobile ? 30 : 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};

const fieldVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        purpose: "",
        description: "",
        file: null,
    });

    const [fileName, setFileName] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [name]: files[0] });
            setFileName(files[0].name);
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFileRemove = () => {
        setFormData({ ...formData, file: null });
        setFileName("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value) payload.append(key, value);
        });

        try {
            await axios.post("http://localhost:5000/api/contact/submit", payload, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("✅ Message submitted successfully!");

            // Reset form
            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                purpose: "",
                description: "",
                file: null,
            });
            setFileName("");
        } catch (err) {
            console.error("❌ Error submitting form:", err);
            toast.error("❌ Failed to submit form. Try again.");
        }
    };

    return (
        <section className="relative flex justify-center items-center px-4 py-20 z-10">
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        background: "#1e1b4b",
                        color: "#fff",
                        border: "1px solid #7c3aed",
                    },
                    iconTheme: {
                        primary: "#a78bfa",
                        secondary: "#1e1b4b",
                    },
                }}
            />

            <motion.form
                variants={formVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                onSubmit={handleSubmit}
                className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl p-6 md:p-10 flex flex-col gap-6 text-white hover:shadow-[0_0_60px_15px_rgba(138,43,226,0.4)] transition-shadow duration-500"
            >
                <motion.h2
                    variants={fieldVariant}
                    className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-md"
                >
                    Send Us a Message
                </motion.h2>

                <motion.div variants={fieldVariant} className="grid md:grid-cols-2 gap-4">
                    <motion.input
                        variants={fieldVariant}
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border border-white/40 text-white placeholder-white/60 rounded-xl px-4 py-3 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all duration-300 hover:border-white/60"
                    />
                    <motion.input
                        variants={fieldVariant}
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/10 border border-white/40 text-white placeholder-white/60 rounded-xl px-4 py-3 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all duration-300 hover:border-white/60"
                    />
                    <motion.input
                        variants={fieldVariant}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border border-white/40 text-white placeholder-white/60 rounded-xl px-4 py-3 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all duration-300 hover:border-white/60"
                    />
                    <motion.input
                        variants={fieldVariant}
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/10 border border-white/40 text-white placeholder-white/60 rounded-xl px-4 py-3 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all duration-300 hover:border-white/60"
                    />
                </motion.div>

                <motion.input
                    variants={fieldVariant}
                    type="text"
                    name="purpose"
                    placeholder="Purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/40 text-white placeholder-white/60 rounded-xl px-4 py-3 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all duration-300 hover:border-white/60"
                />

                <motion.textarea
                    variants={fieldVariant}
                    name="description"
                    placeholder="Description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/40 text-white placeholder-white/60 rounded-xl px-4 py-3 backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.1)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition-all duration-300 hover:border-white/60 resize-none"
                />

                <motion.input
                    variants={fieldVariant}
                    type="file"
                    name="file"
                    accept="image/*,.pdf"
                    onChange={handleChange}
                    className="text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white file:cursor-pointer hover:file:bg-purple-700"
                />

                {fileName && (
                    <motion.div
                        variants={fieldVariant}
                        className="flex items-center justify-between gap-4 bg-white/10 px-4 py-3 border border-white/30 rounded-xl mt-2"
                    >
                        <span className="text-white text-sm truncate max-w-[80%]">{fileName}</span>
                        <motion.button
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleFileRemove}
                            type="button"
                            className="text-red-400 hover:text-red-600 transition text-xl"
                        >
                            <FaTrash />
                        </motion.button>
                    </motion.div>
                )}

                <motion.button
                    variants={fieldVariant}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(128,0,255,0.6)" }}
                    type="submit"
                    className="mt-4 w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg shadow-purple-800/40"
                >
                    Submit
                </motion.button>
            </motion.form>
        </section>
    );
};

export default ContactForm;
