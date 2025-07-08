import { useState } from "react";
import Button from "../Button/Button";


const AdminProfile = () => {
    const [applications, setApplications] = useState([
        {
            id: 1,
            name: "John Doe",
            petName: "Milo",
            status: "Available",
        },
        {
            id: 2,
            name: "Jane Smith",
            petName: "Luna",
            status: "Available",
        },
    ]);

    const handleApplicationAction = (id, action) => {
        setApplications((prev) =>
            prev.map((app) =>
                app.id === id ? { ...app, status: action } : app
            )
        );
    };
    return (
        <div className="bg-[#f9f8eb] min-h-screen px-5 lg:px-20 py-8 space-y-10">
            <h1 className="text-3xl font-bold text-center">Welcome back, Admin</h1>

            {/* Notification Section */}
            <section className="bg-white shadow-md rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Adoption Applications</h2>
                <ul className="space-y-4">
                    {applications.map((app) => (
                        <li
                            key={app.id}
                            className="border rounded-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center"
                        >
                            <div>
                                <p className="font-medium">{app.name} applied to adopt {app.petName}</p>
                                <p className="text-sm text-gray-500">Status: {app.status}</p>
                            </div>
                            <div className="mt-2 md:mt-0 flex gap-2">
                                <button
                                    className="btn btn-sm bg-green-500 text-white"
                                    onClick={() => handleApplicationAction(app.id, "Accepted")}
                                >
                                    Accept
                                </button>
                                <button
                                    className="btn btn-sm bg-red-500 text-white"
                                    onClick={() => handleApplicationAction(app.id, "Rejected")}
                                >
                                    Reject
                                </button>
                                <button className="btn btn-sm bg-blue-500 text-white">Preview</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Pet Upload Form */}
            <section className="bg-white shadow-md rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Upload New Pet</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="file" className="file-input file-input-bordered" />
                    <input type="text" placeholder="Breed" className="input input-bordered" />
                    <input type="number" placeholder="Age" className="input input-bordered" />
                    <input type="text" placeholder="Gender" className="input input-bordered" />
                    <input type="text" placeholder="Size" className="input input-bordered" />
                    <input type="text" placeholder="Color" className="input input-bordered" />
                    <select className="select select-bordered">
                        <option disabled selected>Pet Status</option>
                        <option>Available</option>
                        <option>On Hold</option>
                        <option>Adopted</option>
                    </select>
                    <input type="text" placeholder="Location" className="input input-bordered" />
                    <textarea
                        placeholder="Description"
                        className="textarea textarea-bordered md:col-span-2"
                        rows={4}
                    ></textarea>
                    <Button className="col-span-full">Upload Pet</Button>
                </form>
            </section>

            {/* Pet Management Section */}
            <section className="bg-white shadow-md rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Manage Pets</h2>
                <div className="space-y-4">
                    <div className="p-4 border rounded-xl flex justify-between items-center">
                        <div>
                            <h3 className="font-bold">Milo</h3>
                            <p className="text-sm">Breed: Golden Retriever</p>
                            <p className="text-sm">Status: Available</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="btn btn-sm bg-yellow-500 text-white">Update</button>
                            <button className="btn btn-sm bg-red-600 text-white">Delete</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminProfile;