computer_win_count = 0;
human_win_count = 0;

const rock_button = document.getElementById("Rck"); 
const paper_button = document.getElementById("Ppr");
const scissors_button = document.getElementById("Scr");
const restart_button = document.getElementById("restart");

const stat = document.getElementById("status");
const winner = document.getElementById("winner");
const cscore = document.getElementById("cscore");
const uscore = document.getElementById("uscore");
const result = document.getElementById("result");

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

function restart(){
    computer_win_count = 0;
    human_win_count = 0;
    result.textContent = "";
    winner.textContent = "";
    uscore.textContent = 0;
    cscore.textContent = 0;
    stat.textContent = "Let's play again! Till 5 points!"
}

function game(which){
    const your_choice = which;
    let round = play_round(your_choice.toLowerCase(), getComputerChoice().toLowerCase());
    if (round === 1){
        human_win_count++;
        uscore.textContent = human_win_count;
        result.textContent = `You win! Computer:${computer_win_count} vs Human:${human_win_count}`
    } else if (round === 0){
        computer_win_count++;
        cscore.textContent = computer_win_count;
        result.textContent = `Computer wins! Computer:${computer_win_count} vs Human:${human_win_count}`
    } else {
        result.textContent = "Draw! Nobody wins!"
    }
    if (computer_win_count === 5 || human_win_count === 5){
        stat.innerText = "We have a winner!"
        if (computer_win_count === 5){
            winner.textContent = `Computer wins! Computer:${computer_win_count} vs Human:${human_win_count}`
        } else if (human_win_count === 5){
            winner.textContent = `You win! Computer:${computer_win_count} vs Human:${human_win_count}`
    }
    restart_button.addEventListener('click', restart);
}
}

  rock_button.addEventListener('click', () => game(rock_button.textContent));
  paper_button.addEventListener('click', () => game(paper_button.textContent));
  scissors_button.addEventListener('click', () => game(scissors_button.textContent));
 