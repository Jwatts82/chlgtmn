import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PlayerList extends Component {

    handleClick = () => {
        console.log('hello')
    }

    render() {
        return (
            <div>
                <h1>Homepage / Player List</h1>
                <li><Link to="/stats" onClick={this.handleClick}>Player 1</Link></li>
                <li><Link to="/stats" onClick={this.handleClick}>Player 2</Link></li>
                <li><Link to="/stats" onClick={this.handleClick}>Player 3</Link></li>
            </div>
        )
    }
}

export default PlayerList


// Link to{`/stats/${player.id}`}