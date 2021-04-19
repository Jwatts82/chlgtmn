import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'

const Stats = () => {
    const { playerId, fullName, playerStats, playerImage, gameDate, team, teamIMage, opponent, opponentImage, PA, AB, H, HR, BB, K, HBP, SF, TB, RBI } = useContext(PlayerContext)
    const { id } = useParams()
     
        return (
            <div>
                <h1>I am A Player Page - { id }</h1>
                <p>{JSON.stringify(playerStats)}</p>
            </div>
        )
    
}

export default Stats
