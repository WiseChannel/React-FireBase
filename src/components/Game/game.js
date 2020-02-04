import React from 'react'
import Question from "./Question/question";

const dummyQuestion = {
    question: "What's the best programming language? ",
    answerChoice: ['JavaScript', 'Java', 'C#', 'Swift']
}

class Game extends React.Component{

    render() {
        return(
            <div>
                <h1>Question One:</h1>
                <Question question={dummyQuestion}/>
            </div>
        )
    }
}

export default Game
