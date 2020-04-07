import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

export const ModeBtn = () => {

    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <button onClick={toggleMode}>Switch Mode</button>
        </div>
    )
}