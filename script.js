function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice == 1){
        return "Rock";
    }
    else if(choice == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function getHumanChoice(){
    let choice = prompt("Enter Rock, Paper, or Scissors: ");
    choice = choice.toLowerCase();
    return choice;
}
console.log(getHumanChoice());