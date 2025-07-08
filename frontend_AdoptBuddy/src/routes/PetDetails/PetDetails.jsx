
import { FaHeart, FaRegHeart, FaCartPlus } from "react-icons/fa";
import Button from "../Button/Button";

const PetDetails = ({ pet }) => {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{
                backgroundImage: `url("https://i.pinimg.com/736x/12/f4/91/12f49100389a8cdde0cb745d5d79ddcf.jpg")`,
            }}
        >
            <div className="flex flex-col md:flex-row gap-5 items-center bg-white/20 backdrop-blur-md rounded-3xl shadow-lg p-6 md:p-10 w-full text-white relative my-5" >
                <div className="bg-white/30 rounded-xl flex items-center justify-center overflow-hidden mb-4">
                    <img src="https://i.pinimg.com/736x/12/f4/91/12f49100389a8cdde0cb745d5d79ddcf.jpg" alt={pet?.name} className="w-full h-full object-contain" />
                </div>

                <div className="">
                    <h2 className="text-2xl font-extrabold mb-1 text-amber-950">Awame Legue Dog</h2>
                    <div className="w-full bg-white/10 rounded-lg p-4 mb-4 text-amber-950">
                        <p>Age : </p>
                        <p>Size : </p>
                        <p>Breed : </p>
                        <p>Color : </p>
                    </div>

                    <div className="w-full bg-white/10 text-amber-950 mb-4 rounded-lg p-4">
                        <span className="font-bold">Description :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam iste amet. Soluta, saepe itaque optio quo ipsam ea assumenda.
                    </div>

                    <div className="w-full flex items-center gap-3">
                        <Button>Apply to Adopt</Button>
                        <button className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30">
                            <FaHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;