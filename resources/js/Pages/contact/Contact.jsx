import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const MotionDiv = motion.div;
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };
    return (
        <div
            className="min-h-screen mt-16 bg-cover bg-center flex flex-col gap-5 md:flex-row  items-center justify-center px-4 py-10"
            style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2022/10/28/10/22/cat-7552840_1280.jpg')`,
            }}
        >
            <MotionDiv
                className="bg-white/10 md:w-1/5 backdrop-blur-md text-white h-full rounded-2xl p-6 space-y-4 shadow-2xl border border-white/20"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-center text-xl">Contact Us</h1>
                <p>
                    Not sure what you need? The team at AdoptBuddy will be happy
                    to listen to you and suggest event ideas you hadnt
                    considered.
                </p>
                <p>info@adoptbuddy.com</p>
                <p>Support : +880 1700610483</p>
            </MotionDiv>
            <MotionDiv
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-md text-white w-full max-w-2xl rounded-2xl p-6 space-y-4 shadow-2xl border border-white/20"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-center text-xl">Lets have a chat</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            className="w-full mt-1 p-2 bg-white/10 text-white rounded-md border border-white/20 placeholder-gray-300 focus:outline-none"
                            placeholder="Your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-sm">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            className="w-full mt-1 p-2 bg-white/10 text-white rounded-md border border-white/20 placeholder-gray-300 focus:outline-none"
                            placeholder="Your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full mt-1 p-2 bg-white/10 text-white rounded-md border border-white/20 placeholder-gray-300 focus:outline-none"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="text-sm">Phone number</label>
                        <input
                            type="text"
                            name="phone"
                            className="w-full mt-1 p-2 bg-white/10 text-white rounded-md border border-white/20 placeholder-gray-300 focus:outline-none"
                            placeholder="Your phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="text-sm">Message</label>
                    <textarea
                        name="message"
                        rows="4"
                        className="w-full mt-1 p-2 bg-white/10 text-white rounded-md border border-white/20 placeholder-gray-300 focus:outline-none"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition font-semibold"
                >
                    Send message
                </button>
            </MotionDiv>
        </div>
    );
};

export default Contact;
