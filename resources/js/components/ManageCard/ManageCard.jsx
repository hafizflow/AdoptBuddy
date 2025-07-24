import { router } from "@inertiajs/react";

export default function ManageCard({ pet }) {
    const handleDelete = (id) => {
        router.delete(`/requests/${id}`, {
            onSuccess: () => {
                console.log("Pet deleted successfully");
            },
            onError: (error) => {
                console.error("Error deleting pet:", error);
            },
        });
    };

    return (
        <section className="bg-white my-2.5 shadow rounded-xl p-6">
            <div className="space-y-4">
                <div className="p-4 border border-indigo-100 rounded-xl flex justify-between items-center">
                    <div>
                        <h3 className="font-bold">{pet.name}</h3>
                        <p className="text-sm">Breed: {pet.breed}</p>
                        <p className="text-sm">Status: {pet.status}</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn btn-sm bg-yellow-700 text-white">
                            Update
                        </button>

                        <button
                            onClick={() => handleDelete(pet.id)}
                            className="btn btn-sm bg-red-700 text-white"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
