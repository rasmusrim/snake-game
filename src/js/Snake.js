import SnakePart from './Snake-part'

export default class Snake {


    constructor(snakeLength) {

        this.setLength(snakeLength);
        this.setDirection(this.DIRECTION_RIGHT);

    }

    initialize(startXPosition, startYPosition) {
        this.generateParts(startXPosition, startYPosition);
    }

    generateParts(startXPosition, startYPosition) {
        this.snakeParts = [];

        for(var i = 0; i < this.getLength(); i++) {
            var snakePart = new SnakePart(startXPosition + i, startYPosition);
            snakePart.setSize(this.getPartSize());
            
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
        for(var i = 0; i < this.snakeParts.length - 1; i++) {
            this.snakeParts[i].moveTo(this.snakeParts[i + 1]);
        }

        this.snakeParts[this.snakeParts.length - 1].move(this.getDirection());


    }

    isCollision() {
        if(this.isCollisionWithSnake()) {
            return true;
        }

        return this.isCollisionWithWall();
    }

    isCollisionWithSnake() {
        var firstSnakePart = this.getFirstSnakePart();

        for(var i = 0; i < this.snakeParts.length - 1; i++) {
            if(firstSnakePart.getXPosition() == this.snakeParts[i].getXPosition() &&
               firstSnakePart.getYPosition() == this.snakeParts[i].getYPosition()) {
                    return true;
            }
        }

        return false;

    }

    isCollisionWithWall() {
        var firstSnakePart = this.getFirstSnakePart();
        if(firstSnakePart.getXPixelPosition() < firstSnakePart.getSize()) {
            return true;
        }

        if(firstSnakePart.getYPixelPosition() < firstSnakePart.getSize()) {
            return true;
        }

        if(firstSnakePart.getYPixelPosition() >= this.getArenaElement().clientHeight) {
            return true;
        }

        if(firstSnakePart.getXPixelPosition() >= this.getArenaElement().clientWidth) {
            return true;
        }

        return false;
  

    }


    checkIfHitDiv(div) {
        var firstSnakePart = this.getFirstSnakePart();
        var firstSnakePartDiv = firstSnakePart.getDiv();


        var x1 = firstSnakePartDiv.offsetLeft;
        var y1 = firstSnakePartDiv.offsetTop;
        var h1 = firstSnakePartDiv.clientHeight;
        var w1 = firstSnakePartDiv.clientWidth;
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = div.offsetLeft;
        var y2 = div.offsetTop;
        var h2 = div.clientHeight;
        var w2 = div.clientHeight;
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
            return false;
        }
        
        return true;

    }

    getFirstSnakePart() {
        return this.snakeParts[this.snakeParts.length - 1];

    }

    setLength(length) {
        this.length = length;
    }

    getLength() {
        return this.length;
    }

    setArenaElement(arenaElement) {
        this.arenaElement = arenaElement;
    }

    getArenaElement() {
        return this.arenaElement;
    }

    setPartSize(partSize) {
        this.partSize = partSize;
    }

    getPartSize() {
        return this.partSize;
    }

    setDirection(direction) {
        this.direction = direction;
    }

    getDirection() {
        return this.direction;
    }
}


