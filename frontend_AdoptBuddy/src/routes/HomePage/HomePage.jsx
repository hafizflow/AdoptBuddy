import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import pet from '../../assets/banner.png';
import Button from '../Button/Button';
import Services from "./Services";
import Facilities from "./Facilities";
import PetCard from "../PetCard/PetCard";
import ApplyAdoptForm from "../ApplyAdoptForm/ApplyAdoptForm";
import { Link } from "react-router-dom";
const HomePage = () => {
    const MotionDiv = motion.div;
    return (
        <div className="bg-[#f9f8eb] flex flex-col space-y-10">
            <div className="flex min-h-screen justify-center items-center px-5 lg:px-20">
                <div className='flex text-xl cursor-pointer flex-col justify-center items-center text-center text-amber-950 gap-5'>
                    <FaFacebookF className="hover:border rounded-full hover:bg-blue-600 p-0.5 hover:text-white" />
                    <FaInstagram className="hover:border rounded-full hover:bg-red-600 p-0.5 hover:text-white" />
                    <FaTwitter className="hover:border rounded-full hover:bg-blue-600 p-0.5 hover:text-white" />
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-10 w-full'>
                    <MotionDiv
                        className='w-1/3 flex justify-center items-center'
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <img className='' src={pet} alt="" />
                    </MotionDiv>
                    <MotionDiv
                        className="flex flex-col gap-10 justify-center items-center text-center text-amber-950 w-2/3"
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl text-left w-full leading-tight">Rescue, Adopt, Love <br /> Connecting Pets with <br /> Their Forever Homes!</h1>
                        <div className="flex flex-col md:flex-row gap-4 mt-5 w-full">
                            <Button>Adopt Now</Button>
                            <Button>Learn More</Button>
                        </div>
                    </MotionDiv>
                </div>
            </div>
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
            <Services></Services>
        </div>
    );
};

export default HomePage;