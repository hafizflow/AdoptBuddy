import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const PetCard = ({ pet }) => {
    const [liked, setLiked] = useState(false);

    const handlecardClick = () => {
        window.location.href = "/details";
        window.scrollTo(0, 0);
    };

    console.log(pet);

    return (
        <div>
            <div
                onClick={handlecardClick}
                className="bg-indigo-50 border border-indigo-100 rounded-3xl shadow-md p-4 mx-auto transition-transform duration-500 transform cursor-pointer hover:scale-105 hover:shadow-lg"
            >
                <div className="flex justify-between items-start mb-4">
                    <span className={`${pet?.status === 'Available' ? "text-green-600" : "text-red-600"}  bg-gray-100 text-sm font-medium px-3 py-1 rounded-full`}>
                        {pet?.status}
                    </span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLiked(!liked);
                        }}
                        className={`text-xl ${liked ? "text-red-500" : "text-gray-300"
                            }`}
                    >
                        <FaHeart />
                    </button>
                </div>

                <div className="flex justify-center mb-4">
                    <img
                        src="https://i.pinimg.com/736x/56/79/78/567978b483421cd99499956a5662ba3e.jpg"
                        className="w-full h-36 object-contain rounded-xl"
                    />
                </div>

                <p className="text-sm text-green-600 font-medium">{}</p>
                <h3 className="text-lg font-semibold">{pet?.name}</h3>
                <p className="text-md text-gray-700 mb-4">
                    Breed : {pet ? pet.breed : "Not found"} | Age : {pet ? pet.age : "Not found"}
                </p>
                <p className="text-md text-gray-700 mb-4">
                    Location : {pet ? pet.location : "Location not found"}
                </p>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById("my_modal_5").showModal();
                    }}
                    className="w-full cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-2xl font-medium"
                >
                    Apply to Adopt
                </button>
            </div>
        </div>
    );
};

export default PetCard;
