import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { router } from "@inertiajs/react";

const PetCard = ({ pet }) => {
    const [liked, setLiked] = useState(false);

    const handlecardClick = () => {
        window.location.href = `/details/${pet.id}`;
    };

    const handleLikeClick = () => {
        router.post(
            `/posts/${pet.id}/like`,
            {},
            {
                preserveScroll: true,
            }
        );
    };

    return (
        <div className="md:w-sm relative">
            {/* Heart button */}
            <button
                onClick={(e) => {
                    handleLikeClick();
                    setLiked(!liked);
                }}
                className={`absolute top-4 z-20 right-4 text-2xl ${
                    liked ? "text-red-500" : "text-white"
                } hover:scale-110 transition-transform`}
            >
                <FaHeart className="drop-shadow-lg" />
            </button>
            <div
                onClick={handlecardClick}
                className="bg-white  relative rounded-xl shadow-lg overflow-hidden   cursor-pointer hover:shadow-xl"
            >
                {/* Image Section with Name Overlay */}
                <div className="relative">
                    <div className="relative overflow-hidden">
                        <img
                            src={`http://localhost:8000/storage/${
                                pet?.images?.[0]?.image || "default.jpg"
                            }`}
                            alt={pet?.name}
                            className="w-full relative h-[330px] object-cover transition-transform duration-500 transform hover:scale-105"
                        />

                        {/* Name overlay on image */}
                        <div className="absolute bottom-0">
                            <div className="bg-[#5a77c1] text-white px-4 py-2 rounded-r-lg font-semibold text-lg">
                                {pet?.name}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                    {/* Breed and Age */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {"Breed : " + pet?.breed}
                        <span className="text-gray-600 font-normal">
                            {" "}
                            - (Age: {pet?.age})
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {pet?.description}
                    </p>

                    {/* Adopt Button */}

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            document.getElementById("my_modal_5").showModal();
                        }}
                        className=" bg-[#fab74c] hover:bg-[#fa7070] text-black hover:text-white py-3 px-6 rounded-2xl font-semibold text-lg transition-colors duration-200 cursor-pointer"
                    >
                        Adopt Me
                    </button>
                    <FaPaw className="absolute -bottom-7 -right-6 text-gray-200 text-9xl -rotate-45" />
                </div>
            </div>
        </div>
    );
};

export default PetCard;
