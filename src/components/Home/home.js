import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div className='container'>
            <h1>Wise App</h1>
            <Link to="/game" className='btn'>Start Game</Link>
            <Link to="/highScore" className='btn'>High Score</Link>
        </div>
    )
};

export default Home
