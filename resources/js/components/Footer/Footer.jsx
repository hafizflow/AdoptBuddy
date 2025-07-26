import { FaDribbble, FaInstagram, FaBehance, FaLinkedin } from "react-icons/fa";
import footerDog from "../../../assets/footerPet.png";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6 md:space-y-12">
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl space-y-4 md:space-y-0">
                    <div>
                        <h1>AdoptBuddy</h1>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <FaDribbble className="text-xl hover:text-purple-400 cursor-pointer" />
                        <FaInstagram className="text-xl hover:text-purple-400 cursor-pointer" />
                        <FaBehance className="text-xl hover:text-purple-400 cursor-pointer" />
                        <FaLinkedin className="text-xl hover:text-purple-400 cursor-pointer" />
                        <button
                            onClick={() => {
                                window.location.href = "/adopt";
                                window.scrollTo(0, 0);
                            }}
                            className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
                        >
                            Adopt Pet
                        </button>
                        <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
                            Special Pets
                        </button>
                        <button className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
                            Demos
                        </button>
                    </div>
                </div>

                <div className="text-center flex flex-col md:flex-row justify-between gap-5 text-sm text-gray-400 space-y-1">
                    <p>© AdoptBuddy. ALL RIGHTS RESERVED</p>
                    <p>+880 1700610483</p>
                    <p>
                        Visit :{" "}
                        <a href="/" className="underline">
                            adoptbuddy.com
                        </a>
                    </p>
                </div>
                <div className="relative mt-18 md:mt-34 w-full flex justify-center items-center">
                    <h1 className="text-6xl md:text-9xl font-extrabold text-white z-0">
                        <span className="opacity-60">HAP</span>
                        <span className="opacity-100">PY </span>
                        <span className="opacity-60">PET</span>
                    </h1>
                    <img
                        src={footerDog}
                        alt="Petcare Dog"
                        className="absolute z-10 w-54 md:w-[400px] -bottom-10"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
