let humanScore = 0;
let computerScore = 0;
let round = 0;

const resultText = document.getElementById("result");
const roundText = document.getElementById("round");
const humanScoreText = document.getElementById("humanScore");
const computerScoreText = document.getElementById("computerScore");

resetGame();

//Reset game state
function resetGame() {    
    //Reset score
    humanScore = 0;
    computerScore = 0;
    round = 0;  
    //Set default ui content and hide round counter
    resultText.textContent = "Select a hand to start...";
    resultText.style.color = "black"
    roundText.textContent = "";
    humanScoreText.textContent = `Your Score: ${humanScore}`;
    computerScoreText.innerText = `Computer Score: ${computerScore}`; 

    document.querySelectorAll(".playerChoiceBtn").forEach(btn => btn.disabled = false);    //Enable game buttons
}

//Generate random number bewtween max and min
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

 //Function to play each round
 function playRound(computerChoice, humanChoice) {
    round ++;
    let result = "";

    if(computerChoice === humanChoice) {    //Draw game
        result = "You draw!"
    }
    else {
        //Computer picked rock
        if(computerChoice === "rock" && humanChoice === "paper")            { result = "Paper beats Rock, you win!";        humanScore++;}
        else if(computerChoice === "rock" && humanChoice === "sissors")     { result = "Rock beats Sissors, you loose";     computerScore++;}
        //Computer picked paper
        if(computerChoice === "paper" && humanChoice === "rock")            { result = "Paper beats Rock, you Loose";       computerScore++;}
        else if(computerChoice === "paper" && humanChoice === "sissors")    { result = "Sissors beats Paper, you win!";     humanScore++;}
        //Computer picked sissors
        if(computerChoice === "sissors" && humanChoice === "rock")          { result = "Rock beats Sissors, you win";       humanScore++;}
        else if(computerChoice === "sissors" && humanChoice === "paper")    { result = "Sissors beats Paper, you loose";    computerScore++;}
    }

    //Update round/result/score display
    roundText.textContent = `Round ${round}`
    resultText.textContent = `${result}`;
    humanScoreText.textContent =  `Your Score: ${humanScore}`;
    computerScoreText.innerText = `Computer Score: ${computerScore}`;

    //Display win/loss, disable game buttons and display reset button.
    if(humanScore >= 5) {  
        resultText.textContent ="You win the game!";
        resultText.style.color = "blue";
        document.querySelectorAll(".playerChoiceBtn").forEach(btn => btn.disabled = true);
        showResetButton();
    }
    else if(computerScore >= 5) {
        resultText.textContent ="You loose the game";
        resultText.style.color = "red";
        document.querySelectorAll(".playerChoiceBtn").forEach(btn => btn.disabled = true);
        showResetButton();
    }
}

//Show reset button under scores
function showResetButton() {
    const gameInfo = document.getElementById("gameInfo");
    const resetBtn = document.createElement("button");
    resetBtn.id = "resetBtn";
    resetBtn.textContent = "Play again?";
    gameInfo.appendChild(resetBtn)
}

//Event delegation for all button click events (choice buttons, reset button)
document.addEventListener('click', (e) => {
    let target = e.target;
    let computerChoice = getComputerChoice();
    let humanChoice = "";

    switch(target.id) { //Clicked element
        case 'rockBtn':
            humanChoice = "rock"
            console.log("Rock DOM"); break;
        case 'paperBtn':
            humanChoice = "paper"
            console.log("Paper DOM"); break;
        case 'sissorsBtn':
            humanChoice = "sissors"
            console.log("Rock DOM"); break;
        case 'resetBtn': //Return used to prevent round from starting
            e.target.parentNode.removeChild(e.target);  //Remove reset button upon click
            resetGame();  
            return; 
        default:    
            return;
    }

    playRound(computerChoice, humanChoice);
})