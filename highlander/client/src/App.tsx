// src/App.tsx

import React from 'react';
import MapComponent from './components/MapComponent';
import { MapProvider } from './contexts/MapContext';

const App: React.FC = () => {
    return (
        <MapProvider>
            <MapComponent />
        </MapProvider>
    );
}

export default App;
