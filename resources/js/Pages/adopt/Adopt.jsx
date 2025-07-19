import ApplyAdoptForm from "../../components/ApplyAdoptForm/ApplyAdoptForm";
import PetCard from "../../components/PetCard/PetCard";

const AllPets = ({ pets }) => {
    return (
        <div className="min-h-screen mt-12 px-5 lg:px-20 py-8 space-y-10">
            <div className="">
                <h2 className="text-3xl mt-10 font-bold text-gray-800 text-center">
                    Pets you can Adpot
                </h2>
            </div>
            {/* Filter pets */}
            <div className="flex flex-wrap gap-4 justify-left mb-8">
                <span className="border-2 border-indigo-300 rounded-4xl px-3 py-2 text-xl text-primary cursor-pointer hover:shadow">
                    Birds
                </span>
                <span className="border-2 border-indigo-300 rounded-4xl px-3 py-2 text-xl text-primary cursor-pointer hover:shadow">
                    Cats
                </span>
                <span className="border-2 border-indigo-300 rounded-4xl px-3 py-2 text-xl text-primary cursor-pointer hover:shadow">
                    Dogs
                </span>
                <span className="border-2 border-indigo-300 rounded-4xl px-3 py-2 text-xl text-primary cursor-pointer hover:shadow">
                    Rabbits
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}
            </div>
            <ApplyAdoptForm></ApplyAdoptForm>
        </div>
    );
};

export default AllPets;
