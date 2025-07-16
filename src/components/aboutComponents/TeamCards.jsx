import React from "react";

const team = [
    {
        name: "Michael Chen",
        role: "CEO & Founder",
        experience: "15+ years of experience in digital marketing and business strategy",
        img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Sarah Martinez",
        role: "CTO",
        experience: "12+ years of experience in tech innovation and digital solutions",
        img: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        name: "David Kumar",
        role: "CMO",
        experience: "10+ years of experience in creative strategy and brand development",
        img: "https://randomuser.me/api/portraits/men/87.jpg"
    }
];

const TeamCards = () => {
    return (
        <section className="py-16 px-4 sm:px-8 md:px-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text mb-10">
                Meet Our Leadership
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {team.map((member, i) => (
                    <div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 text-center backdrop-blur-[3px] shadow-md md:shadow-xl 
                        md:hover:shadow-[0_0_30px_8px_rgba(138,43,226,0.3)] transition-all duration-300"
                    >
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mx-auto object-cover mb-3 sm:mb-4 border-4 border-purple-500"
                        />
                        <h3 className="text-base sm:text-xl font-semibold text-white">{member.name}</h3>
                        <p className="text-purple-400 mb-1 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                        <p className="text-xs sm:text-sm text-white/80">{member.experience}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamCards;
