import React from "react";

import './question.css'

export default function Question({ question }) {
    return(
        <div className='question'>
            <h2 dangerouslySetInnerHTML={{__html: question.question}}></h2>
            {question.answerChoices.map((choice, index) => (
                <div key={index} className='choice-container'>
                    <p className='choice-prefix'>{index + 1}</p>
                    <h3 dangerouslySetInnerHTML={{__html: choice}}></h3>
                </div>
            ))}
        </div>
    )
}
