
 function getComputerChoice(){
    let random = Math.random() * 3;
    random = Math.floor(random);
    let choices = ["rock","paper","scissors"];
    return choices[random];
 };
 function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let alert = "That wasn't a suitable entry.";
    let tie = "You tied this round."
    let win = "You won this round";
    let lose = "You lost this round."
    if(playerSelection.includes("ROCK") || playerSelection.includes("PAPER") || playerSelection.includes("SCISSORS"))
    {
        if(playerSelection === computerSelection)
            return tie;
        
        if(playerSelection.includes("ROCK") && computerSelection.includes("PAPER"))
        return lose;

        else return win;

        if(playerSelection.includes("PAPER") && computerSelection.includes("SCISSORS"))
        return lose;
        
        else return win;

        if(playerSelection.includes("SCISSORS") && computerSelection.includes("ROCK"))
        return lose;
        
        else return win;
    }
    else 
        return alert;
 };
 

    let winstreak = 0;
    let losestreak = 0;
    let counter = 0;
    let result ='';

    function matchResult(result){
        if(result.includes('won'))
        {
        winstreak++;
        console.log(result);
        }
        if(result.includes('lost'))
        {
        losestreak++;
        console.log(result);
        }
        if(result.includes('tied'))
        {
            console.log(result);
        }
        if(result.includes('suitable'))
        {
            console.log(result);
        }
    }

const rockButt = document.querySelector('.Rock');
const paperButt = document.querySelector('.Paper');
const scissorButt = document.querySelector('.Scissors');

const p = document.createElement('p');


const resultsDiv = document.querySelector('.Results');

    rockButt.addEventListener('click', () => {
        result = playRound('rock',getComputerChoice());
        p.textContent = result;
        matchResult(result);
        resultsDiv.appendChild(p.cloneNode(true));
        counter++;
        finalResult();
    });
    paperButt.addEventListener('click', () => {
        result = playRound('paper',getComputerChoice());
        p.textContent = result;
        matchResult(result);
        resultsDiv.appendChild(p.cloneNode(true));
        counter++;
        finalResult();
    });
    scissorButt.addEventListener('click', () => {
        result = playRound('scissors',getComputerChoice());
        p.textContent = result;       
        matchResult(result);
        resultsDiv.appendChild(p.cloneNode(true));
        counter++;
        finalResult();

    });
    function finalResult(){
    if(counter === 5)
    {
    if(winstreak < losestreak)
    {p.textContent = "You lost I'm sorry";
    resultsDiv.appendChild(p);}

    if(winstreak > losestreak)
    {p.textContent = "You Won! Congratulations!";
    resultsDiv.appendChild(p);}

    if(winstreak === losestreak)
    {p.textContent = "You guys tied.";
    resultsDiv.appendChild(p);}
    console.log("hey I should appear");
    }
    }

    