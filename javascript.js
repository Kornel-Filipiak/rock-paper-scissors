function getPlayerChoice(){


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





const arsenal = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let roundCount = 0;
const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');


buttons.forEach((button) => {   
    
    button.addEventListener('click', () => {
            
        //play a round and determine result
        console.log(button.id);
        const result = playRound(button.id, getComputerChoice(arsenal));
            
        //keep track of the result
        if(result === 'win'){
             playerScore++;
            }
        else if(result === 'lose'){
            computerScore++;
            }

        //Display round scores
        results.textContent=`Round ${++roundCount} \r\n\n Player: ${playerScore} \r\n Computer: ${computerScore}`;


        //determine winner of game and reset the game
        
        if(playerScore === 5 || computerScore === 5){

            if(playerScore > computerScore){
                results.textContent=`You Win! \r\n\n Final Score: \r\n Player ${playerScore} \r\n Computer ${computerScore}`;
                }
            else if (playerScore < computerScore){
                results.textContent=`You Lose :( \r\n\n Final Score: \r\n Player ${playerScore} \r\n Computer ${computerScore}`;
                }
            else{
                results.textContent=`Tie Game. \r\n\n Final Score: \r\n Player ${playerScore} \r\n Computer ${computerScore}`;
                }
            playerScore = computerScore = roundCount =0; //reset round counter and scores
        }

        });
});








    




