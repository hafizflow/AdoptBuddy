import { useState } from "react";


const ApplyAdoptForm = () => {
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            phone: "",
            address: "",
            nourishedBefore: "",
            reason: "",
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // send data to backend here
        document.getElementById("my_modal_5").close();
    };

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box max-w-2xl">
                    <h3 className="font-bold text-xl mb-4">Apply To Adopt</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />


                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />


                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />


                        <textarea
                            name="address"
                            placeholder="Address"
                            required
                            rows={2}
                            value={formData.address}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                        />


                        <div>
                            <label className="block mb-1 font-medium">
                                Have you nourished a pet before?
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="nourishedBefore"
                                        value="Yes"
                                        checked={formData.nourishedBefore === "Yes"}
                                        onChange={handleChange}
                                        required
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="nourishedBefore"
                                        value="No"
                                        checked={formData.nourishedBefore === "No"}
                                        onChange={handleChange}
                                    />
                                    No
                                </label>
                            </div>
                        </div>


                        <textarea
                            name="reason"
                            placeholder="Why do you want to adopt?"
                            rows={3}
                            value={formData.reason}
                            onChange={handleChange}
                            className="textarea textarea-bordered w-full"
                            required
                        />

                        <div className="modal-action">
                            <button type="submit" className="btn bg-green-600 text-white">Submit</button>
                            <button
                                type="button"
                                onClick={() => document.getElementById("my_modal_5").close()}
                                className="btn bg-red-600 text-white"
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