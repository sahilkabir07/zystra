import React from "react";
import HeroNeonCard from "../components/homeComponents/HeroGlass";
import StatsSection from "../components/homeComponents/StatSection";
import ServicesSection from "../components/homeComponents/ServiceSection";

const Home = () => {
    return (
        <>
            <HeroNeonCard />
            <StatsSection />
            <ServicesSection />
        </>
    );
};

export default Home;
