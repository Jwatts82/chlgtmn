import React from 'react'
import { useParams } from 'react-router-dom'

const Stats = () => {
    const { id } = useParams()
     
        return (
            <div>
                <h1>I am A Player Page - { id }</h1>
            </div>
        )
    
}

export default Stats


// <PlayerContext.Consumer>{(context) => {
//     return (
//         JSX
//     )
// }}</PlayerContext.Consumer>