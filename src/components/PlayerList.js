import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'
import GridTable from '@nadavshaar/react-grid-table'

class PlayerList extends Component {
    static contextType = PlayerContext

    handleClick = () => {
        console.log('hello')
    }

    render() {
        console.log(this.context)
        const { fullName, teamImage, mlbData } = this.context
        const Team = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
        return (
            <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
                <img src={data.teamImage} alt="user avatar" />
                <span className='rgt-text-truncate' style={{marginLeft: 10}}>{value}</span>
            </div>
        )
    }
    const rows = mlbData
    const columns = [
        
        {
            id: 1, 
            field: '', 
            label: 'Team',
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
                <p>{JSON.stringify(mlbData)}</p>
                    <GridTable 
                    columns={columns}
                    showSearch={false}
                    rows={rows}
                    />
                {/* <p>{JSON.stringify(playerStats)}</p> */}
            </div>
        )
    }
}

export default PlayerList

