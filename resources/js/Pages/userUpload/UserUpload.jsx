import { useState } from "react";
import Button from "../../components/Button/Button";
import LocationPicker from "../../components/LocationPicker/LocationPicker";

const UserUpload = () => {
    const [location, setLocation] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        breed: "",
        age: "",
        gender: "",
        size: "",
        color: "",
        status: "",
        description: "",
        file: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, file: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting pet info:");
        console.log({ ...formData, location });
        // Add your form submission logic here (e.g., API call)
    };

    return (
        <div className="relative w-full min-h-screen mt-12 px-5 lg:px-20 py-8 space-y-10 flex gap-5 items-center justify-center">
            <img
                className="absolute inset-0 w-full h-full object-cover z-0 brightness-40"
                src="https://i.pinimg.com/1200x/a9/8b/2a/a98b2a90caf1286ea55ce4548bc7a624.jpg"
                alt=""
            />
            <section className="relative z-10 bg-black/50 shadow rounded-xl p-6 max-w-xl w-full">
                <h2 className="text-xl text-center font-semibold mb-4 text-white">
                    Save a pet's life
                </h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                    <div className="col-span-2">
                        <label
                            htmlFor="fileUpload"
                            className="flex flex-col items-center justify-center w-full border-2 border-dashed border-[#CED46A]/50 rounded-xl p-6 cursor-pointer hover:border-[#CED46A] transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 mb-2"
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
                            <p className="text-sm mb-1">
                                Drag & drop <span className="font-medium">images or any file</span>
                            </p>
                            <p className="text-gray-400 text-xs">
                                or <span className="underline">browse files</span> on your computer
                            </p>
                            <input
                                id="fileUpload"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                    </div>

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered bg-transparent col-span-2 w-full focus:outline-none focus:ring-0 focus:border-[#CED46A]"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="breed"
                        placeholder="Breed"
                        className="input input-bordered bg-transparent focus:outline-none focus:ring-0 focus:border-[#CED46A]"
                        value={formData.breed}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        className="input input-bordered bg-transparent focus:outline-none focus:ring-0 focus:border-[#CED46A]"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        className="input input-bordered bg-transparent focus:outline-none focus:ring-0 focus:border-[#CED46A]"
                        value={formData.gender}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="size"
                        placeholder="Size"
                        className="input input-bordered bg-transparent focus:outline-none focus:ring-0 focus:border-[#CED46A]"
                        value={formData.size}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="color"
                        placeholder="Color"
                        className="input input-bordered bg-transparent focus:outline-none focus:ring-0 focus:border-[#CED46A]"
                        value={formData.color}
                        onChange={handleChange}
                    />
                    <select
                        name="status"
                        className="select select-bordered bg-transparent focus:outline-none focus:ring-0 focus:border-[#CED46A]"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option disabled value="">Pet Status</option>
                        <option value="Available">Available</option>
                        <option value="Adopted">Adopted</option>
                        <option value="On Hold">On Hold</option>
                    </select>

                    <div className="w-full flex justify-center rounded-2xl overflow-hidden items-center col-start-1 col-end-3 min-h-[200px]">
                        <LocationPicker setLocation={setLocation} />
                    </div>

                    <textarea
                        name="description"
                        placeholder="Description"
                        className="textarea h-15 bg-transparent w-full resize-none textarea-bordered col-span-2 focus:outline-none focus:ring-0 focus:border-[#CED46A]"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>

                    <Button className="col-span-2 mx-auto" type="submit">
                        Apply For Post
                    </Button>
                </form>
            </section>
        </div>
    );
};

export default UserUpload;
