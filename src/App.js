import React, { useState } from 'react'
import Navbar from './components/Navbar'
import PlayerList from './components/PlayerList'
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Stats from './components/Stats'
import GetMlbData from './contexts/PlayerContext'
import { Route, Switch } from 'react-router-dom' 



function App() {

  return (

      <div className="App">
        <GetMlbData>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <PlayerList />
            </Route> 
            <Route path="/stats/:id">
              <Stats />
            </Route> 
          </Switch>
        </div>
        </GetMlbData>
      </div>
  );
}

export default App;

// handleClick={ playerId => setId(id)}