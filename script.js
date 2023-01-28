let player_score = 0
let computer_score = 0


function RandomNum(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start
}

function getComputerChoice(){
    let outcome = RandomNum(1,3)
    
    switch(outcome){
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3: 
            return "scissors"
        
    }

}


function RockPaperScissors(player){
    computer = getComputerChoice();

    if(player == "rock" && computer == "scissors"){
        player_score++
        printResult('You Win! Rock beats Scissors')
    }

    else if(player == "paper" && computer == "rock"){
        player_score++
        printResult('You Win! Paper beats Rock')
    }

    else if(player == "scissors" && computer == "paper"){
        player_score++
        printResult('You Win! Scissors beats Paper')
    }

    else if(computer == "rock" && player == "scissors"){
        computer_score++
        printResult('You Lose! Rock beats Scissors')
    }

    else if(computer == "paper" && player == "rock"){
        computer_score++
        printResult('You Lose! Paper beats Rock')
    }

    else if(computer == "scissors" && player == "paper"){
        computer_score++
        printResult('You Lose! Scissors beats Paper')
    }

    else{
        printResult('Tie, try again')
    }

    document.querySelector('.score .player').textContent = (`Player Score: ${player_score}`)
    document.querySelector('.score .computer').textContent = (`Computer Score: ${computer_score}`)
    
    if(player_score == 5 || computer_score == 5){
        if(player_score > computer_score){
            alert('Congrats! You win!')
        }

        else if(computer_score > player_score){
            alert('Sorry, Computer wins.')
        }

        player_score = 0, computer_score = 0
        document.querySelector('.score .player').textContent = (`Player Score: ${player_score}`)
        document.querySelector('.score .computer').textContent = (`Computer Score: ${computer_score}`)
    }

}

const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', function() {
        RockPaperScissors(button.id);
    });
});


const container = document.querySelector('.result');

function printResult(prompt){
    container.textContent = prompt;
}
