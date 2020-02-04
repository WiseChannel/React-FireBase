export const LoadQuestion = async (
                                   amount = 10,
                                   category = 9,
                                   difficulty = 'easy',
                                   type = 'multiple') => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

    try {
        const res = await fetch(url);
        const {results} = await res.json();
        return convertQuestionFromAPI(results)

    } catch (e) {
        console.error(e)
    }
}

const convertQuestionFromAPI = (rawQuestions) => {
    return rawQuestions.map((loadedQuestion) => {
        const formattedQuestion = {
            question: loadedQuestion.question,
            answerChoices: [...loadedQuestion.incorrect_answers]
        };

        formattedQuestion.answer = Math.floor(Math.random() * 4);

        formattedQuestion.answerChoices.splice(
            formattedQuestion.answer,
            0,
            loadedQuestion.correct_answer
        );

        return formattedQuestion;
    });
}
