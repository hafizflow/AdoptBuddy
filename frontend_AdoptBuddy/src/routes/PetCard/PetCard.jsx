import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const PetCard = () => {
    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();

    const handlecardClick = () => {
        navigate('/details');
    }
    return (
        <div>
            <div onClick={handlecardClick} className="bg-white rounded-3xl shadow-md p-4 w-80 mx-auto hover:shadow-lg">

                <div className="flex justify-between items-start mb-4">
                    <span className="bg-gray-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                        Available
                    </span>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLiked(!liked)
                        }}
                        className={`text-xl ${liked ? "text-red-500" : "text-gray-400"}`}
                    >
                        <FiHeart />
                    </button>
                </div>


                <div className="flex justify-center mb-4">
                    <img
                        src="https://i.pinimg.com/736x/56/79/78/567978b483421cd99499956a5662ba3e.jpg"
                        className="w-full h-36 object-contain rounded-xl"
                    />
                </div>


                <p className="text-sm text-green-600 font-medium">Cat</p>
                <h3 className="text-lg font-semibold">
                    Persian ketty
                </h3>
                <p className="text-md text-gray-700 mb-4">Breed : Persian Cat | Age : 8 months</p>


                <button onClick={(e) => {
                    e.stopPropagation();
                    document.getElementById('my_modal_5').showModal()
                }} className="w-full cursor-pointer bg-black text-white py-2 rounded-2xl font-medium">
                    Apply to Adopt
                </button>
            </div>
        </div>
    );
};

export default PetCard;