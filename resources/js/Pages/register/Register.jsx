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
                        <h1 className="text-5xl text-indigo-900 font-bold">
                            Register now!
                        </h1>
                    </div>
                    <div className="card bg-indigo-50 w-full max-w-full shrink-0 shadow">
                        <div className="card-body">
                            <form
                                className="fieldset"
                                onSubmit={(e) => {
                                    e.preventDefault();
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
                                    className="input focus:outline-none focus:ring-0 focus:border-indigo-900  w-full"
                                    placeholder="Name"
                                />
                                {/* <label className="label font-bold">Phone</label>
                                <input type="phone" name="phone" id="phone" className="input focus:outline-none focus:ring-0 focus:border-indigo-900  w-full" placeholder="Phone" />
                                <label className="label font-bold">Address</label>
                                <input type="text" name="address" id="address" className="input focus:outline-none focus:ring-0 focus:border-indigo-900  w-full" placeholder="Address" /> */}
                                <label className="label font-bold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="input focus:outline-none focus:ring-0 focus:border-indigo-900  w-full"
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
                                        className="input w-full focus:outline-none focus:ring-0 focus:border-indigo-900 pr-10"
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
                                            showPassword ? "text" : "password"
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
                                        className="input w-full focus:outline-none focus:ring-0 focus:border-indigo-900 pr-10"
                                        placeholder="Confirm Password"
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
                                <Button type="submit" className="mt-3">
                                    Register
                                </Button>
                                <div className="flex gap-5 my-2 mx-auto">
                                    <a className="">Already have an account?</a>
                                    <a
                                        href="/login"
                                        className="link link-hover text-indigo-900"
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
