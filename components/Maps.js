import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const LeafletMap = () => {
  useEffect(() => {
    const center = [-23.55052, -46.633308];
    const locations = [
      { position: [-23.555, -46.65], name: 'Location 1' },
      { position: [-23.56, -46.64], name: 'Location 2' },
      { position: [-23.57, -46.63], name: 'Location 3' },
      { position: [-23.58, -46.62], name: 'Location 4' },
    ];

    const map = L.map('leaflet-map').setView(center, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    locations.forEach(({ position, name }) => {
      L.marker(position).addTo(map).bindPopup(name);
    });
  }, []);

  return (
    <div id="leaflet-map" style={{ height: '600px', width: '800px' }}></div>
  );
};

export default LeafletMap;