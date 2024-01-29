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
    span.textContent = result;
    result = result.toUpperCase();
    
    if (result == 'WIN') {
        userWinCnt++;
    }
    else if (result == "LOSS") {
        cmpWinCnt++;
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
const scissor = document.querySelector('#Scissors');
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
        choiceBlock.textContent = "Game Over Refresh the page to start again :)";
    }
    else {
        game(event) ;
        console.log(userWinCnt);
        if (userWinCnt==5 || cmpWinCnt==5) {

            choiceBlock.textContent = "Game Over Refresh the page to start again :)";
        }
    }
});
});
