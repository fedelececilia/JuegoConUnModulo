import {getRandomChoice} from "./getRandomChoice"

let text : HTMLCollectionOf<Element>= document.getElementsByTagName("P");
let mensajeResultado : HTMLElement = text[0] as HTMLElement;                         //VER
var userLives = 0;
var botLives = 0;

function game(choice : HTMLElement){
  var result = "";
  let computerChoice : string = getRandomChoice();
  var userChoice = choice.id;
  var userWins = 'Bot: ' + computerChoice + '<span> YOU WIN !!</span>';
  var botWins =  'Bot: ' + computerChoice + '<span> YOU LOSE !!</span>';
  var draw = 'Bot: ' + computerChoice + '<span> DRAW</span>';
  if(computerChoice == "Rock"){
    if(userChoice == "paper" || userChoice == "spock"){                    //esto es controlador
      result = userWins;
    }
    else if(userChoice == "rock"){
      result = draw;
    }
    else{
      result = botWins;
    }
  }
  else if(computerChoice == "Paper"){
    if(userChoice == "scissor" || userChoice == "lizard"){
      result = userWins;
    }
    else if(userChoice == "paper"){
      result = draw;
    }
    else{
      result = botWins;
    }
  }
  else if(computerChoice == "Scissor"){
    if(userChoice == "spock" || userChoice == "rock"){
      result = userWins;
    }
    else if(userChoice == "scissor"){
      result = draw;
    }
    else{
      result = botWins;
    }
  }   
  else if(computerChoice == "Lizard"){
    if(userChoice == "rock" || userChoice == "scissor"){
      result = userWins;
    }
    else if(userChoice == "lizard"){
      result = draw;
    }
    else{
      result = botWins;
    }   
  }
  else if(computerChoice == "Spock"){
    if(userChoice == "lizard" || userChoice == "paper"){
      result = userWins;
    }
    else if(userChoice == "spock"){
      result = draw;
    }
    else{
      result = botWins;
    }
  }

  if(result==userWins){
    mensajeResultado.style.color="green";
    choice.style.background="green";
    mensajeResultado.innerHTML=result;
    setTimeout(function(){choice.style.background ="";},1000);
  }
  else if(result==botWins){
    mensajeResultado.style.color="red";
    choice.style.background="red";
    mensajeResultado.innerHTML=result;
    setTimeout(function(){choice.style.background ="";},1000);
  }
  else if(result==draw){
    mensajeResultado.style.color="white";
    choice.style.background="white";
    mensajeResultado.innerHTML=result;
    setTimeout(function(){choice.style.background ="";},1000);  
  }
  score(result,userWins,botWins);
}

function score(result: string, userWins: string, botWins: string) {
  let life : HTMLCollectionOf<Element> = document.getElementsByClassName("icon-heart");
  if(result==userWins){
    (<HTMLElement>life[(botLives++)+3]).style.color="black";                          //VER
  }
  else if(result==botWins){
    (<HTMLElement>life[(userLives++)]).style.color="black";    
  }
  if(botLives==3 || userLives==3){
    if(userLives==3){
      mensajeResultado.innerHTML+="<span>Better Luck Next Time! Bot Wins!</span>";
    }
    else{
      mensajeResultado.innerHTML+="<span>Some good luck you got there!</span>";
    }
    for (var i = life.length - 1; i >= 0; i--) {
      (<HTMLElement>life[i]).style.color="rgb(255,0,0)";
      botLives=0
      userLives=0
    }
  }
}


