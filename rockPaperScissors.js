function game()
{
    let playerSelection;
    let computerSelection;
    let result;
    let playerWins = 0;
    let computerWins = 0;

    while(playerWins < 3 && computerWins < 3)
    {
        playerSelection = "";
        computerSelection = "";
        while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
        {
           
            playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
            alert("you chose" + playerSelection);
            if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")//change to be not case sensitive
            {
                console.log("Invalid input. You must enter rock, paper, or scissors");
            }
        }

        computerSelection = getComputerChoice();
        console.log(computerSelection);

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
        console.log("You Win");
    }
    else
    {
        console.log("You Lose");
    }
}

function playRound(playerSelection, computerSelection)
{
    let win, lose;

    if(playerSelection == "rock")
    {
        if(computerSelection == "rock")
        {
            win = false;
            lose = false;
        }
        else if(computerSelection == "paper")
        {
            win = false;
            lose = true;
        }
        else
        {
            win = true;
            lose = false;
        }
    }
    else if(playerSelection == "paper")
    {
        if(computerSelection == "rock")
        {
            win = true;
            lose = false;
        }
        else if(computerSelection == "paper")
        {
            win = false;
            lose = false;
        }
        else
        {
            win = false;
            lose = true;
        }
    }
    else
    {
        if(computerSelection == "rock")
        {
            win = false;
            lose = true;
        }
        else if(computerSelection == "paper")
        {
            win = true;
            lose = false;
        }
        else
        {
            win = false;
            lose = false;
        }
    }

    if(win)
    {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if(lose)
    {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else
    {
        return "Tie";
    }
}


function getComputerChoice()
{
    let num = Math.random() * 3;

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