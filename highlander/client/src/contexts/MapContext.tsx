// src/contexts/MapContext.tsx

import React, { createContext, useState, useContext } from 'react';

interface MapContextProps {
    ballPos: [number, number];
    setBallPos: React.Dispatch<React.SetStateAction<[number, number]>>;
    goalPos: [number, number];
    setGoalPos: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const MapContext = createContext<MapContextProps>({} as MapContextProps);

interface MapProviderProps {
    children: React.ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
    const [ballPos, setBallPos] = useState<[number, number]>([0, 0]);
    const [goalPos, setGoalPos] = useState<[number, number]>([0, 0]);

    return (
        <MapContext.Provider value={{ ballPos, setBallPos, goalPos, setGoalPos }}>
            {children}
        </MapContext.Provider>
    );
};

export const useMapContext = () => useContext(MapContext);
