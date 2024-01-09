import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMapContext } from '../contexts/MapContext';
import { LocationMarker } from '../services/LocationMarker';
import 'leaflet/dist/leaflet.css'
import axios from 'axios';

const MapComponent: React.FC = () => {
    const { ballPos, goalPos, setBallPos, setGoalPos } = useMapContext();
    const [generatedGoal, setGeneratedGoal] = useState(false); // Track if the goal is generated

    useEffect(() => {
        // Get the goal position from the backend only once
        if (!generatedGoal) {
            axios.get('http://localhost:3000/api/goals/generateGoal', {
                params: {
                    currentLat: ballPos[0],  // Lat
                    currentLng: ballPos[1]   // Long
                }
            })
                .then(response => {
                    setGoalPos([response.data.lat, response.data.lng]);
                    setGeneratedGoal(true); // Mark the goal as generated
                })
                .catch(error => {
                    console.error('Error fetching goal position:', error);
                });
        }

        // Get the user's current location
        navigator.geolocation.getCurrentPosition(
            position => {
                setBallPos([position.coords.latitude, position.coords.longitude]);
            },
            error => {
                console.error('Error getting current position:', error);
            }
        );
    }, [ballPos, goalPos, setBallPos, setGoalPos, generatedGoal]);

    return (
        <MapContainer center={ballPos} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={ballPos} />
            <Marker position={goalPos} />
            <LocationMarker />
        </MapContainer>
    );
};

export default MapComponent;
