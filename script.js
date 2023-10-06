const choices = ["Stone", "Paper", "Scissors"]; //declare choices 

let playerScore = 0; // place score

let computerScore = 0; //computer score

const playerScoreElement = document.getElementById("playerScore"); //acces player score paragraph
const computerScoreElement = document.getElementById("computerScore"); //acces computer score paragraph

const messageBox = document.getElementById("messageBox"); //acess messagebox div
const closeMessageBoxButton = document.getElementById("closeMessageBox"); //access mesaage close btn 
closeMessageBoxButton.addEventListener("click", closeMessageBox); //add event for close messagebox



const startGame = document.getElementById("startGame"); //access start game div

const resultElement = document.getElementById("result"); //access result div
    

let resetButton; //declare resetgame btn
resetButton  = document.createElement("button"); //create reset game btn
resetButton.textContent = "Start new game"; //add content for reset game btn
resetButton.classList.add("resetBtn"); //add class for reset game btn to apply css


// fuction for select computer choice start
function computerChoice() {

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}
// fuction for select computer choice end

//play rule function start
function play(playerChoice) {

    const computer = computerChoice();

    const result = determineWinner(playerChoice, computer);

    displayResult(playerChoice, computer, result);

    updateScore(result);

    endGame(playerScore , computerScore);

}
//play rule function end

//select winner for rounds function start
function determineWinner(player, computer) {

    if (player === computer) return "It's a tie!";

    if ((player === "Stone" && computer === "Scissors") ||
        (player === "Paper" && computer === "Stone") ||
        (player === "Scissors" && computer === "Paper")) {
        return "You win!";
    }

    return "Computer wins!";
}
//select winner for rounds function end

// display result for round function start 
function displayResult(player, computer, result) {

    resultElement.innerHTML = `Your choice: ${player}<br>Computer's choice: ${computer}<br>Result: ${result}`;

}
// display result for round function end

// update score for player and computer fuction start 
function updateScore(result) {

    if (result === "You win!") {
        playerScore++;
    } 
    else if (result === "Computer wins!") {
        computerScore++;
    }
    else{
        playerScore++;
        computerScore++;
    }

    playerScoreElement.textContent = playerScore;

    computerScoreElement.textContent = computerScore;
}
// update score for player and computer fuction end


// fuction declare for open msg box start 
function openMessageBox() {
    messageBox.style.display = "block";
    setTimeout(closeMessageBox, 3000);
}
// fuction declare for open msg box end

// fuction declare for close msg box start
function closeMessageBox() {
    messageBox.style.display = "none";
}
// fuction declare for close msg box end

// fuction to end game start 
function endGame(playerScore, computerScore){

    if(playerScore === 10 || computerScore === 10){

        document.getElementById("stone").disabled = true;
        document.getElementById("stone").style.opacity = ".5";
        document.getElementById("paper").disabled = true;
        document.getElementById("paper").style.opacity = ".5";
        document.getElementById("scissors").disabled = true;
        document.getElementById("scissors").style.opacity = ".5";

        if(playerScore  < computerScore){
            document.getElementById("msgResult").textContent = "Computer win!!";
        }
        else if(playerScore === computerScore){
            document.getElementById("msgResult").textContent = "it's a tie!!";
        }
        else{
            document.getElementById("msgResult").textContent = "You win!!"
        }

        openMessageBox();
        
        startGame.appendChild(resetButton);

        resetButton.addEventListener("click", resetGame);
    }
}
// fuction to end game start 

// fuction to restart game start 
function resetGame(){
    document.getElementById("stone").disabled = false;
    document.getElementById("stone").style.opacity = "1";
    document.getElementById("paper").disabled = false;
    document.getElementById("paper").style.opacity = "1";
    document.getElementById("scissors").disabled = false;
    document.getElementById("scissors").style.opacity = "1";
    
    playerScore = 0;
    computerScore = 0;

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    startGame.removeChild(resetButton);

    resultElement.innerHTML = "";

    closeMessageBox()

}
// fuction to restart game end

document.getElementById("stone").addEventListener("click", () => play("Stone")); //access stone btn and adds onclick event for user input
document.getElementById("paper").addEventListener("click", () => play("Paper"));  //access paper btn and adds onclick event for user input
document.getElementById("scissors").addEventListener("click", () => play("Scissors"));  //access scissors btn and adds onclick event for user input
