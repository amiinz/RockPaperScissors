function getComputerChoice(){
    rand =Math.random()
    if (rand<.33){
        return('rock');
    }
    else if (rand<.66){return('paper');}
    else{return('scissors');}
}

function playRound(playerSelection,computerSelection){
    const lowered_player_selection = playerSelection.toLowerCase();
    switch (lowered_player_selection){
        case 'rock':
            switch(computerSelection){
                case 'rock':
                    return('Draw!')
                case 'paper':
                    return('you lose! paper beats rock!')
                case 'scissors':
                    return('you win! rock beats scissors')
            }
        case 'paper':
            switch(computerSelection){
                case 'paper':
                    return('Draw!')
                case 'rock':
                    return('you win! paper beats rock!')
                case 'scissors':
                    return('you lose! rock beats scissors')
            }
        case 'scissors':
            switch(computerSelection){
                case 'scissors':
                    return('Draw!')
                case 'paper':
                    return('you win! paper beats rock!')
                case 'rock':
                    return('you lose! rock beats scissors')
            }
    }

}
function game(rounds=5){
    let computer_score=0;
    let player_score=0;
    for (let i=0; i<rounds;i++){
        let player_choice= prompt('what is your choice?')
        let computer_choice= getComputerChoice()
        let round_result = playRound(player_choice,computer_choice)
        if (round_result.includes('win')){
            player_score +=1;
            console.log(round_result)
        }else if(round_result.includes('lose')){
            computer_score+=1;
            console.log(round_result)
        }else if (round_result.includes('draw')){
            computer_score+=.5;
            player_score +=.5;

            console.log(round_result)}  
    }
    console.log(`game finished! final score is:
     player ${player_score} computer ${computer_score}`)
    return('Done!')
}

// const playerSelection = 'rock';
// const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection));

game()