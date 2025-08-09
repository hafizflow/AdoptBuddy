import Button from "../../components/Button/Button";
import sideDog from "../../../assets/oneSideDog.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "@inertiajs/react";
const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });
    const MotionDiv = motion.div;

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen mt-10 flex overflow-hidden">
            <div className="flex-1 flex justify-center items-center px-5 lg:px-20 w-full">
                <MotionDiv
                    className="hero-content flex-col w-full"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl pc font-bold">
                            Login now!
                        </h1>
                    </div>
                    <div className="card bg-[#07553B]/20  w-full max-w-full shrink-0 shadow">
                        <div className="card-body">
                            <form
                                className="fieldset"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (!data.email.trim() || !data.password.trim()) {
                                        alert("Please enter both email and password");
                                        return;
                                    }
                                    post("/login");
                                }}
                            >
                                <label className="label font-bold">Email</label>
                                <input
                                    type="email"
                                    className="input focus:outline-none focus:ring-0 focus:border-[#07553B]  w-full"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
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
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="input w-full focus:outline-none focus:ring-0 focus:border-[#07553B] pr-10"
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
                                <div>
                                    <a className="link link-hover">
                                        Forgot password?
                                    </a>
                                </div>
                                <Button type="submit" className="mt-3">
                                    Login
                                </Button>
                                <div className="flex gap-5 my-2 mx-auto">
                                    <a className="">Dont have an account?</a>
                                    <a
                                        href="/register"
                                        className="link link-hover pc"
                                    >
                                        Register
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </MotionDiv>
            </div>

            <MotionDiv
                className="relative w-1/2 hidden lg:block"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <img
                    src={sideDog}
                    alt="Side Dog"
                    className="absolute top-0 -right-50 h-full object-cover"
                />
            </MotionDiv>
        </div>
    );
};

export default Login;
