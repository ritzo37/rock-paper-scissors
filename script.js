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
function game() {
    let userWinCnt = 0 ; 
    let computerWinCnt = 0 ;
    while (userWinCnt!=5 && computerWinCnt!=5) {
    let userChoice = getUserChoice() ; 
    userChoice = userChoice.toUpperCase() ; // to handle cases sensitiveness
    while (userChoice!="ROCK" && userChoice!="PAPER" && userChoice!="SCISSOR") { // invalid Choice
        alert("Please Enter a Valid Input from rock,paper,scissor!") ; 
        userChoice = getUserChoice().toUpperCase() ;
    }
    console.log("Your Choice : " + userChoice)

    let computerChoice = getComputerChoice().toUpperCase() ;
    console.log("Computer's Choice : " + computerChoice) ; 

    let result = calcResult(userChoice,computerChoice) ; 
    if (result=="WIN") {
      alert("Congrats! You win!") ; 
        userWinCnt++ ;
    }
    else if (result=="LOSS") {
      alert("You lost :(") ; 
        computerWinCnt++ ;
    }
    else {
      alert("It's a draw!!") ;
    }
    console.log("Score : " + userWinCnt + " | " + computerWinCnt) ; 
   }
   alert("Game Over");
   if (userWinCnt==5) {
    console.log("You won the game yay!!") ;
   }
   else {
    console.log("You lost the game :( ") ; 
   }
}
game() ;