import SnakeGame from './Snake-game';

window.onload = function() {
    
    var snakeGame = new SnakeGame(document.getElementById('arena'));

    snakeGame.start();
}

