import React from 'react';
import './cardPlayer.css';

const CardPlayer = ({infoPlayer}) => {
    
    return(
        <div className="infoPlayer">
            <h4 className="mb-3">Player Information</h4>
            <div className="d-flex justify-content-around">
                <div>Name: {infoPlayer.first_name}</div>
                <div>Last Name: {infoPlayer.last_name}</div>
                <div>Height Meters: {infoPlayer.h_meters}</div>
                <div>Height Inches: {infoPlayer.h_in}</div>
            </div>
        </div>
    )
}

export default CardPlayer;