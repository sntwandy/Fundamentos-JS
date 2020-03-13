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
        this.generateSecuence()
    }

    initializar(){
        btnStart.classList.add('hide')
        this.level = 1
        this.colors = {
            /* purple: purple,
            red: red,
            yellow: yellow,
            orange: orange */
            purple,
            red,
            yellow,
            orange
        }
    }

    generateSecuence(){
        this.secuence = new Array(10).fill(0).map(() => Math.floor(Math.random() * 4))
    }
}

// START GAME
function startGame(){
    alert('The game will start!! ;)')
    let game = new Game()
    console.log(game)
}