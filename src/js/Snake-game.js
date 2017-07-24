import Snake from './Snake'

export default class SnakeGame {
    constructor(arenaElement, snakeLength = 10) {
        this.arenaElement = arenaElement;
        this.snake = new Snake(snakeLength);
        
        this.snake.setArenaElement(arenaElement);
        this.snake.setSnakePartSize(5);
        this.snake.initialize(5, 5);

    }

    start() {
        this.snake.draw();

        setInterval(() => { 
            this.snake.move(); 
        }, 1000);


    }

}


