function getComputerChoice(){
    let choice  = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "Rock";
    }
    else if(choice == 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }     
}
function getHumanChoice(){
    let humanChoice = prompt("Which one do you want to choice( Paper, Scissor, Rock)?");
    return humanChoice;
}
function playRound(humanChoice, computerChoice, humanScore, computerScore){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    if(human == computer){
        console.log("It's a tie!");
    }
    else if(human == "rock" && computer == "paper"){
        computerScore++;
        console.log("You lose! Paper beats Rock");
    }
    else if(human == "paper" && computer == "scissors"){
        computerScore++;
        console.log("You lose! Scissors beats Paper");

    }
    else if(human == "scissors" && computer == "rock"){
        computerScore++;
        console.log("You lose! Rock beats Rock");

    }
    else {
        humanScore++;
        console.log("You Win");
    }
    return {humanScore, computerScore};
    
    
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let score;
    for(let i = 0; i < 5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let scores = playRound(humanSelection, computerSelection, humanScore, computerScore);
        humanScore = scores.humanScore;
        computerScore = scores.computerScore;
    }
    if(humanScore > computerScore){
        return console.log('You Won with ' + humanScore + ' points!!');
    }
    else{
        return console.log('You Lost, Computer had ' + computerScore + ' points!!' + ' and you had ' + humanScore + ' points');
    }
}

playGame();