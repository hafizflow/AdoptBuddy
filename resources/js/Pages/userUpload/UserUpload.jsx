import Button from "../../components/Button/Button";
import { useState } from "react";
import LocationPicker from "../../components/LocationPicker/LocationPicker";

const UserUpload = () => {
    const [location, setLocation] = useState(null);
    console.log("UserUpload Location:", location);
    return (
        <div className="relative w-full  min-h-screen mt-12 px-5 lg:px-20 py-8 space-y-10 flex gap-5 items-center justify-center">
            <img
                className="absolute inset-0 w-full h-full object-cover z-0 brightness-40"
                src="https://i.pinimg.com/1200x/a9/8b/2a/a98b2a90caf1286ea55ce4548bc7a624.jpg"
                alt=""
            />
            <section className="relative z-10 bg-indigo-50 text-black shadow rounded-xl p-6 max-w-xl w-full">
                <h2 className="text-xl text-center font-semibold mb-4">
                    Save a pets life
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-2">
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
                            />
                        </label>
                    </div>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered col-span-2 w-full focus:outline-none focus:ring-0 focus:border-indigo-900"
                    />
                    <input
                        type="text"
                        placeholder="Breed"
                        className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                    />
                    <input
                        type="text"
                        placeholder="Gender"
                        className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                    />
                    <input
                        type="text"
                        placeholder="Size"
                        className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                    />
                    <input
                        type="text"
                        placeholder="Color"
                        className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                    />
                    <select className="select select-bordered focus:outline-none focus:ring-0 focus:border-indigo-900">
                        <option disabled selected>
                            Pet Status
                        </option>
                        <option>Available</option>
                        {/* <option>On Hold</option>
                        <option>Adopted</option> */}
                    </select>
                    <div className="w-full flex justify-center items-center col-start-1 col-end-3 min-h-[200px]">
                        <LocationPicker setLocation={setLocation} />
                    </div>
                    <textarea
                        placeholder="Description"
                        className="textarea h-15 w-full resize-none textarea-bordered col-span-2 focus:outline-none focus:ring-0 focus:border-indigo-900"
                        rows={4}
                    ></textarea>
                    <Button className="col-span-2 mx-auto">
                        Apply For Post
                    </Button>
                </form>
            </section>
        </div>
    );
};

export default UserUpload;
