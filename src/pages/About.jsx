import React from 'react'
import AboutBanner from '../components/aboutComponents/AboutBanner'
import MotoCards from '../components/aboutComponents/MotoCards'
import TeamCards from '../components/aboutComponents/TeamCards'
import AboutJourney from '../components/aboutComponents/AboutJourney'

const About = () => {
    return (
        <>
            <AboutBanner />
            <MotoCards />
            <TeamCards />
            <AboutJourney />
        </>
    )
}

export default About