




function startGame()
{
    let winLossTieCount = [0,0,0];
    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener('click', () => {    //UNDERSTAND CALLBACK FUNCTIONS
            playRound(button.id, winLossTieCount)
        })
    });
}




function playRound(playerSelection, winLossTieCount)
{
    let computerSelection = getComputerChoice();
    let roundResult = checkRoundWin(playerSelection, computerSelection);
    let header = document.querySelector(".header");

    if(roundResult == "win")
    {
        winLossTieCount[0]++;
        document.querySelector(".pWins").textContent = "Player wins: " + winLossTieCount[0];
        header.textContent = "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if(roundResult == "lose")
    {
        winLossTieCount[1]++;
        document.querySelector(".cWins").textContent = "Computer wins: " + winLossTieCount[1];
        header.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else
    {
        winLossTieCount[2]++;
        document.querySelector(".ties").textContent = "Ties: " + winLossTieCount[2];
        header.textContent = "Tie";
    }

    checkGameWin(winLossTieCount);
}

function checkRoundWin(playerSelection, computerSelection)
{
    if(playerSelection == "rock")
    {
        if(computerSelection == "rock")
        {
           return "tie";
        }
        else if(computerSelection == "paper")
        {
           return "lose";
        }
        else
        {
           return "win";
        }
    }
    else if(playerSelection == "paper")
    {
        if(computerSelection == "rock")
        {
            return "win";
        }
        else if(computerSelection == "paper")
        {
            return "tie";
        }
        else
        {
            return "lose";
        }
    }
    else
    {
        if(computerSelection == "rock")
        {
            return "lose";
        }
        else if(computerSelection == "paper")
        {
            return "win";
        }
        else
        {
            return "tie";
        }
    }
}



function checkGameWin(winLossTieCount)
{
    let header = document.querySelector(".header");

    if(winLossTieCount[0]>4)
    {
        header.textContent = "You win the game!";
        resetGame(winLossTieCount);
    }

    if(winLossTieCount[1]>4)
    {
        header.textContent = "You lose the game, try again!";
        resetGame(winLossTieCount);
    }
}

function resetGame(winLossTieCount)
{
    winLossTieCount[0] = 0;
    winLossTieCount[1] = 0;
    winLossTieCount[2] = 0;
    document.querySelector(".pWins").textContent = "Player wins: 0";
    document.querySelector(".cWins").textContent = "Computer wins: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
}

function getComputerChoice()
{
    let num = Math.floor(Math.random() * 3);

    if(num == 0)
    {
        return "rock";
    }
    else if(num == 1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}






startGame();