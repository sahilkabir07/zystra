import React from "react";
import StatCard from "./StatCard";
import { FaUsers, FaTrophy, FaProjectDiagram } from "react-icons/fa";

const stats = [
    { icon: FaUsers, count: "200+", label: "Clients Served" },
    { icon: FaTrophy, count: "15+", label: "Awards Won" },
    { icon: FaProjectDiagram, count: "500+", label: "Projects Completed" },
];

const StatsSection = () => {
    return (
        <section className="relative z-30 py-20 px-4 md:px-10 flex flex-wrap justify-center gap-8 overflow-x-hidden">
            {stats.map((stat, i) => (
                <StatCard key={i} index={i} {...stat} />
            ))}
        </section>
    );
};

export default StatsSection;
