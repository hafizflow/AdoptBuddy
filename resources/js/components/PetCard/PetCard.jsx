import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

const PetCard = ({ pet }) => {
    const [liked, setLiked] = useState(false);

    const handlecardClick = () => {
        window.location.href = "/details";
        window.scrollTo(0, 0);
    };

    console.log(pet);

    return (
        // <div>
        //     <div
        //         onClick={handlecardClick}
        //         className="bg-indigo-50 border border-indigo-100 rounded-3xl shadow-md p-4 mx-auto transition-transform duration-500 transform cursor-pointer hover:scale-105 hover:shadow-lg"
        //     >
        //         <div className="flex justify-between items-start mb-4">
        //             <span className={`${pet?.status === 'Available' ? "text-green-600" : "text-red-600"}  bg-white text-sm font-medium px-3 py-1 rounded-full`}>
        //                 {pet ? pet.status : "Not found."}
        //             </span>
        //             <button
        //                 onClick={(e) => {
        //                     e.stopPropagation();
        //                     setLiked(!liked);
        //                 }}
        //                 className={`text-xl ${liked ? "text-red-500" : "text-gray-300"
        //                     } cursor-pointer`}
        //             >
        //                 <FaHeart />
        //             </button>
        //         </div>

        //         <div className="flex justify-center mb-4">
        //             <img
        //                 src={`http://localhost:8000/storage/${pet.images?.[0]?.image || 'default.jpg'}`}
        //                 className="w-full h-64 object-cover rounded-xl"
        //             />
        //         </div>

        //         <p className="text-sm text-green-600 font-medium">{ }</p>
        //         <h3 className="text-lg font-semibold">{pet?.name}</h3>
        //         <p className="text-md text-gray-700 mb-4">
        //             Breed : {pet ? pet.breed : "Not found"} | Age : {pet ? pet.age : "Not found"}
        //         </p>
        //         <p className="text-md text-gray-700 mb-4">
        //             Location : {pet ? pet.location : "Location not found"}
        //         </p>

        //         <button
        //             onClick={(e) => {
        //                 e.stopPropagation();
        //                 document.getElementById("my_modal_5").showModal();
        //             }}
        //             className="w-full cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-2xl font-medium"
        //         >
        //             Apply to Adopt
        //         </button>
        //     </div>

        // </div>

        // new card
        <div className="md:w-sm">
            <div
                onClick={handlecardClick}
                className="bg-white  relative rounded-xl shadow-lg overflow-hidden   cursor-pointer hover:shadow-xl"
            >
                {/* Image Section with Name Overlay */}
                <div className="relative">
                    <div className="relative overflow-hidden">
                        <img
                            src={`http://localhost:8000/storage/${pet.images?.[0]?.image || 'default.jpg'}`}
                            alt={pet.name}
                            className="w-full relative h-[330px] object-cover transition-transform duration-500 transform hover:scale-105"
                        />

                        {/* Name overlay on image */}
                        <div className="absolute bottom-0">
                            <div className="bg-[#5a77c1] text-white px-4 py-2 rounded-r-lg font-semibold text-lg">
                                {pet?.name}
                            </div>
                        </div>
                    </div>

                    {/* Heart button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLiked(!liked);
                        }}
                        className={`absolute top-4 right-4 text-2xl ${
                            liked ? "text-red-500" : "text-white"
                        } hover:scale-110 transition-transform`}
                    >
                        <FaHeart className="drop-shadow-lg" />
                    </button>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                    {/* Breed and Age */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {pet?.breed}
                        <span className="text-gray-600 font-normal"> - (Age: {pet?.age})</span>
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
