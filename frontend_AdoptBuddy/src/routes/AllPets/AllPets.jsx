import ApplyAdoptForm from "../ApplyAdoptForm/ApplyAdoptForm";
import PetCard from "../PetCard/PetCard";


const AllPets = () => {
    return (
        <div className="bg-[#f9f8eb] min-h-screen px-5 lg:px-20 py-8 space-y-10">
            <div className="">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Pets you can Adpot</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <PetCard></PetCard>
                <PetCard></PetCard>
                <PetCard></PetCard>
                <PetCard></PetCard>
                <PetCard></PetCard>
                <PetCard></PetCard>
                <PetCard></PetCard>
                <PetCard></PetCard>
            </div>
            <ApplyAdoptForm></ApplyAdoptForm>
        </div>
    );
};

export default AllPets;