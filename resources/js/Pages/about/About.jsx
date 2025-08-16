const About = () => {
    const teamMembers = [
        {
            name: "Karim Safi",
            role: "Founder & CEO",
            image: "https://krblaw.ca/wp-content/uploads/2024/11/Karim-Safi.png",
        },
        {
            name: "Tarik Lakehal",
            role: "Co-Founder & CFO",
            image: "https://i.mdel.net/i/db/2022/9/1779844/1779844-500w.jpg",
        },
        {
            name: "Mohamed Hassan",
            role: "Co-Founder & CTO",
            image: "https://www.anzliterature.com/wp-content/uploads/2022/10/PRH.jpg",
        },
        {
            name: "Fares Ben M'Barka",
            role: "Vice President",
            image: "https://mediaslide-europe.storage.googleapis.com/supa/pictures/1558/3829/large-1713860526-ff6f078fd90035caa5f18ac8f002315c.jpg",
        },
        {
            name: "Emma Watson",
            role: "Vice President",
            image: "https://cdn.britannica.com/29/215029-050-84AA8F39/British-actress-Emma-Watson-2017.jpg",
        },
    ];

    return (
        <div className="mt-14">
            <div className="min-h-screen px-5 lg:px-20 py-8 flex flex-col lg:flex-row items-center justify-center gap-10 ">
                <div className="flex-1 max-w-xl">
                    <p className="pc font-semibold mb-2">
                        How It Started
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Our Dream is <br /> A Loving Home for <br /> Every Pet
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        AdoptBuddy was founded by animal lovers with a shared
                        dream — to make pet adoption easier, safer, and more
                        compassionate. What started as a simple idea soon
                        evolved into a mission-driven platform connecting
                        homeless pets with loving families. United by a belief
                        in second chances, the AdoptBuddy team built a space
                        where adopters and rescues could come together with
                        trust. Through continuous innovation and heartfelt
                        dedication, AdoptBuddy now supports a growing community
                        of pet lovers, all driven by the desire to give every
                        animal a forever home.
                    </p>
                </div>

                <div className="flex-1 flex flex-col gap-6">
                    <img
                        src="https://i.pinimg.com/1200x/54/ee/c0/54eec05e41d2fccfe905eef3297f3afe.jpg"
                        alt="Team Working"
                        className="rounded-2xl w-full h-auto object-cover shadow-lg"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-[#07553B] to-[#0D9C6C] p-6 rounded-xl shadow">
                            <p className="text-2xl font-bold text-white">
                                4+
                            </p>
                            <p className="text-white text-sm">
                                Years of Trusted Service
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-[#07553B] to-[#0D9C6C] p-6 rounded-xl shadow">
                            <p className="text-2xl font-bold text-white">
                                5,200+
                            </p>
                            <p className="text-white text-sm">
                                Pets Successfully Adopted
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-[#07553B] to-[#0D9C6C] p-6 rounded-xl shadow">
                            <p className="text-2xl font-bold text-white">
                                2,800+
                            </p>
                            <p className="text-white text-sm">
                                Happy Pet Parents
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-[#07553B] to-[#0D9C6C] p-6 rounded-xl shadow">
                            <p className="text-2xl font-bold text-white">
                                300+
                            </p>
                            <p className="text-white text-sm">
                                Partner Shelters
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 px-4 md:px-10 block">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm uppercase text-gray-500 font-medium mb-2">
                        Our Team
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        Meet our Team
                    </h2>
                    <p className="text-xl text-gray-600 font-light mb-8">
                        Passionate. Proactive. Expert.
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        We lead with care — our core value — and a shared
                        passion for connecting the world.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-[320px] object-cover rounded-xl shadow-md transition-transform duration-500 transform hover:scale-105"
                                />
                                <h4 className="mt-4 text-lg font-semibold text-gray-800">
                                    {member.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
