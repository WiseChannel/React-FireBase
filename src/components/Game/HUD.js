import React from 'react'
import ProgressBar from "./Progressbar/progressBar";

export default function HUD({score, questionNumber}) {
    return(
        <div id="hud">
            <div className='hud'>
                <p className="hub-prefix">Question: {questionNumber}/10</p>
                <h1 className="hub-main-text">{score}</h1>
                <ProgressBar
                    max={10}
                    current={questionNumber}
                />
            </div>
            <div className='hud'>
                <p className="hub-prefix">Score</p>
                <h1 className="hub-main-text">{score}</h1>
            </div>
        </div>
    )
}
