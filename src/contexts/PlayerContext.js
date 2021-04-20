import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

// require('dotenv').config()

export const PlayerContext = createContext()

const GetMlbData = (props) => {
    const url = 'https://project.trumedianetworks.com/api'
    const key = 'fa718609-36e0-4593-b802-55d9d278b2b5'
     
    const [mlbData, setMlbData] = useState([{}])
    const [playerStats, setPlayerStats] = useState([{}])

    const getMlbData = async () => {
        // first get request to get token
        let mlbapi = '/token'
        let headers = {'apiKey': key}
        let res = await axios.get(url + mlbapi, {headers})
        // console.log(res)

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
        
        // const pid = res.data.find(player => player.playerId == playerId)
        // console.log(res.data)
        
        headers.id = res.data[0].playerId
        mlbapi = `/mlb/player/${headers.id}`
        // headers.id = res.data[1].playerId
        // console.log(res.data)
        console.log(headers)
        res = await axios.get(url + mlbapi, {headers})
        
        setPlayerStats(res.data)

        
    }

    // const player = {res.data}
 
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
            {props.children}
        </PlayerContext.Provider>
    )
    
}

export default GetMlbData