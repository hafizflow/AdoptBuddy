
import { motion } from "framer-motion";
import oneSide from "../../assets/oneSideDog.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
const Register = () => {
    const MotionDiv = motion.div;
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="bg-[#f9f8eb] min-h-screen flex overflow-hidden">
            <MotionDiv className="relative w-1/2 hidden lg:block"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                <img
                    src={oneSide}
                    alt="Side Dog"
                    className="absolute top-0 -left-60 h-full object-cover"
                />
            </MotionDiv>
            <div className="flex-1 flex justify-center items-center px-5 lg:px-20 w-full">
                <MotionDiv className="hero-content flex-col w-full"
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-full shrink-0 shadow">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name="name" id="name" className="input  w-full" placeholder="Name" />
                                <label className="label">Phone</label>
                                <input type="phone" name="phone" id="phone" className="input  w-full" placeholder="Phone" />
                                <label className="label">Address</label>
                                <input type="text" name="address" id="address" className="input  w-full" placeholder="Address" />
                                <label className="label">Email</label>
                                <input type="email" name="email" id="email" className="input  w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className="relative w-full">
                                    <input
                                        type={showPassword ? "text" : "password"} name="password" id="password" className="input w-full pr-10"
                                        placeholder="Password" />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-1/2 right-3 transform  -translate-y-1/2 text-gray-500 cursor-pointer z-10"
                                    >
                                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                    </button>
                                </div>
                                <Button className="mt-3">Register</Button>
                                <div className="flex gap-5 my-2 mx-auto">
                                    <a className="">Already have an account?</a>
                                    <Link to='/login' className="link link-hover text-amber-950">Login</Link>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </MotionDiv>
            </div>
        </div>
    );
};

export default Register;