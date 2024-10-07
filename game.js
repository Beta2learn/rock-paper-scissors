function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function getComputerChoice() {
        const ComputerChoice = Math.floor(Math.random() * 3);

        if (ComputerChoice === 0) {
                    return "rock";
                } else if (ComputerChoice === 1) {
                    return "paper";
                } else {
                    return "scissors";
                }
            }
    
    
    function getHumanChoice(){
        let input = prompt("Enter rock, paper or scissors").toLowerCase(); 
    while (input === null || (input !== "rock" && input !== "paper" & input !== "scissors")){
        input = prompt("Invalid input. Please enter rock, paper, or scissors").toLowerCase();
    }
    return input;
    }
    
    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    if(humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
        ){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;           } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        console.log(`score: Human ${humanScore} - computer ${computerScore}`);
        }
        //counter to play 5 rounds
    
         for (let i = 0; 
             i < 5;
            i++
         )
        {
        const buttons = document.querySelectorAll("button");
        buttons.forEach((button)=> {
            button.addEventListener("click", () => {
                alert(button.id);
            });
        });

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
        }
    
    if(humanScore > computerScore) {
        console.log("Congratulations! You win!")
        } else if( computerScore > humanScore){
            console.log("Computer wins!")
        } else{
        console.log("Weldone, it's a tie!")
        }
    }
    
    playGame();