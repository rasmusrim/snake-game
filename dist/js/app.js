!function e(t,n,i){function s(o,a){if(!n[o]){if(!t[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(r)return r(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var h=n[o]={exports:{}};t[o][0].call(h.exports,function(e){var n=t[o][1][e];return s(n||e)},h,h.exports,e,t,n,i)}return n[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)s(i[o]);return s}({1:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(e("./Helpers")),o=function(){function e(t){i(this,e),this.setValue(t)}return s(e,[{key:"generateDiv",value:function(){var e=document.createElement("div");return e.className="answer",e.style.top=this.getYPosition(),e.style.left=this.getXPosition(),e.innerHTML=this.getValue(),this.setDiv(e),e}},{key:"setRandomPosition",value:function(e,t){this.setXPosition(r.default.getRandomInteger(0,e)),this.setYPosition(r.default.getRandomInteger(0,t))}},{key:"setValue",value:function(e){this.value=e}},{key:"getValue",value:function(){return this.value}},{key:"setXPosition",value:function(e){this.xPosition=e}},{key:"getXPosition",value:function(){return this.xPosition}},{key:"setYPosition",value:function(e){this.yPosition=e}},{key:"getYPosition",value:function(){return this.yPosition}},{key:"setDiv",value:function(e){this.div=e}},{key:"getDiv",value:function(){return this.div}}]),e}();n.default=o},{"./Helpers":4}],2:[function(e,t,n){"use strict";t.exports={DIRECTION_UP:0,DIRECTION_RIGHT:1,DIRECTION_DOWN:2,DIRECTION_LEFT:3}},{}],3:[function(require,module,exports){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_Helpers=require("./Helpers"),_Helpers2=_interopRequireDefault(_Helpers),Equation=function(){function Equation(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;_classCallCheck(this,Equation),this.setLeftNumber(_Helpers2.default.getRandomInteger(e,t)),this.setRightNumber(_Helpers2.default.getRandomInteger(e,t)),this.setOperator("+"),this.setMin(e),this.setMax(t)}return _createClass(Equation,[{key:"getString",value:function(){return this.getLeftNumber()+" "+this.getOperator()+" "+this.getRightNumber()}},{key:"generateAnswers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=[];t.push(this.getCorrectAnswer());for(var n=0;n<e-1;n++){var i=new Equation(this.getMin(),this.getMax());t.push(i.getCorrectAnswer())}return _Helpers2.default.shuffleArray(t),t}},{key:"getCorrectAnswer",value:function getCorrectAnswer(){var equationString=this.getString();return eval(equationString)}},{key:"setLeftNumber",value:function(e){this.leftNumber=e}},{key:"getLeftNumber",value:function(){return this.leftNumber}},{key:"setRightNumber",value:function(e){this.rightNumber=e}},{key:"getRightNumber",value:function(){return this.rightNumber}},{key:"setOperator",value:function(e){this.operator=e}},{key:"getOperator",value:function(){return this.operator}},{key:"setMin",value:function(e){this.min=e}},{key:"getMin",value:function(){return this.min}},{key:"setMax",value:function(e){this.max=e}},{key:"getMax",value:function(){return this.max}}]),Equation}();exports.default=Equation},{"./Helpers":4}],4:[function(e,t,n){"use strict";t.exports={getRandomInteger:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},shuffleArray:function(e){for(var t=e.length;t;t--){var n=Math.floor(Math.random()*t),i=[e[n],e[t-1]];e[t-1]=i[0],e[n]=i[1]}}}},{}],5:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=i(e("./Snake")),a=i(e("./Equation")),u=i(e("./Answer")),l=i(e("./Constants")),h=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;s(this,e),this.setArenaElement(t),this.snake=new o.default(n),this.snake.setArenaElement(t),this.snake.setPartSize(5),this.setSpeed(100),this.snake.setDirection(l.default.DIRECTION_RIGHT),this.snake.initialize(5,5),this.answers=[]}return r(e,[{key:"start",value:function(){this.snake.draw(),this.generateAndShowEquation(),this.generateAnswers(),this.showAnswers(),this.addKeyPressListener(),this.startIteration()}},{key:"generateAndShowEquation",value:function(){var e=new a.default(100,1e3);document.getElementById("equation").innerHTML=e.getString(),this.setEquation(e)}},{key:"generateAnswers",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=this.getEquation().generateAnswers(e),n=this.getArenaElement(),i=0;i<t.length;i++)this.answers[i]=new u.default(t[i]),this.answers[i].setRandomPosition(n.clientWidth-50,n.clientHeight-50)}},{key:"showAnswers",value:function(){for(var e=0;e<this.answers.length;e++){var t=this.answers[e].generateDiv();this.getArenaElement().appendChild(t)}}},{key:"removeAnswers",value:function(){for(var e=0;e<this.answers.length;e++){var t=this.answers[e].getDiv();t.parentNode.removeChild(t)}}},{key:"addKeyPressListener",value:function(){var e=this;window.onkeydown=function(t){switch(t.key){case"ArrowUp":e.snake.setDirection(l.default.DIRECTION_UP);break;case"ArrowRight":e.snake.setDirection(l.default.DIRECTION_RIGHT);break;case"ArrowDown":e.snake.setDirection(l.default.DIRECTION_DOWN);break;case"ArrowLeft":e.snake.setDirection(l.default.DIRECTION_LEFT)}}}},{key:"doIteration",value:function(){this.snake.move(),this.snake.isCollision()&&this.end();var e=this.checkIfSnakeHasHitAnswer();e&&(e.value==this.getEquation().getCorrectAnswer()?(console.log("Epic win!"),this.setSpeed(this.getSpeed()-10),this.stopIteration(),this.startIteration()):console.log("Epic lose!"),this.generateAndShowEquation(),this.removeAnswers(),this.generateAnswers(),this.showAnswers())}},{key:"checkIfSnakeHasHitAnswer",value:function(){for(var e=0;e<this.answers.length;e++)if(this.snake.checkIfHitDiv(this.answers[e].getDiv()))return this.answers[e]}},{key:"startIteration",value:function(){var e=this,t=setInterval(function(){e.doIteration()},this.getSpeed());this.setIntervalId(t)}},{key:"stopIteration",value:function(){clearInterval(this.getIntervalId())}},{key:"end",value:function(){this.stopIteration()}},{key:"setSpeed",value:function(e){this.speed=e}},{key:"getSpeed",value:function(){return this.speed}},{key:"setIntervalId",value:function(e){this.intervalId=e}},{key:"getIntervalId",value:function(){return this.intervalId}},{key:"setEquation",value:function(e){this.equation=e}},{key:"getEquation",value:function(){return this.equation}},{key:"setArenaElement",value:function(e){this.arenaElement=e}},{key:"getArenaElement",value:function(){return this.arenaElement}}]),e}();n.default=h},{"./Answer":1,"./Constants":2,"./Equation":3,"./Snake":7}],6:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(e("./Constants")),o=function(){function e(t,n){i(this,e),this.setXPosition(t),this.setYPosition(n)}return s(e,[{key:"generateDiv",value:function(e){var t=document.createElement("div");return this.setDiv(t),t.className="snake-part",t.style.width=this.getSize(),t.style.height=this.getSize(),this.updatePosition(),t}},{key:"moveTo",value:function(e){this.setXPosition(e.getXPosition()),this.setYPosition(e.getYPosition()),this.updatePosition()}},{key:"move",value:function(e){switch(e){case r.default.DIRECTION_RIGHT:this.setXPosition(this.getXPosition()+1);break;case r.default.DIRECTION_DOWN:this.setYPosition(this.getYPosition()+1);break;case r.default.DIRECTION_LEFT:this.setXPosition(this.getXPosition()-1);break;case r.default.DIRECTION_UP:this.setYPosition(this.getYPosition()-1);break;default:console.log("Invalid direction")}this.updatePosition()}},{key:"updatePosition",value:function(){var e=this.getDiv();e.style.top=this.getYPixelPosition(),e.style.left=this.getXPixelPosition()}},{key:"setXPosition",value:function(e){this.xPosition=e}},{key:"getXPosition",value:function(){return this.xPosition}},{key:"setYPosition",value:function(e){this.yPosition=e}},{key:"getYPosition",value:function(){return this.yPosition}},{key:"getXPixelPosition",value:function(){return this.getXPosition()*this.getSize()}},{key:"getYPixelPosition",value:function(){return this.getYPosition()*this.getSize()}},{key:"setSize",value:function(e){this.size=e}},{key:"getSize",value:function(){return this.size}},{key:"setDiv",value:function(e){this.div=e}},{key:"getDiv",value:function(){return this.div}}]),e}();n.default=o},{"./Constants":2}],7:[function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(e("./Snake-part")),o=function(){function e(t){i(this,e),this.setLength(t),this.setDirection(this.DIRECTION_RIGHT)}return s(e,[{key:"initialize",value:function(e,t){this.generateParts(e,t)}},{key:"generateParts",value:function(e,t){this.snakeParts=[];for(var n=0;n<this.getLength();n++){var i=new r.default(e+n,t);i.setSize(this.getPartSize()),this.snakeParts.push(i)}}},{key:"draw",value:function(){for(var e=0;e<this.snakeParts.length;e++){var t=this.snakeParts[e].generateDiv(e);this.getArenaElement().appendChild(t)}}},{key:"move",value:function(){for(var e=0;e<this.snakeParts.length-1;e++)this.snakeParts[e].moveTo(this.snakeParts[e+1]);this.snakeParts[this.snakeParts.length-1].move(this.getDirection())}},{key:"isCollision",value:function(){return!!this.isCollisionWithSnake()||this.isCollisionWithWall()}},{key:"isCollisionWithSnake",value:function(){for(var e=this.getFirstSnakePart(),t=0;t<this.snakeParts.length-1;t++)if(e.getXPosition()==this.snakeParts[t].getXPosition()&&e.getYPosition()==this.snakeParts[t].getYPosition())return!0;return!1}},{key:"isCollisionWithWall",value:function(){var e=this.getFirstSnakePart();return e.getXPixelPosition()<e.getSize()||(e.getYPixelPosition()<e.getSize()||(e.getYPixelPosition()>=this.getArenaElement().clientHeight||e.getXPixelPosition()>=this.getArenaElement().clientWidth))}},{key:"checkIfHitDiv",value:function(e){var t=this.getFirstSnakePart().getDiv(),n=t.offsetLeft,i=t.offsetTop,s=i+t.clientHeight,r=n+t.clientWidth,o=e.offsetLeft,a=e.offsetTop,u=a+e.clientHeight,l=o+e.clientHeight;return!(s<a||i>u||r<o||n>l)}},{key:"getFirstSnakePart",value:function(){return this.snakeParts[this.snakeParts.length-1]}},{key:"setLength",value:function(e){this.length=e}},{key:"getLength",value:function(){return this.length}},{key:"setArenaElement",value:function(e){this.arenaElement=e}},{key:"getArenaElement",value:function(){return this.arenaElement}},{key:"setPartSize",value:function(e){this.partSize=e}},{key:"getPartSize",value:function(){return this.partSize}},{key:"setDirection",value:function(e){this.direction=e}},{key:"getDirection",value:function(){return this.direction}}]),e}();n.default=o},{"./Snake-part":6}],8:[function(e,t,n){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(e("./Snake-game"));window.onload=function(){var e=new i.default(document.getElementById("arena"),100);e.setSpeed(100),e.start()}},{"./Snake-game":5}]},{},[8]);
//# sourceMappingURL=maps/app.js.map
