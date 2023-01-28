
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

function playerSelection(){
    let choice = prompt("Enter rock, paper, or scissors")
    choice = choice.toLowerCase()
    return choice

}

function RockPaperScissors(){
    player = playerSelection()
    computer = getComputerChoice()

    if(player == "rock" && computer == "scissors"){
        player_score++
        return "You Win! Rock beats Scissors"
    }

    else if(player == "paper" && computer == "rock"){
        player_score++
        return "You Win! Paper beats Rock"
    }

    else if(player == "scissors" && computer == "paper"){
        player_score++
        return "You Win! Scissors beats Paper"
    }

    else if(computer == "rock" && player == "scissors"){
        computer_score++
        return "You Lose! Rock beats Scissors"
    }

    else if(computer == "paper" && player == "rock"){
        computer_score++
        return "You Lose! Paper beats Rock"
    }

    else if(computer == "scissors" && player == "paper"){
        computer_score++
        return "You Lose! Scissors beats Paper"
    }

    else{
        return "Tie, try again"
    }


}

function game(){
    for(let i = 0; i < 5; i++){
        console.log(RockPaperScissors())
        console.log(`Player Score: ${player_score}`)
        console.log(`Computer Score: ${computer_score}`)

    }

    if(player_score > computer_score){
        console.log(`Player Score: ${player_score}`)
        console.log(`Computer Score: ${computer_score}`)
        console.log("Player wins!")
    }

    else if(computer_score > player_score){
        console.log(`Player Score: ${player_score}`)
        console.log(`Computer Score: ${computer_score}`)
        console.log("Computer wins!")
    }

    else{
        console.log(`Player Score: ${player_score}`)
        console.log(`Computer Score: ${computer_score}`)
        console.log("It's a tie!")
    }
}

console.log(game())