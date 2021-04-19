import React from 'react'
import Navbar from './components/Navbar'
import PlayerList from './components/PlayerList'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Stats from './components/Stats'
import GetMlbData from './contexts/PlayerContext'

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
