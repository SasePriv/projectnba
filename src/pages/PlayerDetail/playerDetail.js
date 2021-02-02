import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/navBar/navBar'
import ContentCard from '../../components/contentCard/contentCard'
import CardPlayer from '../../components/cardPlayer/cardPlayer'
import TablePlayer from '../../components/tablePlayer/tablePlayer'
import './playerDetail.css'

const PlayerDetail = ({dataNBA}) => {

    const history = useHistory();
    const playerData = history.location.state.player;

    const [player, setPlayer] = useState({});
    const [dataHeight, setDataHeight] = useState([])

    useEffect(() => {        
        setPlayer(playerData);
        const filterHeightData = dataNBA.filter(player => player.h_in === playerData.h_in && player.first_name !== playerData.first_name);
        setDataHeight(filterHeightData);
    },[playerData, dataNBA])

    return(
        <div>
            <NavBar activeName="list"/>
            <ContentCard>
                <div className="text-center">
                    <h2 className="mb-3">Player {player.first_name + " " +player.last_name}</h2>
                    <CardPlayer infoPlayer={player} />
                    <h3 className="mt-4 mb-4">Player with same height</h3>
                    <div className="playerDetailsTable">
                    {dataHeight.length >= 1 ? 
                    <TablePlayer data={dataHeight} disableClick={true}/>
                    : <div>Problem Feting Data</div>}
                    </div>
                </div>
            </ContentCard>
        </div>
    )
}

export default PlayerDetail;
