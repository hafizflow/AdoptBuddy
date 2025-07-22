import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaHeart } from "react-icons/fa";
import Button from "../../components/Button/Button";
import "leaflet/dist/leaflet.css";
import ApplyAdoptForm from "../../components/ApplyAdoptForm/ApplyAdoptForm";

const PetDetails = () => {
    const pet = {
        name: "Awame Legue Dog",
        location: "Khagan, Dattapara", // Location as string
    };

    const [coords, setCoords] = useState(null);

    // Fetch coordinates based on location name
    useEffect(() => {
        const getLatLngFromLocation = async (locationName) => {
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                locationName
            )}`;

            try {
                const response = await fetch(url, {
                    headers: {
                        "Accept-Language": "en",
                        "User-Agent": "PetAdoptionApp - your@email.com",
                    },
                });

                if (!response.ok) throw new Error("Network error");

                const data = await response.json();
                if (data.length === 0) throw new Error("Location not found");

                const { lat, lon } = data[0];
                setCoords({ lat: parseFloat(lat), lng: parseFloat(lon) });
            } catch (err) {
                console.error("Error fetching coordinates:", err);
            }
        };

        getLatLngFromLocation(pet.location);
    }, [pet.location]);

    return (
        <div
            className="min-h-screen bg-cover bg-center mt-10 flex items-center justify-center px-4"
        >
            <div className="flex flex-col md:flex-row gap-5 items-center p-6 md:p-10 w-full relative my-5">
                <div className="flex-1 bg-white/30 flex rounded-xl items-center justify-between gap-5 overflow-hidden">
                    <div className="flex flex-col justify-between gap-4">
                        <img
                            src="https://i.pinimg.com/736x/12/f4/91/12f49100389a8cdde0cb745d5d79ddcf.jpg"
                            alt={pet?.name}
                            className="w-36 rounded-2xl object-contain overflow-hidden"
                        />
                        <img
                            src="https://i.pinimg.com/736x/12/f4/91/12f49100389a8cdde0cb745d5d79ddcf.jpg"
                            alt={pet?.name}
                            className="w-36 rounded-2xl object-contain overflow-hidden"
                        />
                        <img
                            src="https://i.pinimg.com/736x/12/f4/91/12f49100389a8cdde0cb745d5d79ddcf.jpg"
                            alt={pet?.name}
                            className="w-36 rounded-2xl object-contain overflow-hidden"
                        />
                        <img
                            src="https://i.pinimg.com/736x/12/f4/91/12f49100389a8cdde0cb745d5d79ddcf.jpg"
                            alt={pet?.name}
                            className="w-36 rounded-2xl object-contain overflow-hidden"
                        />
                    </div>
                    <div>
                        <img
                            src="https://i.pinimg.com/736x/12/f4/91/12f49100389a8cdde0cb745d5d79ddcf.jpg"
                            alt={pet?.name}
                            className="w-full max-h-svh rounded-2xl object-contain overflow-hidden"
                        />
                    </div>
                </div>

                <div className="flex-1">
                    <h2 className="text-2xl text-center font-extrabold mb-1 text-black">
                        {pet.name}
                    </h2>
                    <div className="w-full flex gap-3 bg-white/10 rounded-lg p-4 text-black">
                        <div className="text-indigo-500">
                            <p>Breed </p>
                            <p>Age </p>
                            <p>Size </p>
                            <p>Color </p>
                        </div>
                        <div className="text-indigo-500">
                            <p>: </p>
                            <p>: </p>
                            <p>: </p>
                            <p>: </p>
                        </div>
                        <div>
                            <p>{ }</p>
                            <p>{ }</p>
                            <p>{ }</p>
                            <p>{ }</p>
                        </div>
                    </div>

                    <div className="w-full bg-white/10 text-black mb-4 rounded-lg p-4">
                        <span className="font-bold text-justify text-indigo-500">Description :</span> Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur quisquam iste amet. Soluta, saepe itaque
                        optio quo ipsam ea assumenda.
                    </div>

                    {/* Show map only if coords are ready */}
                    {coords && (
                        <div className="w-full border border-indigo-500 p-2 h-64 mt-6 rounded-xl overflow-hidden shadow-lg z-10">
                            <MapContainer
                                center={[coords.lat, coords.lng]}
                                zoom={13}
                                scrollWheelZoom={false}
                                style={{ height: "100%", width: "100%" }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                />
                                <Marker position={[coords.lat, coords.lng]}>
                                    <Popup>{pet.name} is here!</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    )}

                    <div className="w-full flex flex-col items-center gap-3 mt-4">
                        <div className="flex w-full gap-5 justify-between">
                            <Button className="w-full">Distance from me</Button>

                            <Button className="bg-indigo-400"> <FaHeart /></Button>
                        </div>
                        <div className="w-full">
                            <Button className="w-full" onClick={(e) => {
                                e.stopPropagation();
                                document.getElementById("my_modal_5").showModal();
                            }}>Apply to Adopt</Button>
                        </div>

                    </div>
                    <ApplyAdoptForm></ApplyAdoptForm>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;
