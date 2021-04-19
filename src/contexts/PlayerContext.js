import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
require('dotenv').config()

export const PlayerContext = createContext()

const GetMlbData = ({children}) => {
    const url = 'https://project.trumedianetworks.com/api'
    const key = process.env.REACT_APP_API_KEY
    const [mlbData, setMlbData] = useState([{}])
    const [playerStats, setPlayerStats] = useState([{}])

    const getMlbData = async () => {
        // first get request to get token
        let mlbapi = '/token'
        let headers = {'apiKey': key}
        let res = await axios.get(url + mlbapi, {headers})
        // .then((response) => {
        //     console.log(response)
        // })
        
        // second get request to get player data
        const { token } = res.data
        mlbapi = '/mlb/players'
        headers = {'tempToken': token}
        res = await axios.get(url + mlbapi, {headers})
        
        // use mlbData in table
        setMlbData(res.data)
        
        mlbapi = `/mlb/player/${res.data[0].playerId}`
        headers.id = res.data[0].playerId
        console.log(res.data)
        console.log(headers)
        res = await axios.get(url + mlbapi, {headers})
        
        setPlayerStats(res.data)

        
    }
 
    // const Team = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
    //     return (
    //         <div className='rgt-cell-inner' style={{display: 'flex', alignItems: 'center', overflow: 'hidden'}}>
    //             <img src={data.teamImage} alt="user avatar" />
    //             <span className='rgt-text-truncate' style={{marginLeft: 10}}>{value}</span>
    //         </div>
    //     )
    // }
    // const rows = mlbData
    // const columns = [
        
    //     {
    //         id: 1, 
    //         field: '', 
    //         label: '',
    //         cellRenderer: Team,
    //     }, 
    //     {
    //         id: 2, 
    //         field: 'fullName', 
    //         label: 'Name',
    //     },
   
    // ];

    // [{"playerId":543063,"fullName":"Brandon Crawford","playerImage":"https://mlb.mlb.com/images/players/mugshot/ph_543063.jpg","teamImage":"http://static.trumedianetworks.com/images/mlb/teams/137.png"},{"playerId":547180,"fullName":"Bryce Harper","playerImage":"https://mlb.mlb.com/images/players/mugshot/ph_547180.jpg","teamImage":"http://static.trumedianetworks.com/images/mlb/teams/120.png"},{"playerId":605137,"fullName":"Josh Bell","playerImage":"https://mlb.mlb.com/images/players/mugshot/ph_605137.jpg","teamImage":"http://static.trumedianetworks.com/images/mlb/teams/134.png"}]
    useEffect(() => {
        getMlbData()
    }, [])

    return (
        <PlayerContext.Provider value={{
            mlbData,
            setMlbData,
            playerStats,
            setPlayerStats
        }}>
            {children}
        </PlayerContext.Provider>
        // <div>
        //     <p>{JSON.stringify(mlbData)}</p>
        //     <GridTable 
        //     columns={columns}
        //     showSearch={false}
        //     rows={rows}
        //      />
        //     <p>{JSON.stringify(playerStats)}</p>

        // </div>
    )
    
    
}

export default GetMlbData

