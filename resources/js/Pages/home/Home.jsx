import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePage } from "@inertiajs/react";

import Button from "../../components/Button/Button";
import Services from "./Services";
import Facilities from "./Facilities";
import PetCard from "../../components/PetCard/PetCard";
import ApplyAdoptForm from "../../components/ApplyAdoptForm/ApplyAdoptForm";
import Testimonials from "./Testimonials";
import CareAboutPets from "./CareAboutPet";
import dog from "../../../assets/bannerDog.png";
import { TypeAnimation } from "react-type-animation";
const HomePage = ({ pets }) => {
    const { auth } = usePage().props;

    console.log(auth);
    const MotionDiv = motion.div;
    return (
        <div className="flex flex-col space-y-10">


            {/* Banner Content */}
            <div
                style={{ backgroundImage: `url(${dog})` }}
                className="flex flex-col min-h-screen mt-15 bg-cover bg-center bg-no-repeat justify-center items-center px-5 lg:px-20 relative bg-zoom-out"
            >
                <div className="absolute bg-black/20 inset-0 bg-opacity-40"></div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end md:top-10 gap-10 md:gap-20 w-full">
                    {/* Social Icons */}
                    <div className="flex text-2xl cursor-pointer flex-row md:flex-col justify-center items-center text-white gap-5">
                        <a target="_blank" href="https://www.facebook.com/ummay.suzana"> <FaFacebookF className="hover:border border-blue-600 rounded-full hover:bg-blue-600 p-1 hover:text-white transition" /></a>

                        <FaInstagram className="hover:border border-red-600 rounded-full hover:bg-red-600 p-1 hover:text-white transition" />
                        <FaTwitter className="hover:border border-blue-600 rounded-full hover:bg-blue-600 p-1 hover:text-white transition" />
                    </div>

                    {/* Text & Buttons */}
                    <motion.div
                        className="flex flex-col gap-10 justify-center items-center text-center text-white md:text-left w-full md:w-2/3"
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <TypeAnimation
                            sequence={[
                                "Rescue. Adopt. Love. Find their forever home!",
                                2000,
                                "", // clear
                                500,
                            ]}
                            wrapper="h1"
                            cursor={true}
                            repeat={Infinity}
                            className="text-2xl md:text-3xl lg:text-4xl leading-tight font-bold text-white custom-banner-font"
                        />
                    </motion.div>
                </div>
                <h1 className="text-white absolute left-12 bottom-12 pb-4 animate-bounce">
                    Scroll Down ↓
                </h1>
            </div>
            {/* hjfk */}

            <div className="py-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                    Pets you can Adpot
                </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-5 mx-auto px-20 ">
                {pets
                    ?.sort(
                        (a, b) =>
                            new Date(b.created_at) - new Date(a.created_at)
                    )
                    .slice(0, 3)
                    .map((pet) => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
            </div>
            <div className="text-center">
                <a
                    href="/adopt"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <Button className="mx-auto">See All</Button>
                </a>
            </div>
            <ApplyAdoptForm></ApplyAdoptForm>
            <Facilities></Facilities>
            <CareAboutPets></CareAboutPets>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomePage;
