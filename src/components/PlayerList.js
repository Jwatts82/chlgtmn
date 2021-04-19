import React, { useContext, Component } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'
import GridTable from '@nadavshaar/react-grid-table'
import { useHistory } from 'react-router-dom'

 const PlayerList = () => {
    // static contextType = PlayerContext
    const { fullName, teamImage, mlbData, playerId } = useContext(PlayerContext)
    let history = useHistory()

    console.log(mlbData)

        const handleClick = (e) => {
            console.log("I have been clicked", e.target.id)
            // console.log(`${playerId}`)
            history.push(`/stats/${e.target.id}`)
        }
        
        // const { fullName, teamImage, mlbData, playerId } = this.context
        const Team = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
           <div onClick={ handleClick } className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
                     <img src={data.teamImage} alt="user avatar" id={ data.playerId }/>
                   <span className='rgt-text-truncate' style={{marginLeft: 10}}>{value}</span>
            </div>
        )
    }
    const rows = mlbData
    const columns = [
        
        {
            id: 1, 
            field: '', 
            label: 'Click To See Stats',
            cellRenderer: Team,
        }, 
        {
            id: 2, 
            field: 'fullName', 
            label: 'Name',
        },
   
    ];

        return (
            <div>
                {/* <p>{JSON.stringify(mlbData)}</p> */}
                    <GridTable 
                    columns={columns}
                    showSearch={false}
                    rows={rows}
                    />
                {/* <p>{JSON.stringify(playerStats)}</p> */}
            </div>
        )
    
}

export default PlayerList