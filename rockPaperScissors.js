




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



function game()
{
    let playerSelection;
    let computerSelection;
    let result;
    let playerWins = 0;
    let computerWins = 0;

    while(playerWins < 3 && computerWins < 3)
    {
    

        computerSelection = getComputerChoice();
       

        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.includes("win"))
        {
            playerWins++;
        }
        else if(result.includes("lose"))
        {
            computerWins++;
        }
    }

    if(playerWins > computerWins)
    {
        console.log("You win the game");
    }
    else
    {
        console.log("You lose the game");
    }
}





function playRound(playerSelection, winLossTieCount)
{
    let win, lose;
    let computerSelection = getComputerChoice();


 




    checkGameWin();
}

function compareChoices()
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

function checkRoundWin()
{
    if(win)
    {
        winLossTieCount[0]++;
        console.log("You win! " + playerSelection + " beats " + computerSelection);
    }
    else if(lose)
    {
        winLossTieCount[1]++;
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
    }
    else
    {
        winLossTieCount[2]++;
        console.log( "Tie");
    }
}

function checkGameWin()
{
    if(winLossTieCount[0]>2)
    {
        console.log("you win")
        winLossTieCount[0] = 0;
        winLossTieCount[1] = 0;
        winLossTieCount[2] = 0;
    }

    if(winLossTieCount[1]>2)
    {
        console.log("you lose")
        winLossTieCount[0] = 0;
        winLossTieCount[1] = 0;
        winLossTieCount[2] = 0;
    }
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