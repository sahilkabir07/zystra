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
        <section className="py-20 px-6 md:px-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-purple-500 text-transparent bg-clip-text mb-12">
                Meet Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, i) => (
                    <div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md shadow-xl hover:shadow-[0_0_30px_8px_rgba(138,43,226,0.3)] transition-all duration-300"
                    >
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-4 border-purple-500"
                        />
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        <p className="text-purple-400 mb-3">{member.role}</p>
                        <p className="text-sm text-white/80">{member.experience}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamCards;
