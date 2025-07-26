import { useState } from "react";
import Button from "../../components/Button/Button";
import { MdSettingsApplications, MdManageHistory } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useForm } from "@inertiajs/react";
import ManageCard from "../../components/ManageCard/ManageCard";

const AdminProfile = ({ pets }) => {
    const [activeSection, setActiveSection] = useState("applications");
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        breed: "",
        age: "",
        gender: "",
        size: "",
        color: "",
        status: "",
        location: "",
        description: "",
        images: null,
    });

    const [applications, setApplications] = useState([
        { id: 1, name: "John Doe", petName: "Milo", status: "Available" },
        { id: 2, name: "Jane Smith", petName: "Luna", status: "Available" },
    ]);

    const handleApplicationAction = (id, action) => {
        setApplications((prev) =>
            prev.map((app) =>
                app.id === id ? { ...app, status: action } : app
            )
        );
    };

    // Handling file drop

    const [dragActive, setDragActive] = useState(false);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setData("images", e.dataTransfer.files);
        }
    }
    const handleChange = (e) => {
        setData("images", e.target.files);
    }



    return (
        <div className="min-h-screen mt-16 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="bg-white shadow-md sticky top-0 z-10 flex md:flex-col justify-between md:justify-start p-3 md:p-5 md:w-64">
                {/* Admin info - only visible on md+ */}
                <div className="hidden md:block text-center mb-6">
                    <h1 className="text-2xl font-bold text-primary mb-2">
                        Welcome back, Admin
                    </h1>
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
                        className={`flex cursor-pointer items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${
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
                        className={`flex  cursor-pointer items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${
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
                        className={`flex cursor-pointer items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${
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
                    <h1 className="text-xl font-bold text-primary">
                        Welcome back, Admin
                    </h1>
                </div>

                {/* Conditional Sections */}
                {activeSection === "applications" && (
                    <section className="bg-white shadow rounded-xl p-6">
                        <h2 className="text-xl text-center font-semibold mb-4">
                            Adoption Applications
                        </h2>
                        <ul className="space-y-4">
                            {applications.map((app) => (
                                <li
                                    key={app.id}
                                    className="border border-indigo-100 rounded-lg p-4 flex flex-col md:flex-row md:justify-between md:items-center"
                                >
                                    <div>
                                        <p className="font-medium">
                                            {app.name} applied to adopt{" "}
                                            {app.petName}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Status: {app.status}
                                        </p>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex gap-2">
                                        <button
                                            className="btn p-5 text-xl btn-sm bg-[#fab74c] hover:bg-[#fa7070] text-black hover:text-white"
                                            onClick={() =>
                                                handleApplicationAction(
                                                    app.id,
                                                    "Accepted"
                                                )
                                            }
                                        >
                                            Accept
                                        </button>
                                        <button
                                            className="btn btn-sm bg-red-700 text-white"
                                            onClick={() =>
                                                handleApplicationAction(
                                                    app.id,
                                                    "Rejected"
                                                )
                                            }
                                        >
                                            Reject
                                        </button>
                                        <button className="btn btn-sm bg-blue-700 text-white">
                                            Preview
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {activeSection === "upload" && (
                    <section className="bg-white shadow rounded-xl p-6">
                        <h2 className="text-xl text-center font-semibold mb-4">
                            Upload New Pet
                        </h2>
                        <form
                            onDragEnter={() => setDragActive(true)}
                            onDragOver={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                            onDrop={handleDrop}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                post("/post", {
                                    forceFormData: true,
                                });
                            }}
                        >
                            <div className="md:col-span-2">
                                <label
                                    htmlFor="fileUpload"
                                    className="flex flex-col items-center justify-center w-full border-2 border-dashed border-indigo-300 rounded-xl p-6 cursor-pointer hover:border-indigo-500 transition"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10 text-indigo-400 mb-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 16V4m0 0L3.5 7.5M7 4l3.5 3.5M7 20h10M17 16v4M17 20l3.5-3.5M17 20l-3.5-3.5"
                                        />
                                    </svg>
                                    <p className="text-gray-600 text-sm mb-1">
                                        Drag & drop{" "}
                                        <span className="text-indigo-600 font-medium">
                                            images or any file
                                        </span>
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        or{" "}
                                        <span className="underline text-indigo-500">
                                            browse files
                                        </span>{" "}
                                        on your computer
                                    </p>
                                    <input
                                        id="fileUpload"
                                        type="file"
                                        className="hidden"
                                        multiple
                                        // onChange={(e) =>
                                        //     setData("images", e.target.files)
                                        // }
                                        onChange={handleChange}
                                    />
                                </label>
                                {dragActive && (
                                    <div
                                        className="absolute inset-0 z-10"
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                    ></div>
                                )}
                            </div>
                            <input
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                type="text"
                                placeholder="Name"
                                className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                            />
                            <input
                                value={data.breed}
                                onChange={(e) =>
                                    setData("breed", e.target.value)
                                }
                                type="text"
                                placeholder="Breed"
                                className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                            />
                            <input
                                value={data.age}
                                onChange={(e) => setData("age", e.target.value)}
                                type="text"
                                placeholder="Age"
                                className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                            />
                            <input
                                value={data.gender}
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                type="text"
                                placeholder="Gender"
                                className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                            />
                            <input
                                value={data.size}
                                onChange={(e) =>
                                    setData("size", e.target.value)
                                }
                                type="text"
                                placeholder="Size"
                                className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                            />
                            <input
                                value={data.color}
                                onChange={(e) =>
                                    setData("color", e.target.value)
                                }
                                type="text"
                                placeholder="Color"
                                className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                            />
                            <select
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="select select-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                            >
                                <option value="" disabled>
                                    Pet Status
                                </option>
                                <option value="Available">Available</option>
                                <option value="On Hold">On Hold</option>
                                <option value="Adopted">Adopted</option>
                            </select>
                            <input
                                value={data.location}
                                onChange={(e) =>
                                    setData("location", e.target.value)
                                }
                                type="text"
                                placeholder="Location"
                                className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                            />
                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                placeholder="Description"
                                className="textarea textarea-bordered md:col-span-2 focus:outline-none focus:ring-0 focus:border-indigo-900"
                                rows={4}
                            ></textarea>
                            <Button
                                className="col-span-full"
                                type="submit"
                                disabled={processing}
                            >
                                Upload Pet
                            </Button>
                        </form>
                    </section>
                )}

                {activeSection === "manage" && (
                    <section className="bg-white shadow rounded-xl p-6">
                        <h2 className="text-xl text-center font-semibold mb-4">
                            Manage Pets
                        </h2>
                        {pets.map((pet) => (
                            <ManageCard key={pet.id} pet={pet} />
                        ))}
                    </section>
                )}
            </main>
        </div>
    );
};

export default AdminProfile;
