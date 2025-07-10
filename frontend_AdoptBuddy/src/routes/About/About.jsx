const About = () => {
    const teamMembers = [
        {
            name: "Anjum Hossain",
            role: "Co-Founder & CEO",
            image: "https://media.licdn.com/dms/image/v2/D4E03AQG0dqEfJJnNog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711009339568?e=1757548800&v=beta&t=Yg-1g6b5Vsb3OL-T92x64jCIg1NE6Z5KISt21TYIrkY",
        },
        {
            name: "Hafizur Rahman",
            role: "Co-Founder & CFO",
            image: "https://media.licdn.com/dms/image/v2/D5603AQGCFQEpHiAykg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719775229851?e=1757548800&v=beta&t=xRFYx_vylrZDJeGeXNue9fJOfxJgLhYiLMHqUhwzPbM",
        },
        {
            name: "Mithila Farzana",
            role: "Co-Founder & CTO",
            image: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/495086455_2095470380877807_1111959068454000522_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3KjwOBveAVYQ7kNvwE4FZ-b&_nc_oc=AdkNB9PEEgkaFnoOdm6jm3SK98LtXDDqVb5oWEKQQwe9Bmsqwjbok-7FuM5IphqwQhY&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=0dZapIULJo9GOQXUWTo8Gg&oh=00_AfSlJ7bgIlO5HIR_CVEXtWGOXpI8Coqp45NtHoh4isGz8g&oe=687524B1",
        },
        {
            name: "Salaha Ummey Suzana",
            role: "Vice President",
            image: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/511010491_743687928328874_343137926828696210_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=98dxamiheXAQ7kNvwF4G_wG&_nc_oc=Adn3dglaq7xZO0ddRCZ_7GFQ-NRmUvsdSisNdgKrj8mhQRK88KFuG1_Kv06-T94UrBE&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=atWS-5XEzLfeE6A5sMX9tQ&oh=00_AfS285t_09Q49ge7x8se8RgDXJ5rnMGI_WUHMOj7uzAHyQ&oe=687531D4",
        },
        {
            name: "Shakil Ahmed",
            role: "Vice President",
            image: "https://scontent.fdac174-1.fna.fbcdn.net/v/t39.30808-6/437784347_122107423652269148_7618761133143924728_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=CShzABpiWlIQ7kNvwExjJ3v&_nc_oc=Adkn4U15xEg4yYqfXXSLVixsBwo1a2TxzGRVLDYbccgx7AU0MdvLaQsGDI9K6uoz6Wc&_nc_zt=23&_nc_ht=scontent.fdac174-1.fna&_nc_gid=KGkZHh4Qbbksatp1lC3fnw&oh=00_AfSu5_mYdOFdF8Ql1oLjns5gmqffbu8clR_vGFQtyLUL4g&oe=68754D2A",
        },
    ];

    return (
        <div className="bg-[#f9f8eb]">
            {/* About Intro + Stats Section */}
            <div className="min-h-screen px-5 lg:px-20 py-8 flex flex-col lg:flex-row items-center justify-center gap-10">
                <div className="flex-1 max-w-xl">
                    <p className="text-amber-950 font-semibold mb-2">How It Started</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        Our Dream is <br /> A Loving Home for <br /> Every Pet
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        AdoptBuddy was founded by animal lovers with a shared dream — to make pet adoption easier,
                        safer, and more compassionate. What started as a simple idea soon evolved into a mission-driven
                        platform connecting homeless pets with loving families. United by a belief in second chances,
                        the AdoptBuddy team built a space where adopters and rescues could come together with trust.
                        Through continuous innovation and heartfelt dedication, AdoptBuddy now supports a growing
                        community of pet lovers, all driven by the desire to give every animal a forever home.
                    </p>
                </div>

                <div className="flex-1 flex flex-col gap-6">
                    <img
                        src="https://i.pinimg.com/1200x/54/ee/c0/54eec05e41d2fccfe905eef3297f3afe.jpg"
                        alt="Team Working"
                        className="rounded-2xl w-full h-auto object-cover shadow-lg"
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-6 rounded-xl shadow">
                            <p className="text-2xl font-bold text-gray-900">4+</p>
                            <p className="text-gray-600 text-sm">Years of Trusted Service</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-xl shadow">
                            <p className="text-2xl font-bold text-gray-900">5,200+</p>
                            <p className="text-gray-600 text-sm">Pets Successfully Adopted</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-xl shadow">
                            <p className="text-2xl font-bold text-gray-900">2,800+</p>
                            <p className="text-gray-600 text-sm">Happy Pet Parents</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-xl shadow">
                            <p className="text-2xl font-bold text-gray-900">300+</p>
                            <p className="text-gray-600 text-sm">Partner Shelters</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-16 px-4 md:px-10">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm uppercase text-gray-500 font-medium mb-2">Our Team</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        Meet our Team
                    </h2>
                    <p className="text-xl text-gray-600 font-light mb-8">
                        Passionate. Proactive. Expert.
                    </p>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        We lead with care — our core value — and a shared passion for connecting the world.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-[320px] object-cover rounded-xl shadow-md"
                                />
                                <h4 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h4>
                                <p className="text-sm text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
