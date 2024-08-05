let humanScore = 0, computerScore = 0;
const selected = document.querySelectorAll(".choice");
const screen = document.querySelector(".screen");
const buttons = document.querySelector("#buttons");
const value = document.querySelector(".value");
const result = document.querySelector(".result");
let counter = 0;

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



function playRound(humanChoice, computerChoice){
    const display = document.createElement("div");
    screen.textContent = "";
    if((humanChoice == "paper" && computerChoice == "paper") || (humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "scissors")){
        
        display.textContent = "It's a tie";
        screen.append(display);
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        
        display.textContent = "You win! Paper beats rock";
        screen.append(display);
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        display.textContent = "You win! Rock beats scissors";
        screen.append(display);
        humanScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        display.textContent = "You win! Scissors beats paper";
        screen.append(display);
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        display.textContent = "You lose! Paper beats rock";
        screen.append(display);
        computerScore++;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        display.textContent = "You lose! Rock beats scissors";
        screen.append(display);
        computerScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        display.textContent = "You lose! Scissors beats paper";
        screen.append(display);
        computerScore++;
    }

    value.textContent = "";
    const score = document.createElement("h2");
    score.textContent = humanScore + ":" + computerScore;
    value.appendChild(score);
    
}
selected.forEach(slc =>{
    slc.addEventListener("click",(e)=>{
        counter++;
        if(counter>=5){
            let textNode;
            if(humanScore==computerScore){
                textNode = document.createTextNode("You won");
            }
            else if(computerScore>humanScore){
                textNode = document.createTextNode("You lost");
            }
            else{
                textNode = document.createTextNode("It's a tie");
            }
            result.appendChild(textNode);
            const again = document.createElement("button");
            again.textContent = "Play Again";
            
            /*while(buttons.firstChild){
                buttons.removeChild(buttons.firstChild);
            }*/
            selected.forEach(itm =>{
                itm.style.display = "none";
            });
            buttons.appendChild(again);
            again.addEventListener("click", ()=>{
                buttons.removeChild(again);
                selected.forEach(itm =>{
                    itm.style.display = "block";
                });
                screen.textContent = "";
                counter = 0;
                value.textContent = "";
                humanScore = 0;
                computerScore = 0;
                result.textContent = "";
            });
        };
        choice = e.target.innerHTML;
        choice = choice.toLowerCase();
        playRound(choice, getComputerChoice());
        
    });
});


/*function playGame(){
    
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
playGame();*/