import React, { useState, useEffect } from 'react';

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useState(initialValue);

    useEffect( () => {
        if(darkMode === true) {
            let body = document.querySelector('body')
            body.classList.add('dark-mode')
        }else{
            let body = document.querySelector('body')
            body.classList.remove('dark-mode')
        }
    },[darkMode])

    return[darkMode, setDarkMode]
}