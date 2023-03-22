function getComputerChoice(){
    var things = ['Rock', 'Paper', 'Scissors'];
    return things[Math.floor(Math.random()*things.length)];
}

function play_round(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return 1
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return 1
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return 1
    } else if (playerSelection === computerSelection){
        return 2
    }
    else{
        return 0
    }  
}

function game(){
    console.log("Welcome to the \"Rock, Paper, Scissors\" game!")
    computer_win_count = 0;
    human_win_count = 0;
    let i = 1;
    while (i <= 5){
        your_choice = prompt("choose what you're playing with:");
        let winner = play_round(your_choice.toLowerCase(), getComputerChoice().toLowerCase());
        if (winner === 1){
            human_win_count++;
            console.log(`You win! Computer:${computer_win_count} vs Human:${human_win_count}`)
        } else if (winner === 0){
            computer_win_count++;
            console.log(`Computer wins! Computer:${computer_win_count} vs Human:${human_win_count}`)
        } else {
            console.log("Draw! Nobody wins!")
        }
        i++;
    }
    if (computer_win_count > human_win_count){
        return `Computer wins! Computer:${computer_win_count} vs Human:${human_win_count}`
    } else if (computer_win_count < human_win_count){
        return `You win! Computer:${computer_win_count} vs Human:${human_win_count}`
    } else (computer_win_count === human_win_count)
        return `Draw! Computer:${computer_win_count} vs Human:${human_win_count}`
}

console.log(game())