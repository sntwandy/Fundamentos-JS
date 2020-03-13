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
        this.nextLevel()
    }

    initializar(){
        btnStart.classList.add('hide')
        this.level = 1
        this.colors = {
            purple,
            red,
            yellow,
            orange
        }
    }

    generateSecuence(){
        this.secuence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel(){
        this.lightSecuence()
        this.addClickEvents()
    }

    transformFromNumberToColor(n){
        switch(n){
            case 0: 
                return 'purple'
            case 1: 
                return 'red'
            case 2: 
                return 'yellow'
            case 3: 
                return 'orange'
        }
    }

    lightSecuence(){
        for(let i = 0; i < this.level; i++){
            const color = this.transformFromNumberToColor(this.secuence[i])
            setTimeout(() => this.iluminateColor(color), 1000 * i);
        }
    }

    iluminateColor(color){
        this.colors[color].classList.add('light')
        setTimeout(() => this.TurnOffColor(color), 350)
    }

    TurnOffColor(color){
        this.colors[color].classList.remove('light')
    }

    addClickEvents(){
        this.colors.purple.addEventListener('click', this.chooseColor.bind(this))
        this.colors.red.addEventListener('click', this.chooseColor.bind(this))
        this.colors.yellow.addEventListener('click', this.chooseColor.bind(this))
        this.colors.orange.addEventListener('click', this.chooseColor.bind(this))
    }

    chooseColor(ev){
        console.log(this)
    }
}

// START GAME
function startGame(){
    alert('The game will start!! ;)')
    window.game = new Game()
    console.log(game)
}