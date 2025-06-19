
import { motion } from "framer-motion";
import oneSide from "../../assets/oneSideDog.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const Register = () => {
    console.log("This is from register page");
    return (
        <div className="bg-[#f9f8eb] min-h-screen flex overflow-hidden">
            <motion.div className="relative w-1/2 hidden lg:block"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                <img
                    src={oneSide}
                    alt="Side Dog"
                    className="absolute top-0 -left-60 h-full object-cover"
                />
            </motion.div>
            <div className="flex-1 flex justify-center items-center px-5 lg:px-20 w-full">
                <motion.div className="hero-content flex-col w-full"
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-full shrink-0 shadow-xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input  w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                                <Button>Register</Button>
                                <div className="flex gap-5 my-2">
                                    <a className="">Already have an account?</a>
                                    <Link to='/login'><a className="link link-hover text-amber-950">Login</a></Link>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Register;