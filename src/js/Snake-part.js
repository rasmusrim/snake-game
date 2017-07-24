export default class SnakePart {
    constructor(xPosition, yPosition) {
        this.setXPosition(xPosition);
        this.setYPosition(yPosition);
    }

    generateDiv(snakePartId) {
        var snakePart = document.createElement('div');
        snakePart.id = 'snakePart_' + snakePartId;
        snakePart.className = 'snake-part';
        snakePart.style.width = this.getSize();
        snakePart.style.height = this.getSize();
        snakePart.style.top = this.getYPixelPosition();
        snakePart.style.left = this.getXPixelPosition();

        return snakePart;
    }

    setXPosition(xPosition) {
        this.xPosition = xPosition;
    }

    getXPosition() {
        return this.xPosition;
    }

    setYPosition(yPosition) {
        this.yPosition = yPosition;
    }

    getYPosition() {
        return this.yPosition;
    }

    getXPixelPosition() {
        return this.getXPosition() * this.getSize();
    }

    getYPixelPosition() {
        return this.getYPosition() * this.getSize();
    }


    setSize(size) {
        this.size = size;
    }

    getSize() {
        return this.size;
    }



}


