import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import mark from "../../../assets/marker.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    // iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: mark,
    iconUrl: mark,
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function LocationMarker({ marker, setMarker }) {
    useMapEvents({
        click(e) {
            setMarker(e.latlng);
        },
    });

    return marker ? <Marker position={marker} /> : null;
}

export default function LocationPickerLeaflet({ setLocation }) {
    const [marker, setMarker] = useState(null);
    const mapRef = useRef(null);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const userLatLng = [latitude, longitude];
                    setMarker(userLatLng);

                    if (mapRef && mapRef.current) {
                        mapRef.current.setView(userLatLng, 13);
                    }
                },
                (error) => {
                    console.error("Geolocation error:", error);
                }
            );
        }
    }, [navigator.geolocation]);

    const handleSetLocation = (latlng) => {
        setMarker(latlng);
        setLocation([latlng.lat, latlng.lng]);
    };

    return (
        <div className="w-full max-h-[15rem] flex h-full">
            <MapContainer ref={mapRef} zoom={13} style={{ width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker marker={marker} setMarker={handleSetLocation} />
            </MapContainer>
        </div>
    );
}
