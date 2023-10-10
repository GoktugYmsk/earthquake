import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function EarthquakeMap() {
    const position = [51.505, -0.09]; // Harita merkezini ve başlangıç konumunu belirleyin

    return (
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    Açıklama buraya eklenebilir.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default EarthquakeMap;
