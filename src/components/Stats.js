import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'

const Stats = () => {
    const { playerId, fullName, playerStats, playerImage, gameDate, team, teamIMage, opponent, opponentImage, PA, AB, H, HR, BB, K, HBP, SF, TB, RBI } = useContext(PlayerContext)
    const { id } = useParams()

    console.log(playerStats[0].playerImage)
    // console.log(playerStats.playerImage)

    const playerHits = playerStats.reduce((prev,cur) => prev + cur.H, 0)
    
    const playerAtBats = playerStats.reduce((prev, cur) => prev + cur.AB, 0)

    const AVG = (playerHits/playerAtBats).toFixed(3)

    const playerBB = playerStats.reduce((prev, cur) => prev + cur.BB, 0)

    const playerHBP = playerStats.reduce((prev, cur) => prev + cur.HBP, 0)

    const playerTB = playerStats.reduce((prev, cur) => prev + cur.TB, 0)

    const playerSF = playerStats.reduce((prev, cur) => prev + cur.SF, 0)

    const OBP = (playerHits + playerBB + playerHBP)/(playerAtBats + playerBB + playerSF + playerHBP)

    const SLG = playerTB/playerAtBats 

    const OPS = (OBP + SLG).toFixed(3)
    

        return (
            <div>
            <h2>{playerStats[0].fullName}</h2>
            <h2>AVG: { AVG }</h2>
            <h2>OPS: { OPS }</h2>
            {/* <p>{JSON.stringify(playerStats)}</p> */}
            {/* <h3>{playerStats[5].H}</h3> */}
            

            {/* // <div class="flex-container"> */}
                {/* <img src={playerStats[0].playerImage} alt="" />
                <div class="item item-1">
                    <h1>player</h1>
                    <img src={playerStats[0].playerImage} alt=""/>
                    <h2>{playerStats[0].fullName}</h2>
                </div>
                <div class="item item-2">
                    <h3>Item 2</h3>
                </div>
                <div class="item item-3">
                    <h3>Item 3</h3>
                </div>
                <div class="item item-4">
                    <h3>Item 4</h3>
                </div> */}
                {/* <p>{JSON.stringify(playerStats)}</p> */}
                
            </div>
        )
    
}

export default Stats
