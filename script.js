function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10);
    choice %= 3;
    if (choice == 0) {
        return "Rock";
    }
    else if (choice == 1) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}
function calcResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Draw";
    }
    else if (userChoice == "ROCK") {
        if (computerChoice == "PAPER") {
            return "LOSS"
        }
        else { // here the computerchoice will be Scissor 
            return "WIN";
        }
    }
    else if (userChoice == "PAPER") {
        if (computerChoice == "SCISSOR") {
            return "LOSS";
        }
        else { // here the computerchoice will be Rock
            return "WIN";
        }
    }
    else { // here the userChoice will be Scissor
        if (computerChoice == "PAPER") {
            return "WIN";
        }
        else { // here the computerChoice will be rock 
            return "LOSS";
        }
    }
}
function game(event) {
    let userChoice;
    userChoice = event.target.id;
    userChoice = userChoice.toUpperCase();
    let computerChoice = getComputerChoice().toUpperCase();
    let result = calcResult(userChoice, computerChoice);

    const span = document.querySelector('.result');
 
    if (result == 'WIN') {
        span.textContent = `You won !! The computer chose ${computerChoice}` ;
        userWinCnt++;
    }
    else if (result == "LOSS") {
        span.textContent = `You lost :( The computer chose ${computerChoice}` ;
        cmpWinCnt++;
    }
    else {
        span.textContent = `The result was draw The computer chose ${computerChoice}` ; 
    }

    const playerScore = document.querySelector(".plyrscore");
    const computerScore = document.querySelector(".cmpscore");

    playerScore.textContent = userWinCnt;
    computerScore.textContent = cmpWinCnt;
}

let userWinCnt = 0;
let cmpWinCnt = 0;

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper') ;
const scissor = document.querySelector('#Scissor');
const choiceBlock = document.querySelector('.choices');

const arr= [];
arr.push(rock,paper,scissor);
arr.forEach(function(item) {

    item.addEventListener('click', (event)=> {
    event.target.classList.add('effect');
    event.target.addEventListener('transitionend',()=>{
        event.target.classList.remove('effect');
    })
    if (userWinCnt==5 || cmpWinCnt==5) {
        if (userWinCnt==5 && cmpWinCnt==5) {
            choiceBlock.textContent = "The game ended in a draw ! Refresh the page to start again :)"
        }
        if (userWinCnt==5) {
            choiceBlock.textContent = "You won the game ! Refresh the page to start again :)"
         }
         else {
            choiceBlock.textContent = "You lost the game :( Refresh the page to start again :)"
         }
    }
    else {
        game(event) ;
        if (userWinCnt==5 && cmpWinCnt==5) {
            choiceBlock.textContent = "The game ended in a draw ! Refresh the page to start again :)"
        }
        if (userWinCnt==5) {
            choiceBlock.textContent = "You won the game ! Refresh the page to start again :)"
         }
         else if (cmpWinCnt==5) {
            choiceBlock.textContent = "You lost the game :( Refresh the page to start again :)"
         }
    }
});
});
