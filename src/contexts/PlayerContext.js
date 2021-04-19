import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
// require('dotenv').config()

export const PlayerContext = createContext()

const GetMlbData = ({children}) => {
    const url = 'https://project.trumedianetworks.com/api'
    // const key = process.env.REACT_APP_TMN_API_KEY

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
    )
    
}

export default GetMlbData

