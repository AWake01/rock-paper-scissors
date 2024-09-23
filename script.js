//Generate random numebr bewtween max and min
function getRandomInt(max, min) {   
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Get computer hand choice (1-3 > rock, paper, sissors)
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

//Get choice from player via prompt and convert to lowecase for comparison
function getHumanChoice() {

    let choice = prompt("Rock, Paper or Sissors?");
    choice = choice.toLowerCase();
    return choice;
}

//Play 5 rounds
function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    //Function to play each round
    function playRound(computerChoice, humanChoice) {
        console.log(computerChoice + " : " + humanChoice);
        let result = "";
    
        if(computerChoice === humanChoice) {    //Draw game
            result = "You draw!"
        }
        else {
            //Computer picked rock
            if(computerChoice === "rock" && humanChoice === "paper") { result = "Paper beats Rock, you win!"; humanScore++;}
            else if(computerChoice === "rock" && humanChoice === "sissors") { result = "Rock beats Sissors, you loose"; computerScore++;}
            //Computer picked paper
            if(computerChoice === "paper" && humanChoice === "rock") { result = "Paper beats Rock, you Loose"; computerScore++;}
            else if(computerChoice === "paper" && humanChoice === "sissors") { result = "Sissors beats Paper, you win!";  humanScore++;}
            //Computer picked sissors
            if(computerChoice === "sissors" && humanChoice === "rock") { result = "Rock beats Sissors, you win";  humanScore++;}
            else if(computerChoice === "sissors" && humanChoice === "paper") { result = "Sissors beats Paper, you loose"; computerScore++;}
        }
    
        return result;
    }

    //Round 1
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(playRound(computerChoice, humanChoice));
    //Round 2
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log(playRound(computerChoice, humanChoice));
    //Round 3
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log(playRound(computerChoice, humanChoice));
    //Round 4
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log(playRound(computerChoice, humanChoice));
    //Round 5
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log(playRound(computerChoice, humanChoice));

    //Final score
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
}

console.log(playGame());    //Run game