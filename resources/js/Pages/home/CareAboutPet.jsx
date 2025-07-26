import { FaChevronLeft } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import dogCat from "../../../assets/dogCat2.png";

const stats = [
    { label: "RESCUED", value: 5786 },
    { label: "ADOPTED", value: 372 },
    { label: "REVIEWS", value: 2587 },
];

const CareAboutPets = () => {
    const { ref, inView, entry } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section ref={ref} className="px-6 py-16 max-w-7xl mx-auto block">
            <h2 className="text-4xl md:text-6xl text-center font-bold leading-tight mb-8">
                WHAT MAKE US CARE ABOUT PET?
            </h2>

            <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={dogCat}
                        alt="Golden Retriever"
                        className="w-80 md:w-full object-contain"
                    />
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-semibold">
                            WHY ADOPT CATS AND DOGS?
                        </h3>
                        <p className="text-gray-500 mt-2 max-w-md mx-auto md:mx-0">
                            Every adoption gives a homeless pet a second chance
                            at life. We ensure each pet is healthy, vaccinated,
                            and ready to join a loving home—because every animal
                            deserves a family and a future.
                        </p>
                    </div>

                    {/* Stat Cards */}
                    <div className="space-y-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between border border-gray-200 rounded-xl px-6 py-4 transition-all duration-200 hover:border-[#fab74c]"
                            >
                                <span className="w-8 h-8 rounded-full flex items-center justify-center border text-[#fab74c] transition-all duration-200 hover:bg-[#fab74c] hover:text-white hover:border-[#fab74c]">
                                    <FaChevronLeft size={12} />
                                </span>
                                <p className="font-semibold text-lg">
                                    {inView ? (
                                        <CountUp
                                            end={stat.value}
                                            duration={1.5}
                                        />
                                    ) : (
                                        0
                                    )}{" "}
                                    <span className="text-gray-500">
                                        {stat.label}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareAboutPets;
