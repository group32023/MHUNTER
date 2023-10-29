import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import OrganizerDetailedMap from './OrganizerDetailedMap'; // Import the DetailedMap component

export default function OrganizerEventLocation({ latitude, longitude, zoom }) {
    const position = [latitude, longitude];
    const [popupOpen, setPopupOpen] = useState(false);

    const togglePopup = () => {
        setPopupOpen(!popupOpen);
    };

    return (
        <MapContainer center={position} zoom={zoom} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} onClick={togglePopup}>
                <Popup>
                    <button onClick={togglePopup}>Close</button>
                    <h2>Your Location</h2>
                    {popupOpen && <OrganizerDetailedMap latitude={latitude} longitude={longitude} zoom={zoom + 2} />}
                </Popup>
            </Marker>
        </MapContainer>
    );
}








