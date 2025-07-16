import { useState } from "react";
import Button from "../Button/Button";
import { MdSettingsApplications, MdManageHistory } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";

const AdminProfile = () => {
    const [activeSection, setActiveSection] = useState("applications");
    const [applications, setApplications] = useState([
        { id: 1, name: "John Doe", petName: "Milo", status: "Available" },
        { id: 2, name: "Jane Smith", petName: "Luna", status: "Available" },
    ]);

    const handleApplicationAction = (id, action) => {
        setApplications((prev) =>
            prev.map((app) => (app.id === id ? { ...app, status: action } : app))
        );
    };

    return (
        <div className="min-h-screen mt-16 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="bg-white shadow-md sticky top-0 z-10 flex md:flex-col justify-between md:justify-start p-3 md:p-5 md:w-64">
                {/* Admin info - only visible on md+ */}
                <div className="hidden md:block text-center mb-6">
                    <h1 className="text-2xl font-bold text-primary mb-2">Welcome back, Admin</h1>
                    <div className="bg-indigo-100 text-primary p-3 rounded-xl">
                        <p className="font-medium">Admin Name</p>
                        <p className="text-sm">admin@email.com</p>
                    </div>
                </div>

                {/* Nav buttons */}
                <nav className="flex md:flex-col gap-4 w-full justify-around md:justify-start">
                    {/* Applications */}
                    <button
                        onClick={() => setActiveSection("applications")}
                        className={`flex items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${
                            activeSection === "applications"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        <MdSettingsApplications size={24} />
                        <span className="hidden md:inline">Applications</span>
                    </button>

                    {/* Upload */}
                    <button
                        onClick={() => setActiveSection("upload")}
                        className={`flex items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${
                            activeSection === "upload"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        <IoCloudUploadOutline size={24} />
                        <span className="hidden md:inline">Upload Pet</span>
                    </button>

                    {/* Manage */}
                    <button
                        onClick={() => setActiveSection("manage")}
                        className={`flex items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${
                            activeSection === "manage"
                                ? "bg-primary text-white"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        <MdManageHistory size={24} />
                        <span className="hidden md:inline">Manage Pets</span>
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-5 lg:px-10 space-y-8">
                <div className="block md:hidden text-center mb-2">
                    <h1 className="text-xl font-bold text-primary">Welcome back, Admin</h1>
                </div>

                {/* Conditional Sections */}
                {activeSection === "applications" && (
                    <section className="bg-white shadow rounded-xl p-6">
                        <h2 className="text-xl text-center font-semibold mb-4">Adoption Applications</h2>
                        <ul className="space-y-4">
                            {applications.map((app) => (
                                <li
                                    key={app.id}
                                    className="border border-indigo-100 rounded-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center"
                                >
                                    <div>
                                        <p className="font-medium">
                                            {app.name} applied to adopt {app.petName}
                                        </p>
                                        <p className="text-sm text-gray-500">Status: {app.status}</p>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex gap-2">
                                        <button
                                            className="btn btn-sm bg-green-700 text-white"
                                            onClick={() => handleApplicationAction(app.id, "Accepted")}
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className="btn btn-sm bg-red-700 text-white"
                                            onClick={() => handleApplicationAction(app.id, "Rejected")}
                                        >
                                            Reject
                                        </button>
                                        <button className="btn btn-sm bg-blue-700 text-white">Preview</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {activeSection === "upload" && (
                    <section className="bg-white shadow rounded-xl p-6">
                        <h2 className="text-xl text-center font-semibold mb-4">Upload New Pet</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="file" className="file-input file-input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900" />
                            <input type="text" placeholder="Breed" className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900" />
                            <input type="number" placeholder="Age" className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900" />
                            <input type="text" placeholder="Gender" className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900" />
                            <input type="text" placeholder="Size" className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900" />
                            <input type="text" placeholder="Color" className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900" />
                            <select className="select select-bordered focus:outline-none focus:ring-0 focus:border-indigo-900">
                                <option disabled selected>Pet Status</option>
                                <option>Available</option>
                                <option>On Hold</option>
                                <option>Adopted</option>
                            </select>
                            <input type="text" placeholder="Location" className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900" />
                            <textarea
                                placeholder="Description"
                                className="textarea textarea-bordered md:col-span-2 focus:outline-none focus:ring-0 focus:border-indigo-900"
                                rows={4}
                            ></textarea>
                            <Button className="col-span-full">Upload Pet</Button>
                        </form>
                    </section>
                )}

                {activeSection === "manage" && (
                    <section className="bg-white shadow rounded-xl p-6">
                        <h2 className="text-xl text-center font-semibold mb-4">Manage Pets</h2>
                        <div className="space-y-4">
                            <div className="p-4 border border-indigo-100 rounded-xl flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold">Milo</h3>
                                    <p className="text-sm">Breed: Golden Retriever</p>
                                    <p className="text-sm">Status: Available</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="btn btn-sm bg-yellow-700 text-white">Update</button>
                                    <button className="btn btn-sm bg-red-700 text-white">Delete</button>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default AdminProfile;
