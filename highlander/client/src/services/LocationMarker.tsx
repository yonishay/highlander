import React from 'react';
import { useMapEvents } from 'react-leaflet';
import axios from 'axios';
import { useMapContext } from '../contexts/MapContext';

export function LocationMarker() {
    const { setBallPos, goalPos } = useMapContext();

    useMapEvents({
        moveend(e : any) {
            const newBallPosition: [number, number] = [
                e.target.getCenter().lat, 
                e.target.getCenter().lng
            ];
            setBallPos(newBallPosition);

            // Check if it is a goal
            axios.get('http://localhost:3000/api/goals/checkGoal', {
                params: {
                    ballLat: newBallPosition[0],
                    ballLng: newBallPosition[1],
                    goalLat: goalPos[0],
                    goalLng: goalPos[1]
                }
            }).then(response => {
                if (response.data.reachedGoal) {
                    alert('GOAL!!!!!');
                }
            });
        }
    });

    return null; // This component does not render anything itself
}
