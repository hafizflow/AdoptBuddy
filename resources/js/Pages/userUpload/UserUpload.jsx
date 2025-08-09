import { useState } from "react";
import { useForm } from "@inertiajs/react";
import LocationPicker from "../../components/LocationPicker/LocationPicker";
import Button from "../../components/Button/Button";

const UserUpload = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        breed: "",
        age: "",
        gender: "",
        size: "",
        color: "",
        status: "Available",
        lat: 0,
        lng: 0,
        description: "",
        images: [],
    });

    return (
        <div className="relative w-full min-h-screen mt-12 px-5 lg:px-20 py-8 space-y-10 flex gap-5 items-center justify-center">
            <img
                className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
                src="https://i.pinimg.com/1200x/a9/8b/2a/a98b2a90caf1286ea55ce4548bc7a624.jpg"
                alt=""
            />
            <section className="relative z-10 bg-white/90 shadow rounded-xl p-6 max-w-xl w-full">
                <h2 className="text-xl text-center font-bold mb-4 pc">
                    Save a pet's life
                </h2>
                <form
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        post("/post", { forceFormData: true });
                    }}
                >
                    <div className="col-span-2">
                        <label
                            htmlFor="fileUpload"
                            className="flex flex-col items-center justify-center w-full border-2 border-dashed border-[#07553B]/50 rounded-xl p-6 cursor-pointer hover:border-[#07553B] transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 pc w-10 mb-2"
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
                            <p className="text-sm pc mb-1">
                                Drag & drop{" "}
                                <span className="font-medium">
                                    images or any file
                                </span>
                            </p>
                            <p className="pc text-xs">
                                or{" "}
                                <span className="underline">browse files</span>{" "}
                                on your computer
                            </p>
                            <input
                                id="fileUpload"
                                type="file"
                                className="hidden"
                                multiple
                                onChange={(e) =>
                                    setData(
                                        "images",
                                        Array.from(e.target.files)
                                    )
                                }
                            />
                        </label>
                    </div>

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered bg-transparent col-span-2 w-full focus:outline-none focus:ring-0 focus:border-[#07553B]"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        style={{ color: "#07553B" }}
                    />
                    <input
                        type="text"
                        name="breed"
                        placeholder="Breed"
                        className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                        value={data.breed}
                        onChange={(e) => setData("breed", e.target.value)}
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                        value={data.age}
                        onChange={(e) => setData("age", e.target.value)}
                    />
                    <input
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                        value={data.gender}
                        onChange={(e) => setData("gender", e.target.value)}
                    />
                    <input
                        type="text"
                        name="size"
                        placeholder="Size"
                        className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                        value={data.size}
                        onChange={(e) => setData("size", e.target.value)}
                    />
                    <input
                        type="text"
                        name="color"
                        placeholder="Color"
                        className="input input-bordered focus:outline-none focus:ring-0 focus:border-indigo-900"
                        value={data.color}
                        onChange={(e) => setData("color", e.target.value)}
                    />

                    <div className="w-full flex justify-center items-center col-start-1 col-end-3 min-h-[200px]">
                        <LocationPicker
                            setLocation={(loc) => {
                                setData("lat", loc[0]);
                                setData("lng", loc[1]);
                            }}
                        />
                    </div>

                    <textarea
                        name="description"
                        placeholder="Description"
                        className="textarea h-15 bg-transparent w-full resize-none textarea-bordered col-span-2 focus:outline-none focus:ring-0 focus:border-[#07553B]"
                        rows={4}
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    ></textarea>
                    <Button
                        className="col-span-2 mx-auto"
                        type="submit"
                        disabled={processing}
                    >
                        Apply For Post
                    </Button>
                </form>
            </section>
        </div>
    );
};

export default UserUpload;
