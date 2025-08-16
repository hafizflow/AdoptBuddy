import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Button from "../../components/Button/Button";
import "leaflet/dist/leaflet.css";
import ApplyAdoptForm from "../../components/ApplyAdoptForm/ApplyAdoptForm";
import MapViewer from "../../components/MapViewer/MapViewer";

const PetDetails = ({ pet }) => {
    const [userLocation, setUserLocation] = useState(null);

    // for store images of swaping
    const defaultImage = 'default.jpg';
    const initialImages = [
        pet?.images?.[0].image || defaultImage,
        pet?.images?.[1]?.image || defaultImage,
        pet?.images?.[2]?.image || defaultImage,
        pet?.images?.[3]?.image || defaultImage,
        pet?.images?.[4]?.image || defaultImage,
    ];

    const [bigImage, setBigImage] = useState(initialImages[0]);
    const [thumbnails, setThumbnails] = useState(initialImages.slice(1));

    const handleSwap = (index) => {
        const clickedImage = thumbnails[index];
        const newThumbnails = [...thumbnails];
        newThumbnails[index] = bigImage;
        setBigImage(clickedImage);
        setThumbnails(newThumbnails);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation([
                        position.coords.latitude,
                        position.coords.longitude,
                    ]);
                },
                (error) => {
                    console.error("Geolocation error:", error);
                }
            );
        }
    }, []);

    return (
        <div className="min-h-screen bg-cover bg-center mt-10 flex items-center justify-center px-4">
            <div className="flex flex-col-reverse md:flex-row gap-5 items-center p-2 md:p-10 w-full relative my-5">
                <div className="flex-1 flex flex-col md:flex-row rounded-xl items-center gap-5 overflow-hidden">
                    <div className="flex md:flex-col justify-between gap-4">
                        {thumbnails.map((img, index) => (
                            <img
                                key={index}
                                src={`http://localhost:8000/storage/${img}`}
                                alt={pet?.name}
                                className="w-32 h-32 rounded-2xl object-cover overflow-hidden cursor-pointer"
                                onClick={() => handleSwap(index)}
                            />
                        ))}

                    </div>
                    <div className="w-full h-full">
                        <img
                            src={`http://localhost:8000/storage/${bigImage}`}
                            alt={pet?.name}
                            className="w-full h-147 rounded-2xl object-cover overflow-hidden"
                        />

                    </div>
                </div>

                <div className="flex-1 w-full">
                    <h2 className="text-2xl text-center font-extrabold mb-1 pc">
                        {pet?.name}
                    </h2>
                    <div className="w-full flex gap-3 bg-green-200 rounded-t-lg p-4 pc">
                        <div className="">
                            <p>Breed </p>
                            <p>Age </p>
                            <p>Size </p>
                            <p>Color </p>
                        </div>
                        <div className="">
                            <p>: </p>
                            <p>: </p>
                            <p>: </p>
                            <p>: </p>
                        </div>
                        <div className="font-semibold">
                            <p>{pet?.breed}</p>
                            <p>{pet?.age}</p>
                            <p>{pet?.size}</p>
                            <p>{pet.color ? color : "Missing"}</p>
                        </div>
                    </div>

                    <div className="w-full bg-green-900 sc rounded-b-lg mb-4 p-4">
                        <span className="text-justify">
                            Description : {pet?.description}
                        </span>
                    </div>

                    <div className="h-[18rem] mt-6 rounded-xl overflow-hidden shadow-lg z-10">
                        <MapViewer
                            currentLocation={userLocation}
                            markerValue={
                                pet?.lat && pet?.lng
                                    ? [Number(pet.lat), Number(pet.lng)]
                                    : null
                            }
                        />
                    </div>
                    <div className="w-full flex flex-col items-center gap-3 mt-4">
                        <div className="w-full">
                            <Button
                                className="w-full"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    document
                                        .getElementById("my_modal_5")
                                        .showModal();
                                }}
                            >
                                Apply to Adopt
                            </Button>
                        </div>
                    </div>
                    <ApplyAdoptForm></ApplyAdoptForm>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;
