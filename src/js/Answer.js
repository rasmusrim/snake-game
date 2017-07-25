import Helpers from './Helpers'


export default class Answer {

    constructor(value) {
        this.setValue(value);
    }

    generateDiv() {

        var div = document.createElement('div');

        div.className = 'answer';
        div.style.top = this.getYPosition();
        div.style.left = this.getXPosition();

        div.innerHTML = this.getValue();

        this.setDiv(div);

        return div;
    }

    setRandomPosition(maxX, maxY) {
        this.setXPosition(Helpers.getRandomInteger(0, maxX));
        this.setYPosition(Helpers.getRandomInteger(0, maxY));
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
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

    setDiv(div) {
        this.div = div;
    }

    getDiv() {
        return this.div;
    }



}


