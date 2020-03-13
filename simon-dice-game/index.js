// BUTTONS
const btnStart = document.getElementById('buttonStart')
const purple = document.getElementById('purple')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const orange = document.getElementById('orange')

// GAME CLASS
class Game{
    constructor(){
        this.initializar()
    }

    initializar(){
        btnStart.classList.add('hide')
    }
}

// START GAME
function startGame(){
    alert('The game will start!! ;)')
    let game = new Game()
}