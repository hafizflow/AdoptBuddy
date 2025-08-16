import {
    FaPaw,
    FaMapMarkedAlt,
    FaFileAlt,
    FaHandsHelping,
} from "react-icons/fa";

const Services = () => {
    const services = [
        {
            icon: <FaPaw className="text-4xl text-white" />,
            title: "Pet Adoption",
            description:
                "Find and adopt your perfect companion from trusted shelters.",
        },
        {
            icon: <FaHandsHelping className="text-4xl text-white" />,
            title: "Pet Rescue",
            description:
                "Report stray or injured animals and let us help them.",
        },
        {
            icon: <FaMapMarkedAlt className="text-4xl text-white" />,
            title: "Nearby Map",
            description:
                "Locate shelters and clinics near you with our interactive map.",
        },
        {
            icon: <FaFileAlt className="text-4xl text-white" />,
            title: "Adoption Tracking",
            description:
                "Apply online and track the status of your adoption journey.",
        },
    ];

    return (
        <section className="md:py-12 block">
            <div className="md:max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-r from-[#07553B] to-[#0D9C6C] p-6 rounded-xl shadow-md hover:shadow-[#07553B] transition duration-300"
                        >
                            <div className="mb-4 flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-white text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
