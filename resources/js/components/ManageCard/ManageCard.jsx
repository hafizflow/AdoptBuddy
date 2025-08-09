import { router } from "@inertiajs/react";

export default function ManageCard({ pet, isManageCard = false }) {
    const handleDelete = (post) => {
        router.delete(`/posts/${post}`, {
            onSuccess: () => {
                console.log("Pet deleted successfully");
            },
            onError: (error) => {
                console.error("Error deleting pet:", error);
            },
        });
    };

    const handleUpdate = (post) => {
        router.put(`/posts/${post}`, {
            onSuccess: () => {
                console.log("Pet updated successfully");
            },
            onError: (error) => {
                console.error("Error updating pet:", error);
            },
        });
    };

    return (
        <section className=" my-2.5  rounded-xl p-2 md:p-6">
            <div className="">
                <div className="p-4 space-y-2 border border-[#07553B]/50  pc rounded-xl flex flex-col  justify-between">
                    <div>
                        <h3 className="font-bold">{pet.name}</h3>
                        <p className="text-sm">Breed: {pet.breed}</p>
                        {
                            isManageCard ? <p className="text-sm">Visibility: {pet.isVisible}</p> : <p className="text-sm">Status: {pet.status}</p>
                        }
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleUpdate(pet.id)}
                            className="px-2 py-1 rounded-md border border-gray-400 bg-yellow-700 text-white"
                        >
                            Update
                        </button>

                        {
                            isManageCard ? " " : <button
                                onClick={() => handleDelete(pet.id)}
                                className="px-2 py-1 rounded-md border border-gray-400 bg-red-700 text-white"
                            >
                                Delete
                            </button>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
