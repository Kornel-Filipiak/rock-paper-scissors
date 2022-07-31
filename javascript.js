function getPlayerChoice(){
    return (prompt("Rock, paper, or scissors? ")).toLowerCase();
}

function getComputerChoice(arsenal){

    return arsenal[Math.floor((Math.random() * 3))];
}

function playRound(playerSelection, computerSelection){

    //console.log(`player selection: ${playerSelection}; computer selection: ${computerSelection}`);

    switch(true){
        case playerSelection === computerSelection:
            return 'tie';
        case playerSelection === 'rock' && computerSelection === 'scissors':
            return 'win'
        case playerSelection === 'scissors' && computerSelection === 'paper':
            return 'win';
        case playerSelection === 'paper' && computerSelection === 'rock':
            return 'win';
        default:
            return 'lose';
    }
}


function game(){

    const arsenal = ['rock', 'paper', 'scissors'];
    let computerScore = 0;
    let playerScore = 0;

    //play fives rounds and keep score
    for(let i = 0; i < 5; i++){
        const result = playRound(getPlayerChoice(), getComputerChoice(arsenal));
        if(result === 'win'){
            playerScore++;
        }
        else if(result === 'lose'){
            computerScore++;
        }

        console.log(`Round ${i+1} - Player: ${playerScore} Computer: ${computerScore}`); //show round score
    }

    //determine winner of game
    if(playerScore > computerScore){
        console.log(`You Win! \nFinal Score - Player: ${playerScore} Computer: ${computerScore}`);
    }
    else if (playerScore < computerScore){
        console.log(`You Lose :( \nFinal Score - Player: ${playerScore} Computer: ${computerScore}`);
    }
    else{
        console.log(`Tie Game. \nFinal Score - Player: ${playerScore} Computer: ${computerScore}`);
    }

}

//play game
game();