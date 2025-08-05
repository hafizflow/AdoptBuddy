import { useState } from "react";
import Button from "../../components/Button/Button";
import { MdSettingsApplications, MdManageHistory } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useForm } from "@inertiajs/react";
import ManageCard from "../../components/ManageCard/ManageCard";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import LocationPickerLeaflet from "../../components/LocationPicker/LocationPicker";

const AdminProfile = ({ pets }) => {
    // preview application
    const [previewApplication, setPreviewApplication] = useState(null);
    // preview uploaded image
    const [previewUrls, setPreviewUrls] = useState([]);

    const [activeSection, setActiveSection] = useState("applications");
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        breed: "",
        age: "",
        gender: "",
        size: "",
        color: "",
        status: "",
        lat: 0,
        lng: 0,
        description: "",
        images: [],
    });

    const [applications, setApplications] = useState([
        { id: 1, name: "John Doe", petName: "Milo", status: "Available" },
        { id: 2, name: "Jane Smith", petName: "Luna", status: "Available" },
        { id: 2, name: "Jane Smith", petName: "Luna", status: "Available" },
        { id: 2, name: "Jane Smith", petName: "Luna", status: "Available" },
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
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const files = Array.from(e.dataTransfer.files);
            setData("images", files);
            setPreviewUrls(files.map((file) => URL.createObjectURL(file)));
        }
    };
    const handleChange = (e) => {
        const files = Array.from(e.target.files);
        setData("images", files);
        setPreviewUrls(files.map((file) => URL.createObjectURL(file)));
    };

    return (
        <div className="min-h-screen mt-16 flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="bg-sc shadow-md sticky top-0 z-10 flex md:flex-col justify-between md:justify-start p-3 md:p-5 md:w-64">
                {/* Admin info - only visible on md+ */}
                <div className="hidden md:block text-center mb-6">
                    <h1 className="text-2xl font-bold pc mb-2">
                        Welcome back, Admin
                    </h1>
                    <div className="bg-sc pc p-3 rounded-xl">
                        <p className="font-medium">Admin Name</p>
                        <p className="text-sm">admin@email.com</p>
                    </div>
                </div>

                {/* Nav buttons */}
                <nav className="flex md:flex-col gap-4 w-full justify-around md:justify-start">
                    {/* Applications */}
                    <button
                        onClick={() => setActiveSection("applications")}
                        className={`flex cursor-pointer items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${activeSection === "applications"
                            ? "bg-pc sc"
                            : "hover:bg-gray-100"
                            }`}
                    >
                        <MdSettingsApplications size={24} />
                        <span className="hidden md:inline">Applications</span>
                    </button>

                    {/* Upload */}
                    <button
                        onClick={() => setActiveSection("upload")}
                        className={`flex  cursor-pointer items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${activeSection === "upload"
                            ? "bg-pc sc"
                            : "hover:bg-gray-100"
                            }`}
                    >
                        <IoCloudUploadOutline size={24} />
                        <span className="hidden md:inline">Upload Pet</span>
                    </button>

                    {/* Manage */}
                    <button
                        onClick={() => setActiveSection("manage")}
                        className={`flex cursor-pointer items-center justify-center md:justify-start gap-2 w-full px-4 py-2 rounded-lg font-medium transition ${activeSection === "manage"
                            ? "bg-pc sc"
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
                        <ul className="space-y-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {applications.map((app) => (
                                <li
                                    key={app.id}
                                    className="w-full border border-[#CED46A]  rounded-lg p-2 flex flex-col items-center gap-5"
                                >
                                    <div className="md:text-xl">
                                        <p className="font-medium">
                                            <span className="pc">
                                                {app.name}
                                            </span>{" "}
                                            applied to adopt{" "}
                                            <span className="pc">
                                                {app.petName}
                                            </span>
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            From: {app.status}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap gap-2 justify-center">
                                        <button
                                            className="text-xs px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-white cursor-pointer"
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
                                            className="text-xs px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                                            onClick={() =>
                                                handleApplicationAction(
                                                    app.id,
                                                    "Rejected"
                                                )
                                            }
                                        >
                                            Reject
                                        </button>
                                        <button
                                            className="text-xs px-3 py-1 rounded bg-gray-600 hover:bg-gray-700 text-white cursor-pointer"
                                            onClick={() =>
                                                setPreviewApplication(app)
                                            }
                                        >
                                            Preview
                                        </button>
                                    </div>

                                    {/* Preview Modal */}
                                    {previewApplication?.id === app.id && (
                                        <div
                                            className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
                                            onClick={() =>
                                                setPreviewApplication(null)
                                            }
                                        >
                                            <div
                                                className="bg-sc rounded-xl shadow-lg p-6 w-11/12 max-w-2xl relative"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                <button
                                                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl"
                                                    onClick={() =>
                                                        setPreviewApplication(
                                                            null
                                                        )
                                                    }
                                                >
                                                    ✕
                                                </button>

                                                <h3 className="text-xl font-semibold mb-4 text-center">
                                                    Application Preview
                                                </h3>

                                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                                    {/* Pet Image */}
                                                    <img
                                                        className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover"
                                                        src="https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863"
                                                        alt="pet"
                                                    />

                                                    {/* Info Section */}
                                                    <div className="flex flex-col gap-6 w-full">
                                                        {/* Applicant Info */}
                                                        <div className="flex flex-col md:flex-row justify-between gap-4">
                                                            <div className="flex flex-col gap-2">
                                                                <h1 className="font-bold text-xl flex items-center gap-2">
                                                                    <FaRegUser className="text-gray-600" />
                                                                    {
                                                                        previewApplication.name
                                                                    }
                                                                </h1>
                                                                <p className="flex items-center gap-2 text-gray-700">
                                                                    <MdOutlineEmail className="text-gray-600" />
                                                                    anjumhossain@gmail.com
                                                                </p>
                                                                <p className="flex items-center gap-2 text-gray-700">
                                                                    <IoLocationOutline className="text-gray-600" />
                                                                    Savar, Dhaka
                                                                </p>
                                                            </div>

                                                            <div className="flex flex-col gap-2">
                                                                <p className="flex items-center gap-2 text-gray-700">
                                                                    <IoCallOutline className="text-gray-600" />
                                                                    01700610483
                                                                </p>
                                                                <div>
                                                                    <p className=" text-gray-800">
                                                                        Message:
                                                                    </p>
                                                                    <span className="text-gray-700 font-semibold">
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit amet
                                                                        consectetur
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Pet Info */}
                                                        <div>
                                                            <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                                                                <IoMdInformationCircleOutline className="text-gray-600 mr-2" />
                                                                Pet Info
                                                            </h2>
                                                            <div className="grid grid-cols-2 gap-4 text-gray-700">
                                                                <div>
                                                                    <p>Name:{" "}
                                                                        <strong>{
                                                                            previewApplication.petName
                                                                        }</strong>
                                                                    </p>
                                                                    <p>

                                                                        Breed:
                                                                        <strong> {" "}</strong>

                                                                    </p>
                                                                    <p>

                                                                        Age:
                                                                        <strong>  {" "}</strong>

                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p>

                                                                        Gender:
                                                                        <strong>   {" "}</strong>

                                                                    </p>
                                                                    <p>

                                                                        Size:
                                                                        <strong> {" "}</strong>

                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {activeSection === "upload" && (
                    <section className="bg-white shadow rounded-xl max-w-3xl mx-auto p-6">
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
                            encType="multipart/form-data"
                            className="grid h-full grid-cols-1 md:grid-cols-2 gap-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                post("/post", {
                                    forceFormData: true,
                                });
                            }}
                        >
                            {previewUrls.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                                    {previewUrls.map((url, idx) => (
                                        <div
                                            key={idx}
                                            className="w-full aspect-square border rounded overflow-hidden shadow"
                                        >
                                            <img
                                                src={url}
                                                alt={`preview-${idx}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="md:col-span-2">
                                <label
                                    htmlFor="fileUpload"
                                    className="flex flex-col items-center justify-center w-full border-2 border-dashed border-[#07553B] rounded-xl p-6 cursor-pointer hover:border-[#CED46A] transition"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10 pc mb-2"
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
                                        <span className="pc font-medium">
                                            images or any file
                                        </span>
                                    </p>
                                    <p className="text-gray-400 text-xs">
                                        or{" "}
                                        <span className="underline pc">
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
                                className="input w-full col-start-1 col-end-3 input-bordered focus:outline-none focus:ring-0 focus:border-[#07553B]"
                            />
                            <input
                                value={data.breed}
                                onChange={(e) =>
                                    setData("breed", e.target.value)
                                }
                                type="text"
                                placeholder="Breed"
                                className="input w-full input-bordered focus:outline-none focus:ring-0 focus:border-[#07553B]"
                            />
                            <input
                                value={data.age}
                                onChange={(e) => setData("age", e.target.value)}
                                type="text"
                                placeholder="Age"
                                className="input w-full input-bordered focus:outline-none focus:ring-0 focus:border-[#07553B]"
                            />
                            <input
                                value={data.gender}
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                                type="text"
                                placeholder="Gender"
                                className="input w-full input-bordered focus:outline-none focus:ring-0 focus:border-[#07553B]"
                            />
                            <input
                                value={data.size}
                                onChange={(e) =>
                                    setData("size", e.target.value)
                                }
                                type="text"
                                placeholder="Size"
                                className="input w-full input-bordered focus:outline-none focus:ring-0 focus:border-[#07553B]"
                            />
                            <input
                                value={data.color}
                                onChange={(e) =>
                                    setData("color", e.target.value)
                                }
                                type="text"
                                placeholder="Color"
                                className="input w-full input-bordered focus:outline-none focus:ring-0 focus:border-[#07553B]"
                            />
                            <select
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="select w-full select-bordered focus:outline-none focus:ring-0 focus:border-[#07553B] cursor-pointer"
                            >
                                <option value="Available">Available</option>
                                <option value="On Hold">On Hold</option>
                                <option value="Adopted">Adopted</option>
                            </select>
                            <div className="h-full min-h-[200px] col-start-1 col-end-3 w-full flex flex-col items-center ">
                                <label className="w-full">Location</label>
                                <LocationPickerLeaflet
                                    setLocation={(val) => {
                                        console.log("Location set:", val);
                                        setData("lat", val[0]);
                                        setData("lng", val[1]);
                                    }}
                                />
                            </div>
                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                placeholder="Description"
                                className="textarea w-full textarea-bordered md:col-span-2 focus:outline-none focus:ring-0 focus:border-[#07553B] resize-none"
                                rows={3}
                            ></textarea>
                            <Button
                                className="col-span-full w-1/2 mx-auto"
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
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            {Array.isArray(pets) &&
                                pets.map((pet) => (
                                    <ManageCard key={pet.id} pet={pet} />
                                ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default AdminProfile;
