import React, { Component } from 'react';
import Question from "./Question/question";
import {LoadQuestion} from "../helpers/QuestionHelpers";

export default class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: null,
            currentQuestion: null,
            loading: true
        };
    }

    async componentDidMount() {
        const url = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;

        try {
            const questions = await LoadQuestion()
            console.log(questions)
            this.setState({
                questions,
                currentQuestion: questions[0],
                loading: false });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <>
                {this.state.loading && <div id='loader'/>}
                {!this.state.loading && this.state.currentQuestion && (
                    <Question question={this.state.currentQuestion} />
                )}
            </>
        );
    }
}
