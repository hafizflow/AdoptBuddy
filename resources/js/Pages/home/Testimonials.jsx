import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "Mr. Mir Faiyaz Hossain",
        country: "Bangladesh",
        text: "Understanding our users the perspectives allows us to for enhance usability, navigation, and overall satisfaction. By actively.",
        image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/f1fa3b53bfe3c44ed38e270c969c0456.jpg",
    },
    {
        id: 2,
        name: "Mr. Md. Jahidul Alam",
        country: "USA",
        text: "Simplifying complex information for easier comprehension, and optimizing the website layout for intuitive browsing. Incorporating",
        image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/e8b0cdb2100acc3f9bc7ec0ffe1b4595.jpg",
    },
    {
        id: 3,
        name: "Ms Mahinur Akther",
        country: "UK",
        text: "With each iteration, we strive to create a user-friendly platform that serves as a valuable resource for pet care advice, tips, and information.",
        image: "https://faculty.daffodilvarsity.edu.bd/images/teacher/0ac7cdfa2c873f0395de3c4eefedb139.png",
    },
];

const TestimonialSection = () => {
    return (
        <section className="py-16 px-6 text-center">
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
