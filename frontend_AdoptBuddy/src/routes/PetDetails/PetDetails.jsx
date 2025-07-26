import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaHeart } from "react-icons/fa";
import Button from "../Button/Button";
import "leaflet/dist/leaflet.css";

const PetDetails = () => {
    const pet = {
        name: "Awame Legue Dog",
        location: "Khagan, Dattapara", // Location as string
    };

    const [coords, setCoords] = useState(null);

    // Fetch coordinates based on location name
    useEffect(() => {
        const getLatLngFromLocation = async (locationName) => {
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}`;

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
            className="min-h-screen bg-cover bg-center mt-16 flex items-center justify-center px-4"
            style={{
                backgroundImage:
                    'url("https://i.pinimg.com/736x/12/f4/91/12f49100389a8cdde0cb745d5d79ddcf.jpg")',
            }}
        >
            <div className="flex flex-col md:flex-row gap-5 items-center bg-white/20 backdrop-blur-lg rounded-3xl shadow-lg p-6 md:p-10 w-full text-white relative my-5">
                <div className="bg-white/30 rounded-xl flex items-center justify-center overflow-hidden mb-4">
                    <img
                        src="https://i.pinimg.com/736x/12/f4/91/12f49100389a8cdde0cb745d5d79ddcf.jpg"
                        alt={pet?.name}
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="">
                    <h2 className="text-2xl font-extrabold mb-1 text-amber-950">
                        {pet.name}
                    </h2>
                    <div className="w-full bg-white/10 rounded-lg p-4 mb-4 text-amber-950">
                        <p>Age: </p>
                        <p>Size: </p>
                        <p>Breed: </p>
                        <p>Color: </p>
                    </div>

                    <div className="w-full bg-white/10 text-amber-950 mb-4 rounded-lg p-4">
                        <span className="font-bold">Description:</span> Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Consectetur
                        quisquam iste amet. Soluta, saepe itaque optio quo ipsam ea
                        assumenda.
                    </div>

                    {/* Show map only if coords are ready */}
                    {coords && (
                        <div className="w-full h-64 mt-6 rounded-xl overflow-hidden shadow-lg z-10">
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

                    <div className="w-full flex items-center gap-3 mt-4">
                        <Button>Apply to Adopt</Button>
                        <Button>Distance from me</Button>
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
