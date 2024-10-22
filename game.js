// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     let roundsplayed = 0;

    //set document background image
    document.body.style.backgroundImage = "url(./image/background.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no repeat";

    //container for game
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = 
    `
    max-width: 100vh;
    max-height: 80vh;
    min-height: 50vh;
    margin: 50px auto;
    background-color: #deb887;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding: 10px;
    overflow-y: auto; `;
    document.body.appendChild(container);

    //created div for  header elements
    const header = document.createElement("div")
    container.appendChild(header);

    const title = document.createElement("hi");
    title.textContent = "Rock, Paper & Scissors";
    title.style.cssText = `
    color: #f44336;
    text-align: center;`;
    header.appendChild(title);

    // paragraph
    const para1 = document.createElement("p");
    para1.textContent = "Make a selection to begin";
    para1.style.cssText = `
    font-size: 18px;
    text-align: center;
    font-weigt: bold;`;
    header.appendChild(para1);

    // div for selection
    const div = document.createElement("div");
    div.id = "humanselection";
    header.appendChild(div);
    
    //computer GUI
    const div2 = document.createElement("div");
    div2.style.flex = 1;
    container.appendChild(div2);

    const para2 = document.createElement("p");
    para2.textContent = "Computer Selection";
    para2.style.cssText = `
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    margin-top: 40px;`;
    div2.appendChild(para2);

    // div for computer selection
    const div3 = document.createElement("div");
    div3.id = "computerselection";
    div3.style.marginTop = "20px";
    div2.appendChild(div3)
    
    // image element
    const computerChoiceImage = document.createElement("img");
    computerChoiceImage.style.cssText = `
    width: 100px;
    height: 100px;
    border-radius: 8px;
    margin: 10px auto;
    display: flex;`;
    div3.appendChild(computerChoiceImage);

    // result message display
    const messageDisplay = document.createElement("p");
    messageDisplay.style.cssText = `
    font-size: 15px;
    text-align: center;
    font-weight: bold;`;
    container.appendChild(messageDisplay);












    // function getComputerChoice() {
    //     const ComputerChoice = Math.floor(Math.random() * 3);

    //     if (ComputerChoice === 0) {
    //                 return "rock";
    //             } else if (ComputerChoice === 1) {
    //                 return "paper";
    //             } else {
    //                 return "scissors";
    //             }
    //         }
    
    
    // function getHumanChoice(){
    //     let input = prompt("Enter rock, paper or scissors").toLowerCase(); 
    // while (input === null || (input !== "rock" && input !== "paper" & input !== "scissors")){
    //     input = prompt("Invalid input. Please enter rock, paper, or scissors").toLowerCase();
    // }
    // return input;
    // }
    
    // function playRound(humanChoice, computerChoice){
    // humanChoice = humanChoice.toLowerCase();
    
    // if(humanChoice === computerChoice) {
    //     console.log("It's a tie!");
    // } else if(
    //     (humanChoice === "rock" && computerChoice === "scissors") ||
    //     (humanChoice === "scissors" && computerChoice === "paper") ||
    //     (humanChoice === "paper" && computerChoice === "rock")
    //     ){
    //         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    //         humanScore++;           } else {
    //         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    //         computerScore++;
    //     }
    //     console.log(`score: Human ${humanScore} - computer ${computerScore}`);
    //     }
        
    //         };
        

    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    
    // playRound(humanSelection, computerSelection);
        
    
    // if(humanScore > computerScore) {
    //     console.log("Congratulations! You win!")
    //     } else if( computerScore > humanScore){
    //         console.log("Computer wins!")
    //     } else{
    //     console.log("Weldone, it's a tie!")
    //     }
    
    
    // playGame();