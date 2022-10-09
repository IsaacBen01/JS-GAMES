const choices = ["rock", "paper", "scissors"];
const winners = [];

function game(){
    for (let i = 1; i <= 5; i++) {
        playRound();
    }
    logWins();
}


function  playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const verifyWinner = winner(playerSelection, computerSelection);
    winners.push(verifyWinner);
    console.log(verifyWinner);
}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function getPlayerChoice() {
    let playerInput = prompt("Type in rock, paper or scissors to play");

    playerInput = playerInput.toLowerCase();
    let confirm = verifyInput(playerInput);
    if (confirm == true) {
        console.log(playerInput)
    }
    return playerInput;
}

function verifyInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function winner(pInput, cInput) {
    if (pInput === cInput) {
        return "Tie";
    } else if ((pInput === "rock" && cInput === "scissors") || (pInput === "scissors" && cInput === "paper") || (pInput === "paper" && cInput === "rock")) {
        return "Player won"
    } else {
        return "Computer won"
    }
}

function logWins() {
    let playerwins = winners.filter((item) => item == "Player won").length;
    let computerWins = winners.filter((item) => item == 'Computer won').length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results");
    console.log("Player Wins:", playerwins);
    console.log("Computer wins:", computerWins),
    console.log("Ties:". ties)
}

game() 