import React from 'react'
import NavBar from '../../components/navBar/navBar'
import ContentCard from '../../components/contentCard/contentCard'
import InputPlayer from '../../components/inputPlayers/inputPlayers'

const PlayerMatches = ({dataNBA}) => {

    return(
        <div>
            <NavBar activeName="matches"/>
            <ContentCard fullHeight={true}>
                <div className="text-center">
                    <h2 className="mb-3">Player Matches</h2>
                    <InputPlayer data={dataNBA} />
                </div>
            </ContentCard>
        </div>
    )
}

export default PlayerMatches;
