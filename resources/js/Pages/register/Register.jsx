import { motion } from "framer-motion";
import oneSide from "../../../assets/oneSideDog.png";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "@inertiajs/react";
const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const MotionDiv = motion.div;
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <div className="min-h-screen flex mt-10 overflow-hidden">
            <MotionDiv
                className="relative w-1/2 hidden lg:block"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={oneSide}
                    alt="Side Dog"
                    className="absolute top-0 -left-60 h-full object-cover"
                />
            </MotionDiv>
            <div className="flex-1 flex justify-center items-center px-5 lg:px-20 w-full">
                <MotionDiv
                    className="hero-content flex-col w-full"
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-[#D92C54] font-bold">
                            Register now!
                        </h1>
                    </div>
                    <div className="card bg-[#D92C54]/10 w-full max-w-full shrink-0 shadow">
                        <div className="card-body">
                            <form
                                className="fieldset"
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    const passwordRegex =
                                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^(){}[\]<>\-_+=~])[A-Za-z\d@$!%*?&#^(){}[\]<>\-_+=~]{8,}$/;

                                    if (!data.name.trim() ||
                                        !data.email.trim() ||
                                        !data.password.trim() ||
                                        !data.password_confirmation.trim()) {
                                        alert("Please fill in all fields.");
                                        return;
                                    }

                                    if (data.password !== data.password_confirmation) {
                                        alert("Passwords do not match.");
                                        return;
                                    }

                                    if (!passwordRegex.test(data.password)) {
                                        alert("Password must be at least 8 characters long and include uppercase, lowercase, number and special character.");
                                        return;
                                    }

                                    post("/register");
                                }}
                            >
                                <label className="label font-bold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="input focus:outline-none focus:ring-0 focus:border-[#D92C54]  w-full"
                                    placeholder="Name"
                                />

                                <label className="label font-bold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="input focus:outline-none focus:ring-0 focus:border-[#D92C54]  w-full"
                                    placeholder="Email"
                                />
                                <label className="label font-bold">
                                    Password
                                </label>
                                <div className="relative w-full">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        id="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="input w-full focus:outline-none focus:ring-0 focus:border-[#D92C54] pr-10"
                                        placeholder="Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute top-1/2 right-3 transform  -translate-y-1/2 text-gray-500 cursor-pointer z-10"
                                    >
                                        {showPassword ? (
                                            <FiEyeOff size={20} />
                                        ) : (
                                            <FiEye size={20} />
                                        )}
                                    </button>
                                </div>
                                <label className="label font-bold">
                                    Confirm Password
                                </label>
                                <div className="relative w-full">
                                    <input
                                        type={
                                            showConfirmPassword ? "text" : "password"
                                        }
                                        value={data.password_confirmation}
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        name="password_confirmation"
                                        id="password_confirmation"
                                        className="input w-full focus:outline-none focus:ring-0 focus:border-[#D92C54] pr-10"
                                        placeholder="Confirm Password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                        className="absolute top-1/2 right-3 transform  -translate-y-1/2 text-gray-500 cursor-pointer z-10"
                                    >
                                        {showConfirmPassword ? (
                                            <FiEyeOff size={20} />
                                        ) : (
                                            <FiEye size={20} />
                                        )}
                                    </button>
                                </div>
                                <Button type="submit" className="mt-3">
                                    Register
                                </Button>
                                <div className="flex gap-5 my-2 mx-auto">
                                    <a className="">Already have an account?</a>
                                    <a
                                        href="/login"
                                        className="link link-hover text-[#D92C54]"
                                    >
                                        Login
                                    </a>
                                </div>
                            </form>

                        </div>
                    </div>
                </MotionDiv>
            </div>
        </div>
    );
};

export default Register;
