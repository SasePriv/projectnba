import React, {useState, useEffect} from 'react';
import CardPlayer from '../../components/cardPlayer/cardPlayer'
import './inputPlayers.css';
import { find_sumPair } from '../utils/utils'

const InputPlayers = ({data}) => {

    const [inputInches, setInputInches] = useState(0);
    const [playerPair, setPlayerPair] = useState([]);

    const handleChange = (event) => {
        setInputInches(event.target.value)
    }

    useEffect(() => {
        setPlayerPair(find_sumPair(data, data.length, inputInches));                
    },[inputInches])

    return(
        <div>
            <div className="d-flex mt-3 justify-content-center">
                <label className="label">Enter number of inches: </label>
                <input onChange={handleChange} type="number" className="form-control inputPlayers" />
            </div>
            <div className="mt-1 subText">Minium of inches 139 - Maxium of inches 177</div>            
            <div className="mt-2">
            {
                playerPair.length >= 1 &&
                <React.Fragment >
                    <h3 className="mt-3 mb-3">Player Pair</h3>
                    <CardPlayer infoPlayer={playerPair[0]}/>
                    <CardPlayer infoPlayer={playerPair[1]}/>
                </React.Fragment>
                    
            }
            </div>
        </div>
    )
}

export default InputPlayers;