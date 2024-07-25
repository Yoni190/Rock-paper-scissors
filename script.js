let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1){
        return "rock";
    }
    else if(choice == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter Rock, Paper, or Scissors: ");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){
    if((humanChoice == "paper" && computerChoice == "paper") || (humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "scissors")){
        console.log("It's a tie");
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock");
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors");
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats paper");
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats rock");
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors");
        computerScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats paper");
        computerScore++;
    }
}

function playGame(){
    
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Computer: " + computerScore);
        console.log("Human: " + humanScore);
    }
    if(humanScore > computerScore){
        console.log("The winner is you!");
    }
    else if(humanScore < computerScore){
        console.log("The winner is the computer");
    }
    else{
        console.log("It's a tie");
    }
}
playGame();