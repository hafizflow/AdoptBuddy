const Facilities = () => {
    const facilities = [
        "Smart pet matching system",
        "Live shelter locator map",
        "Online paperless application",
        "Real-time chat with shelters",
        "Notification & alert system",
        "Favorite pets & watchlist",
    ];

    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
                {/* Facilities List */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Why Choose Adoptbuddy?
                    </h2>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        {facilities.map((item, index) => (
                            <li key={index} className="text-lg">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                    <img
                        src="https://i.pinimg.com/1200x/f0/e6/db/f0e6db9c07ceeb998bd4da3444f3f895.jpg"
                        alt="Happy pet"
                        className="rounded-xl h-1/3 object-cover shadow-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default Facilities;
