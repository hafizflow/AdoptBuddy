import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Usman Khawaja",
        country: "Bangladesh",
        text: "Understanding our users the perspectives allows us to for enhance usability, navigation, and overall satisfaction. By actively.",
        image: "https://crictoday.com/wp-content/uploads/2024/09/Usman-Khawaja.webp",
    },
    {
        id: 2,
        name: "Moeen Ali",
        country: "England",
        text: "Simplifying complex information for easier comprehension, and optimizing the website layout for intuitive browsing. Incorporating",
        image: "https://admin.thecricketer.com/weblab/Sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/moeenodiheadshot.jpg",
    },
    {
        id: 3,
        name: "Edin Džeko",
        country: "Bosnia",
        text: "With each iteration, we strive to create a user-friendly platform that serves as a valuable resource for pet care advice, tips, and information.",
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyP6dhh4yIoY0zOwLU1M8yy7Oh2b8FraQvuWiQC3DLcSthTsPaFj6-kxaSUSuSL7bW7JP9sjE17NCS46ySjEMkdQ",
    },
];

const TestimonialSection = () => {
    return (
        <section className="py-16 px-6 text-center block">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                OUR CLIENT SAYING
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
                about preventive care, wellness exams, and compassionate you and
                your pet.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className="bg-indigo-50 rounded-2xl shadow-sm border border-indigo-500 p-6 text-left hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="text-indigo-500 text-3xl mb-4 leading-none">
                            <FaQuoteRight />
                        </div>
                        <p className="text-gray-600 mb-6">{item.text}</p>
                        <div className="flex items-center gap-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-bold text-black text-sm">
                                    {item.name}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    {item.country}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;
