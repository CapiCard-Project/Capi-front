import React, { createContext, useState, useEffect } from "react";

export const CapiPointsContext = createContext();

export const CapiPointsProvider = ({ children }) => { // Change 'Children' to 'children'
    const [capiPoints, setCapiPoints] = useState(() => {
        return parseInt(localStorage.getItem('capipoins')) || 0;
    });

    useEffect(() => {
        localStorage.setItem('capipoins', capiPoints);
    }, [capiPoints]);

    useEffect(() => {
        const handleStorage = () => {
            const updatedCapipoins = parseInt(localStorage.getItem('capipoins')) || 0;
            setCapiPoints(updatedCapipoins);
        }

        window.addEventListener('storage', handleStorage);

        return () => {
            window.removeEventListener('storage', handleStorage);
        }
    }, []);

    return (
        <CapiPointsContext.Provider value={{ capiPoints, setCapiPoints }}>
            {children} 
        </CapiPointsContext.Provider>
    );
};