import SnakePart from './Snake-part'

export default class Snake {


    constructor(snakeLength) {
        var DIRECTION_UP = 0;
        var DIRECTION_RIGHT = 1;
        var DIRECTION_DOWN = 2;
        var DIRECTION_LEFT = 3;

        this.setSnakeLength(snakeLength);
        this.setSnakeDirection(this.DIRECTION_RIGHT);

    }

    initialize(startXPosition, startYPosition) {
        this.generateSnakeParts(startXPosition, startYPosition);
    }

    generateSnakeParts(startXPosition, startYPosition) {
        this.snakeParts = [];

        for(var i = 0; i < this.getSnakeLength(); i++) {
            var snakePart = new SnakePart(startXPosition + i, startYPosition);
            snakePart.setSize(this.getSnakePartSize());
            
            this.snakeParts.push(snakePart);
        }

    }

    draw() {
        for(var i = 0; i < this.snakeParts.length; i++) {
            var snakePart = this.snakeParts[i].generateDiv(i);
            this.getArenaElement().appendChild(snakePart);
        }
    }

    move() {
        for(var i = 0; i < this.snakeParts.length; i++) {
            this.snakeParts[i].moveTo();
        }

    }

    setSnakeLength(snakeLength) {
        this.snakeLength = snakeLength;
    }

    getSnakeLength() {
        return this.snakeLength;
    }

    setArenaElement(arenaElement) {
        this.arenaElement = arenaElement;
    }

    getArenaElement() {
        return this.arenaElement;
    }

    setSnakePartSize(snakePartSize) {
        this.snakePartSize = snakePartSize;
    }

    getSnakePartSize() {
        return this.snakePartSize;
    }

    setSnakeDirection(direction) {
        this.direction = direction;
    }

    getSnakeDirection() {
        return this.direction;
    }
}


