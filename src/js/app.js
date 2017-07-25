import SnakeGame from './Snake-game';

window.onload = function() {
    
    var snakeGame = new SnakeGame(document.getElementById('arena'), 100);
    snakeGame.setSpeed(100);
    snakeGame.start();
}

