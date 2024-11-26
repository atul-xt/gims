import React from 'react';

const collaborations = [
    { name: "Academic Institution 1", logo: "/image/logos/logo1.png" },
    { name: "AICTE", logo: "/image/logos/logo2.png" },
    { name: "MSME", logo: "/image/logos/logo3.png" },
    { name: "HLACT", logo: "/image/logos/logo4.png" },
    { name: "IBA", logo: "/image/logos/logo5.png" },
    { name: "IIMB", logo: "/image/logos/logo6.png" },
    { name: "NHRD", logo: "/image/logos/logo7.png" },
    { name: "DCAL", logo: "/image/logos/logo8.png" },
    { name: "AIMS", logo: "/image/logos/logo9.png" },
    { name: "Coursera", logo: "/image/logos/logo10.png" },
    { name: "ATAL", logo: "/image/logos/logo11.png" },
    { name: "Analytics SI", logo: "/image/logos/logo12.png" },
    { name: "XLRI", logo: "https://www.gims.net.in/admission/img/recrue/shield-logo.svg" },
];

const clubs = [
    { name: "AIT", logo: "/image/logos/logo13.png" },
    { name: "LSUS", logo: "/image/logos/logo14.png" },
    { name: "BFSI", logo: "/image/logos/logo15.png" },
    { name: "Kathmandu", logo: "/image/logos/logo16.png" },
    { name: "University of Dubai ", logo: "/image/logos/logo17.png" },
    { name: "MAHSA", logo: "/image/logos/logo18.png" },
    { name: "DE MONTFORT", logo: "/image/logos/logo19.png" },
    { name: "POLITEKNIK", logo: "/image/logos/logo20.png" },
    { name: "Financial Uni", logo: "/image/logos/logo24.png" },
    { name: "Uniglobe College", logo: "/image/logos/logo22.jpg" },
];

const CollaborationsAndClubs = () => {
    return (
        <>
            <section style={{
                backgroundImage: 'url(/img/pattern.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
                backgroundSize: 'contain',
            }}>
                <div
                    className="max-w-7xl mx-auto px-4 py-12">

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-2 my-3">
                                <svg
                                    className="w-6 h-6 text-primary mr-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                                <h2 className="text-2xl font-bold">Collaborations & MoUs</h2>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {collaborations.map((collab, index) => (
                                    <div
                                        key={index}
                                        className="p-1 flex items-center justify-center hover:shadow-md transition-shadow rounded-lg border border-gray-200"
                                    >
                                        <img
                                            src={collab.logo}
                                            alt={collab.name}
                                            className="w-[119px] h-[55px] object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 my-3">
                                <svg
                                    className="w-6 h-6 text-primary mr-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <h2 className="text-2xl font-bold">Institutional Clubs</h2>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {clubs.map((club, index) => (
                                    <div
                                        key={index}
                                        className="p-1 flex items-center justify-center hover:shadow-md transition-shadow rounded-lg border border-gray-200"
                                    >
                                        <img
                                            src={club.logo}
                                            alt={club.name}
                                            className="w-[119px] h-[55px] object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CollaborationsAndClubs;