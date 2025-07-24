export default function ManageCard({ name, breed, status }) {
    return (
        <section className="bg-white shadow rounded-xl p-6">
            <div className="space-y-4">
                <div className="p-4 border border-indigo-100 rounded-xl flex justify-between items-center">
                    <div>
                        <h3 className="font-bold">{name}</h3>
                        <p className="text-sm">Breed: {breed}</p>
                        <p className="text-sm">Status: {status}</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="btn btn-sm bg-yellow-700 text-white">
                            Update
                        </button>
                        <button className="btn btn-sm bg-red-700 text-white">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
