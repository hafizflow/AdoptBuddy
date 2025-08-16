import { useState } from "react";
import ApplyAdoptForm from "../../components/ApplyAdoptForm/ApplyAdoptForm";
import PetCard from "../../components/PetCard/PetCard";

const AllPets = ({ pets, user }) => {
    const [selectedType, setSelectedType] = useState("All");
    const filterOptions = ["All", "Bird", "Cat", "Dog", "Rabbit"];

    const filterPets = selectedType === "All" ?
        pets :
        pets.filter((pet) =>
            pet.name.toLowerCase().includes(selectedType.toLocaleLowerCase())
        );

    return (
        <div className="min-h-screen mt-12 px-5 lg:px-20 py-8 space-y-10">
            <div className="">
                <h2 className="text-3xl mt-10 font-bold text-gray-800 text-center">
                    Pets you can Adpot
                </h2>
            </div>
            {/* Filter pets */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                {
                    filterOptions.map((type) => (
                        <span
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`border-2 rounded-4xl px-3 py-2 text-xl cursor-pointer hover:shadow transition-all duration-200
                            ${selectedType === type
                                    ? "bg-[#07553B] text-[#CED46A] border-[#07553B]"
                                    : "text-[#07553B] border-[#07553B]"
                                }`}>
                            {type}
                        </span>
                    ))
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filterPets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} user={user} />
                ))}
            </div>
            <ApplyAdoptForm></ApplyAdoptForm>
        </div>
    );
};

export default AllPets;
