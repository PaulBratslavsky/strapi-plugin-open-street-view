import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

function MyMarker({ setMarker, marker, preview }) {
  const myMap = useMap();

  useEffect(() => {
    if (marker && preview) {
      myMap.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          myMap.removeLayer(layer);
        }
      });
      L.marker(marker, { icon }).addTo(myMap).bindPopup('Should see this in preview mode.');
      setMarker(marker);
    }
  }, []);

  useEffect(() => {
    if (marker === undefined) {
      myMap.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          myMap.removeLayer(layer);
        }
      });
    }
  }, [marker]);

  const map = useMapEvents({
    click: (e) => {
      if (preview) return;
      const { lat, lng } = e.latlng;
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });
      L.marker({ lat, lng }, { icon }).addTo(map);
      setMarker({ lat, lng });
    },
  });
  return null;
}

export default function MapComponent({
  setMarker,
  marker,
  preview,
}) {

  console.log(marker);
  return (
    <div>
      <MapContainer
        className="Map"
        center={{ lat: 40.7, lng: -74 }}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100vh", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMarker setMarker={setMarker} marker={marker} preview={preview}/>
      </MapContainer>
    </div>
  );
}
