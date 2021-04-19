import React, { Component } from 'react'

class PlayerList extends Component {

    handleClick = () => {
        console.log('hello')
    }

    render() {
        return (
            <div>
                <h1>Homepage / Player List</h1>
                <li><a href="#" onClick={this.handleClick}>Player 1</a></li>
                <li><a href="#" onClick={this.handleClick}>Player 2</a></li>
                <li><a href="#" onClick={this.handleClick}>Player 3</a></li>
            </div>
        )
    }
}

export default PlayerList