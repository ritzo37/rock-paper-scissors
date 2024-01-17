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
