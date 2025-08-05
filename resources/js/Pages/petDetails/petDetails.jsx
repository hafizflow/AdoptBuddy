import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaHeart } from "react-icons/fa";
import Button from "../../components/Button/Button";
import "leaflet/dist/leaflet.css";
import ApplyAdoptForm from "../../components/ApplyAdoptForm/ApplyAdoptForm";
import MapViewer from "../../components/MapViewer/MapViewer";

const PetDetails = ({ pet }) => {
    const [coords, setCoords] = useState(null);
    console.log(pet);
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
        <div className="min-h-screen bg-cover bg-center mt-10 flex items-center justify-center px-4">
            <div className="flex flex-col-reverse md:flex-row gap-5 items-center p-2 md:p-10 w-full relative my-5">
                <div className="flex-1 flex flex-col md:flex-row rounded-xl items-center gap-5 overflow-hidden">
                    <div className="flex md:flex-col justify-between gap-4">
                        <img
                            src={`http://localhost:8000/storage/${pet?.images?.[0]?.image || "default.jpg"
                                }`}
                            alt={pet?.name}
                            className="w-32 h-32 rounded-2xl object-cover overflow-hidden"
                        />
                        <img
                            src={`http://localhost:8000/storage/${pet?.images?.[0]?.image || "default.jpg"
                                }`}
                            alt={pet?.name}
                            className="w-32 h-32 rounded-2xl object-cover overflow-hidden"
                        />
                        <img
                            src={`http://localhost:8000/storage/${pet?.images?.[0]?.image || "default.jpg"
                                }`}
                            alt={pet?.name}
                            className="w-32 h-32 rounded-2xl object-cover overflow-hidden"
                        />
                        <img
                            src={`http://localhost:8000/storage/${pet?.images?.[0]?.image || "default.jpg"
                                }`}
                            alt={pet?.name}
                            className="w-32 h-32 rounded-2xl object-cover overflow-hidden"
                        />
                    </div>
                    <div className="w-full h-full">
                        <img
                            src={`http://localhost:8000/storage/${pet?.images?.[0]?.image || "default.jpg"
                                }`}
                            alt={pet?.name}
                            className="w-full rounded-2xl object-cover overflow-hidden"
                        />
                    </div>
                </div>

                <div className="flex-1 w-full">
                    <h2 className="text-2xl text-center font-extrabold mb-1 pc">
                        {pet?.name}
                    </h2>
                    <div className="w-full flex gap-3 bg-sc rounded-t-lg p-4 pc">
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

                    <div className="w-full bg-pc sc rounded-b-lg mb-4 p-4">
                        <span className="text-justify">
                            Description : {pet?.description}
                        </span>
                    </div>

                    {/* Show map only if coords are ready */}
                    {/* {coords && (
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
                    )} */}
                    <div className="h-64 mt-6 rounded-xl overflow-hidden shadow-lg z-10">
                        <MapViewer
                            markerValue={
                                pet?.lat && pet?.lng
                                    ? [Number(pet.lat), Number(pet.lng)]
                                    : null
                            }
                        />
                    </div>
                    <div className="w-full flex flex-col items-center gap-3 mt-4">
                        <div className="flex w-full gap-5 justify-between">
                            <Button className="w-full">Distance from me</Button>

                            <Button className="">
                                {" "}
                                <FaHeart />
                            </Button>
                        </div>
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
