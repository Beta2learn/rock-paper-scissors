    function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    //set document background image
    document.body.style.backgroundImage = "url(./image/background.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

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
    padding: 10px;
    overflow-y: auto; `;
    document.body.appendChild(container);

    //created div for  header elements
    const header = document.createElement("div")
    container.appendChild(header);

    const title = document.createElement("h1");
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
    font-weight: bold;`;
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

    // function to show message
    function showMessage(message){
        messageDisplay.textContent = message;
    }

    // function to get computer choice
    function getComputerChoice(){
         const ComputerChoice = Math.floor(Math.random() * 3);
            if (ComputerChoice === 0) {
                    return "rock";
            } else if (ComputerChoice === 1) {
                    return "paper";
            } else {
                    return "scissors";
                    }
                }
    
    //function to create image choice

    function createChoice(imgSrc, altText, labelText, choice) {
        const choiceContainer = document.createElement("div");
        choiceContainer.style.cssText = `
        display: inline-block;
        text-align: center;
        margin: 10px;
        border-radius: 8px;`;


        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = altText;
        img.width = 100;
        img.height = 100;
        img.style.borderRadius = "8px";

        const label = document.createElement("span");
        label.textContent = labelText;
        label.style.cssText = `
        display: block;
        font-size: 15px;`;
        
        // eventlistener for choice/image selection
        img.addEventListener("click", function () {
            if (roundsPlayed < 5) { 
            const computerChoice = getComputerChoice();
            playRound(choice, computerChoice);

            const allImages = document.querySelectorAll("#humanselection img");
                allImages.forEach(image => {
                    image.style.border = "none";
                });
            }
            img.style.border = "2px dotted red";
        });

        //append image and label to choice container
        choiceContainer.appendChild(img);
        choiceContainer.appendChild(label);

        return choiceContainer;
    }

    // create & append game choices
    div.appendChild(createChoice("./image/rock.png", "rock", "Rock", "rock"));
    div.appendChild(createChoice("./image/paper.png", "paper", "Paper", "paper"));
    div.appendChild(createChoice("./image/scissors.png", "scissors", "Scissors", "scissors"));

    //element to display score
    const humanScoreDisplay = document.createElement("p");
    humanScoreDisplay.textContent = "Human Score: 0";
    humanScoreDisplay.style.fontWeight = "bold";
    container.appendChild(humanScoreDisplay);

    const computerScoreDisplay = document.createElement("p");
    computerScoreDisplay.textContent = "Computer Score: 0";
    computerScoreDisplay.style.fontWeight = "bold";
    container.appendChild(computerScoreDisplay);

    //reset game
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Game";
    resetButton.style.cssText = `
    margin: 50px;
    padding: 10px 15px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    background-color: #f44336;
    color: white;
    cursor: pointer;`;
    container.appendChild(resetButton);
    resetButton.addEventListener("click", function(){
        humanScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        humanScoreDisplay.textContent = "Human Score: 0";
        computerScoreDisplay.textContent = "Computer Score: 0";
        showMessage("Game reset! Make a selection to begin");
        computerChoiceImage.src = " ";
        computer
        
    });

    // playRound function
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (computerChoice === "rock") {
            computerChoiceImage.src = "./image/rock.png";
        } else if (computerChoice === "paper") {
            computerChoiceImage.src = "./image/paper.png";
        } else {
            computerChoiceImage.src = "./image/scissors.png";
        }

        if (humanChoice === computerChoice) {
            showMessage("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            showMessage(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            showMessage(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        //update score display
        humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

        // increment rounds played
        roundsPlayed++;

        //play 5 rounds
        if (roundsPlayed === 5) {
            choicesEnabled = false;

            if (humanScore > computerScore) {
                showMessage("Congratulations! You win! Game over. Click 'Reset game' to play again ");
            } else if (computerScore > humanScore) {
                showMessage("Computer wins! Game over. Click 'Reset game' to play again");
            } else {
                showMessage("Well done, it's a tie! Game over. Click 'Reset game' to play again");
            }
        }

        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

// Run the game
playGame();


