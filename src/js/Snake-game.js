import Snake from './Snake'
import Equation from './Equation'
import Answer from './Answer'
import Constants from './Constants'

export default class SnakeGame {
    constructor(arenaElement, snakeLength = 10) {

        this.setArenaElement(arenaElement);
        this.snake = new Snake(snakeLength);
        
        this.snake.setArenaElement(arenaElement);
        this.snake.setPartSize(5);
        this.setSpeed(100);
        this.snake.setDirection(Constants.DIRECTION_RIGHT);
        this.snake.initialize(5, 5);
        this.answers = [];

    }

    start() {
        this.snake.draw();
        this.generateAndShowEquation();
        this.generateAnswers();
        this.showAnswers();
        this.addKeyPressListener();
        this.startIteration();


    }

    generateAndShowEquation() {
        var equation = new Equation(100, 1000)

        document.getElementById('equation').innerHTML = equation.getString();
        
        this.setEquation(equation);
    }

    generateAnswers(numberOfAnswers = 5) {
        var equation = this.getEquation();
        var answers = equation.generateAnswers(numberOfAnswers);

        var arena = this.getArenaElement();

        for(var i = 0; i < answers.length; i++) {
            this.answers[i] = new Answer(answers[i]);
            this.answers[i].setRandomPosition(arena.clientWidth - 50, arena.clientHeight - 50);

        }

    }

    showAnswers() {
        for(var i = 0; i < this.answers.length; i++) {
            var answerDiv = this.answers[i].generateDiv();
            this.getArenaElement().appendChild(answerDiv);
        }

    }

    removeAnswers() {
        for(var i = 0; i < this.answers.length; i++) {
            var answerDiv = this.answers[i].getDiv();
            answerDiv.parentNode.removeChild(answerDiv);
        }
    }

    addKeyPressListener() {
        window.onkeydown = (key) => { 
            switch(key.key) {
                case 'ArrowUp':
                    this.snake.setDirection(Constants.DIRECTION_UP);
                    break;
                case 'ArrowRight':
                    this.snake.setDirection(Constants.DIRECTION_RIGHT);
                    break;
                case 'ArrowDown':
                    this.snake.setDirection(Constants.DIRECTION_DOWN);
                    break;
                case 'ArrowLeft':
                    this.snake.setDirection(Constants.DIRECTION_LEFT);
                    break;
            }
        }

    }

    doIteration() {
        this.snake.move();

        if(this.snake.isCollision()) {
            this.end();
        }

        var answerHit = this.checkIfSnakeHasHitAnswer();
        
        if(answerHit) {
            if(answerHit.value == this.getEquation().getCorrectAnswer()) {
                console.log('Epic win!');
                this.setSpeed(this.getSpeed() - 10);
                this.stopIteration();
                this.startIteration();
            } else {
                console.log('Epic lose!');
            }

            this.generateAndShowEquation();
            this.removeAnswers();
            this.generateAnswers();
            this.showAnswers();

        }

    }

    checkIfSnakeHasHitAnswer() {
        for(var i = 0; i < this.answers.length; i++) {
            if(this.snake.checkIfHitDiv(this.answers[i].getDiv())) {
                return this.answers[i];
            }
        }
    }

    startIteration() {
        var intervalId = setInterval(() => { 
            this.doIteration();

        }, this.getSpeed());

        this.setIntervalId(intervalId);

    }

    stopIteration() {
        clearInterval(this.getIntervalId());

    }

    end() {
        this.stopIteration();
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    getSpeed() {
        return this.speed;
    }

    setIntervalId(intervalId) {
        this.intervalId = intervalId;
    }

    getIntervalId() {
        return this.intervalId;
    }

    setEquation(equation) {
        this.equation = equation;
    }

    getEquation() {
        return this.equation;
    }

    setArenaElement(arenaElement) {
        this.arenaElement = arenaElement;
    }

    getArenaElement() {
        return this.arenaElement;
    }


}