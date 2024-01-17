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
function getUserChoice() {
    let choice = prompt("Enter your choice !");
    return choice;
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
