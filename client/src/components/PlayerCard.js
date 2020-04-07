import React from 'react';

export const PlayerCard = props => {
    
    return (
        <div>
            <h2>Name: {props.player.name}</h2>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )
}