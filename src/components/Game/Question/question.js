import React from "react";

import './question.css'

export default function Question({ question }) {
    return(
        <div className='question'>
            <h2>{question.question}</h2>
            {question.answerChoice.map((choice, index) => (
                <div className='choice-container'>
                    <p className='choice-prefix'>{index + 1}</p>
                    <h3>{choice}</h3>
                </div>
            ))}
        </div>
    )
}
