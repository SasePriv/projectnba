import React from 'react';
import NavBar from '../../components/navBar/navBar'
import ContentCard from '../../components/contentCard/contentCard'
import TablePlayer from '../../components/tablePlayer/tablePlayer'
import './playerList.css';

const PlayerList = ({dataNBA}) => {

    return(
        <div>
          <NavBar activeName="list"/>
          <ContentCard>
            <div className="text-center">
              <h2 className="mb-3">Player List</h2>
              {dataNBA.length >= 100 ? 
              <TablePlayer data={dataNBA}/>
              : <div>Problem Feting Data</div>}
            </div>
          </ContentCard>
        </div>
    )
};

export default PlayerList;