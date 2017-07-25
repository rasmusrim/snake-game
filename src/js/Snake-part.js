import Constants from './Constants'

export default class SnakePart {
    constructor(xPosition, yPosition) {
        this.setXPosition(xPosition);
        this.setYPosition(yPosition);

    }

    generateDiv(snakePartId) {
        var snakePart = document.createElement('div');
        this.setDiv(snakePart);

        snakePart.className = 'snake-part';
        snakePart.style.width = this.getSize();
        snakePart.style.height = this.getSize();

        this.updatePosition();

        return snakePart;
    }

    moveTo(snakePart) {
        this.setXPosition(snakePart.getXPosition());
        this.setYPosition(snakePart.getYPosition());

        this.updatePosition();
    }

    move(direction) {
        switch(direction) {
            case Constants.DIRECTION_RIGHT:
                this.setXPosition(this.getXPosition() + 1);
                break;
            case Constants.DIRECTION_DOWN:
                this.setYPosition(this.getYPosition() + 1);
                break;
            case Constants.DIRECTION_LEFT:
                this.setXPosition(this.getXPosition() - 1);
                break;
            case Constants.DIRECTION_UP:
                this.setYPosition(this.getYPosition() - 1);
                break;
            default:
                console.log('Invalid direction');
                break;
        }

        this.updatePosition();
    }

    updatePosition() {
        var div = this.getDiv();
        div.style.top = this.getYPixelPosition();
        div.style.left = this.getXPixelPosition();
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

    setDiv(div) {
        this.div = div;
    }

    getDiv() {
        return this.div;
    }

}


