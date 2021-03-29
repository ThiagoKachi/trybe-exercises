const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const correctAnswerQuestion = (correct) => {
    return (answer) => {
        if (correct === answer) {
            return true
        } else {
            return false
        }
    }
}

console.log(correctAnswerQuestion(correctAnswer)(userAnswer));