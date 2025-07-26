import ApplyAdoptForm from "../../components/ApplyAdoptForm/ApplyAdoptForm";
import PetCard from "../../components/PetCard/PetCard";


const FavouriteList = ({ pets }) => {
    return (
        <div className="min-h-screen mt-12 px-5 lg:px-20 py-8 space-y-10">
            <div className="">
                <h2 className="text-3xl font-bold text-gray-800 text-center">My Favourite List</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} />
                ))}

                <PetCard></PetCard>
                <PetCard></PetCard>
                <PetCard></PetCard>
                <PetCard></PetCard>
            </div>
            <ApplyAdoptForm></ApplyAdoptForm>
        </div>
    );
};

export default FavouriteList;