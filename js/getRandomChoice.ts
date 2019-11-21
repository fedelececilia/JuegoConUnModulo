export function getRandomChoice(): string {
    let choiceArray = ["Paper", "Rock", "Scissor", "Spock", "Lizard"];
    var computerChoice = Math.random();
    computerChoice = Math.floor((computerChoice * 5) + 1);
    return choiceArray[computerChoice];
}

//module.exports=getRandomChoice;