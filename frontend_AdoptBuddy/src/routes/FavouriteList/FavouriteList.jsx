import ApplyAdoptForm from "../ApplyAdoptForm/ApplyAdoptForm";
import PetCard from "../PetCard/PetCard";


const FavouriteList = () => {
    return (
        <div className="min-h-screen mt-10 px-5 lg:px-20 py-8 space-y-10">
            <div className="">
                <h2 className="text-3xl font-bold text-gray-800 text-center">My Favourite List</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

export default FavouriteList;