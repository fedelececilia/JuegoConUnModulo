"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomChoice() {
    var choiceArray = ["Paper", "Rock", "Scissor", "Spock", "Lizard"];
    var computerChoice = Math.random();
    computerChoice = Math.floor((computerChoice * 5) + 1);
    return choiceArray[computerChoice];
}
exports.getRandomChoice = getRandomChoice;
//module.exports=getRandomChoice;
