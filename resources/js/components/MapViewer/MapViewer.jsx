import { useEffect, useRef, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Polyline,
    useMapEvents,
    useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Handle marker placement on map click
function LocationMarker({ marker, setMarker }) {
    useMapEvents({
        click(e) {
            setMarker(e.latlng);
        },
    });

    return marker ? <Marker position={marker} /> : null;
}

// Renders a custom HTML label at a geographic position
function DistanceLabel({ pointA, pointB, text }) {
    const map = useMap();
    const labelRef = useRef();

    useEffect(() => {
        if (!pointA || !pointB || !map) return;

        const mid = [(pointA[0] + pointB[0]) / 2, (pointA[1] + pointB[1]) / 2];
        const containerPoint = map.latLngToContainerPoint(mid);

        const label = labelRef.current;
        if (label) {
            label.style.left = `${containerPoint.x}px`;
            label.style.top = `${containerPoint.y}px`;
        }
    });

    return (
        <div
            ref={labelRef}
            className="absolute bg-white text-xs text-black px-2 py-1 rounded shadow"
            style={{
                position: "absolute",
                transform: "translate(-50%, -100%)",
                pointerEvents: "none",
            }}
        >
            {text}
        </div>
    );
}

export default function MapViewer({ markerValue }) {
    const [marker, setMarker] = useState(markerValue || null);
    const [mapCenter, setMapCenter] = useState(markerValue || [51.505, -0.09]); // default to London
    const [userLocation, setUserLocation] = useState(markerValue);
    const initializedRef = useRef(false);
    // Update on prop change
    useEffect(() => {
        if (markerValue) {
            setMarker(markerValue);
            setMapCenter(markerValue);
        }
    }, [markerValue]);

    // Try to use user location if marker is not set
    useEffect(() => {
        if (!markerValue && !initializedRef.current && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLatLng = [
                        position.coords.latitude,
                        position.coords.longitude,
                    ];
                    setMapCenter(userLatLng);
                    setUserLocation(userLatLng);
                    initializedRef.current = true;
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    initializedRef.current = true;
                }
            );
        }
    }, [markerValue]);

    // Distance calculation
    let distanceText = "";
    if (marker) {
        const distanceInMeters = L.latLng(marker).distanceTo(userLocation);
        const km = (distanceInMeters / 1000).toFixed(2);
        distanceText = `${km} km`;
    }

    return (
        <div className="w-full max-h-[15rem] flex h-full relative">
            <MapContainer
                center={mapCenter}
                zoom={10}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker marker={marker} setMarker={setMarker} />
                <Marker position={userLocation} />
                {marker && (
                    <Polyline positions={[marker, userLocation]} color="red" />
                )}
                {marker && (
                    <DistanceLabel
                        pointA={marker}
                        pointB={userLocation}
                        text={distanceText}
                    />
                )}
            </MapContainer>
        </div>
    );
}
