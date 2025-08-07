import { useForm } from "@inertiajs/react";

const ApplyAdoptForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        pet_before: false,
        message: "",
        applied_pet_name: "anjum the dobi do",
        pet_id: 13,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/adopt/apply", {
            forceFormData: true,
            onSuccess: () => {
                document.getElementById("my_modal_5").close();
                reset();
            },
        });
    };

    return (
        <div>
            <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box bg-indigo-50 text-black max-w-2xl">
                    <h3 className="font-bold text-xl text-center mb-4">
                        Apply To Adopt
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            value={data.name}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none focus:ring-0 focus:border-indigo-900"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={data.email}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none focus:ring-0 focus:border-indigo-900"
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            required
                            value={data.phone}
                            onChange={handleChange}
                            className="input input-bordered w-full focus:outline-none focus:ring-0 focus:border-indigo-900"
                        />

                        <textarea
                            name="address"
                            placeholder="Address"
                            required
                            rows={2}
                            value={data.address}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full h-20 resize-none focus:outline-none focus:ring-0 focus:border-indigo-900"
                        />

                        <div>
                            <label className="block mb-1 font-medium">
                                Have you nourished a pet before?
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="pet_before"
                                        value={true}
                                        checked={data.pet_before === true}
                                        onChange={() =>
                                            setData("pet_before", true)
                                        }
                                        required
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="pet_before"
                                        value={false}
                                        checked={data.pet_before === false}
                                        onChange={() =>
                                            setData("pet_before", false)
                                        }
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        <textarea
                            name="message"
                            placeholder="Why do you want to adopt?"
                            rows={3}
                            value={data.message}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full h-20 resize-none focus:outline-none focus:ring-0 focus:border-indigo-900"
                            required
                        />

                        <div className="modal-action">
                            <button
                                type="submit"
                                className="btn bg-green-700 text-white"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    document
                                        .getElementById("my_modal_5")
                                        .close()
                                }
                                className="btn bg-red-700 text-white"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default ApplyAdoptForm;
