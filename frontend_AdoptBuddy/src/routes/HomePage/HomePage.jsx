import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from '../Button/Button';
import Services from "./Services";
import Facilities from "./Facilities";
import PetCard from "../PetCard/PetCard";
import ApplyAdoptForm from "../ApplyAdoptForm/ApplyAdoptForm";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import CareAboutPets from "./CareAboutPets";;
import dog from "../../assets/dog.png";
import { TypeAnimation } from "react-type-animation";
const HomePage = () => {
    const MotionDiv = motion.div;
    return (
        <div className="flex flex-col space-y-10">
            {/* <div style={{ backgroundImage: `url(${dog})` }} className="flex min-h-screen justify-center items-center px-5 lg:px-20">
                <div className='flex text-xl cursor-pointer flex-col justify-center items-center text-center text-amber-950 gap-5'>
                    <FaFacebookF className="hover:border rounded-full hover:bg-blue-600 p-0.5 hover:text-white" />
                    <FaInstagram className="hover:border rounded-full hover:bg-red-600 p-0.5 hover:text-white" />
                    <FaTwitter className="hover:border rounded-full hover:bg-blue-600 p-0.5 hover:text-white" />
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-full'>
                    <MotionDiv
                        className='w-1/3 flex justify-center items-center'
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <img style={{ filter: 'drop-shadow(1px 1px 20px gray)' }} className='' src={pet} alt="" />
                    </MotionDiv>
                    <MotionDiv
                        className="flex flex-col gap-10 justify-center items-center text-center text-indigo-900 w-2/3"
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-left w-full leading-tight">Rescue, Adopt, Love Connecting Pets with Their Forever Homes!</h1>
                        <div className="flex flex-col md:flex-row gap-4 mt-5 w-full">
                            <Button>Adopt Now</Button>
                            <Button>Learn More</Button>
                        </div>
                    </MotionDiv>
                </div>
            </div> */}

            {/* Banner Content */}
            <div
                style={{ backgroundImage: `url(${dog})` }}
                className="flex flex-col min-h-screen mt-15 bg-cover bg-center bg-no-repeat justify-center items-center px-5 lg:px-20 relative"
            >
                <div className="absolute bg-black/20 inset-0 bg-opacity-40"></div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-end md:top-10 gap-10 md:gap-20 w-full">

                    {/* Social Icons */}
                    <div className="flex text-2xl cursor-pointer flex-row md:flex-col justify-center items-center text-white gap-5">
                        <FaFacebookF className="hover:border rounded-full hover:bg-blue-600 p-1 hover:text-white transition" />
                        <FaInstagram className="hover:border rounded-full hover:bg-red-600 p-1 hover:text-white transition" />
                        <FaTwitter className="hover:border rounded-full hover:bg-blue-600 p-1 hover:text-white transition" />
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
                                'Rescue. Adopt. Love. Find their forever home!',
                                2000,
                                '', // clear
                                500,
                            ]}
                            wrapper="h1"
                            cursor={true}
                            repeat={Infinity}
                            className="text-2xl md:text-3xl lg:text-5xl leading-tight font-bold text-white barriecito-regular"
                        />
                    </motion.div>
                </div>
                <h1 className="text-white absolute left-12 bottom-12 pb-4 animate-bounce">Scroll Down ↓</h1>
            </div>
            {/* hjfk */}

            <div className="">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Pets you can Adpot</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-3 mx-auto px-4">
                <PetCard></PetCard>
                <PetCard></PetCard>
                <PetCard></PetCard>
                <PetCard></PetCard>
            </div>
            <div className="text-center">
                <Link to='/adopt' onClick={() => { window.scrollTo(0, 0) }}><Button className="mx-auto">See All</Button></Link>
            </div>
            <ApplyAdoptForm></ApplyAdoptForm>
            <Facilities></Facilities>
            <CareAboutPets></CareAboutPets>
            <Services></Services>
            <Testimonials></Testimonials>
        </div >
    );
};

export default HomePage;