import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

function OrganizerDetailedMap({ latitude, longitude, zoom }) {
    return (
        <MapContainer center={[latitude, longitude]} zoom={zoom} style={{ height: '300px', width: '300px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
}

export default OrganizerDetailedMap;
