function getComputerChoice() {  
    let choice = Math.floor(Math.random() * 10) ; 
    choice%=3 ; 
    if (choice==0) {
        return "Rock";
    }
    else if (choice==1) {
        return "Paper" ; 
    }
    else {
        return "Scissor";
    }
}
function calcResult(userChoice,computerChoice) {
    if (userChoice===computerChoice) {
      return "Draw" ; 
    }
    else if (userChoice=="ROCK") {
      if (computerChoice=="PAPER") {
          return "LOSS"
      }
      else { // here the computerchoice will be Scissor 
          return "WIN"; 
      }
    }
    else if (userChoice=="PAPER") {
      if (computerChoice=="SCISSOR") {
          return "LOSS" ;
      }
      else { // here the computerchoice will be Rock
          return "WIN" ; 
      }
    }
    else { // here the userChoice will be Scissor
      if (computerChoice=="PAPER") {
          return "WIN" ;
      }
      else { // here the computerChoice will be rock 
          return "LOSS" ; 
      }
    }
}
function game(userChoice) {
     userChoice = userChoice.toUpperCase() ;
     let computerChoice = getComputerChoice().toUpperCase() ; 

     let result = calcResult(userChoice,computerChoice);

     const span = document.querySelector('.result');
     span.textContent = result ; 
}
const input = document.querySelector('.choices'); 
input.addEventListener('click',getvalue);

let userChoice ;
function getvalue(event) {
     userChoice = event.target.classList.value ;
     game(userChoice);
}
