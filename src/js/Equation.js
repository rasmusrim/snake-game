import Helpers from './Helpers'

export default class Equation {


    constructor(min = 0, max = 10) {


        this.setLeftNumber(Helpers.getRandomInteger(min, max));
        this.setRightNumber(Helpers.getRandomInteger(min, max));
        this.setOperator('+');

        this.setMin(min);
        this.setMax(max);

    }

    getString() {
        return this.getLeftNumber() + ' ' + this.getOperator() + ' ' + this.getRightNumber();
    }

    generateAnswers(numberOfAnswers = 5) {

        var answers = [];
        answers.push(this.getCorrectAnswer());

        for(var i = 0; i < numberOfAnswers - 1; i++) {
            var randomOtherEquation = new Equation(this.getMin(), this.getMax());
            answers.push(randomOtherEquation.getCorrectAnswer());
        }

        Helpers.shuffleArray(answers);

        return answers;

    }

    getCorrectAnswer() {
        var equationString = this.getString();
        return eval(equationString);

    }

    setLeftNumber(leftNumber) {
        this.leftNumber = leftNumber;
    }

    getLeftNumber() {
        return this.leftNumber;
    }

    setRightNumber(rightNumber) {
        this.rightNumber = rightNumber;
    }

    getRightNumber() {
        return this.rightNumber;
    }

    setOperator(operator) {
        this.operator = operator;
    }

    getOperator() {
        return this.operator;
    }

    setMin(min) {
        this.min = min;
    }

    getMin() {
        return this.min;
    }

    setMax(max) {
        this.max = max;
    }

    getMax() {
        return this.max;
    }

}


