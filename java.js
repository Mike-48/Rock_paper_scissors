

const getComputerChoice = () => {
    let compSelection = Math.floor(Math.random() * 3);
if (compSelection === 0) {
    return 'rock';
} else if (compSelection === 1) {
    return 'paper';
} else {
    return 'scissors'
}}


const whoWins = (playerSelection, compSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === compSelection) {
        return 'tie'
    } 
    if (playerSelection === 'rock') {
        if (compSelection === 'paper') {
            return 'lose'
        } else {
            return 'win'
        }
    }
if (playerSelection === 'paper') {
    if (compSelection === 'scissors') {
        return 'lose'
    } else {
        return 'win'
    }
}
if (playerSelection === 'scissors') {
    if (compSelection === 'rock') {
        return 'lose'
    } else {
        return 'win'
    }
}}
let compSelection = getComputerChoice()
//const playerSelection = 'SCISSORS'
const gameText = (game) => {
if (game === 'tie') {
    console.log('Your strengths are both equal, a tie')
} else if (game === 'lose') {
    console.log('The winds did not blow in your favor, a loss')
} else {
    console.log('You fought valiantly, a win')
}}


const playGame = () => {
    let playerSelection = prompt('Rock, Paper, or Scissors?')
    compSelection = getComputerChoice()
    const game1 = whoWins(playerSelection, compSelection)
    gameText(game1)
    let playerSelection2 = prompt('Rock, Paper, or Scissors?')
    compSelection = getComputerChoice()
    const game2 = whoWins(playerSelection2, compSelection)
    gameText(game2)
    let playerSelection3 = prompt('Rock, Paper, or Scissors?')
    compSelection = getComputerChoice()
    const game3 = whoWins(playerSelection3, compSelection)
    gameText(game3)
    let playerSelection4 = prompt('Rock, Paper, or Scissors?')
    compSelection = getComputerChoice()
    const game4 = whoWins(playerSelection4, compSelection)
    gameText(game4)
    let playerSelection5 = prompt('Rock, Paper, or Scissors?')
    compSelection = getComputerChoice()
    const game5 = whoWins(playerSelection5, compSelection)
    gameText(game5)

    let compPoints = 0
    let playerPoints = 0
    if (game1 === 'win') {
        playerPoints++;
    } else if (game1 === 'lose') {
        compPoints++;
    } 
    if (game2 === 'win') {
        playerPoints++;
    } else if (game2 === 'lose') {
        compPoints++;
    } 
    if (game3 === 'win') {
        playerPoints++;
    } else if (game3 === 'lose') {
        compPoints++;
    } 
    if (game4 === 'win') {
        playerPoints++;
    } else if (game4 === 'lose') {
        compPoints++;
    } 
    if (game5 === 'win') {
        playerPoints++;
    } else if (game5 === 'lose') {
        compPoints++;
    } 
 if (playerPoints === compPoints) {
        alert(`A fierce battle was waged, each contestant a glorious display, a tie, play again? `)
    } else if (playerPoints > compPoints) {
        alert('You emerge victorious, a wake of slain foes')
 
    } else {
        alert('An arrow to the heart, and you lie slain on the leafy ground')
    }}


playGame()