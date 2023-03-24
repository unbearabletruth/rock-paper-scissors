computer_win_count = 0;
human_win_count = 0;



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

function game(which){
    const your_choice = which;
    let winner = play_round(your_choice.toLowerCase(), getComputerChoice().toLowerCase());
    if (winner === 1){
        human_win_count++;
        const uscore = document.getElementById("uscore");
        uscore.textContent = human_win_count;
        console.log(`You win! Computer:${computer_win_count} vs Human:${human_win_count}`)
    } else if (winner === 0){
        computer_win_count++;
        const cscore = document.getElementById("cscore");
        cscore.textContent = computer_win_count;
        console.log(`Computer wins! Computer:${computer_win_count} vs Human:${human_win_count}`)
    } else {
        console.log("Draw! Nobody wins!")
    }
    if (computer_win_count === 5){
        const winner = document.getElementById("winner");
        winner.textContent = `Computer wins! Computer:${computer_win_count} vs Human:${human_win_count}`
    } else if (human_win_count === 5){
        const winner = document.getElementById("winner");
        winner.textContent = `You win! Computer:${computer_win_count} vs Human:${human_win_count}`
    }
}

  const rock_button = document.getElementById("Rck");
  rock_button.addEventListener('click', () => game(rock_button.textContent));
  
  const paper_button = document.getElementById("Ppr");
  paper_button.addEventListener('click', () => game(paper_button.textContent));

  const scissors_button = document.getElementById("Scr");
  scissors_button.addEventListener('click', () => game(scissors_button.textContent));
 