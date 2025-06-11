import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import pet from '../../assets/banner.png';
import Button from '../Button/Button';
const HomePage = () => {
    return (
        <div className="bg-[#f9f8eb] min-h-screen flex justify-center items-center px-5 lg:px-20">
            <div className='flex text-xl cursor-pointer flex-col justify-center items-center text-center text-amber-950 gap-5'>
                <FaFacebookF className="hover:border rounded-full hover:bg-blue-600 p-0.5 hover:text-white" />
                <FaInstagram className="hover:border rounded-full hover:bg-red-600 p-0.5 hover:text-white" />
                <FaTwitter className="hover:border rounded-full hover:bg-blue-600 p-0.5 hover:text-white" />
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-10 w-full'>
                <div className='w-1/3 flex justify-center items-center'>
                    <img className='' src={pet} alt="" />

                </div>
                <div className="flex flex-col gap-10 justify-center items-center text-center text-amber-950 w-2/3">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl text-left w-full leading-tight">Rescue, Adopt, Love <br /> Connecting Pets with <br /> Their Forever Homes!</h1>
                    <div className="flex flex-col md:flex-row gap-4 mt-5 w-full">
                        <Button>Adopt Now</Button>
                        <Button>Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;