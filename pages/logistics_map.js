import React from "react";
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function LogisticsMap() {
  const locations = [
    [23.8103,90.4125],
    [23.8110,90.4150],
    [23.8120,90.4180]
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Logistics Map</h1>
      <MapContainer center={[23.811, 90.415]} zoom={14} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((loc, idx)=>(
          <Marker key={idx} position={loc}></Marker>
        ))}
        <Polyline positions={locations} color="blue" />
      </MapContainer>
    </div>
  )
}
