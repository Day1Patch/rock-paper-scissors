function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'scissors';
    } else {
        return `paper`;
    }
}

function playRound(playerSelection, computerSelection) {
    // Eingabe anpassen, so dass auch Rock oder RoCK z.b. moeglich waeren

    playerSelection = playerSelection.toLowerCase();

    // Tie Game

    if (playerSelection == computerSelection) {
        return `Tie`;
    } 

    // Player wins

    else if (
        playerSelection == "rock" && computerSelection === "scissors" ||
        playerSelection == "scissors" && computerSelection === "paper" ||
        playerSelection == "paper" && computerSelection === "rock"
    ) {
        return `Win`;
    } 

    //Player loses

    else if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'paper' && computerSelection == 'scissors')
    ) {
        return `Lose`;
    } 
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameScore;
    for (let i=1; i<6; i++) {
        let playerSelection = prompt("Let's play a game of Rock-Paper-Scissors. Which one do you choose?");
        gameScore = playRound(playerSelection, computerPlay());
        
        //Ergebnis zaehlen

        if (gameScore === 'Win') {
            playerScore += 1;
            console.log(`You win round #${i}`);
        } else if (gameScore === 'Lose') {
            computerScore += 1;
            console.log(`The computer wins round #${i}`);
        } else {
            console.log(`Round #${i} is a tie!`);
        }    }
    // detecting the winner

    if (playerScore > computerScore) {
        console.log(`You win the game! Endresults are ${playerScore}:${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Computer wins the game! Endresults are ${playerScore}:${computerScore}`);
    } else {
        console.log(`The game is a tie! Endresults are ${playerScore}:${computerScore}`);
    }
}


game();