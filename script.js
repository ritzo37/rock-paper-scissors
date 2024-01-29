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
function game(userChoice) {
    userChoice = userChoice.toUpperCase();
    let computerChoice = getComputerChoice().toUpperCase();

    let result = calcResult(userChoice, computerChoice);

    const span = document.querySelector('.result');
    span.textContent = result;
    return result;
}

let userWinCnt = 0;
let cmpWinCnt = 0;
const input = document.querySelector('.choices');
let userChoice;
input.addEventListener('click', (event)=> {
    if (userWinCnt==5 || cmpWinCnt==5) {
        console.log("Game Over");
    }
    else {
        getvalue(event) ;
    }
});
function getvalue(event) {
    userChoice = event.target.classList.value;
    let result = game(userChoice);
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
