import React from "react";
import HeroNeonCard from "../components/homeComponents/HeroGlass";
import StatsSection from "../components/homeComponents/StatSection";
import ServicesSectionHome from "../components/homeComponents/ServiceSection";

const Home = () => {
    return (
        <>
            <HeroNeonCard />
            <StatsSection />
            <ServicesSectionHome />
        </>
    );
};

export default Home;
