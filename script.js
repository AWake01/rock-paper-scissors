function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {

    let rand = getRandomInt(3, 1);
    let choice = "";

    switch(rand) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "sissors";
            break;
    }
    return choice;
}

function getHumanChoice() {

    let choice = prompt("Rock, Paper or Sissors?");
    choice = choice.toLowerCase();
    return choice;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(computerChoice, humanChoice) {
        console.log(computerChoice + " : " + humanChoice);
        let result = "";
    
        if(computerChoice === humanChoice) {
            result = "You draw!"
        }
        else {
            if(computerChoice === "rock" && humanChoice === "paper") { result = "Paper beats Rock, you win!"; humanScore++;}
            else if(computerChoice === "rock" && humanChoice === "sissors") { result = "Rock beats Sissors, you loose"; computerScore++;}
    
            if(computerChoice === "paper" && humanChoice === "rock") { result = "Paper beats Rock, you Loose"; computerScore++;}
            else if(computerChoice === "paper" && humanChoice === "sissors") { result = "Sissors beats Paper, you win!";  humanScore++;}
    
            if(computerChoice === "sissors" && humanChoice === "rock") { result = "Rock beats Sissors, you win";  humanScore++;}
            else if(computerChoice === "sissors" && humanChoice === "paper") { result = "Sissors beats Paper, you loose"; computerScore++;}
        }
    
        return result;
    }

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log(playRound(computerChoice, humanChoice));
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    console.log(playRound(computerChoice, humanChoice));
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    console.log(playRound(computerChoice, humanChoice));
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    console.log(playRound(computerChoice, humanChoice));
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    console.log(playRound(computerChoice, humanChoice));
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
}

console.log(playGame());