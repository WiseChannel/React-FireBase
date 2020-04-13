import React from 'react';

import Home from "./components/Home/home";
import HighScore from "./components/HighScroes/highScore";
import Game from "./components/Game/game";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';



function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path='/' component={Home} />
            <Route path='/game' component={Game} />
            <Route path='/highScore' component={HighScore} />
        </Router>
    </div>
  );
}

export default App;
