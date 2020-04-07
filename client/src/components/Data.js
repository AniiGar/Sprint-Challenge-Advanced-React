import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export const useData = () => {

    const [playerData, setPlayerData] = useState(null);
    
    useEffect(() => {
        setPlayerData(
            useFetch(`http://localhost:5000/api/players`, {})
        )
    }, [])
    
    return playerData;
}

// console.log(playerData);