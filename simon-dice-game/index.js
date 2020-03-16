// BUTTONS
const btnStart = document.getElementById('buttonStart')
const purple = document.getElementById('purple')
const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const orange = document.getElementById('orange')
const LAST_LEVEL = 10

// GAME CLASS
class Game{
    constructor(){
        this.initializar()
        this.generateSecuence()
        setTimeout(()=>{
            this.nextLevel()
        }, 500)
    }

    initializar(){
        this.initializar = this.initializar.bind(this)
        this.level = 1
        this.toggleStart()
        this.colors = {
            purple,
            red,
            yellow,
            orange
        }
    }

    toggleStart(){
        if(btnStart.classList.contains('hide')){
            btnStart.classList.remove('hide')
        }
        else{
            btnStart.classList.add('hide')
        }
    }

    generateSecuence(){
        this.secuence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel(){
        this.subLevel = 0;
        this.lightSecuence();
        this.addClickEvents();
    }

    transformFromNumberToColor(number){
        switch(number){
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

    transformFromColorToNumber(color){
        switch(color){
            case 'purple': 
                return 0
            case 'red': 
                return 1
            case 'yellow': 
                return 2
            case 'orange': 
                return 3
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

    removeClickEvents(){
        this.colors.purple.removeEventListener('click', this.chooseColor.bind(this))
        this.colors.red.removeEventListener('click', this.chooseColor.bind(this))
        this.colors.yellow.removeEventListener('click', this.chooseColor.bind(this))
        this.colors.orange.removeEventListener('click', this.chooseColor.bind(this))
    }

    chooseColor(ev){
        const colorName = ev.target.dataset.color
        const colorNumber = this.transformFromColorToNumber(colorName)
        this.iluminateColor(colorName)

        if(colorNumber === this.secuence[this.subLevel]){
            this.subLevel++
        
            if(this.subLevel === this.level){
                this.level++
                this.removeClickEvents()
                if(this.level === LAST_LEVEL + 1){
                    // Won!
                    this.wonGame()
                }
                else {
                   setTimeout(this.nextLevel.bind(this), 1500)
                }
            } 
        } 
        else {
            // Loose!
            this.youLoose()
        }
    
    }

    wonGame(){
        swal('Congratulations', 'You won the game', 'success')
            .then(() => this.initializar())
    }

    youLoose(){
        swal('I am so sorry', 'You loose the game', 'error')
            .then(() => {
                this.removeClickEvents()
                this.initializar()
            })
    }
}

// START GAME
function startGame(){
    window.game = new Game()
    console.log(game)
}