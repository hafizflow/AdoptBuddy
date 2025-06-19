import Button from "../Button/Button";
import sideDog from "../../assets/oneSideDog.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-[#f9f8eb] min-h-screen flex overflow-hidden">
            <div className="flex-1 flex justify-center items-center px-5 lg:px-20 w-full">
                <motion.div className="hero-content flex-col w-full"
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-full shrink-0 shadow-xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input  w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                                <div>
                                    <a className="link link-hover">Forgot password?</a>
                                </div>
                                <Button>Login</Button>
                                <div className="flex gap-5 my-2">
                                    <a className="">Dont have an account?</a>
                                    <Link to='/register'><a className="link link-hover text-amber-950">Register</a></Link>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div className="relative w-1/2 hidden lg:block"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                <img
                    src={sideDog}
                    alt="Side Dog"
                    className="absolute top-0 -right-50 h-full object-cover"
                />
            </motion.div>
        </div>
    );
};

export default Login;
