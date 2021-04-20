import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'
import GridTable from '@nadavshaar/react-grid-table';

const Stats = () => {
    const { playerId, fullName, playerStats, playerImage, gameDate, team, teamIMage, opponent, opponentImage, PA, AB, H, HR, BB, K, HBP, SF, TB, RBI } = useContext(PlayerContext)
    const { id } = useParams()

    // console.log(playerStats[0].playerImage)
    // console.log(playerStats.playerImage)
    console.log(playerStats[0].playerImage)


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

    // const { fullName, teamImage, mlbData, playerId } = this.context
    // const Team = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
    //     return (
    //        <div onClick={ handleClick } className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
    //                  <img src={data.teamImage} alt="user avatar" id={ data.playerId }/>
    //                <span className='rgt-text-truncate' style={{marginLeft: 10}}>{value}</span>
    //         </div>
    //     )
    // }

    const rows = playerStats

    const columns = [
        
        {
            id: 1, 
            field: 'gameDate', 
            label: 'Game Date',
            // cellRenderer: Team,
        }, 
        {
            id: 2, 
            field: 'opponent', 
            label: 'Opponent',
        },
        {
            id: 3, 
            field: 'AB', 
            label: 'AB',
        },
        {
            id: 4, 
            field: 'H', 
            label: 'H',
        },
        {
            id: 5, 
            field: 'HR', 
            label: 'HR',
        },
        {
            id: 6, 
            field: 'RBI', 
            label: 'RBI',
        },
        {
            id: 7, 
            field: 'BB', 
            label: 'BB',
        }
   
    ];

    
        return (
            <div className="flex-container">
                <div className="item item-1">
                    <img src={playerStats[0].playerImage} alt="cant find"/>
                    <h2>{playerStats[0].fullName}</h2>
                    <h2>2018</h2>
                    <br/>
                    <h3>AVG: { AVG }</h3>
                    <h3>OPS: { OPS }</h3>
                </div>
                <div className="item item-2">
                    <GridTable 
                    columns={columns}
                    showSearch={false}
                    rows={rows}
                    />
                </div>

            {/* <p>{JSON.stringify(playerStats)}</p> */}
            {/* <h3>{playerStats[5].H}</h3> */}
              
            </div>
        )
    
}

export default Stats
